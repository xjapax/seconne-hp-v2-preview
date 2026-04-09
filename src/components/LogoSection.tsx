import Image from 'next/image';
import { FadeInSection } from './FadeInSection';

const logos = [
  { src: '/top/sj_corporation.png', alt: 'S&J株式会社', height: 60 },
  { src: '/top/vlc_security_lab.svg', alt: 'VLCセキュリティラボ', height: 56 },
  { src: '/top/dentsu_soken_technology.png', alt: '電通総研テクノロジー', height: 60 },
];

export function LogoSection() {
  return (
    <section className="border-b border-gray-100 bg-gray-50 py-14">
      <FadeInSection>
        <div className="container-wide mx-auto px-5 md:px-8">
          <p className="mb-8 text-center text-sm font-medium tracking-wider text-gray-400">
            導入企業一例
          </p>
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16 md:gap-24">
            {logos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={320}
                height={logo.height * 4}
                className="h-14 w-auto sm:h-20 md:h-28"
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
