import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
                            <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>{personalInfo.about}</p>
                                <p>
                                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                                    or refining my understanding of UI/UX principles. I believe in continuous learning and adapting to
                                    the ever-evolving web landscape.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <div className="px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 flex-1 min-w-[200px]">
                                    <h3 className="text-3xl font-bold text-blue-600 mb-1">2+</h3>
                                    <p className="text-slate-600 font-medium">Years of Learning</p>
                                </div>
                                <div className="px-6 py-4 bg-slate-50 rounded-xl border border-slate-100 flex-1 min-w-[200px]">
                                    <h3 className="text-3xl font-bold text-blue-600 mb-1">10+</h3>
                                    <p className="text-slate-600 font-medium">Projects Built</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
