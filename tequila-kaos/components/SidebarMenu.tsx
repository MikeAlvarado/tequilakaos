"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="fixed inset-y-0 left-0 z-50 bg-kaos-brown flex flex-col p-6 w-full md:w-[400px] shadow-2xl"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-16">
                        <button onClick={onClose} className="text-kaos-beige hover:text-white transition-colors">
                            <X size={32} />
                        </button>
                        <h2 className="text-3xl font-heading text-kaos-beige uppercase tracking-widest">
                            MENU
                        </h2>
                        <div className="w-8" /> {/* Spacer */}
                    </div>

                    {/* Menu Items */}
                    <nav className="flex flex-col gap-8">
                        <a href="#" className="flex items-center gap-4 text-kaos-beige/80 hover:text-kaos-beige transition-colors text-xl font-light group">
                            <div className="relative w-6 h-6">
                                <Image src="/assets/icons/home.png" alt="Inicio" fill className="object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span>Inicio</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 text-kaos-beige/80 hover:text-kaos-beige transition-colors text-xl font-light group">
                            <div className="relative w-6 h-6">
                                <Image src="/assets/icons/cart.png" alt="Carrito" fill className="object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span>Carrito</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 text-kaos-beige/80 hover:text-kaos-beige transition-colors text-xl font-light group">
                            <div className="relative w-6 h-6">
                                <Image src="/assets/icons/martini.png" alt="Productos" fill className="object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span>Productos</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 text-kaos-beige/80 hover:text-kaos-beige transition-colors text-xl font-light group">
                            <div className="relative w-6 h-6">
                                <Image src="/assets/icons/martini.png" alt="Cocteles" fill className="object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span>Cocteles</span>
                        </a>
                        <a href="#" className="flex items-center gap-4 text-kaos-beige/80 hover:text-kaos-beige transition-colors text-xl font-light group">
                            {/* Using Home icon as placeholder for About Us since no specific icon was provided, or maybe just text? 
                   User provided 3 icons. I'll use Home for now or maybe just the text. 
                   Actually, let's use the Home icon again or maybe the Martini? 
                   Let's use the Home icon for "Sobre nosotros" as a fallback or just leave it without icon?
                   The design usually implies icons for all. I'll use Home for now.
               */}
                            <div className="relative w-6 h-6">
                                <Image src="/assets/icons/home.png" alt="Sobre nosotros" fill className="object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span>Sobre nosotros</span>
                        </a>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
