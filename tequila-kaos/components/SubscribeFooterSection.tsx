"use client";

import React, { useState } from "react";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const SubscribeFooterSection = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage({ type: "error", text: "Por favor ingresa un correo válido" });
            return;
        }

        setLoading(true);
        setMessage(null);

        try {
            // Add email to Firestore
            await addDoc(collection(db, "subscribers"), {
                email: email.toLowerCase().trim(),
                subscribedAt: Timestamp.now(),
                source: "website",
            });

            setMessage({ type: "success", text: "¡Gracias por suscribirte! Te mantendremos informado." });
            setEmail(""); // Clear the form
        } catch (error) {
            console.error("Error saving email:", error);
            setMessage({ type: "error", text: "Hubo un error. Por favor intenta de nuevo." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative w-full bg-dark-black">
            {/* Subscribe Area */}
            <div className="py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
                <div className="max-w-2xl w-full space-y-8">
                    <h2 className="font-headline text-beige-agave text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
                        Sé parte del Kaos
                    </h2>

                    <p className="font-body text-beige-agave/80 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
                        Suscríbete y obtén acceso a promociones secretas, experiencias
                        únicas y sorpresas que no publicamos en ningún otro lado.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4 pt-4">
                        <div className="flex flex-col items-start gap-2">
                            <label
                                htmlFor="email"
                                className="text-beige-agave/60 text-sm uppercase tracking-wider pl-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tucorreo@gmail.com"
                                className="w-full bg-transparent border border-beige-agave/30 rounded-lg p-4 text-beige-agave placeholder:text-beige-agave/20 focus:outline-none focus:border-beige-agave transition-colors font-body"
                                required
                                disabled={loading}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-beige-agave text-dark-black font-body font-bold py-4 rounded-full uppercase tracking-wide hover:bg-white transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Guardando..." : "Guardar Correo"}
                        </button>

                        {/* Success/Error Message */}
                        {message && (
                            <p className={`text-sm font-body ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
                                {message.text}
                            </p>
                        )}
                    </form>
                </div>

                {/* Health Warning */}
                <div className="mt-24 max-w-3xl mx-auto space-y-4">
                    <h3 className="font-headline text-beige-agave text-2xl md:text-3xl uppercase tracking-wide">
                        El abuso en el consumo de este producto es nocivo para la salud.
                    </h3>
                    <p className="font-body text-beige-agave/60 text-sm md:text-base">
                        Hecho en México · NOM-006 · CRT · 100% Agave Azul
                    </p>
                </div>
            </div>

            {/* Footer Area */}
            <footer className="bg-[#7C3A1E] py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col items-center space-y-10">
                    {/* Logo */}
                    <div className="flex flex-col items-center">
                        <div className="relative h-36 w-64 mb-2">
                            <Image
                                src="/assets/images/kaos-logo-gold.png"
                                alt="Kaos Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6">
                        <a
                            href="https://www.instagram.com/tequilakaos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-beige-agave text-[#7C3A1E] flex items-center justify-center hover:bg-white transition-colors"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/tequila-kaos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-beige-agave text-[#7C3A1E] flex items-center justify-center hover:bg-white transition-colors"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>

                    {/* Links 
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-beige-agave font-headline text-lg md:text-xl uppercase tracking-wide">
                        <a href="#" className="hover:text-white transition-colors">
                            Contactanos
                        </a>
                        <span className="hidden md:inline text-beige-agave/40">•</span>
                        <a href="#" className="hover:text-white transition-colors">
                            Sobre nosotros
                        </a>
                        <span className="hidden md:inline text-beige-agave/40">•</span>
                        <a href="#" className="hover:text-white transition-colors">
                            Terminos y condiciones
                        </a>
                    </div>
                    */}
                </div>
            </footer>
        </section>
    );
};

export default SubscribeFooterSection;
