import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Technical Proficiency</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A curated list of the tools and technologies I use to build robust applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-sm hover:shadow-md transition-shadow hover:border-blue-500/50"
                        >
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-blue-500 mb-6 border border-slate-700">
                                <skillGroup.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-slate-700 text-slate-300 text-sm font-medium rounded-full border border-slate-600"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
