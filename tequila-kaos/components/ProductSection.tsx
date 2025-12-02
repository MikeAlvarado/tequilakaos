"use client";

import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ProductSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-between py-8 px-4 bg-kaos-brown overflow-hidden">
            {/* Background Smoke Effect (CSS/Placeholder) */}
            {/* Background Smoke Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
                <Image
                    src="/assets/images/filesmoke-vertical.png"
                    alt="Humo"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Header */}
            <header className="w-full flex justify-between items-center z-20 mb-4">
                <button className="text-kaos-beige hover:text-white transition-colors">
                    <Menu size={32} />
                </button>
                <div className="relative w-32 h-12">
                    <Image
                        src="/assets/images/kaos-logo.png"
                        alt="KAOS"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="w-8" /> {/* Spacer */}
            </header>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md z-10 mt-8">
                {/* Bottle Image */}
                <div className="relative w-64 h-[500px] mb-8 drop-shadow-2xl">
                    <Image
                        src="/assets/images/bottle.png"
                        alt="Botella KAOS"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-light text-kaos-beige">
                        Licor de Tequila
                    </h2>
                    <h3 className="text-2xl font-light text-kaos-beige">
                        sabor canela
                    </h3>
                </div>

                <div className="mt-6 text-5xl font-heading text-kaos-beige">
                    $600
                </div>

                {/* TODO: Enable this button when product stock is available or age verification is passed. */}
                <button
                    disabled
                    className="mt-8 w-full bg-white/5 border border-white/5 text-white/40 py-4 rounded-full text-lg font-semibold cursor-not-allowed"
                >
                    Añadir al carrito
                </button>
            </div>

            {/* Footer / Scroll Indicator */}
            <div className="flex flex-col items-center gap-2 z-10 mt-8">
                <span className="text-kaos-gold text-sm tracking-widest uppercase font-bold">
                    Explora el KAOS
                </span>
                <ChevronDown className="text-kaos-gold animate-bounce" />
            </div>
        </section>
    );
}
