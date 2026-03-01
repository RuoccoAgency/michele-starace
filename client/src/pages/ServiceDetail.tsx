import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function ServiceDetail() {
    const [match, params] = useRoute("/servizi/:id");

    if (!match) return <NotFound />;

    const service = services.find((s) => s.id === params.id);

    if (!service) return <NotFound />;

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-background text-foreground scroll-smooth">
            <Header />

            <main className="pt-32 pb-24">
                <section className="container mx-auto px-6">
                    <Link href="/#servizi">
                        <motion.a
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center text-primary hover:text-white transition-colors mb-12 cursor-pointer group"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-bold tracking-widest text-sm uppercase">Tutti i Servizi</span>
                        </motion.a>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-20 h-20 bg-primary text-black flex items-center justify-center rounded-2xl mb-8 shadow-[0_0_50px_-12px_rgba(var(--primary-rgb),0.5)]">
                                <Icon className="w-10 h-10" />
                            </div>

                            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight">
                                {service.title}
                            </h1>

                            <p className="text-xl text-white/60 leading-relaxed mb-12">
                                {service.desc}
                            </p>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-display font-bold text-white mb-6">Dettagli del Servizio</h3>
                                {service.details.map((detail, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="mt-1 flex-shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-primary" />
                                        </div>
                                        <p className="text-white/70 text-lg leading-relaxed group-hover:text-white transition-colors">
                                            {detail}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-16">
                                <Link href="/#contatti">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-primary text-black font-black px-12 py-5 rounded-full hover:bg-white transition-all tracking-widest text-sm uppercase shadow-2xl shadow-primary/20"
                                    >
                                        Prenota Intervento
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden glass-card p-3 lg:mt-12"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                            <img
                                src={`https://images.unsplash.com/photo-${getImageIdForService(service.id)}?auto=format&fit=crop&q=80`}
                                alt={service.title}
                                className="w-full h-full object-cover rounded-[2.5rem]"
                            />

                            {/* Decorative elements */}
                            <div className="absolute top-12 right-12 z-20 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                            <div className="absolute bottom-12 left-12 z-20 w-48 h-48 bg-primary/10 blur-3xl rounded-full" />
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function getImageIdForService(id: string) {
    switch (id) {
        case "meccatronica": return "1486006396193-471a2abc881a";
        case "carrozzeria": return "1562426301-29408668270c";
        case "pneumatici": return "1449067564739-10efe327ad97";
        case "sicurezza": return "1507133377334-90f772719f9b";
        case "servizi-extra": return "1520333785232-414cac0465f2";
        default: return "1486006396193-471a2abc881a";
    }
}
