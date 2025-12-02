"use client";

import { Menu } from "lucide-react";
import Image from "next/image";

interface KaosHeroSectionProps {
    onMenuClick: () => void;
}

export default function KaosHeroSection({ onMenuClick }: KaosHeroSectionProps) {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-between py-8 px-4 bg-black overflow-hidden">
            {/* Header */}
            <header className="w-full flex justify-between items-center z-20">
                <button onClick={onMenuClick} className="text-kaos-beige hover:text-white transition-colors">
                    <Menu size={32} />
                </button>
                <div className="w-8" /> {/* Spacer */}
            </header>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md z-10 -mt-16 relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <Image
                            src="/assets/images/kaos-jaguar-hero.png"
                            alt="Jaguar Background"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}
