import React from "react";
import Image from "next/image";

const ProductSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-dark-black py-20 px-4 md:px-8 lg:px-16 flex items-center">
            {/* Radial Glow Background - Oval from center outward */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#7C3A1E_0%,#4a2416_25%,#0E0E0E_60%)] opacity-60"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-center text-center space-y-6">
                    {/* Bottle Image */}
                    <div className="relative w-64 h-96 mb-4">
                        <Image
                            src="/assets/images/kaos-bottle.png"
                            alt="Kaos Tequila Bottle"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Product Name */}
                    <h2 className="font-body font-normal text-beige-agave text-2xl leading-tight">
                        Licor de Tequila
                        <br />
                        sabor canela
                    </h2>

                    {/* Price */}
                    <p className="font-headline text-beige-agave text-5xl">$600</p>

                    {/* Out of Stock Button */}
                    <button
                        disabled
                        className="bg-beige-agave/20 text-beige-agave/50 font-body font-semibold py-3 px-12 rounded-full cursor-not-allowed uppercase tracking-wide border border-beige-agave/30"
                    >
                        Agotado
                    </button>

                    {/* Explore CTA */}
                    <div className="mt-24 flex flex-col items-center space-y-2">
                        <p className="font-headline text-beige-agave text-xl uppercase tracking-wider">
                            Explora el Kaos
                        </p>
                        <svg
                            className="w-6 h-6 text-beige-agave animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center min-h-[90vh]">
                    {/* Left: Content */}
                    <div className="space-y-6 lg:space-y-8 z-20">
                        <h2 className="font-headline text-beige-agave text-5xl lg:text-7xl xl:text-8xl uppercase leading-[0.9] tracking-wide">
                            Licor de Tequila
                            <br />
                            Sabor Canela
                        </h2>

                        <p className="font-body font-normal text-beige-agave/90 text-lg lg:text-xl">
                            ¿Te atreves a desafiar el KAOS?
                        </p>

                        <p className="font-headline text-beige-agave text-4xl lg:text-5xl">
                            $600 MXN
                        </p>

                        <button
                            disabled
                            className="bg-beige-agave/20 text-beige-agave/50 font-body font-semibold py-3 lg:py-4 px-12 lg:px-16 rounded-full cursor-not-allowed uppercase tracking-wide text-base lg:text-lg border border-beige-agave/30"
                        >
                            Agotado
                        </button>
                    </div>

                    {/* Right: Bottle Image - Diagonal & Full Height */}
                    <div className="relative w-full h-[90vh] -mr-32 lg:-mr-48">
                        <Image
                            src="/assets/images/kaos-bottle.png"
                            alt="Kaos Tequila Bottle"
                            fill
                            className="object-contain rotate-[335deg] scale-125 origin-center"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
