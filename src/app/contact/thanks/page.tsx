import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '送信完了',
};

export default function ThanksPage() {
  return (
    <div className="pt-20 md:pt-20">
      <section className="flex min-h-[60vh] items-center justify-center px-5 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-navy-900 md:text-3xl">
            お問い合わせありがとうございます
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            2営業日以内にメールでご連絡いたします。
          </p>
          <div className="mt-3 space-y-1 text-sm text-gray-400">
            <p>※内容によってはご返信できない場合がございます。</p>
            <p>※メールが届かない場合は、迷惑メールフォルダをご確認ください。</p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base font-medium text-accent hover:underline"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              トップページに戻る
            </Link>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/interview" className="hover:text-gray-600 hover:underline">導入事例を見る</Link>
              <Link href="/advantage" className="hover:text-gray-600 hover:underline">セコネの強み</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
