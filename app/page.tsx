import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import Testimonials from "@/components/sections/Testimonials";
import ChooseCarSection from "@/components/sections/ChooseCarSection";
import FactsInNumbers from "@/components/sections/FactsInNumbers";
import DownloadMobileApp from "@/components/sections/DownloadMobileApp";
import EnjoyEveryMileBanner from "@/components/sections/EnjoyEveryMileBanner";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ScrollReveal delayMs={50}>
        <HeroSection />
      </ScrollReveal>

      <ScrollReveal delayMs={100}>
        <FeatureCards />
      </ScrollReveal>

      <ScrollReveal delayMs={150}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal delayMs={200}>
        <ChooseCarSection />
      </ScrollReveal>

      <ScrollReveal delayMs={250}>
        <FactsInNumbers />
      </ScrollReveal>

      <ScrollReveal delayMs={300}>
        <DownloadMobileApp />
      </ScrollReveal>

      <ScrollReveal delayMs={350}>
        <EnjoyEveryMileBanner />
      </ScrollReveal>

      <ScrollReveal delayMs={100} yOffsetPx={12}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
