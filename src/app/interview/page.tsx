import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllInterviews } from '@/lib/markdown';

export const metadata: Metadata = {
  title: '導入事例',
  description: 'セコネのセキュリティ人材採用支援の導入事例。S&J様、VLCセキュリティラボ様のインタビューをご紹介。',
};

export default async function InterviewListPage() {
  const interviews = await getAllInterviews();

  return (
    <div className="pt-20 md:pt-20">
      {/* Hero */}
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-24">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">導入事例</h1>
          <p className="mt-4 text-gray-400">Case Studies</p>
        </div>
      </section>

      {/* Interview list */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="space-y-8">
            {interviews.map((interview) => (
              <Link
                key={interview.id}
                href={`/interview/${interview.id}`}
                className="group block overflow-hidden rounded-2xl border border-gray-100 transition-shadow hover:shadow-lg md:flex"
              >
                {interview.topImage && (
                  <div className="relative h-56 w-full flex-shrink-0 md:h-auto md:w-72">
                    <Image
                      src={interview.topImage}
                      alt={interview.company}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex-1 p-6 md:p-8">
                  <p className="text-xs font-semibold text-accent">{interview.company}</p>
                  <h2 className="mt-2 text-lg font-bold text-navy-900 group-hover:text-accent md:text-xl">
                    {interview.title}
                  </h2>
                  {interview.description && (
                    <p className="mt-3 line-clamp-3 text-sm text-gray-600">{interview.description}</p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {interview.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    インタビューを読む
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-20">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            導入事例についてもっと詳しく知りたい方へ
          </h2>
          <p className="mt-4 text-gray-400">無料相談で詳しくお伝えします</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeLaskWE1NJaClZsN2A_0vGpDQvTrSrVGtxqhgUQYz84ayRPw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            無料相談を予約する
          </a>
        </div>
      </section>
    </div>
  );
}
