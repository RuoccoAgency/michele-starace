import { motion } from "framer-motion";
import { Wrench, Car, CircleDot, ShieldCheck, PlusSquare } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const services = [
  {
    icon: Wrench,
    id: "meccatronica",
    title: "MECCATRONICA",
    desc: "Manutenzione ordinaria e straordinaria, tagliandi case madri, diagnosi computerizzata. Utilizziamo lubrificanti Petronas by Selenia.",
    image: "/src/assets/images/service-mechatronics.png"
  },
  {
    icon: Car,
    id: "carrozzeria",
    title: "CARROZZERIA",
    desc: "Verniciatura Sikkens (risultato originale e rispetto ambiente), riparazioni veloci (Spot Repair), levabolli e ripristino cerchi in lega.",
    image: "/src/assets/images/service-bodywork.png"
  },
  {
    icon: CircleDot,
    id: "pneumatici",
    title: "CENTRO PNEUMATICI",
    desc: "Sostituzione multimarca, assetto ruote Hunter (raccomandato dalle case automobilistiche) e garanzia fino a 4 anni.",
    image: "/src/assets/images/service-tyres.png"
  },
  {
    icon: ShieldCheck,
    id: "sicurezza",
    title: "SICUREZZA",
    desc: "Installazione ufficiale Block Shaft® (l'antifurto meccanico n.1 in Italia).",
    image: "/src/assets/images/service-security.png"
  },
  {
    icon: PlusSquare,
    id: "servizi-extra",
    title: "SERVIZI EXTRA",
    desc: "Sanificazione Ozono (Sanity System), oscuramento vetri certificato, soccorso stradale.",
    image: "/src/assets/images/service-extra.png"
  },
];

export default function Services() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-24 bg-card" id="servizi">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest text-sm mb-3 uppercase">LE NOSTRE COMPETENZE</h2>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setLocation(`/servizi/${service.id}`)}
                className={`group glass-card min-h-[350px] relative overflow-hidden flex flex-col cursor-pointer rounded-2xl ${bentoClasses[index] || ""}`}
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-500 rounded-xl">
                      <service.icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-2xl font-display font-black text-white mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">
                      {service.title}
                    </h4>

                    <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center text-primary text-sm font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    SCOPRI DI PIÙ
                    <div className="ml-2 h-px w-8 bg-primary" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1.5 bg-primary w-0 group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
