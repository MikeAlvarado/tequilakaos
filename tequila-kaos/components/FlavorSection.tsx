import React from "react";
import Image from "next/image";

const FlavorSection = () => {
    return (
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

            {/* Top Fade for smooth transition */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-black to-transparent z-10 pointer-events-none"></div>
            {/* Bottom Fade for smooth transition */}
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

                {/* Image Content */}
                <div className="flex-1 flex justify-center md:justify-end items-end w-full h-full relative mt-8 md:mt-0">
                    {/* Mobile: Shots Image */}
                    <div className="md:hidden relative w-full h-64 sm:h-80">
                        <Image
                            src="/assets/images/shots.png"
                            alt="Kaos Shots"
                            fill
                            className="object-contain object-bottom"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Desktop: Bottle Image */}
                    <div className="hidden md:flex relative h-[80vh] items-center justify-center w-full">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/images/kaos-bottle.png"
                                alt="Kaos Bottle"
                                fill
                                className="object-contain drop-shadow-2xl"
                                sizes="(max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlavorSection;
