import Image from 'next/image';
import { FadeInSection } from './FadeInSection';

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 px-5 py-20 md:px-8 md:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/company/AdobeStock_628589476.jpeg"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-navy-950/60" />
      </div>

      <FadeInSection>
        <div className="container-narrow relative mx-auto text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            まずは30分、
            <br className="sm:hidden" />
            採用課題をお聞かせください
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-gray-400">
            セキュリティ人材の採用にお悩みなら、まずは無料相談から。
            貴社の状況をお聞きし、最適なアプローチをご提案します。
          </p>
          <a
            href="/contact"
            className="btn-primary mt-8 inline-flex"
          >
            無料相談を予約する
          </a>
          <p className="mt-3 text-xs text-gray-500">
            30分のオンライン相談・売り込みなし・セキュリティ業界経験者が直接対応
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
