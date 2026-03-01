import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
    const skills = [
        "Website Development", "Vibe Coding",
        "n8n Automation", "LLM Integration", "Chatbots", "Lead Generation"
    ];

    return (
        <section id="about" className="section-padding bg-slate-50 border-t border-slate-100">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">

                    <div className="md:w-1/3 w-full flex justify-center">
                        <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 border-4 border-white shadow-xl overflow-hidden relative">
                            <Image
                                src="/profile.png"
                                alt="Nikitha Moncy"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 224px, 320px"
                            />
                        </div>
                    </div>

                    <div className="md:w-2/3 w-full space-y-6 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                            Hi, I&#39;m Nikitha Moncy.
                        </h2>
                        <div className="text-lg text-slate-700 space-y-4 leading-relaxed">
                            <p>
                                I am an automation specialist and modern web developer. After a career in Android Development, I now specialize in building high-speed websites and custom AI agents using n8n, LLMs, and vibe coding. I love solving business problems through logic and technology.
                            </p>
                            <p>
                                For business owners, this means I don&#39;t just build a website that looks good I build a <strong className="text-primary font-semibold">digital engine</strong> that captures leads, answers client questions 24/7, and drives your business forward.
                            </p>
                        </div>
                        <div className="pt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                            {skills.map((skill, index) => (
                                <span key={index} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                                    <CheckCircle2 size={16} className="text-green-500" />
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
