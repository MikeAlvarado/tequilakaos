"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMobileLogo, setShowMobileLogo] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            // Show logo after scrolling past 80vh
            const scrolled = window.scrollY > (window.innerHeight * 0.8);
            setShowMobileLogo(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        // Check initial state
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { label: "INICIO", href: "#" },
        { label: "SOBRE NOSOTROS", href: "#sobre-nosotros" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 bg-dark-black/90 backdrop-blur-sm border-b border-beige-agave/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20 relative">
                        {/* Mobile: Hamburger Menu */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-beige-agave hover:text-cinnamon transition-colors p-2 relative z-20"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                        {/* Mobile: Centered Logo (appears on scroll) */}
                        {showMobileLogo && (
                            <div
                                className={`md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 z-10
                                }`}
                            >
                                <Link href="/" className="block">
                                    <div className="relative h-10 w-16">
                                        <Image
                                            src="/assets/images/kaos-nav-logo.png"
                                            alt="Kaos Logo"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </Link>
                            </div>
                        )}


                        {/* Desktop: Logo Image */}
                        <Link
                            href="/"
                            className="hidden md:block relative h-12 w-20 hover:opacity-80 transition-opacity"
                        >
                            <Image
                                src="/assets/images/kaos-nav-logo.png"
                                alt="Kaos Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop: Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="font-body text-beige-agave hover:text-cinnamon transition-colors text-sm tracking-wide"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile: Spacer */}
                        <div className="md:hidden w-6"></div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sliding Menu */}
            <div
                className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-dark-black/80 backdrop-blur-sm"
                    onClick={toggleMenu}
                ></div>

                {/* Menu Panel */}
                <div
                    className={`absolute left-0 top-0 bottom-0 w-64 bg-dark-black border-r border-beige-agave/20 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full p-6">
                        {/* Close Button */}
                        <button
                            onClick={toggleMenu}
                            className="self-end text-beige-agave hover:text-cinnamon transition-colors mb-8"
                            aria-label="Close menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="relative h-16 w-32 mb-12">
                            <Image
                                src="/assets/images/kaos-nav-logo.png"
                                alt="Kaos Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Menu Items */}
                        <nav className="flex flex-col space-y-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={toggleMenu}
                                    className="font-body text-beige-agave hover:text-cinnamon transition-colors text-lg tracking-wide"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
