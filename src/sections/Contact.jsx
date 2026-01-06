import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        // Validasi sederhana: Cek apakah env masih default/kosong
        if (!serviceId || serviceId.includes('ganti') || !templateId || !publicKey) {
            toast.error("EmailJS belum dikonfigurasi! Cek file .env Anda.");
            setIsLoading(false);
            return;
        }

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );
            toast.success("Pesan berhasil terkirim!");
            formRef.current.reset();
        } catch (error) {
            console.error(error);
            toast.error("Gagal mengirim pesan. Coba lagi nanti.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-500 shrink-0 border border-slate-700">
                                <Mail size={24} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-white">Email</h3>
                                <p className="text-slate-400 mt-1">
                                    <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400 transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-indigo-500 shrink-0 border border-slate-700">
                                <MapPin size={24} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-bold text-white">Location</h3>
                                <p className="text-slate-400 mt-1">
                                    Remote / Available for Relocation
                                </p>
                            </div>
                        </div>

                        <div className="p-8 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-600/20 mt-8 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">Ready to work together?</h3>
                                <p className="text-blue-100 mb-6">
                                    I am available for freelance projects and full-time positions.
                                </p>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                                >
                                    Say Hello
                                </a>
                            </div>
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-sm"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-slate-900 focus:bg-slate-800 text-white placeholder-slate-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-slate-900 focus:bg-slate-800 text-white placeholder-slate-500"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-slate-900 focus:bg-slate-800 text-white placeholder-slate-500 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-colors flex items-center justify-center shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
