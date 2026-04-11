import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getInterviewData, getAllInterviewIds } from '@/lib/markdown';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const interviews = getAllInterviewIds();
  return interviews.map(({ params }) => ({
    id: params.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const interview = await getInterviewData(id);
  if (!interview) return { title: '導入事例' };

  return {
    title: `${interview.company} 導入事例`,
    description: interview.description || interview.title,
  };
}

export default async function InterviewDetailPage({ params }: Props) {
  const { id } = await params;
  const interview = await getInterviewData(id);

  if (!interview) {
    notFound();
  }

  const interviewers = interview.interviewer
    ? Array.isArray(interview.interviewer)
      ? interview.interviewer
      : [interview.interviewer]
    : [];

  return (
    <div className="pt-12 md:pt-20">
      {/* Hero - blue gradient like v1 */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-sky-500 pb-10 pt-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-gray-200">
            <Link href="/" className="hover:underline">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/interview" className="hover:underline">導入事例</Link>
            <span className="mx-2">/</span>
            <span>{interview.company}</span>
          </nav>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            {interview.title}
          </h1>
          {interview.description && (
            <p className="mx-auto mb-6 max-w-4xl text-lg opacity-90 md:text-xl">
              {interview.description}
            </p>
          )}
          {interview.date && (
            <p className="text-sm text-gray-200">{interview.date}</p>
          )}

          {/* Main photo inside hero - no cropping */}
          {interview.topImage && (
            <div className="relative mt-10 overflow-hidden bg-blue-100">
              <Image
                src={interview.topImage}
                alt={interview.company}
                width={1200}
                height={800}
                className="h-auto w-full object-contain shadow-xl"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              {/* Caption */}
              {interviewers.length > 0 && (
                <div className="absolute bottom-0 bg-white/50 p-1 text-left">
                  {interviewers.map((person) => (
                    <div key={person.name}>
                      <p className="text-xs font-bold text-gray-800 md:text-sm">
                        {person.company} {person.department}
                      </p>
                      <p className="text-xs font-bold text-gray-800 md:text-sm">
                        {person.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Article body - v1 prose styling */}
      <section className="bg-white px-4 py-12 md:px-16">
        <div className="mx-auto max-w-4xl">
          <article
            className="max-w-none [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-200 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-500 [&_em]:italic [&_figure]:mx-auto [&_figure]:my-10 [&_figure]:max-w-full [&_figure]:text-center [&_figcaption]:mt-4 [&_figcaption]:text-sm [&_figcaption]:text-gray-600 [&_figure_img]:mb-0 [&_figure_img]:w-full [&_h2]:mb-6 [&_h2]:mt-16 [&_h2]:border-l-[6px] [&_h2]:border-blue-500 [&_h2]:pl-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-blue-800 md:[&_h2]:text-3xl [&_h3]:mb-4 [&_h3]:mt-12 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-gray-800 [&_h4]:mb-3 [&_h4]:mt-10 [&_h4]:border-b [&_h4]:border-gray-300 [&_h4]:pb-2 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-gray-900 [&_img]:mx-auto [&_img]:my-8 [&_img]:block [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-lg [&_img]:shadow-md [&_ol]:mb-6 [&_ol]:pl-6 [&_p]:mb-6 [&_p]:text-base [&_p]:leading-[1.9] [&_p]:text-gray-700 [&_strong]:font-extrabold [&_strong]:text-gray-900 [&_ul]:mb-6 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:text-base [&_ul]:text-gray-700 [&_ul_li]:mb-3 [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-2"
            dangerouslySetInnerHTML={{ __html: interview.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            同じような課題をお持ちですか？
          </h2>
          <p className="mt-4 text-gray-400">まずは30分の無料相談からお気軽にどうぞ</p>
          <a
            href="/contact"
            className="btn-primary mt-8 inline-flex"
          >
            無料相談を予約する
          </a>
        </div>
      </section>
    </div>
  );
}
