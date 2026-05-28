import Link from 'next/link';
import { ArrowLeft, Clock, Repeat, TrendingDown, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function InstagramAgentPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500/30 selection:text-purple-200">
            {/* Navigation */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 md:p-8">
                <Link href="/#projects" className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>
            </div>

            {/* SECTION 1 — HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-block px-3 py-1 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-wider uppercase">
                        AI Automation
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-400">
                        Intelligent Instagram <br className="hidden md:block" /> DM Sales Agent
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                        An AI-powered agent that lives inside Instagram DMs — qualifying leads, answering questions, and booking appointments automatically, 24 hours a day, 7 days a week. Zero human involvement needed.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#demo" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transform hover:-translate-y-1">
                            Watch Demo
                        </Link>
                        <Link href="/#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium transition-all duration-300 hover:bg-slate-800">
                            Let&apos;s Talk
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — THE PROBLEM */}
            <section className="py-20 bg-slate-900 border-y border-slate-800/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem</h2>
                        <div className="w-20 h-1 bg-purple-500/50 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Card 1 */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                            <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center mb-6 text-rose-400 border border-rose-500/20">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Missed DMs = Missed Bookings</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Salons receive dozens of DMs daily. Without 24/7 availability, potential clients don&apos;t get replies and book elsewhere.
                            </p>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 text-amber-400 border border-amber-500/20">
                                <Repeat size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Repetitive Questions Drain Staff</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Staff spend hours answering the same questions about pricing, availability, and services — time better spent on clients.
                            </p>
                        </div>
                        
                        {/* Card 3 */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
                                <TrendingDown size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Leads Fall Through The Cracks</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Interested prospects who don&apos;t get a fast reply go cold. Every delayed response is potential revenue lost.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — THE SOLUTION */}
            <section className="py-20">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Was Built</h2>
                        <p className="text-lg text-slate-300 leading-relaxed bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                            A fully custom AI agent built on n8n, connected to the official Meta Graph API, and powered by OpenAI. The agent uses a RAG (Retrieval-Augmented Generation) system trained on the business&apos;s own information — services, pricing, staff, policies — so every reply feels natural and accurate, not robotic.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        {[
                            "24/7 Instant DM Responses — Automatically greets prospects and handles full multi-turn conversations without any delays",
                            "Smart Lead Qualification — Detects user intent and guides high-ticket inquiries through the right conversation path",
                            "Automated Appointment Booking — Collects name, preferred time, and contact details naturally inside the chat",
                            "Live Google Sheets Sync — Every booking and lead is instantly saved to a Google Sheet for the salon team to action",
                            "Comment-to-DM Automation — Replies to post comments automatically and drives users into DMs to convert them"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start bg-slate-900/30 p-4 rounded-xl border border-slate-800/50">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-4 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-300 leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4 — HOW IT WORKS */}
            <section className="py-20 bg-slate-900 border-y border-slate-800/50">
                <div className="container-custom max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                        <div className="w-20 h-1 bg-purple-500/50 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 z-0"></div>
                        
                        {/* Connecting Line (Mobile) */}
                        <div className="md:hidden absolute top-[10%] bottom-[10%] left-[28px] w-0.5 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 z-0"></div>

                        {[
                            { step: "01", text: "Customer sends a DM or comments on a post" },
                            { step: "02", text: "AI agent detects intent and responds instantly using business knowledge" },
                            { step: "03", text: "Lead is qualified and appointment details are collected naturally" },
                            { step: "04", text: "Booking is saved to Google Sheets and salon staff are notified" }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex-1 flex md:flex-col items-center md:text-center gap-6 md:gap-4 mb-8 md:mb-0 px-4">
                                <div className="w-14 h-14 rounded-full bg-slate-950 border-2 border-purple-500/50 text-purple-400 flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(147,51,234,0.3)] flex-shrink-0">
                                    {item.step}
                                </div>
                                <p className="text-slate-300 text-sm md:text-base">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 — TECH STACK */}
            <section className="py-20 text-center">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold mb-8 text-slate-400">Tech Stack</h2>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                        {[
                            "n8n", 
                            "OpenAI", 
                            "Meta Graph API (Instagram)", 
                            "Google Sheets API", 
                            "Supabase / PostgreSQL", 
                            "RAG (Retrieval-Augmented Generation)"
                        ].map((tech, i) => (
                            <span key={i} className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-medium tracking-wide shadow-sm hover:border-purple-500/50 transition-colors cursor-default text-sm md:text-base">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6 — DEMO VIDEO */}
            <section id="demo" className="py-20 bg-slate-900 border-y border-slate-800/50">
                <div className="container-custom max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
                    <p className="text-slate-400 mb-12">
                        Watch the full agent handle a real DM conversation — from first message to confirmed booking.
                    </p>
                    
                    <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-700/50 shadow-[0_0_40px_rgba(147,51,234,0.15)] aspect-[9/16] md:aspect-video max-w-[360px] md:max-w-none mx-auto">
                        <iframe 
                            src="https://www.youtube.com/embed/oaGVTwC6ukQ?autoplay=1&mute=1&loop=1&playlist=oaGVTwC6ukQ" 
                            title="Intelligent Instagram Sales Agent Demo"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* SECTION 7 — WORKFLOW SCREENSHOT */}
            <section className="py-20">
                <div className="container-custom max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Behind The Scenes</h2>
                        <p className="text-slate-400">
                            The n8n workflow powering the entire agent — from message detection to AI response to data sync.
                        </p>
                    </div>
                    
                    <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-2 md:p-4 group">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                            {/* This is a placeholder for the actual workflow image */}
                            <Image 
                                src="/n8n-workflow.png" 
                                alt="n8n Workflow Screenshot" 
                                fill 
                                className="object-contain"
                            />
                            <div className="fallback-text hidden text-center p-8">
                                <div className="text-purple-500/50 mb-4 inline-block">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                </div>
                                <h3 className="text-xl font-medium text-slate-300 mb-2">[n8n Workflow Screenshot]</h3>
                                <p className="text-slate-500 text-sm">Save your workflow image as 'n8n-workflow.png' in the public folder.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8 — CTA */}
            <section className="py-24 bg-gradient-to-b from-slate-950 to-purple-950/20 border-t border-slate-800">
                <div className="container-custom max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">Want This For Your Business?</h2>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        This agent can be fully customised for your salon, spa, or any service-based business. Expand it to WhatsApp, Facebook, and more.
                    </p>
                    <Link href="/#contact" className="inline-block px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transform hover:-translate-y-1">
                        Book a Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
