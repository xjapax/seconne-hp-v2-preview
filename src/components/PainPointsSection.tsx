import Image from 'next/image';
import { FadeInSection } from './FadeInSection';

const painPoints = [
  { text: 'エージェント経由では的確な候補者が集まらない' },
  { text: 'スカウトを送っても反応がない' },
  { text: '内定を出しても辞退されてしまう' },
  { text: '外部に委託しても成果が出ない' },
  { text: '採用プロセスの何が問題か分からない' },
  { text: '採用のノウハウが社内に残らない' },
];

export function PainPointsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <FadeInSection>
          <p className="text-center text-sm font-semibold tracking-wider text-accent">CHALLENGES</p>
          <h2 className="section-title mt-2 text-center">こんなお悩みはありませんか？</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-gray-600">
            セキュリティ人材の不足数は前年比2倍に拡大（※ISC2調べ、2023年時点）。スカウト媒体上の即戦力はわずか1%。この市場で成果を出すには、業界を知り尽くしたプロの介入が必要です。
          </p>
        </FadeInSection>

        <div className="mt-12 gap-10 md:flex">
          <div className="mb-8 hidden md:mb-0 md:block md:w-2/5">
            <FadeInSection>
              <Image
                src="/company/AdobeStock_261207157.jpeg"
                alt="スカウト・採用の課題"
                width={600}
                height={400}
                className="rounded-2xl object-cover"
              />
            </FadeInSection>
          </div>
          <div className="md:w-3/5">
            <div className="grid gap-4 sm:grid-cols-2">
              {painPoints.map((item, i) => (
                <FadeInSection key={i}>
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 transition-shadow hover:shadow-md">
                    <p className="text-base font-bold text-navy-900">{item.text}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
