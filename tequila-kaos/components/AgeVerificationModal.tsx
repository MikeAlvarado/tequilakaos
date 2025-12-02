"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Circle } from "lucide-react";

export default function AgeVerificationModal() {
    const [isVisible, setIsVisible] = useState(true);
    const [isOfAge, setIsOfAge] = useState<boolean | null>(null);

    useEffect(() => {
        const verified = localStorage.getItem("kaos-age-verified");
        if (verified === "true") {
            setIsVisible(false);
        }
    }, []);

    const handleVerification = () => {
        if (isOfAge) {
            localStorage.setItem("kaos-age-verified", "true");
            setIsVisible(false);
        } else {
            alert("Lo sentimos, debes ser mayor de edad para entrar.");
        }
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-kaos-brown/95 backdrop-blur-sm p-4"
            >
                <div className="max-w-md w-full text-center space-y-8">
                    {/* Logo Placeholder */}
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-heading text-kaos-beige tracking-wider">KAOS</h1>
                        <div className="text-xs tracking-[0.3em] text-kaos-gold mt-2">100% AGAVE</div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-heading text-kaos-beige uppercase">
                            ¿Eres mayor de edad?
                        </h2>
                        <p className="text-kaos-beige/80 font-light">
                            ¡Bienvenido a la experiencia KAOS! Para poder seguir explorando
                            haznos saber si cuentas con la mayoría de edad (18 años)
                        </p>
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={() => setIsOfAge(true)}
                            className={`w-full py-4 rounded-full border border-kaos-beige/20 text-kaos-beige font-semibold uppercase tracking-wide hover:bg-kaos-beige/10 transition-colors ${isOfAge === true ? "bg-kaos-beige text-kaos-brown border-kaos-beige" : ""
                                }`}
                        >
                            {isOfAge === true ? <Check size={20} /> : <Circle size={20} />}
                            <span className="text-lg">Sí, tengo más de 18</span>
                        </button>

                        <button
                            onClick={() => setIsOfAge(false)}
                            className={`w-full py-4 rounded-full border border-kaos-beige/20 text-kaos-beige font-semibold uppercase tracking-wide hover:bg-kaos-beige/10 transition-colors ${isOfAge === false ? "bg-kaos-beige/10 border-kaos-beige" : ""
                                }`}
                        >
                            {isOfAge === false ? <Check size={20} /> : <Circle size={20} />}
                            <span className="text-lg">No, Soy menor de 18</span>
                        </button>
                    </div>

                    <button
                        onClick={handleVerification}
                        disabled={isOfAge === null}
                        className="w-full bg-kaos-gold text-kaos-brown font-semibold py-4 rounded-full uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Enviar respuesta
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
