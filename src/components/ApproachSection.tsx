import Image from 'next/image';
import { FadeInSection } from './FadeInSection';

export function ApproachSection() {
  return (
    <section className="section-padding bg-navy-950">
      <div className="container-wide mx-auto">
        <FadeInSection>
          <p className="text-center text-sm font-semibold tracking-wider text-accent-light">APPROACH</p>
          <h2 className="mt-2 text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            セキュリティ採用の課題を、戦略から実行まで一気通貫で支援する
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-400">
            セキュリティ業界を知るコンサルタントが、
            経歴を精読したうえでピンポイントにアプローチ。
          </p>
        </FadeInSection>

        <div className="mt-14 gap-10 md:flex md:items-center">
          <FadeInSection className="mb-10 hidden md:mb-0 md:block md:w-1/2">
            <Image
              src="/company/AdobeStock_567289259.jpeg"
              alt="採用コンサルティング"
              width={600}
              height={400}
              className="rounded-2xl"
            />
          </FadeInSection>

          <div className="md:w-1/2">
            <FadeInSection>
              <div className="space-y-6">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-bold text-white">セキュリティ特化の採用コンサルティング</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-300">
                    候補者一人ひとりの経歴を精読し、ピンポイントでスカウト。
                    セキュリティの専門用語がそのまま通じるからこそ、
                    候補者に「自分の経歴を理解してくれている」と感じてもらえます。
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-bold text-white">戦略から実行まで一貫支援</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-300">
                    採用戦略の設計、スカウト文の作成、求人票の改善、
                    面接官研修、カジュアル面談の同席まで。
                    戦略設計だけでなく、実務オペレーション支援も含めて一貫して提供します。
                  </p>
                </div>

                <div className="rounded-xl border border-accent/30 bg-accent/10 p-6">
                  <h3 className="text-lg font-bold text-white">返信率10%超の実績</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-300">
                    業界平均1〜3%に対し、セコネのスカウト返信率は平均10%超。
                    案件によっては30%を超えるケースもあります。
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Process */}
        <FadeInSection className="mt-16">
          <h3 className="mb-8 text-center text-xl font-bold text-white">支援の流れ</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '01', title: '現状診断', desc: '採用課題を構造的に分析し、ボトルネックを可視化' },
              { num: '02', title: '戦略設計', desc: 'ターゲティング・チャネル選定・訴求メッセージを策定' },
              { num: '03', title: '実行支援', desc: 'スカウト・求人票改善・面接支援で具体的な成果を出す' },
              { num: '04', title: '採用力の定着', desc: 'ノウハウを社内に蓄積し、継続的に採用できる体制を構築' },
            ].map((step, i) => (
              <div key={step.num} className="relative rounded-xl border border-white/10 bg-white/5 p-6">
                <span className="text-3xl font-bold text-accent/30">{step.num}</span>
                <h4 className="mt-2 text-lg font-bold text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.desc}</p>
                {i < 3 && (
                  <div className="absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-accent/40 lg:block">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
