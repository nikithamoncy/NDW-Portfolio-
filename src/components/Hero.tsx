"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";

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
                        className="flex-1 w-full max-w-lg lg:max-w-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-200 overflow-hidden shadow-2xl flex items-center justify-center">
                            <div className="absolute inset-0 bg-grid-slate-200/[0.04] bg-[bottom_1px_center]" />
                            <div className="relative z-10 flex flex-col items-center gap-4 text-slate-400">
                                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-primary">
                                    <Code size={40} />
                                </div>
                                <div className="text-center">
                                    <p className="font-semibold text-slate-700">Nikitha Moncy</p>
                                    <p className="text-sm">Vibe Coder & Automation</p>
                                </div>
                            </div>

                            {/* Decorative floating elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute top-12 -left-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">AI</div>
                                <div className="text-xs font-medium text-slate-600">Agents Active</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 -right-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">⚡</div>
                                <div className="text-xs font-medium text-slate-600">Lightning Fast</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
