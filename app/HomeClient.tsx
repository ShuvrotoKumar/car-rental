'use client';

import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import Testimonials from "@/components/sections/Testimonials";
import ChooseCarSection from "@/components/sections/ChooseCarSection";
import FactsInNumbers from "@/components/sections/FactsInNumbers";
import DownloadMobileApp from "@/components/sections/DownloadMobileApp";
import EnjoyEveryMileBanner from "@/components/sections/EnjoyEveryMileBanner";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const ScrollReveal = dynamic(() => import("@/components/ui/scroll-reveal").then(mod => ({ default: mod.ScrollReveal })), {
  ssr: false,
});

interface HomeClientProps {
  children?: React.ReactNode;
}

export default function HomeClient({}: HomeClientProps) {
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
