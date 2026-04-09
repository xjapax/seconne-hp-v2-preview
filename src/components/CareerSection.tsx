import { FadeInSection } from './FadeInSection';

export function CareerSection() {
  return (
    <section className="section-padding bg-gray-50">
      <FadeInSection>
        <div className="container-narrow mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:flex md:items-center md:gap-10 md:p-10">
            <div className="flex-1">
              <p className="text-sm font-semibold tracking-wider text-accent">FOR JOB SEEKERS</p>
              <h2 className="mt-2 text-2xl font-bold text-navy-900 md:text-3xl">
                転職希望者の方へ
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                セコネキャリアでは、ITエンジニア・セキュリティ人材向けの
                有料キャリア相談サービスを提供しています。
                セキュリティ業界を熟知したコンサルタントが、
                あなたのキャリアの次の一歩を一緒に考えます。
              </p>
              <a
                href="https://seconne-career.com/lp/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-navy-900 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
              >
                セコネキャリアを見る
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="mt-8 flex-shrink-0 md:mt-0">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-navy-50 md:h-40 md:w-40">
                <div className="text-center">
                  <p className="text-3xl font-bold text-navy-900 md:text-4xl">SC</p>
                  <p className="mt-1 text-xs font-medium text-navy-600">Seconne Career</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
