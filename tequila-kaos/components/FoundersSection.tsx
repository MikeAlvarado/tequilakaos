import React from "react";
import Image from "next/image";

const FoundersSection = () => {
    return (
        <section id="founders" className="relative min-h-screen w-full bg-dark-black overflow-hidden flex items-center">
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

                    {/* Images Content - Stacked Vertically */}
                    <div className="flex-1 flex flex-col items-center md:items-end gap-6 md:gap-8 relative">
                        {/* Fran - Top Left */}
                        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-beige-agave/20 shadow-2xl md:-mr-32">
                            <Image
                                src="/assets/images/fran.jpg"
                                alt="Fran - Founder"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                            />
                        </div>
                        {/* Mariano - Bottom Right (Offset) */}
                        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-beige-agave/20 shadow-2xl md:mr-8">
                            <Image
                                src="/assets/images/mariano.png"
                                alt="Mariano - Founder"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
