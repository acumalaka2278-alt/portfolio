import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { ArrowRight, Download } from 'lucide-react';
import kyy from '../assets/kyy.jpeg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="inline-block px-4 py-2 bg-slate-900 text-blue-400 rounded-full text-sm font-medium mb-6 border border-slate-800">
                            User Experience & Frontend Design
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            Hi, I'm <span className="text-blue-500">{personalInfo.name}</span>.
                            <br />
                            <span className="text-4xl md:text-6xl text-slate-400 font-semibold">{personalInfo.role}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
                            {personalInfo.tagline}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="group px-8 py-3.5 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-500 transition-all flex items-center justify-center shadow-lg shadow-blue-600/20"
                            >
                                View Work
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/resume.pdf"
                                className="group px-8 py-3.5 bg-transparent text-white border border-slate-700 rounded-full font-medium text-lg hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center"
                            >
                                Download CV
                                <Download className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                        <div className="mt-12 flex items-center justify-center md:justify-start space-x-6">
                            {personalInfo.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-blue-400 transition-colors p-2 hover:bg-slate-900 rounded-full"
                                    aria-label={social.name}
                                >
                                    <social.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-md md:max-w-lg lg:ml-auto"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-40 blur-lg"></div>
                            {/* Placeholder for Profile Project/Card or Image */}
                            <div className="relative bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-800 overflow-hidden">
                                {/* Abstract representation of code/work */}
                                <div className="bg-slate-800 aspect-[4/5] rounded-xl overflow-hidden relative group">
                                    <img
                                        src={kyy}
                                        alt={personalInfo.name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
