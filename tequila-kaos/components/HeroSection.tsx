import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-dark-black">

            {/* Mobile Logo (White) */}
            <div className="relative w-[80%] h-[60vh] md:hidden z-10">
                <Image
                    src="/assets/images/kaos-logo-white.png"
                    alt="Tequila Kaos Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Desktop Logo (Gold) */}
            <div className="relative hidden md:block w-[80%] h-[60vh] z-10">
                <Image
                    src="/assets/images/kaos-logo-gold.png"
                    alt="Tequila Kaos Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-black opacity-40 z-0 pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;
