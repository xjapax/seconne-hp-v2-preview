import { FadeInSection } from './FadeInSection';

const reasons = [
  {
    number: '01',
    title: 'セキュリティの現場を知る採用コンサルタント',
    description:
      'セキュリティの各専門領域（診断・SOC・GRC・フォレンジック等）を熟知したメンバーが対応。技術要件をそのまま理解し、候補者とも専門用語で会話できます。',
    highlight: '専門用語がそのまま通じる',
  },
  {
    number: '02',
    title: '企業と候補者、双方の視点を持つ',
    description:
      'キャリア相談サービス（セコネキャリア）も運営し、候補者心理を熟知。企業目線だけでなく、候補者が何で辞退するかを踏まえた設計ができます。',
    highlight: '候補者心理を熟知',
  },
  {
    number: '03',
    title: 'セキュリティエンジニア出身の代表が直接対応',
    description:
      '代表自身がセキュリティエンジニア→転職エージェントを経て設立。技術要件の理解から候補者との会話、企業への提案まで一人で完結します。',
    highlight: '技術がわかる人間が、採用の意思決定に入る',
  },
];

export function WhySeconneSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <FadeInSection>
          <p className="text-center text-sm font-semibold tracking-wider text-accent">WHY SECONNE</p>
          <h2 className="section-title mt-2 text-center">選ばれる3つの理由</h2>
        </FadeInSection>

        <div className="mt-14 space-y-6">
          {reasons.map((reason) => (
            <FadeInSection key={reason.number}>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-shadow hover:shadow-lg md:flex md:gap-8">
                <div className="mb-4 flex-shrink-0 md:mb-0">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-xl font-bold text-white">
                    {reason.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">{reason.title}</h3>
                  <span className="mt-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                    {reason.highlight}
                  </span>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
