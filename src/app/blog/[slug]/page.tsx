import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogs, getBlogBySlug } from '@/lib/microcms';
import { markdownToHtml } from '@/lib/markdown';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: 'コラム' };

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      images: blog.thumbnail ? [{ url: blog.thumbnail.url }] : undefined,
    },
  };
}

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const contentHtml = await markdownToHtml(blog.content);

  return (
    <div className="pt-12 md:pt-20">
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-sky-500 pb-10 pt-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <nav className="mb-6 text-sm text-gray-200">
            <Link href="/" className="hover:underline">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:underline">コラム</Link>
            <span className="mx-2">/</span>
            <span>{blog.category?.name}</span>
          </nav>

          <div className="mb-4 flex items-center justify-center gap-3 text-sm">
            <span className="rounded-full bg-white/20 px-3 py-1 font-semibold">{blog.category?.name}</span>
            <span className="opacity-90">{formatDate(blog.publishedAt ?? blog.createdAt)}</span>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            {blog.title}
          </h1>
          {blog.description && (
            <p className="mx-auto mb-6 max-w-3xl text-lg opacity-90 md:text-xl">{blog.description}</p>
          )}

          {blog.thumbnail && (
            <div className="relative mt-10 overflow-hidden bg-blue-100">
              <Image
                src={blog.thumbnail.url}
                alt={blog.title}
                width={blog.thumbnail.width ?? 1200}
                height={blog.thumbnail.height ?? 630}
                className="h-auto w-full object-contain shadow-xl"
              />
            </div>
          )}
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-16">
        <div className="mx-auto max-w-4xl">
          <article
            className="max-w-none [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-200 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-500 [&_em]:italic [&_figure]:mx-auto [&_figure]:my-10 [&_figure]:max-w-full [&_figure]:text-center [&_figcaption]:mt-4 [&_figcaption]:text-sm [&_figcaption]:text-gray-600 [&_figure_img]:mb-0 [&_figure_img]:w-full [&_h2]:mb-6 [&_h2]:mt-16 [&_h2]:border-l-[6px] [&_h2]:border-blue-500 [&_h2]:pl-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-blue-800 md:[&_h2]:text-3xl [&_h3]:mb-4 [&_h3]:mt-12 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-gray-800 [&_h4]:mb-3 [&_h4]:mt-10 [&_h4]:border-b [&_h4]:border-gray-300 [&_h4]:pb-2 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-gray-900 [&_img]:mx-auto [&_img]:my-8 [&_img]:block [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-lg [&_img]:shadow-md [&_ol]:mb-6 [&_ol]:pl-6 [&_p]:mb-6 [&_p]:text-base [&_p]:leading-[1.9] [&_p]:text-gray-700 [&_strong]:font-extrabold [&_strong]:text-gray-900 [&_ul]:mb-6 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:text-base [&_ul]:text-gray-700 [&_ul_li]:mb-3 [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-2"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-gray-100 pt-8">
              {blog.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          )}

          <div className="mt-12 border-t border-gray-100 pt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              コラム一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">セキュリティ人材の採用にお困りですか？</h2>
          <p className="mt-4 text-gray-400">まずは30分の無料相談からお気軽にどうぞ</p>
          <a href="/contact" className="btn-primary mt-8 inline-flex">
            無料相談を予約する
          </a>
        </div>
      </section>
    </div>
  );
}
