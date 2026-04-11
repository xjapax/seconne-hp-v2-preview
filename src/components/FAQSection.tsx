'use client';

import { useState, useMemo } from 'react';
import { FadeInSection } from './FadeInSection';

const faqs = [
  {
    q: 'どんな規模の企業が対象ですか？',
    a: '数名規模のスタートアップから数千名の大企業まで対応しています。「セキュリティ人材を採用したいが、自社だけでは難しい」という課題をお持ちであれば、規模を問わずご相談ください。',
  },
  {
    q: '契約期間はどのくらいですか？',
    a: '最低契約期間は6ヶ月です。採用は短期で結果が出にくい領域のため、一定期間の継続支援が成果につながります。',
  },
  {
    q: '他の採用支援サービスとの違いは何ですか？',
    a: 'セコネは採用コンサルティングとして、戦略設計から実行まで一貫して支援します。代表自身がセキュリティの実務経験を持ち、候補者心理も熟知している点が最大の特徴です。貴社の採用力そのものを高めます。',
  },
  {
    q: 'セキュリティ以外の職種も対応可能ですか？',
    a: 'セキュリティ人材の採用支援を専門としていますが、IT人材全般の採用経験も豊富です。まずはご相談ください。',
  },
];

export function FAQSection() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const allOpen = useMemo(() => faqs.every((_, i) => openSet.has(i)), [openSet]);

  const toggleAll = () => {
    if (allOpen) {
      setOpenSet(new Set());
    } else {
      setOpenSet(new Set(faqs.map((_, i) => i)));
    }
  };

  const toggleOne = (index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        <FadeInSection>
          <p className="text-center text-sm font-semibold tracking-wider text-accent">FAQ</p>
          <div className="mt-2 flex items-center justify-center gap-4">
            <h2 className="section-title text-center">よくあるご質問</h2>
            <button
              onClick={toggleAll}
              className="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-gray-600"
            >
              {allOpen ? (
                <>
                  すべて閉じる
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  すべて開く
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </FadeInSection>

        <div className="mt-12 divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <FadeInSection key={i}>
              <div className="py-1">
                <button
                  onClick={() => toggleOne(i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="pr-4 text-base font-semibold text-navy-900 md:text-lg">{faq.q}</span>
                  <svg
                    className={`h-6 w-6 flex-shrink-0 text-gray-400 transition-transform ${openSet.has(i) ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSet.has(i) ? 'max-h-96 pb-5' : 'max-h-0'
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
