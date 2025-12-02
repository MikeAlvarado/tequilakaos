"use client";

import Image from "next/image";

export default function FlavorSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-kaos-brown text-center overflow-hidden">
            {/* Background Fire Effect (CSS/Placeholder) */}
            {/* Background Fire Effect */}
            <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-60">
                <Image
                    src="/assets/images/Fire.png"
                    alt="Fuego"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-kaos-brown via-transparent to-kaos-brown" />
            </div>

            <div className="max-w-2xl z-10 space-y-8">
                <h2 className="text-5xl font-heading text-kaos-beige uppercase tracking-wide">
                    Sabor
                </h2>

                <p className="text-kaos-beige/90 text-lg leading-relaxed font-light">
                    Equilibrado, elegante y con un toque final de canela que sorprende sin
                    empalagar. Un perfil limpio, suave y diseñado para disfrutarse como
                    shot o digestivo. Ligero, moderno y adictivamente distintivo.
                </p>

                {/* Shot Glasses Image */}
                <div className="mt-12 relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-kaos-gold/20 shadow-2xl z-10">
                    <Image
                        src="/assets/images/shots.png"
                        alt="Shots de KAOS"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Floating Ingredients */}
                <div className="absolute top-1/4 left-0 w-24 h-24 -translate-x-1/2 opacity-60 pointer-events-none">
                    <Image src="/assets/images/cinamon.png" alt="Canela" fill className="object-contain" />
                </div>
                <div className="absolute bottom-1/4 right-0 w-32 h-32 translate-x-1/3 opacity-60 pointer-events-none">
                    <Image src="/assets/images/lemon.png" alt="Limon" fill className="object-contain" />
                </div>
                <div className="absolute top-10 right-10 w-20 h-20 opacity-40 pointer-events-none blur-sm">
                    <Image src="/assets/images/agave.png" alt="Agave" fill className="object-contain" />
                </div>
            </div>
        </section>
    );
}
