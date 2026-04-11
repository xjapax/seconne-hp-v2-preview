'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const WEB3FORMS_ACCESS_KEY = '178fe4a7-4107-4c09-8e20-951922fdcb9f';

export default function ContactPage() {
  const router = useRouter();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        router.push('/contact/thanks');
      } else {
        alert('送信に失敗しました。お手数ですが、時間をおいて再度お試しください。');
      }
    } catch {
      alert('送信に失敗しました。お手数ですが、時間をおいて再度お試しください。');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-20 md:pt-20">
      {/* Hero */}
      <section className="bg-navy-950 px-5 py-16 md:px-8 md:py-24">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">無料相談のお申し込み</h1>
          <p className="mt-4 text-gray-400">30分のオンライン相談・売り込みなし</p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Botcheck (honeypot) */}
            <input type="checkbox" name="botcheck" className="hidden" />

            {/* 会社名 */}
            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-semibold text-navy-900">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="株式会社セコネ"
              />
            </div>

            {/* ご担当者名 */}
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold text-navy-900">
                ご担当者名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-navy-900">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="example@company.co.jp"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-navy-900">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="お急ぎの場合はご記入ください"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold text-navy-900">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="ご相談内容をご記入ください"
              />
            </div>

            {/* Privacy notice + Submit */}
            <p className="text-center text-sm text-gray-400">
              送信により<a href="/privacy" className="underline hover:text-gray-600">プライバシーポリシー</a>に同意したものとみなします。
            </p>
            <div>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? '送信中...' : '送信する'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
