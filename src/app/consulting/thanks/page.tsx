import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '送信完了｜セキュリティコンサルティング',
};

export default function ConsultingThanksPage() {
  return (
    <div className="pt-20 md:pt-20">
      <section className="flex min-h-[60vh] items-center justify-center px-5 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-teal-900 md:text-3xl">
            お申込みありがとうございます
          </h1>
          <div className="mt-6 space-y-3 text-left text-base leading-relaxed text-gray-700">
            <p>
              お申込み内容を確認のうえ、セコネから <span className="font-semibold text-teal-900">2営業日以内に料金案内・振込先</span> をメールでご連絡いたします。
            </p>
            <p>
              <span className="font-semibold text-teal-900">フォーム回答</span> は、ご入金確認後2営業日以内に文書で納品します。
            </p>
            <p>
              <span className="font-semibold text-teal-900">スポット相談</span> は、ご入金確認後に日程調整のご連絡をいたします。
            </p>
            <p>
              <span className="font-semibold text-teal-900">アドバイザリー</span> ご希望の場合、別途業務委託契約書をお送りします。
            </p>
          </div>
          <div className="mt-6 space-y-1 text-sm text-gray-400">
            <p>※メールが届かない場合は、迷惑メールフォルダをご確認ください。</p>
            <p>※内容によってはお受けできない場合がございます。</p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base font-medium text-teal-600 hover:underline"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              トップページに戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
