import React from 'react';
import Image from 'next/image';

const AuthenticSection = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden ">
            {/* Background Jaguar Image - Add your jaguar image here */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for jaguar background - replace with actual image when available
                <div className="absolute inset-0 bg-gradient-to-br from-dark-cinnamon via-cinnamon/50 to-dark-black opacity-90"></div>
                 */}
                <Image
                    src="/assets/images/jaguar-background.png"
                    alt="Jaguar Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
            </div>

            {/* Dark overlay for better text readability 
            <div className="absolute inset-0 bg-gradient-to-b from-dark-black/50 via-transparent to-dark-black/80 z-10"></div>
                */}
            {/* Content Container */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
                    {/* Left Side - Text Content */}
                    <div className="space-y-8 lg:space-y-12">
                        {/* Main Heading */}
                        <h1 className="font-headline text-beige-agave text-5xl lg:text-6xl xl:text-7xl uppercase leading-tight tracking-wide">
                            El Arte de Ser Auténtico
                        </h1>

                        {/* Description */}
                        <div className="space-y-6">
                            <p className="font-body text-beige-agave/90 text-lg lg:text-xl leading-relaxed">
                                Minimalismo premium con alma rebelde. Inspirado en la fuerza del jaguar,
                                Kaos combina líneas limpias, símbolos poderosos y una presencia visual
                                que no pide permiso. Una botella pensada para destacar donde se ponga.
                                Una botella que carga historia e innovación.
                            </p>
                        </div>

                        {/* Made in Mexico Section */}
                        <div className="pt-8 border-t border-beige-agave/20">
                            <h2 className="font-headline text-beige-agave text-3xl lg:text-4xl uppercase mb-4 tracking-wide">
                                Orgullosamente Hecho en México
                            </h2>
                            <p className="font-body text-beige-agave/90 text-lg lg:text-xl leading-relaxed">
                                con 100% Agave Azul, bajo los estándares de la tradición que decidimos desafiar.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Bottle Image */}
                    <div className="relative h-[80vh] flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/images/kaos-bottle.png"
                                alt="Botella Kaos Tequila"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-center text-center space-y-8 py-12">
                    {/* Main Heading */}
                    <h1 className="font-headline text-beige-agave text-3xl uppercase leading-tight tracking-wide px-4">
                        El Arte de Ser Auténtico
                    </h1>

                    {/* Description */}
                    <p className="font-body text-beige-agave/90 text-base leading-relaxed px-6">
                        Minimalismo premium con alma rebelde. Inspirado en la fuerza del jaguar,
                        Kaos combina líneas limpias, símbolos poderosos y una presencia visual
                        que no pide permiso. Una botella pensada para destacar donde se ponga.
                        Una botella que carga historia e innovación.
                    </p>

                    {/* Bottle Image */}
                    <div className="relative w-full h-[50vh] max-w-md my-8">
                        <Image
                            src="/assets/images/kaos-bottle.png"
                            alt="Botella Kaos Tequila"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Made in Mexico Section */}
                    <div className="pt-8 border-t border-beige-agave/20 w-full px-6">
                        <h2 className="font-headline text-beige-agave text-2xl uppercase mb-4 tracking-wide">
                            Orgullosamente Hecho en México
                        </h2>
                        <p className="font-body text-beige-agave/90 text-base leading-relaxed">
                            con 100% Agave Azul, bajo los estándares de la tradición que decidimos desafiar.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade to next section
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-dark-black z-10"></div>
       */}
        </section>
    );
};

export default AuthenticSection;
