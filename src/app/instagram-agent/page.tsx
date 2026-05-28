import Link from 'next/link';
import { ArrowLeft, Clock, Repeat, TrendingDown, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function InstagramAgentPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-500/30 selection:text-purple-900">
            {/* Navigation */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 md:p-8">
                <Link href="/#projects" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors text-sm font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-100">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>
            </div>

            {/* SECTION 1 - HERO SECTION */}
            <section className="relative pt-32 pb-12 md:pt-48 md:pb-20 overflow-hidden bg-slate-50">
                {/* Background glow effects - Adjusted for light theme */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-400/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold tracking-wider uppercase shadow-sm">
                        AI Automation
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600">
                        Intelligent Instagram <br className="hidden md:block" /> DM Sales Agent
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                        An AI-powered agent that lives inside Instagram DMs - qualifying leads, answering questions, and booking appointments automatically, 24 hours a day, 7 days a week. Zero human involvement needed.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#demo" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(147,51,234,0.5)] transform hover:-translate-y-1">
                            Watch Demo
                        </Link>
                        <Link href="/#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-800 hover:text-slate-900 hover:bg-slate-50 font-semibold transition-all duration-300 shadow-sm">
                            Let&apos;s Talk
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 2 - DEMO VIDEO (Moved up for better conversion) */}
            <section id="demo" className="pb-24 pt-8 bg-slate-50 relative overflow-hidden">
                <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
                    {/* Exclusively vertical shorts player */}
                    <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 border-[8px] border-slate-800 shadow-2xl aspect-[9/16] w-[300px] md:w-[340px] mx-auto group">
                        {/* Glow effect matching the video */}
                        <div className="absolute -inset-4 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                        <iframe 
                            src="https://www.youtube.com/embed/oaGVTwC6ukQ?autoplay=1&mute=1&loop=1&playlist=oaGVTwC6ukQ" 
                            title="Intelligent Instagram Sales Agent Demo"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="text-slate-500 mt-6 text-sm font-medium tracking-wide uppercase">
                        Watch the agent in action
                    </p>
                </div>
            </section>

            {/* SECTION 3 - THE PROBLEM */}
            <section className="py-20 border-t border-slate-100">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem</h2>
                        <div className="w-20 h-1 bg-purple-500/50 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 border border-purple-200">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Missed DMs = Missed Bookings</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Salons receive dozens of DMs daily. Without 24/7 availability, potential clients don&apos;t get replies and book elsewhere.
                            </p>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 border border-purple-200">
                                <Repeat size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Repetitive Questions Drain Staff</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Staff spend hours answering the same questions about pricing, availability, and services - time better spent on clients.
                            </p>
                        </div>
                        
                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 border border-purple-200">
                                <TrendingDown size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Leads Fall Through The Cracks</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Interested prospects who don&apos;t get a fast reply go cold. Every delayed response is potential revenue lost.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 - THE SOLUTION */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Was Built</h2>
                        <p className="text-lg text-slate-700 leading-relaxed bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            A fully custom AI agent built on n8n, connected to the official Meta Graph API, and powered by OpenAI. The agent uses a RAG (Retrieval-Augmented Generation) system trained on the business&apos;s own information - services, pricing, staff, policies - so every reply feels natural and accurate, not robotic.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        {[
                            "24/7 Instant DM Responses - Automatically greets prospects and handles full multi-turn conversations without any delays",
                            "Smart Lead Qualification - Detects user intent and guides high-ticket inquiries through the right conversation path",
                            "Automated Appointment Booking - Collects name, preferred time, and contact details naturally inside the chat",
                            "Live Google Sheets Sync - Every booking and lead is instantly saved to a Google Sheet for the salon team to action",
                            "Comment-to-DM Automation - Replies to post comments automatically and drives users into DMs to convert them"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-purple-200 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700 leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 - HOW IT WORKS */}
            <section className="py-20 border-y border-slate-100">
                <div className="container-custom max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                        <div className="w-20 h-1 bg-purple-500/50 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-purple-200/0 via-purple-400 to-purple-200/0 z-0"></div>
                        
                        {/* Connecting Line (Mobile) */}
                        <div className="md:hidden absolute top-[10%] bottom-[10%] left-[28px] w-1 bg-gradient-to-b from-purple-200/0 via-purple-400 to-purple-200/0 z-0"></div>

                        {[
                            { step: "01", text: "Customer sends a DM or comments on a post" },
                            { step: "02", text: "AI agent detects intent and responds instantly using business knowledge" },
                            { step: "03", text: "Lead is qualified and appointment details are collected naturally" },
                            { step: "04", text: "Booking is saved to Google Sheets and salon staff are notified" }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex-1 flex md:flex-col items-center md:text-center gap-6 md:gap-5 mb-8 md:mb-0 px-4">
                                <div className="w-14 h-14 rounded-full bg-white border-2 border-purple-400 text-purple-600 flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(147,51,234,0.15)] flex-shrink-0">
                                    {item.step}
                                </div>
                                <p className="text-slate-600 text-sm md:text-base font-medium">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6 - TECH STACK */}
            <section className="py-20 text-center bg-slate-50">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold mb-8 text-slate-800">Tech Stack</h2>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                        {[
                            "n8n", 
                            "OpenAI", 
                            "Meta Graph API (Instagram)", 
                            "Google Sheets API", 
                            "Supabase / PostgreSQL", 
                            "RAG (Retrieval-Augmented Generation)"
                        ].map((tech, i) => (
                            <span key={i} className="px-5 py-3 rounded-full bg-purple-50 border border-purple-200 text-purple-800 font-semibold tracking-wide shadow-sm hover:bg-purple-100 hover:border-purple-300 hover:shadow-md transition-all cursor-default text-sm md:text-base">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7 - WORKFLOW SCREENSHOT */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container-custom max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Behind The Scenes</h2>
                        <p className="text-slate-600">
                            The n8n workflow powering the entire agent - from message detection to AI response to data sync.
                        </p>
                    </div>
                    
                    <div className="relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-xl p-2 md:p-4 group">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        
                        <div className="relative w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                            {/* This is a placeholder for the actual workflow image */}
                            <Image 
                                src="/n8n-workflow.png" 
                                alt="n8n Workflow Screenshot" 
                                fill 
                                className="object-contain"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 -z-10">
                                <div className="text-purple-500/30 mb-4 inline-block">
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                </div>
                                <h3 className="text-xl font-medium text-slate-400 mb-2">[n8n Workflow Screenshot]</h3>
                                <p className="text-slate-500 text-sm">Save your workflow image as 'n8n-workflow.png' in the public folder.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8 - CTA */}
            <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
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
