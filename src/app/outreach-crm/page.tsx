import Link from 'next/link';
import { ArrowLeft, Grid, Calendar, Sliders, CheckCircle2, Quote } from 'lucide-react';

export default function OutreachCRMPage() {
    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-500/30 selection:text-indigo-900">
            {/* Navigation */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 md:p-8">
                <Link href="/#projects" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors text-sm font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-100">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>
            </div>

            {/* SECTION 1 — HERO SECTION */}
            <section className="relative pt-32 pb-12 md:pt-48 md:pb-20 overflow-hidden bg-slate-50">
                {/* Background glow effects - matching light theme but with indigo tones */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-wider uppercase shadow-sm">
                        Productivity Tool
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600">
                        Custom Outreach CRM
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                        A lightweight lead management system built from scratch — because spreadsheets weren&apos;t cutting it anymore.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#demo" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(99,102,241,0.5)] transform hover:-translate-y-1">
                            Watch Demo
                        </Link>
                        <Link href="/#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-800 hover:text-slate-900 hover:bg-slate-50 font-semibold transition-all duration-300 shadow-sm">
                            Let&apos;s Talk
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 7 — DEMO VIDEO (Moved to top based on previous design choice) */}
            <section id="demo" className="pb-24 pt-8 bg-slate-50 relative overflow-hidden">
                <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
                    <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 border-[8px] border-slate-800 shadow-2xl aspect-[9/16] w-[300px] md:w-[340px] mx-auto group flex items-center justify-center">
                        <div className="absolute -inset-4 bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                        
                        <iframe 
                            src="https://www.youtube.com/embed/L8XJ-aplzxk?autoplay=1&mute=1&loop=1&playlist=L8XJ-aplzxk" 
                            title="Outreach CRM Demo"
                            className="absolute top-0 left-0 w-full h-full z-20"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="text-slate-500 mt-6 text-sm font-medium tracking-wide uppercase">
                        See It In Action
                    </p>
                    <p className="text-slate-400 mt-2 text-sm max-w-lg mx-auto">
                        A real walkthrough of the system — from the messy spreadsheet problem to the clean CRM solution.
                    </p>
                </div>
            </section>

            {/* SECTION 2 — THE PROBLEM */}
            <section className="py-20 border-t border-slate-100">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Problem</h2>
                        <div className="w-20 h-1 bg-indigo-500/50 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600 border border-indigo-200">
                                <Grid size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Spreadsheets Get Messy Fast</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                What starts as a clean sheet turns into an unmanageable wall of data. Scrolling through hundreds of rows to find one lead wastes time every single day.
                            </p>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600 border border-indigo-200">
                                <Calendar size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Follow-Ups Fall Through The Cracks</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Manually calculating follow-up dates and checking the sheet daily is tedious. One missed day and a warm lead goes cold.
                            </p>
                        </div>
                        
                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600 border border-indigo-200">
                                <Sliders size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Existing CRMs Don&apos;t Fit Your Workflow</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Most CRM tools are built for large teams. They force you to adapt to them rather than working the way you actually work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — THE STORY */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why I Built This</h2>
                        <div className="w-20 h-1 bg-indigo-500/50 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-white rounded-3xl p-10 md:p-14 shadow-xl border-l-[6px] border-l-indigo-600 border-y border-r border-slate-100">
                            <Quote className="absolute top-8 left-8 w-12 h-12 text-indigo-100 -z-0 transform -translate-y-4 -translate-x-2" />
                            <p className="relative z-10 text-xl md:text-2xl leading-relaxed text-slate-700 font-medium italic mb-8">
                                "Handling leads in Google Sheets gets messy very fast. I had to check the sheet every day, calculate follow-up dates manually, update everything after each follow-up. It sounds simple — but doing this daily became too much. I tried some CRM tools too. They were good… but I had to adjust to them, instead of them adjusting to how I work. So I built a simple system for myself."
                            </p>
                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                <span className="text-slate-500 font-semibold uppercase tracking-wider text-sm">Built for my own outreach workflow</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — WHAT WAS BUILT */}
            <section className="py-20 border-t border-slate-100">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Was Built</h2>
                        <p className="text-lg text-slate-700 leading-relaxed bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100 shadow-sm">
                            A fully custom CRM web application built around one specific workflow — cold outreach. No bloat, no unnecessary features. Just the exact tools needed to manage leads, track communication, and never miss a follow-up.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        {[
                            <span key={1}><strong>Lead Sidebar</strong> — All outreach targets listed in one scrollable panel with color-coded status badges showing exactly where each lead stands</span>,
                            <span key={2}><strong>Rich Lead Detail Panel</strong> — Click any lead to see full business info, social links, website, location data, and auto-generated outreach email</span>,
                            <span key={3}><strong>Outreach Timeline</strong> — Track every email sent, log dates, and update statuses in real time with instant auto-save</span>,
                            <span key={4}><strong>Status Management</strong> — Change lead status (Pending, Responded, Follow Up Due, Not Interested) with a single click</span>,
                            <span key={5}><strong>Follow-Up Filtering</strong> — Filter the entire lead list by stage so you always know exactly who needs attention today</span>
                        ].map((item, i) => (
                            <div key={i} className="flex items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                                <div className="text-slate-700 leading-relaxed">{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 — HOW IT WORKS */}
            <section className="py-20 border-y border-slate-100 bg-slate-50">
                <div className="container-custom max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                        <div className="w-20 h-1 bg-indigo-500/50 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-indigo-200/0 via-indigo-400 to-indigo-200/0 z-0"></div>
                        
                        {/* Connecting Line (Mobile) */}
                        <div className="md:hidden absolute top-[10%] bottom-[10%] left-[28px] w-1 bg-gradient-to-b from-indigo-200/0 via-indigo-400 to-indigo-200/0 z-0"></div>

                        {[
                            { step: "01", text: "Add your leads — paste in business names, contacts, and social links" },
                            { step: "02", text: "Send your outreach — the CRM logs the date and sets follow-up tracking automatically" },
                            { step: "03", text: "Update status with one click as leads respond or progress" },
                            { step: "04", text: "Filter by follow-up stage daily — never miss a lead that needs attention" }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex-1 flex md:flex-col items-center md:text-center gap-6 md:gap-5 mb-8 md:mb-0 px-4">
                                <div className="w-14 h-14 rounded-full bg-white border-2 border-indigo-400 text-indigo-600 flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(99,102,241,0.15)] flex-shrink-0">
                                    {item.step}
                                </div>
                                <p className="text-slate-600 text-sm md:text-base font-medium">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6 — TECH STACK */}
            <section className="py-20 text-center">
                <div className="container-custom">
                    <h2 className="text-2xl font-bold mb-8 text-slate-800">Tech Stack</h2>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                        {[
                            "Next.js", 
                            "Supabase", 
                            "PostgreSQL", 
                            "Google Maps API", 
                            "Tailwind CSS"
                        ].map((tech, i) => (
                            <span key={i} className="px-5 py-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 font-semibold tracking-wide shadow-sm hover:bg-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all cursor-default text-sm md:text-base">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 8 — CTA */}
            <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="container-custom max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">Need Something Built For Your Workflow?</h2>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        This was built to solve a real personal problem. If you have a workflow that&apos;s outgrown spreadsheets, I can build something that fits exactly how you work.
                    </p>
                    <Link href="/#contact" className="inline-block px-10 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transform hover:-translate-y-1">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </main>
    );
}
