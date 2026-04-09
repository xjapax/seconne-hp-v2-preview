import Image from 'next/image';
import { FadeInSection } from './FadeInSection';

const stats = [
  { value: '42.6倍', label: 'セキュリティ求人倍率', sub: 'IT全体の約4倍', source: 'ISC2 Cybersecurity Workforce Study 2024' },
  { value: '約1%', label: 'スカウト媒体内の即戦力比率', sub: '登録者数百万人中、ターゲットは数百名', source: '' },
  { value: '10%超', label: 'セコネのスカウト返信率', sub: '一般的なスカウト返信率は数%', source: 'セコネ実績（2024年度平均）' },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20">
      {/* Background image - full width, light overlay */}
      <div className="absolute inset-0">
        <Image
          src="/top/AdobeStock_412635388.jpeg"
          alt=""
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-white/80 md:bg-gradient-to-r md:from-white/95 md:via-white/70 md:to-white/30" />
      </div>

      <div className="container-wide relative mx-auto px-5 py-16 md:px-8 md:py-24 lg:py-32">
        <FadeInSection>
          <div className="max-w-2xl">
            <p className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm font-semibold text-accent">
              セキュリティ人材 採用コンサルティング
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-navy-900 md:text-5xl lg:text-[3.5rem]">
              1%しかいない即戦力の、
              <br />
              <span className="text-accent">採り方を知っている。</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              セキュリティの現場を知る採用コンサルタントが、
              <br className="hidden md:block" />
              戦略設計からスカウト・面接支援まで一貫して支援します。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeLaskWE1NJaClZsN2A_0vGpDQvTrSrVGtxqhgUQYz84ayRPw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                無料相談を予約する
              </a>
              <a href="#service" className="text-center text-base font-medium text-gray-500 underline underline-offset-4 transition-colors hover:text-navy-900 sm:ml-2">
                サービス概要を見る
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              30分のオンライン相談・売り込みなし
            </p>
          </div>
        </FadeInSection>

        {/* Stats */}
        <FadeInSection className="mt-16 md:mt-20">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-navy-100 bg-white/80 px-6 py-6 backdrop-blur-sm"
              >
                <p className="text-4xl font-bold text-navy-900 md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-base font-medium text-navy-900">{stat.label}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.sub}</p>
                {stat.source && (
                  <p className="mt-1 text-[10px] text-gray-400">※ {stat.source}</p>
                )}
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
