import Image from 'next/image';
import { FadeInSection } from './FadeInSection';

const painPoints = [
  {
    text: 'エージェント経由では的確な候補者が集まらない',
    detail: 'セキュリティの要件が正しく伝わらず、ミスマッチが続く',
  },
  {
    text: 'スカウトを送っても反応がない',
    detail: '母数1%の即戦力に刺さるメッセージが作れない',
  },
  {
    text: '内定を出しても辞退されてしまう',
    detail: '候補者の志向・心理を理解しないまま選考を進めている',
  },
  {
    text: '外部に委託しても成果が出ない',
    detail: 'セキュリティの専門知識がないまま大量送信しても効果は限定的',
  },
  {
    text: '採用プロセスの何が問題か分からない',
    detail: 'ボトルネックが可視化できず、改善の打ち手が見えない',
  },
  {
    text: '採用のノウハウが社内に残らない',
    detail: '外注先に任せきりで、契約終了後に採用力がリセットされる',
  },
];

export function PainPointsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <FadeInSection>
          <p className="text-center text-sm font-semibold tracking-wider text-accent">CHALLENGES</p>
          <h2 className="section-title mt-2 text-center">こんなお悩みはありませんか？</h2>
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
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.detail}</p>
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
