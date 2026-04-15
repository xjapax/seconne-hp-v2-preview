import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogs } from '@/lib/microcms';

export const metadata: Metadata = {
  title: 'コラム',
  description: 'セキュリティ人材採用・組織づくりに関する実務的な知見を発信しています。',
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

export default async function BlogListPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="pt-20 md:pt-20">
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-24">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">コラム</h1>
          <p className="mt-4 text-gray-400">Column</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500">記事はまだありません。</p>
          ) : (
            <div className="space-y-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}/`}
                  className="group block overflow-hidden rounded-2xl border border-gray-100 transition-shadow hover:shadow-lg md:flex"
                >
                  {blog.thumbnail && (
                    <div className="relative h-56 w-full flex-shrink-0 md:h-auto md:w-80">
                      <Image
                        src={blog.thumbnail.url}
                        alt={blog.title}
                        fill
                        className="object-cover object-center transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-semibold text-accent">{blog.category?.name}</span>
                      <span className="text-gray-400">{formatDate(blog.publishedAt ?? blog.createdAt)}</span>
                    </div>
                    <h2 className="mt-2 text-lg font-bold text-navy-900 group-hover:text-accent md:text-xl">
                      {blog.title}
                    </h2>
                    {blog.description && (
                      <p className="mt-3 line-clamp-3 text-sm text-gray-600">{blog.description}</p>
                    )}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag.id}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500"
                          >
                            #{tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      記事を読む
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-20">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">セキュリティ人材の採用にお困りですか？</h2>
          <p className="mt-4 text-gray-400">無料相談で詳しくお伝えします</p>
          <a href="/contact" className="btn-primary mt-8 inline-flex">
            無料相談を予約する
          </a>
        </div>
      </section>
    </div>
  );
}
