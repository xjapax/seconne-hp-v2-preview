import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const interviewsDirectory = path.join(process.cwd(), 'content/interviews');

export interface InterviewData {
  id: string;
  title: string;
  company: string;
  date: string;
  description?: string;
  content: string;
  business?: string;
  employeeCount?: string;
  location?: string;
  services?: string[];
  interviewer?: {
    name: string;
    department: string;
    company: string;
  } | Array<{
    name: string;
    department: string;
    company: string;
  }>;
  tags?: string[];
  topImage?: string;
}

function fixBoldMarkdown(content: string): string {
  return content.replace(/\*\*([^*\n]+)([：:：])\*\*/g, '**$1**$2');
}

function postProcessBoldTags(htmlContent: string): string {
  return htmlContent.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
}

/** microCMSブログ用：Markdownテキスト → HTMLに変換 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const fixed = fixBoldMarkdown(markdown);
  const result = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(html, { sanitize: false })
    .process(fixed);
  return postProcessBoldTags(result.toString());
}

export async function getInterviewData(id: string): Promise<InterviewData | null> {
  try {
    const fullPath = path.join(interviewsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const fixedContent = fixBoldMarkdown(matterResult.content);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkBreaks)
      .use(html, { sanitize: false })
      .process(fixedContent);

    let contentHtml = processedContent.toString();
    contentHtml = postProcessBoldTags(contentHtml);

    return {
      id,
      content: contentHtml,
      title: matterResult.data.title || '',
      company: matterResult.data.company || '',
      date: matterResult.data.date || '',
      description: matterResult.data.description,
      business: matterResult.data.business,
      employeeCount: matterResult.data.employeeCount,
      location: matterResult.data.location,
      services: matterResult.data.services,
      interviewer: matterResult.data.interviewer,
      tags: matterResult.data.tags,
      topImage: matterResult.data.topImage,
    };
  } catch (error) {
    console.error(`Error reading interview ${id}:`, error);
    return null;
  }
}

export function getAllInterviewIds(): Array<{ params: { id: string } }> {
  try {
    const fileNames = fs.readdirSync(interviewsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => ({
        params: { id: fileName.replace(/\.md$/, '') },
      }));
  } catch (error) {
    console.error('Error reading interviews directory:', error);
    return [];
  }
}

export async function getAllInterviews(): Promise<InterviewData[]> {
  try {
    const fileNames = fs.readdirSync(interviewsDirectory);
    const allInterviewsData = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map(async (fileName) => {
          const id = fileName.replace(/\.md$/, '');
          return await getInterviewData(id);
        })
    );
    return allInterviewsData.filter(
      (interview): interview is InterviewData => interview !== null
    );
  } catch (error) {
    console.error('Error reading all interviews:', error);
    return [];
  }
}
