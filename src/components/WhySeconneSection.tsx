import { FadeInSection } from './FadeInSection';

const reasons = [
  {
    number: '01',
    title: 'セキュリティの現場を知る採用コンサルタント',
    description:
      '脆弱性診断・SOC・セキュリティコンサルの実務経験を持つメンバーが対応。技術的な要件をそのまま理解し、候補者との会話も専門用語レベルで成立します。「まずセキュリティとは何かの説明から」は不要です。この現場知見は、採用支援に限らずセキュリティのスポットコンサルティングにも活かされています。',
    highlight: '専門用語がそのまま通じる',
  },
  {
    number: '02',
    title: '企業と候補者、双方の視点を持つ',
    description:
      'セキュリティ人材のキャリア相談サービス（セコネキャリア）も運営。候補者が何を重視し、どんな企業に惹かれ、何で辞退するのかを熟知しています。企業目線だけでなく候補者心理を踏まえたスカウト・面接設計ができます。この双方の視点を、面接官研修・人事向けセキュリティ研修にも反映しています。',
    highlight: '候補者心理を熟知',
  },
  {
    number: '03',
    title: 'セキュリティエンジニア出身の代表が直接対応',
    description:
      '代表の高田はセキュリティエンジニア・コンサルタントとしてキャリアをスタートし、その後IT・セキュリティ特化の転職エージェントを経てセコネを設立。技術要件の理解、候補者との技術的な会話、企業への的確な提案。セキュリティ採用に必要な知見が、すべて揃っています。さらに上級個人情報保護士・個人情報保護監査人として、AIを業務に導入する際の個人情報の適切な取り扱いについても専門的に支援できます。',
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
