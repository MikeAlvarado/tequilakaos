import HeroSection from "@/components/HeroSection";
import AgeVerificationModal from "@/components/AgeVerificationModal";
import Navigation from "@/components/Navigation";
import ProductSection from "@/components/ProductSection";
import AuthenticSection from "@/components/AuthenticSection";
import CocktailsSection from "@/components/CocktailsSection";
import SubscribeFooterSection from "@/components/SubscribeFooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-black">
      <AgeVerificationModal />
      <Navigation />
      <HeroSection />
      <ProductSection />
      <CocktailsSection />
      <AuthenticSection />
      <SubscribeFooterSection />
    </main>
  );
}
