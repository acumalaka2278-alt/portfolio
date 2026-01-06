import { motion } from 'framer-motion';
import { projects } from '../data';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Here are a few projects that demonstrate my problem-solving skills and coding abilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col items-center shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all hover:-translate-y-1 group"
                        >
                            {/* Project Image Placeholder - In production use real images */}
                            <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden text-slate-500">
                                <div className="absolute inset-0 flex items-center justify-center font-medium">
                                    {project.title} Preview
                                </div>
                                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors"></div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col w-full">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-white transition-colors"
                                            title="View Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-blue-400 transition-colors"
                                            title="Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6 space-y-2">
                                    {project.features.slice(0, 2).map((feature, i) => (
                                        <div key={i} className="flex items-center text-sm text-slate-500">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 bg-slate-800 text-blue-300 text-xs font-medium rounded-md border border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
