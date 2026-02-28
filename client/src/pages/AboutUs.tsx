import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { History, Shield, Award, Users } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-background text-foreground scroll-smooth">
            <Header />

            <main className="pt-32 pb-24">
                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">LA NOSTRA STORIA</span>
                            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8">
                                Eccellenza Automotive <span className="text-primary">dal 1982.</span>
                            </h1>
                            <p className="text-xl text-white/60 leading-relaxed">
                                Nati come piccola officina artigiana, oggi siamo il punto di riferimento Arval Premium Center per Castellammare di Stabia e Portici,
                                unendo la passione meccanica di un tempo alle tecnologie più avanzate di oggi.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Story Content */}
                <section className="container mx-auto px-6 mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square rounded-3xl overflow-hidden glass-card p-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1486006396193-471a2abc881a?auto=format&fit=crop&q=80"
                                alt="Workshop History"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </motion.div>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-2xl shrink-0 border border-primary/20">
                                    <History className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-2">Quattro decenni di evoluzione</h3>
                                    <p className="text-white/60 leading-relaxed">
                                        Fondata da Michele Starace nel 1982, l'officina ha attraversato le epoche d'oro dell'automobilismo italiano,
                                        adattandosi costantemente alle innovazioni tecnologiche senza mai perdere il tocco artigianale.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-2xl shrink-0 border border-primary/20">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-2">Arval Premium Center</h3>
                                    <p className="text-white/60 leading-relaxed">
                                        La nostra dedizione alla qualità ci ha permesso di diventare partner ufficiali Arval, garantendo standard
                                        internazionali di assistenza e una gestione della flotta aziendale impeccabile.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-2xl shrink-0 border border-primary/20">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-2">Un Team di Esperti</h3>
                                    <p className="text-white/60 leading-relaxed">
                                        Oggi contiamo oltre 35 professionisti altamente qualificati, formati costantemente per gestire
                                        le complessità dei moderni veicoli elettrici e ibridi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="bg-card/30 py-24 mb-24 border-y border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
                        <span className="text-6xl font-serif text-primary/30 block mb-6">"</span>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-white italic leading-tight mb-8">
                            La tecnologia cambia, ma la nostra promessa rimane la stessa: la sicurezza di chi guida è la nostra missione.
                        </h2>
                        <div className="h-px w-20 bg-primary mx-auto mb-4" />
                        <span className="text-white font-bold tracking-widest uppercase text-sm">Michele Starace</span>
                        <span className="text-white/40 block text-xs mt-1">Fondatore</span>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
