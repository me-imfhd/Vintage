import { Create } from "./_components/create";
import { CreatorGrid } from "./_components/creator-grid";
import { HeroSection } from "./_components/hero-section";
import { HowItWorksSection } from "./_components/how-it-works-section";
import { Share } from "./_components/share";
import { Store } from "./_components/store";

export default function IndexPage() {
  return (
    <div>
      <HeroSection />
      <CreatorGrid />
      <Store />
      <Share />
      <Create />
      <HowItWorksSection />
    </div>
  );
}
