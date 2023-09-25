import { HeroSection } from "@/sections/hero";
import { Header } from "@/components/Header";
import { Banner } from "@/sections/banner";
import { FeaturesSection } from "@/sections/features";
import { AlertSection } from "@/sections/alert";
import { HandsSection } from "@/sections/hands";
import { Waves } from "@/components/Waves";
import { Footer } from "@/components/Footer";
import { CurveHeader } from "@/components/CurveHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4 bg-app">
      <Header />
      <CurveHeader />
      <div className="flex flex-col overflow-x-hidden w-full bg-app">
        <HeroSection />
        <Banner />
        <FeaturesSection />
        <AlertSection />
        <HandsSection />
      </div>
      <Footer />
    </main>
  );
}
