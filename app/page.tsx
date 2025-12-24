import HeroSection from "./_components/HeroSection";
import FeatureSection from "./_components/FeatureSection";
import StepSection from "./_components/StepSection";
import CTASection from "./_components/CTASection";

export default function HomePage() {
  return (
    <main className='min-h-screen bg-white text-gray-900'>
      <HeroSection />
      <FeatureSection />
      <StepSection />
      <CTASection />
    </main>
  );
}
