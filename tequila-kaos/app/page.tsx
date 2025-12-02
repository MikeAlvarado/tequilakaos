import HeroSection from "@/components/HeroSection";
import AgeVerificationModal from "@/components/AgeVerificationModal";
import Navigation from "@/components/Navigation";
import ProductSection from "@/components/ProductSection";
import BottleSection from "@/components/BottleSection";
import CocktailsSection from "@/components/CocktailsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-black">
      <AgeVerificationModal />
      <Navigation />
      <HeroSection />
      <ProductSection />
      <BottleSection />
      <CocktailsSection />
    </main>
  );
}
