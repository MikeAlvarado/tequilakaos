import React from "react";
import Image from "next/image";

const FoundersSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-dark-black overflow-hidden flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/founders-bg.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-100 md:blur-sm"
                    priority
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-dark-black/40 via-dark-black/10 to-dark-black/40 md:bg-dark-black/20"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-24">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left space-y-8">
                        <h2 className="font-headline text-beige-agave text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide leading-none">
                            Cómo nace <br className="hidden md:block" /> el Kaos
                        </h2>

                        <p className="font-body text-beige-agave/90 text-lg md:text-xl leading-relaxed font-light max-w-xl mx-auto md:mx-0">
                            Fran y Mariano, dos amigos con ganas de romper la rutina del
                            tequila tradicional, mezclaron ideas, noches largas y visión. Así
                            nació Kaos: un licor de tequila sabor canela creado para quienes
                            buscan energía, estilo y una razón para brindar diferente. No
                            busca encajar, sino destacar.
                        </p>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-beige-agave/20 shadow-2xl">
                            <Image
                                src="/assets/images/mariano.png"
                                alt="Mariano - Founder"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
