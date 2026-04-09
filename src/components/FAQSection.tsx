'use client';

import { useState } from 'react';
import { FadeInSection } from './FadeInSection';

const faqs = [
  {
    q: 'どんな規模の企業が対象ですか？',
    a: '数名規模のスタートアップから数千名の大企業まで対応しています。「セキュリティ人材を採用したいが、自社だけでは難しい」という課題をお持ちであれば、規模を問わずご相談ください。',
  },
  {
    q: '契約期間はどのくらいですか？',
    a: '最低契約期間は6ヶ月です。採用は短期で結果が出にくい領域のため、一定期間の継続支援が効果的です。初回3ヶ月のトライアルからスタートできるケースもあります。',
  },
  {
    q: '他の採用支援サービスとの違いは何ですか？',
    a: 'セコネは採用コンサルティングとして、戦略設計から実行まで一貫して支援します。代表自身がセキュリティの実務経験を持ち、候補者心理も熟知している点が最大の特徴です。貴社の採用力そのものを高めます。',
  },
  {
    q: 'セキュリティ以外の職種も対応可能ですか？',
    a: 'セキュリティ人材の採用支援を専門としていますが、IT人材全般の採用経験も豊富です。まずはご相談ください。',
  },
  {
    q: '料金体系を教えてください。',
    a: '月額固定・成功報酬なしの料金体系です。課題やご予算に応じて最適なプランをご提案しますので、詳細は無料相談にてお伝えします。',
  },
  {
    q: '途中解約は可能ですか？',
    a: '最低契約期間（6ヶ月）満了後は、1ヶ月前通知で解約可能です。詳細は契約時にご説明します。',
  },
  {
    q: '成果が出なかった場合はどうなりますか？',
    a: '契約開始時に成果指標（KPI）を設定し、定例ミーティングで進捗を共有します。期待する成果に達しない場合は、プランの見直しや戦略の再設計を行います。',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        <FadeInSection>
          <p className="text-center text-sm font-semibold tracking-wider text-accent">FAQ</p>
          <h2 className="section-title mt-2 text-center">よくあるご質問</h2>
        </FadeInSection>

        <div className="mt-12 divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <FadeInSection key={i}>
              <div className="py-1">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="pr-4 text-base font-semibold text-navy-900 md:text-lg">{faq.q}</span>
                  <svg
                    className={`h-6 w-6 flex-shrink-0 text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-base leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
