import React from "react";
import Image from "next/image";

const FlavorAuthenticWrapper = () => {
    return (
        <div className="relative w-full">
            {/* ==========================================
          FLAVOR SECTION CONTENT
         ========================================== */}
            <section className="relative min-h-screen w-full bg-dark-black overflow-hidden flex items-center">
                {/* Background Fire */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/fire-bg.png"
                        alt="Fire Background"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-black/30 via-transparent to-dark-black/60"></div>
                </div>

                {/* Top Fade */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-black to-transparent z-10 pointer-events-none"></div>
                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-black to-transparent z-10 pointer-events-none"></div>

                <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-0 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen">
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8 mt-12 md:mt-0">
                        <h2 className="font-headline text-beige-agave text-6xl md:text-7xl lg:text-8xl uppercase tracking-wide leading-none">
                            Sabor
                        </h2>

                        <p className="font-body text-beige-agave/90 text-lg md:text-xl leading-relaxed font-light max-w-md mx-auto md:mx-0">
                            Equilibrado, elegante y con un toque final de canela que sorprende
                            sin empalagar. Un perfil limpio, suave y diseñado para disfrutarse
                            como shot o digestivo. Ligero, moderno y adictivamente distintivo.
                        </p>
                    </div>

                    {/* Mobile Image Content (Shots) - Hidden on Desktop */}
                    <div className="md:hidden w-screen -ml-6 -mr-6 relative mt-4">
                        <Image
                            src="/assets/images/shots.png"
                            alt="Kaos Shots"
                            width={1000}
                            height={200}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Desktop Placeholder to balance layout (empty because bottle is sticky) */}
                    <div className="hidden md:block flex-1"></div>
                </div>
            </section>

            {/* ==========================================
          AUTHENTIC SECTION CONTENT
         ========================================== */}
            <section className="relative min-h-screen w-full overflow-hidden flex items-center">
                {/* Background Jaguar */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/jaguar-background.png"
                        alt="Jaguar Background"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                </div>

                <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
                        {/* Left Side - Text Content */}
                        <div className="space-y-8 lg:space-y-12">
                            <h1 className="font-headline text-beige-agave text-5xl lg:text-6xl xl:text-7xl uppercase leading-tight tracking-wide">
                                El Arte de Ser Auténtico
                            </h1>

                            <div className="space-y-6">
                                <p className="font-body text-beige-agave/90 text-lg lg:text-xl leading-relaxed">
                                    Minimalismo premium con alma rebelde. Inspirado en la fuerza
                                    del jaguar, Kaos combina líneas limpias, símbolos poderosos y
                                    una presencia visual que no pide permiso. Una botella pensada
                                    para destacar donde se ponga. Una botella que carga historia e
                                    innovación.
                                </p>
                            </div>

                            <div className="pt-8 border-t border-beige-agave/20">
                                <h2 className="font-headline text-beige-agave text-3xl lg:text-4xl uppercase mb-4 tracking-wide">
                                    Orgullosamente Hecho en México
                                </h2>
                                <p className="font-body text-beige-agave/90 text-lg lg:text-xl leading-relaxed">
                                    con 100% Agave Azul, bajo los estándares de la tradición que
                                    decidimos desafiar.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Placeholder (empty because bottle is sticky) */}
                        <div></div>
                    </div>

                    {/* Mobile Layout - Retained exactly as is */}
                    <div className="md:hidden flex flex-col items-center text-center space-y-8 py-12">
                        <h1 className="font-headline text-beige-agave text-3xl uppercase leading-tight tracking-wide px-4">
                            El Arte de Ser Auténtico
                        </h1>

                        <p className="font-body text-beige-agave/90 text-base leading-relaxed px-6">
                            Minimalismo premium con alma rebelde. Inspirado en la fuerza del
                            jaguar, Kaos combina líneas limpias, símbolos poderosos y una
                            presencia visual que no pide permiso. Una botella pensada para
                            destacar donde se ponga. Una botella que carga historia e
                            innovación.
                        </p>

                        {/* Mobile Bottle Image */}
                        <div className="relative w-full h-[50vh] max-w-md my-8">
                            <Image
                                src="/assets/images/kaos-bottle.png"
                                alt="Botella Kaos Tequila"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>

                        <div className="pt-8 border-t border-beige-agave/20 w-full px-6">
                            <h2 className="font-headline text-beige-agave text-2xl uppercase mb-4 tracking-wide">
                                Orgullosamente Hecho en México
                            </h2>
                            <p className="font-body text-beige-agave/90 text-base leading-relaxed">
                                con 100% Agave Azul, bajo los estándares de la tradición que
                                decidimos desafiar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
        DESKTOP STICKY BOTTLE OVERLAY
        Positioned absolutely over the wrapper so it doesn't affect flow.
        Contains a sticky element that tracks the viewport.
      */}
            <div className="hidden md:block absolute top-0 right-0 w-full h-full z-30 pointer-events-none">
                <div className="sticky top-0 h-screen flex items-center justify-center">
                    <div className="absolute right-0 w-1/2 h-full flex items-center justify-center">
                        <div className="relative w-full h-[80vh]">
                            <Image
                                src="/assets/images/kaos-bottle.png"
                                alt="Kaos Bottle"
                                fill
                                className="object-contain drop-shadow-2xl"
                                sizes="(max-width: 1200px) 50vw, 33vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlavorAuthenticWrapper;
