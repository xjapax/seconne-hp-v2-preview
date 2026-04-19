'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const WEB3FORMS_ACCESS_KEY = '178fe4a7-4107-4c09-8e20-951922fdcb9f';

const SERVICE_OPTIONS = [
  { value: 'form', label: 'フォーム回答（¥20,000／1テーマ）', desc: '1テーマ（最大800字程度）を文書回答。入金確認後2営業日以内。代表レビュー付き。' },
  { value: 'spot60', label: 'スポット相談 60分（¥100,000）', desc: 'オンラインで代表＋専門コンサル（必要時）が対応。' },
  { value: 'spot90', label: 'スポット相談 90分（¥150,000）', desc: 'オンラインで代表＋専門コンサル（必要時）が対応。' },
  { value: 'monthly', label: '月次アドバイザリー（¥300,000/月〜）', desc: '2名体制、月1回定例＋チャット相談。最低3ヶ月。別途業務委託契約。' },
  { value: 'weekly', label: '週次アドバイザリー（¥500,000/月〜）', desc: '2名体制、月4回定例＋チャット相談。最低3ヶ月。別途業務委託契約。' },
  { value: 'undecided', label: 'まだ決めていない（相談したい）', desc: 'セコネから最適なプランをご提案します。' },
];

const INDUSTRY_OPTIONS = [
  'セキュリティベンダー',
  'SI・コンサルティングファーム',
  '事業会社（金融）',
  '事業会社（製造）',
  '事業会社（IT・Web）',
  '事業会社（その他）',
  'その他',
];

const SIZE_OPTIONS = [
  '〜100名',
  '101〜500名',
  '501〜1,000名',
  '1,001〜5,000名',
  '5,001名以上',
];

export default function ConsultingApplyPage() {
  const router = useRouter();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', '【セコネ】セキュリティコンサルティング お申込み');
    data.append('from_name', 'セコネ セキュリティコンサルティング 申込フォーム');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        router.push('/consulting/thanks');
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
      <section className="bg-teal-950 px-5 py-12 md:px-8 md:py-16">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-2xl font-bold text-white md:text-3xl">
            お申込み・ご相談
          </h1>
          <p className="mt-3 text-sm text-gray-300 md:text-base">
            入力いただいた内容に基づき、2営業日以内に料金案内・振込先をメールでご連絡します。
          </p>
          <div className="mt-4">
            <Link
              href="/consulting"
              className="text-sm text-gray-400 underline hover:text-white"
            >
              ← サービス詳細に戻る
            </Link>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" />

            {/* 会社名 */}
            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-semibold text-teal-900">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 transition-colors focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                placeholder="株式会社〇〇"
              />
            </div>

            {/* ご担当者名 */}
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold text-teal-900">
                ご担当者名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 transition-colors focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                placeholder="山田 太郎"
              />
            </div>

            {/* メール */}
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-teal-900">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 transition-colors focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                placeholder="example@company.co.jp"
              />
            </div>

            {/* 電話 */}
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-teal-900">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 transition-colors focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                placeholder="お急ぎの場合はご記入ください"
              />
            </div>

            {/* 業種 */}
            <div>
              <label htmlFor="industry" className="mb-1 block text-sm font-semibold text-teal-900">
                業種
              </label>
              <select
                id="industry"
                name="industry"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 transition-colors focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
              >
                <option value="">選択してください</option>
                {INDUSTRY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* 従業員規模 */}
            <div>
              <label htmlFor="size" className="mb-1 block text-sm font-semibold text-teal-900">
                従業員規模
              </label>
              <select
                id="size"
                name="size"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 transition-colors focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
              >
                <option value="">選択してください</option>
                {SIZE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* 希望サービス */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-teal-900">
                ご希望のサービス <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {SERVICE_OPTIONS.map((opt) => (
                  <label key={opt.value} className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-300 p-3 transition-colors hover:border-teal-600">
                    <input
                      type="radio"
                      name="service"
                      value={opt.label}
                      required
                      className="mt-1 h-4 w-4 flex-shrink-0 accent-teal-600"
                    />
                    <span>
                      <span className="block text-base font-semibold text-teal-900">{opt.label}</span>
                      <span className="mt-0.5 block text-sm text-gray-600">{opt.desc}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* ご相談内容 */}
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold text-teal-900">
                ご相談内容 <span className="text-red-500">*</span>
              </label>
              <p className="mb-2 text-xs text-gray-500">
                1テーマについて、背景・聞きたい観点をご記入ください（目安800字程度、箇条書きOK）。
                複数テーマがある場合はフォームを分けて送信、またはスポット相談以上をご検討ください。
              </p>
              <textarea
                id="message"
                name="message"
                required
                rows={10}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 transition-colors focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                placeholder={`例：\nSOC内製化を検討中。他社の実態について教えてほしい。\n・人員体制（何人で回しているか）\n・主要ツール（SIEM/EDRの選定基準）\n・年間コスト感\n・内製化して苦労したこと`}
              />
            </div>

            {/* 希望時期 */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-teal-900">
                希望スケジュール
              </label>
              <div className="space-y-2">
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 p-3 transition-colors hover:border-teal-600">
                  <input type="radio" name="schedule" value="通常（標準料金）" defaultChecked className="h-4 w-4 accent-teal-600" />
                  <span className="text-base text-teal-900">通常（標準料金）</span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 p-3 transition-colors hover:border-teal-600">
                  <input type="radio" name="schedule" value="特急（1週間以内/1.5倍料金・アドバイザリー除く）" className="h-4 w-4 accent-teal-600" />
                  <span className="text-base text-teal-900">特急（1週間以内 / 1.5倍料金・アドバイザリー除く）</span>
                </label>
              </div>
            </div>

            {/* 規約同意 */}
            <div className="rounded-lg border border-gray-300 bg-gray-50 p-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="agree_terms"
                  value="同意する"
                  required
                  className="mt-1 h-4 w-4 flex-shrink-0 accent-teal-600"
                />
                <span className="text-sm text-teal-900">
                  <Link href="/consulting/terms" target="_blank" className="font-semibold text-teal-600 underline">セキュリティコンサルティング利用規約</Link>
                  および
                  <Link href="/privacy" target="_blank" className="font-semibold text-teal-600 underline">プライバシーポリシー</Link>
                  に同意します <span className="text-red-500">*</span>
                </span>
              </label>
              <p className="mt-2 text-xs text-gray-500">
                ※アドバイザリー契約（月次・週次）・プロジェクト支援をご希望の場合、別途業務委託契約を締結します。
              </p>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center rounded-lg bg-coral px-6 py-3 font-semibold text-white transition-colors hover:bg-coral-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? '送信中...' : '申込・相談を送信する'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
