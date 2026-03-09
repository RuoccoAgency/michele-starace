import { motion } from "framer-motion";
import { Link } from "wouter";
import { services } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import serviceBg from "@/assets/images/service-bg.jpg";

export default function Services() {

  return (
    <section className="py-24 bg-card relative overflow-hidden" id="servizi">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <img src={serviceBg} alt="" className="w-full h-full object-cover opacity-[0.03] grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-card via-transparent to-card" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest text-sm mb-3 uppercase">LE NOSTRE COMPETENZE</h2>
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
                  className="group glass-card min-h-[450px] relative overflow-hidden flex flex-col cursor-pointer transition-all duration-300 rounded-[2.5rem]"
                >
                  {/* Image Background */}
                  <div className="absolute inset-0 z-0 h-full w-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent z-10" />
                  </div>

                  <div className="relative z-20 p-10 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-500 rounded-2xl">
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
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700 z-30" />
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
