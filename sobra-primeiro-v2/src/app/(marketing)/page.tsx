import { Hero } from "../../features/landing-page/components/Hero";
import { Stats } from "../../features/landing-page/components/Stats";
import { Features } from "../../features/landing-page/components/Features";
import { Pricing } from "../../features/landing-page/components/Pricing";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Pricing />
    </>
  );
}