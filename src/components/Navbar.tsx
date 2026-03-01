"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
    ];

    return (
        <header className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
            <div className="container-custom flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-80 h-24 md:w-[28rem] md:h-36 relative flex items-center justify-start transition-transform group-hover:scale-105">
                        <Image src="/logo-transparent.png" alt="Nikitha Digital Wave Logo" fill sizes="(max-width: 768px) 320px, 448px" className="object-contain object-left" />
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
                        Let&#39;s Talk
                    </a>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-slate-900 p-2 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl py-4 px-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-slate-700 py-2 border-b border-slate-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="mt-2 w-full text-center py-3 rounded-xl bg-primary text-white font-medium shadow-sm transition-colors hover:bg-primary-hover"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Let&#39;s Talk
                    </a>
                </div>
            )}
        </header>
    );
}
