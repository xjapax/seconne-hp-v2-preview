import { HeroSection } from '@/components/HeroSection';
import { LogoSection } from '@/components/LogoSection';
import { PainPointsSection } from '@/components/PainPointsSection';
import { ApproachSection } from '@/components/ApproachSection';
import { WhySeconneSection } from '@/components/WhySeconneSection';
import { ServiceSection } from '@/components/ServiceSection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { CaseStudySection } from '@/components/CaseStudySection';
import { ProfileSection } from '@/components/ProfileSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTASection } from '@/components/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <PainPointsSection />
      <ApproachSection />
      <WhySeconneSection />
      <ServiceSection />
      <ExpertiseSection />
      <CaseStudySection />
      <ProfileSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
