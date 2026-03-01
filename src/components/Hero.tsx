"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-hover)_0%,_transparent_50%)] opacity-5"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-secondary)_0%,_transparent_50%)] opacity-5"></div>
            </div>

            <div className="container-custom relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-primary text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for new projects
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            Upgrade Your Business&#39;s <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">
                                Digital Presence
                            </span>{" "}
                            &amp; <br className="hidden lg:block" /> Automate Growth
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto md:mx-0">
                            I build high-converting websites and intelligent AI agents for modern businesses. Get more customers, automate your inbox, and save hours of admin work every week.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                            >
                                Book a Strategy Call
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href="#projects"
                                className="w-full sm:w-auto px-8 py-3 rounded-full bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors flex items-center justify-center"
                            >
                                View My Work
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        className="flex-1 w-full max-w-sm md:max-w-md relative mt-12 md:mt-0 mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl bg-slate-100 border border-slate-100 shadow-2xl flex items-center justify-center">
                            <Image src="/hero-image.png" alt="Automation and AI Tools" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-3xl" priority />
                        </div>

                        {/* Decorative floating elements */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 -left-2 md:-left-12 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-3 md:gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                                <Bot size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">AI Agents</p>
                                <p className="text-sm md:text-base font-bold text-slate-800">24/7 Active</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-12 -right-2 md:-right-8 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-3 md:gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                                <Zap size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Performance</p>
                                <p className="text-sm md:text-base font-bold text-slate-800">Lightning Fast</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
