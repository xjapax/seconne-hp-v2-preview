import Image from 'next/image';
import Link from 'next/link';
import { FadeInSection } from './FadeInSection';

const cases = [
  {
    id: 'sandj',
    company: 'S&J株式会社',
    companyDesc: 'サイバーセキュリティ専門企業（109名）',
    image: '/interview/sandj/1.webp',
    challenge: 'スカウト700〜800通で返信率1%未満。反応がほぼゼロの状態',
    approach: 'スカウト文の全面刷新、求人票改善、面接官研修の実施',
    result: '短期間で高度専門人材の入社を実現。スカウト返信率が大幅改善',
    quote: '書き出しの一文を見た瞬間、「今まで見てきたものと全然違う」と驚いたんです。',
  },
  {
    id: 'vlcseclab',
    company: 'VLCセキュリティラボ',
    companyDesc: 'セキュリティベンダー（約25名）',
    image: '/interview/vlcseclab/1.webp',
    challenge: 'スカウト1通に1時間。開封率・返信率が低く成果に繋がらない',
    approach: 'ターゲティング精度向上、スカウト文の改善、候補者への訴求再設計',
    result: '開封率20%→80%に改善。3ヶ月で即戦力エンジニアの採用に成功',
    quote: 'セキュリティ人材の採用戦略において、まさに参謀役のような存在です。',
  },
];

export function CaseStudySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        <FadeInSection>
          <p className="text-center text-sm font-semibold tracking-wider text-accent">CASE STUDIES</p>
          <h2 className="section-title mt-2 text-center">導入事例</h2>
        </FadeInSection>

        <div className="mt-14 space-y-8">
          {cases.map((item) => (
            <FadeInSection key={item.id}>
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 transition-shadow hover:shadow-lg md:flex">
                <div className="relative h-48 w-full flex-shrink-0 md:h-auto md:w-72">
                  <Image
                    src={item.image}
                    alt={item.company}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-navy-900">{item.company}</h3>
                  <p className="text-sm text-gray-400">{item.companyDesc}</p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <span className="inline-block rounded bg-red-50 px-2.5 py-1 text-sm font-semibold text-red-600">
                        課題
                      </span>
                      <p className="mt-1.5 text-base text-gray-600">{item.challenge}</p>
                    </div>
                    <div>
                      <span className="inline-block rounded bg-blue-50 px-2.5 py-1 text-sm font-semibold text-blue-600">
                        打ち手
                      </span>
                      <p className="mt-1.5 text-base text-gray-600">{item.approach}</p>
                    </div>
                    <div>
                      <span className="inline-block rounded bg-green-50 px-2.5 py-1 text-sm font-semibold text-green-600">
                        成果
                      </span>
                      <p className="mt-1.5 text-base text-gray-600">{item.result}</p>
                    </div>
                  </div>

                  <blockquote className="mt-5 border-l-2 border-accent/30 pl-4 text-base italic text-gray-500">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>

                  <Link
                    href={`/interview/${item.id}`}
                    className="mt-5 inline-flex items-center gap-1 text-base font-medium text-accent hover:underline"
                  >
                    インタビュー全文を読む
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
