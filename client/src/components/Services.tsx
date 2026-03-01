import { motion } from "framer-motion";
import { Link } from "wouter";
import { services } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section className="py-24 bg-card" id="servizi">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest text-sm mb-3">LE NOSTRE COMPETENZE</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6">Eccellenza a 360°</h3>
          <p className="text-white/60 text-lg">
            Da oltre 40 anni offriamo servizi di assistenza automotive con tecnologie all'avanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Link key={service.id} href={`/servizi/${service.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                  className="group glass-card p-10 h-full relative overflow-hidden flex flex-col items-center text-center cursor-pointer transition-all duration-300 rounded-[2.5rem]"
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-500 rounded-2xl">
                    <service.icon className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-display font-black text-white mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">
                    {service.title}
                  </h4>

                  <p className="text-white/50 leading-relaxed mb-8 text-base line-clamp-2 transition-colors group-hover:text-white/80">
                    {service.desc}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center bg-white/5 border border-white/10 px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-white group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
                      Scopri il servizio
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700" />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
