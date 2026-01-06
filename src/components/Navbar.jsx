import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for navbar transparency
    // Adds a background and shadow when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-800' : 'bg-transparent'} `}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer">
                        <a href="#" className="flex items-center">
                            <img
                                src="/asepp.png"
                                alt="Logo"
                                className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300 invert"
                            />
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="items-center flex space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-blue-400 font-medium transition-colors text-sm uppercase tracking-wider"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/20"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-blue-400 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full shadow-lg">
                    <div className="px-5 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-slate-300 hover:text-blue-400 hover:bg-slate-800 px-3 py-3 rounded-md text-base font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4">
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center px-5 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
