import Image from 'next/image';
import { FadeInSection } from './FadeInSection';

const stats = [
  { value: '12.5%', label: 'セコネのスカウト返信率', sub: '一般的な返信率：1〜3%' },
  { value: '100%', label: '導入企業が3ヶ月以内に内定承諾を獲得', sub: '※2025年 スタンダードプラン以上' },
  { value: '600万〜1,200万', label: '承諾者年収のボリュームゾーン', sub: '第二新卒ではなく、即戦力をピンポイントで' },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20">
      {/* Background image - full width, light overlay */}
      <div className="absolute inset-0">
        <Image
          src="/top/AdobeStock_412635388.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/70 md:bg-gradient-to-r md:from-white/85 md:via-white/50 md:to-white/15" />
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
                href="/contact"
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
                <p className="text-3xl font-bold text-navy-900 sm:text-[clamp(1.5rem,4vw,3rem)]">{stat.value}</p>
                <p className="mt-2 text-base font-medium text-navy-900">{stat.label}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.sub}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
