export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
            <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm font-medium">
                    &copy; {currentYear} Nikitha Digital Wave. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
