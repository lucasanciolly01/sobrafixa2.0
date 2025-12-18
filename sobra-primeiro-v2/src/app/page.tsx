import { Features } from "../features/landing-page/components/Features";
import { Hero } from "../features/landing-page/components/Hero";
import { Pricing } from "../features/landing-page/components/Pricing";
import { Stats } from "../features/landing-page/components/Stats";

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
