"use client";

import Image from "next/image";

export default function StorySection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-black text-center overflow-hidden">
            {/* Decorative Elements (Placeholders for Agave/Cinnamon) */}
            <div className="absolute top-10 left-0 w-32 h-32 border border-kaos-gold/20 rounded-full opacity-20 -translate-x-1/2" />
            <div className="absolute bottom-10 right-0 w-48 h-48 border border-kaos-gold/20 rounded-full opacity-20 translate-x-1/2" />

            <div className="max-w-2xl z-10 space-y-8">
                <h2 className="text-4xl md:text-5xl font-heading text-kaos-beige uppercase tracking-wide">
                    Cómo nace el KAOS
                </h2>

                <p className="text-kaos-beige/90 text-lg leading-relaxed font-light">
                    Fran y Mariano, dos amigos con ganas de romper la rutina del tequila
                    tradicional, mezclaron ideas, noches largas y visión. Así nació Kaos:
                    un licor de tequila sabor canela creado para quienes buscan energía,
                    estilo y una razón para brindar diferente. No busca encajar, sino
                    destacar.
                </p>

                <div className="mt-12 relative w-full max-w-lg mx-auto aspect-video rounded-2xl overflow-hidden border border-kaos-gold/20 shadow-2xl">
                    <Image
                        src="/assets/images/founder.png"
                        alt="Fundadores de KAOS"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
