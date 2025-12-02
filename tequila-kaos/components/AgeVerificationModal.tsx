"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const AgeVerificationModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOver18, setIsOver18] = useState<boolean | null>(null);

    useEffect(() => {
        const verified = localStorage.getItem("ageVerified");
        if (!verified) {
            setIsVisible(true);
        }
    }, []);

    const handleVerification = () => {
        if (isOver18) {
            localStorage.setItem("ageVerified", "true");
            setIsVisible(false);
        } else {
            alert("Lo sentimos, debes ser mayor de edad para ingresar.");
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-black/95 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-dark-black border border-cinnamon/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl">
                {/* Logo */}
                <div className="mb-8 w-32 md:w-40 relative h-32 md:h-40">
                    <Image
                        src="/assets/images/kaos-logo-gold.png"
                        alt="Tequila Kaos Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <h2 className="text-3xl md:text-4xl font-headline text-beige-agave mb-4 uppercase tracking-wide">
                    ¿Eres mayor de edad?
                </h2>

                <p className="text-beige-agave/80 font-body mb-8 text-lg leading-relaxed">
                    ¡Bienvenido a la experiencia KAOS!
                    <br />
                    Para poder seguir explorando haznos saber si cuentas con la mayoría de
                    edad (18 años)
                </p>

                {/* Radio Options */}
                <div className="w-full space-y-4 mb-8">
                    <label
                        className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${isOver18 === true
                                ? "border-cinnamon bg-cinnamon/10"
                                : "border-beige-agave/20 hover:border-beige-agave/40"
                            }`}
                        onClick={() => setIsOver18(true)}
                    >
                        <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${isOver18 === true
                                    ? "border-cinnamon bg-cinnamon"
                                    : "border-beige-agave/50"
                                }`}
                        >
                            {isOver18 === true && (
                                <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            )}
                        </div>
                        <span className="text-beige-agave font-body text-lg">
                            Sí, tengo más de 18
                        </span>
                    </label>

                    <label
                        className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${isOver18 === false
                                ? "border-cinnamon bg-cinnamon/10"
                                : "border-beige-agave/20 hover:border-beige-agave/40"
                            }`}
                        onClick={() => setIsOver18(false)}
                    >
                        <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${isOver18 === false
                                    ? "border-cinnamon bg-cinnamon"
                                    : "border-beige-agave/50"
                                }`}
                        >
                            {isOver18 === false && (
                                <div className="w-3 h-3 rounded-full bg-white" />
                            )}
                        </div>
                        <span className="text-beige-agave font-body text-lg">
                            No, Soy menor de 18
                        </span>
                    </label>
                </div>

                <button
                    onClick={handleVerification}
                    disabled={isOver18 === null}
                    className={`w-full py-4 rounded-full font-bold text-lg uppercase tracking-wider transition-all duration-300 ${isOver18 !== null
                            ? "bg-cinnamon hover:bg-dark-cinnamon text-white shadow-lg hover:shadow-cinnamon/20"
                            : "bg-beige-agave/20 text-beige-agave/40 cursor-not-allowed"
                        }`}
                >
                    Enviar respuesta
                </button>
            </div>
        </div>
    );
};

export default AgeVerificationModal;
