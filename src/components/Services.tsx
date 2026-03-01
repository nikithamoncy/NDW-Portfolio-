import { MonitorSmartphone, BotMessageSquare, Workflow } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "High-Performance Websites",
            description: "Custom, lightning-fast websites designed to convert local traffic into paying customers.",
            icon: <MonitorSmartphone size={32} />,
            color: "bg-blue-100 text-blue-600 border-blue-200",
            delay: "delay-0",
        },
        {
            title: "AI & Workflow Automation",
            description: "Intelligent systems using n8n and LLMs to automate repetitive tasks, manage your inbox, and streamline your entire backend operations.",
            icon: <Workflow size={32} />,
            color: "bg-sky-100 text-primary border-sky-200",
            delay: "delay-100",
        },
        {
            title: "Lead Generation Engines",
            description: "Smart 24/7 chatbots and strategic digital funnels that instantly capture, answer, and qualify potential clients without manual effort.",
            icon: <BotMessageSquare size={32} />,
            color: "bg-green-100 text-green-600 border-green-200",
            delay: "delay-200",
        }
    ];

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Services Offered</h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">Providing end-to-end digital solutions that attract leads and automate operations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${service.delay}`}>
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border shadow-sm ${service.color}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
