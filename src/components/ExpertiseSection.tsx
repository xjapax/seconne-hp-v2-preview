import Image from 'next/image';
import Link from 'next/link';
import { FadeInSection } from './FadeInSection';

const cards = [
  {
    image: '/company/AdobeStock_214466664.jpeg',
    title: 'セキュリティコンサルティング',
    body: '必要な時だけ、現場を知る専門家に聞ける。代表が目利きした複数のスペシャリストから、ご相談に応じて最適な専門家をアサインします。',
    anchor: '/consulting/',
  },
  {
    image: '/company/AdobeStock_625979046.jpeg',
    title: '採用業務の適切なAI活用支援',
    body: '「怖いから使えない」を「安全に使える」に変える。セキュリティ×個人情報のスペシャリストが、AIエージェント導入を支援しています。',
    anchor: '/advantage#ai-support',
  },
  {
    image: '/company/AdobeStock_567289259.jpeg',
    title: 'セキュリティ採用力を底上げする研修',
    body: 'コンサル契約なしでも単体受講OK。人事・面接官がセキュリティ人材を正しく理解・評価できるようになります。',
    anchor: '/advantage#training',
  },
];

export function ExpertiseSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <FadeInSection>
          <p className="text-center text-sm font-semibold tracking-wider text-accent">EXPERTISE</p>
          <h2 className="section-title mt-2 text-center">
            セキュリティの専門性を、採用以外にも
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-gray-600 md:text-lg">
            セキュリティの現場経験、個人情報保護の専門資格、
            そして採用支援で培った企業課題への理解。
            この3つが揃っているから、
            「現場のリアル」を知りたいセキュリティ相談にも、
            AIの安全な業務導入にも、人事・面接官のスキル底上げにも、
            ワンストップで対応できます。
          </p>
        </FadeInSection>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <FadeInSection key={card.title}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 transition-shadow hover:shadow-lg">
                <div className="relative h-40 w-full md:h-48">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-navy-900">{card.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-gray-600">
                    {card.body}
                  </p>
                  <Link
                    href={card.anchor}
                    className="mt-4 inline-flex items-center gap-1 text-base font-medium text-accent hover:underline"
                  >
                    詳しく見る
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
