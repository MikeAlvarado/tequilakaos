"use client";

import Image from "next/image";

export default function AuthenticSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-black text-center overflow-hidden">
            {/* Background Jaguar */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <Image
                    src="/assets/images/realistic-jaguar.png"
                    alt="Jaguar Background"
                    fill
                    className="object-cover object-center opacity-40 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="max-w-2xl z-10 space-y-8">
                <h2 className="text-4xl md:text-6xl font-heading text-kaos-beige uppercase tracking-wide">
                    El Arte de Ser Autentico
                </h2>

                <p className="text-kaos-beige/90 text-lg md:text-xl leading-relaxed font-light">
                    Minimalismo premium con alma rebelde. Inspirado en la fuerza del jaguar,
                    Kaos combina líneas limpias, símbolos poderosos y una presencia visual
                    que no pide permiso. Una botella pensada para destacar donde se ponga.
                    Una botella que carga historia e innovación.
                </p>



                <div className="mt-8">
                    <h3 className="text-xl font-heading text-kaos-beige uppercase tracking-widest">
                        Orgullosamente Hecho en México
                    </h3>
                    <p className="text-kaos-beige/70 text-sm mt-2 font-light">
                        con 100% Agave Azul, bajo los estándares de la tradición que decidimos desafiar.
                    </p>
                </div>
            </div>
        </section>
    );
}
