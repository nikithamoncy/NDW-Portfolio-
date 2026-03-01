"use client";

import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">

                    <div className="md:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                Let&#39;s Build Your Business&#39;s <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">Growth Engine.</span>
                            </h2>
                            <p className="text-slate-300 text-lg">
                                Ready to upgrade your website and automate your sales? Let&#39;s chat about how we can transform your business.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a href="tel:+919495265247" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group w-max">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Phone size={20} />
                                </div>
                                <span className="text-lg font-medium">+91 9495265247</span>
                            </a>

                            <a href="mailto:nikithamoncy@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group w-max">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Mail size={20} />
                                </div>
                                <span className="text-lg font-medium">nikithamoncy@gmail.com</span>
                            </a>

                            <a href="https://www.linkedin.com/in/nikitha-moncy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group w-max">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Linkedin size={20} />
                                </div>
                                <span className="text-lg font-medium">linkedin.com/in/nikitha-moncy</span>
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <form className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl space-y-5 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                <input type="text" id="name" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="John Doe" />
                            </div>

                            <div>
                                <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-2">Business Name</label>
                                <input type="text" id="businessName" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Acme Corp" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input type="email" id="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="How can I help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5">
                                Send Message
                                <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
