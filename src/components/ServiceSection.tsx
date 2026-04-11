'use client';

import { FadeInSection } from './FadeInSection';

const plans = [
  {
    name: 'フルサポート',
    description: '戦略設計からスカウト・面接同席まで、採用プロセスをフルカバー',
    features: [
      '週次定例ミーティング',
      '採用戦略の設計・見直し',
      '最大3ポジションの戦略設計',
      'ダイレクトリクルーティング支援',
      'スカウト文の作成・送信支援',
      'カジュアル面談の同席',
      '面接官研修の実施',
      '求人票の作成・改善',
      '社内採用担当者の育成支援',
      'チャットでの随時相談',
    ],
    recommended: true,
  },
  {
    name: 'スタンダード',
    description: 'スカウト支援と採用プロセス改善に特化したコアプラン',
    features: [
      '月次定例ミーティング',
      '採用戦略の助言',
      '最大3ポジションの戦略設計',
      'ダイレクトリクルーティング支援',
      'スカウト文の作成・送信支援',
      'カジュアル面談の同席',
      '求人票の作成・改善',
      'チャットでの随時相談',
    ],
    recommended: false,
  },
  {
    name: 'アドバイザリー',
    description: '戦略助言と定例レビューで、自社採用チームの意思決定を支援',
    features: [
      '採用戦略の助言',
      '定例レビュー（隔週〜月1）',
      'スカウト・求人票のレビュー',
      '面接プロセスの改善提案',
      'チャットでの随時相談',
    ],
    recommended: false,
  },
];


export function ServiceSection() {
  return (
    <section id="service" className="section-padding bg-gray-50">
      <div className="container-wide mx-auto">
        <FadeInSection>
          <p className="text-center text-sm font-semibold tracking-wider text-accent">SERVICE</p>
          <h2 className="section-title mt-2 text-center">サービスプラン</h2>
          <p className="section-subtitle text-center">
            月額固定。貴社の課題に合わせて最適なプランをご提案します。
          </p>
          <p className="mt-2 text-center text-sm text-gray-500">
            料金の目安：月額60万円〜（税別）
          </p>
        </FadeInSection>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <FadeInSection key={plan.name}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-shadow hover:shadow-lg ${
                  plan.recommended
                    ? 'border-accent bg-white shadow-md'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-4 py-1 text-sm font-semibold text-white">
                    おすすめ
                  </span>
                )}
                <h3 className="text-2xl font-bold text-navy-900">{plan.name}</h3>
                <p className="mt-3 text-base text-gray-600">{plan.description}</p>

                <div className="mt-6 flex-1" />
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* 統合CTA */}
        <FadeInSection>
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              ※ 最低契約期間6ヶ月。プラン・料金の詳細は無料相談にてご説明します。
            </p>
            <a
              href="/contact"
              className="btn-primary mt-6 inline-flex"
            >
              料金・プランの詳細を聞く
            </a>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}
