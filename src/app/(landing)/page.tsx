import Exercises from "./sections/Exercises";
import FAQS from "./sections/FAQs";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import StepsSection from "./sections/Plan";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Exercises />
      <StepsSection />
      <FAQS />
    </>
  );
}
