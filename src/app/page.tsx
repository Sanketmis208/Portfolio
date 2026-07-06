import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import WorkSection from '@/components/home/WorkSection';
import ContactSection from '@/components/home/ContactSection';
import PageTransition from '@/components/shared/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div id="home">
        <HeroSection />
      </div>
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </PageTransition>
  );
}
