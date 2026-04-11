import Image from 'next/image';
import { FadeInSection } from './FadeInSection';

const career = [
  { period: '〜2017年', role: 'セキュリティエンジニア', detail: 'ソフトバンク株式会社にて脆弱性診断・SOC運用に従事' },
  { period: '〜2019年', role: 'セキュリティコンサルタント', detail: '株式会社リクルートテクノロジーズにて社内セキュリティ強化を推進' },
  { period: '〜2023年', role: '両面型転職エージェント', detail: 'IT・セキュリティ特化の人材紹介コンサルタント' },
  { period: '2023年〜', role: '株式会社セコネ 設立', detail: 'セキュリティ人材の採用コンサルティング' },
];

const qualifications = [
  '情報処理安全確保支援士',
  'CompTIA Security+',
  '上級個人情報保護士',
  '個人情報保護監査人',
];

const achievements = [
  '複数年にわたり内定承諾者ゼロだったポジションへの入社者輩出',
  'スカウト返信率 平均10%超（案件により7〜30%）',
];

export function ProfileSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-narrow mx-auto">
        <FadeInSection>
          <p className="text-center text-sm font-semibold tracking-wider text-accent">ABOUT</p>
          <h2 className="section-title mt-2 text-center">代表紹介</h2>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-14 overflow-hidden rounded-2xl border border-gray-100 bg-white">
            <div className="md:flex">
              {/* Photo + basic info */}
              <div className="flex flex-col items-center bg-navy-50 p-8 md:w-1/3">
                <div className="relative h-48 w-48 overflow-hidden rounded-2xl md:h-56 md:w-56">
                  <Image
                    src="/company/photo.png"
                    alt="高田 祥"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-navy-900">高田 祥</h3>
                <p className="text-base text-gray-500">Sho Takada</p>
                <p className="mt-1 text-sm font-medium text-accent">代表取締役</p>

                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {qualifications.map((q) => (
                    <span key={q} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detail */}
              <div className="flex-1 p-8">
                <p className="text-base leading-relaxed text-gray-600">
                  セキュリティエンジニアとしてキャリアをスタートし、
                  両面型の転職エージェントへ転身。
                  「セキュリティ業界を知る人間が採用を変えるべきだ」
                  という確信からセコネを設立。
                  技術と採用の両方を理解する、セキュリティ採用の専門家です。
                </p>

                {/* Achievements */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold tracking-wider text-gray-400">実績</h4>
                  <ul className="mt-3 space-y-2">
                    {achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-base text-gray-700">
                        <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold tracking-wider text-gray-400">経歴</h4>
                  <div className="mt-3 space-y-3">
                    {career.map((item) => (
                      <div key={item.period} className="flex gap-4">
                        <span className="w-20 flex-shrink-0 text-sm text-gray-400">{item.period}</span>
                        <div>
                          <p className="text-base font-medium text-navy-900">{item.role}</p>
                          <p className="text-sm text-gray-500">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
