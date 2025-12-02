"use client";

import { useState } from "react";
import AgeVerificationModal from "@/components/AgeVerificationModal";
import KaosHeroSection from "@/components/KaosHeroSection";
import AuthenticSection from "@/components/AuthenticSection";
import ProductSection from "@/components/ProductSection";
import StorySection from "@/components/StorySection";
import FlavorSection from "@/components/FlavorSection";
import SubscribeFooterSection from "@/components/SubscribeFooterSection";
import SidebarMenu from "@/components/SidebarMenu";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="bg-kaos-brown min-h-screen text-kaos-beige font-sans selection:bg-kaos-gold selection:text-kaos-brown">
      <AgeVerificationModal />
      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <KaosHeroSection onMenuClick={() => setIsSidebarOpen(true)} />
      <AuthenticSection />
      <ProductSection />
      <StorySection />
      <FlavorSection />
      <SubscribeFooterSection />
    </main>
  );
}
