import { ExternalLink } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Apex Forge Gym",
            type: "Website Development",
            description: "A modern, high-energy promotional website for a premium fitness center. Built for speed and conversion.",
            link: "https://apex-forge-gym.vercel.app/",
            tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
            color: "from-sky-500 to-blue-500",
        },
        {
            title: "Aura Kinetics Gym",
            type: "Website Development",
            description: "A sleek, user-friendly gym website focusing on class schedules and member onboarding.",
            link: "https://aura-kinetics-gym.vercel.app/",
            tech: ["React", "Tailwind CSS", "TypeScript"],
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Intelligent Instagram Sales Agent",
            type: "AI Automation",
            description: "An AI agent that automates responses to potential customers instantly. Detects user intent, answers FAQs using a custom knowledge base, and saves leads to Google Sheets.",
            link: "#",
            tech: ["n8n", "OpenAI", "Instagram Graph API"],
            color: "from-pink-500 to-purple-500",
        },
        {
            title: "Intelligent Inbox Manager",
            type: "AI Automation",
            description: "Turns a chaotic inbox into a fully automated system. Autonomously organizes emails and executes search commands directly via Telegram.",
            link: "#",
            tech: ["n8n", "LLM Integration", "Telegram API"],
            color: "from-green-500 to-emerald-500",
        }
    ];

    return (
        <section id="projects" className="section-padding bg-slate-50 border-t border-slate-100">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Featured Projects</h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">Real-world examples of how I transform businesses through web development and AI automation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 group flex flex-col h-full">
                            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-3 tracking-wide uppercase">
                                            {project.type}
                                        </span>
                                        <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                                    </div>
                                    {project.link !== "#" && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-primary hover:bg-sky-50 transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
