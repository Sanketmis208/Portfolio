import HeroSection from '@/components/home/HeroSection';
import DraggableBadge from '@/components/home/DraggableBadge';
import JourneySection from '@/components/home/JourneySection';
import FeaturedWork from '@/components/home/FeaturedWork';
import OffScreenLife from '@/components/home/OffScreenLife';
import CTABanner from '@/components/home/CTABanner';
import MarqueeText from '@/components/shared/MarqueeText';
import PageTransition from '@/components/shared/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />


      <JourneySection />
      <FeaturedWork />
      <OffScreenLife />


      <CTABanner />
    </PageTransition>
  );
}
