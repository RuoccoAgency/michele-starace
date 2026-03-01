import { motion } from "framer-motion";
import { Link } from "wouter";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="py-24 bg-card" id="servizi">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest text-sm mb-3">LE NOSTRE COMPETENZE</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6">Eccellenza a 360°</h3>
          <p className="text-white/60 text-lg">
            Da oltre 40 anni offriamo servizi di assistenza automotive con tecnologie all'avanguardia e personale altamente qualificato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const bentoClasses = [
              "md:col-span-2 lg:col-span-3",
              "md:col-span-2 lg:col-span-3",
              "md:col-span-2 lg:col-span-2",
              "md:col-span-2 lg:col-span-2",
              "md:col-span-4 lg:col-span-2",
            ];

            return (
              <Link key={service.id} href={`/servizi/${service.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`group glass-card p-8 min-h-[320px] relative overflow-hidden flex flex-col justify-between cursor-pointer h-full ${bentoClasses[index] || ""}`}
                >
                  {/* Visual Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-500 rounded-xl">
                      <service.icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-2xl font-display font-black text-white mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors text-lg">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center text-primary text-sm font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    SCOPRI DI PIÙ
                    <div className="ml-2 h-px w-8 bg-primary" />
                  </div>

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
