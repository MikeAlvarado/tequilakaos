import React from "react";
import Image from "next/image";

const CocktailsSection = () => {
    const cocktails = [
        { name: "TROPICAL", image: "/assets/images/tropical.png" },
        { name: "OTOÑO", image: "/assets/images/otono.jpg" },
        { name: "NAVIDEÑO", image: "/assets/images/navideno.jpg" },
        { name: "LUX", image: "/assets/images/lux.jpg" },
    ];

    return (
        <section className="relative min-h-screen w-full bg-dark-black py-16 md:py-20 px-4 md:px-8 lg:px-16 flex items-center">
            <div className="w-full max-w-5xl mx-auto">
                {/* Title */}
                <h2 className="font-headline text-beige-agave text-3xl md:text-4xl lg:text-5xl uppercase text-center mb-12 md:mb-16 tracking-wide">
                    Invoca el Kaos
                </h2>

                {/* Cocktails Grid - Much smaller */}
                <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8 max-w-2xl md:max-w-3xl mx-auto">
                    {cocktails.map((cocktail) => (
                        <div
                            key={cocktail.name}
                            className="relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl aspect-[3/4] hover:scale-105 transition-transform duration-300"
                        >
                            {/* Image */}
                            <Image
                                src={cocktail.image}
                                alt={cocktail.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 40vw, 25vw"
                            />

                            {/* Overlay Gradient 
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-black/90 via-dark-black/40 to-transparent"></div>
                            */}

                            {/* Name 
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                <h3 className="font-headline text-white text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide text-center">
                                    {cocktail.name}
                                </h3>
                            </div>
                            */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CocktailsSection;
