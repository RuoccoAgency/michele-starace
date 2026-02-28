import { motion } from "framer-motion";
import aboutImg from "@/assets/images/about-workshop.jpg";
import { Award, Users, CheckCircle2, History } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: History,
      title: "Dal 1982",
      desc: "Oltre 40 anni di esperienza nel settore automotive a Castellammare di Stabia."
    },
    {
      icon: Award,
      title: "Certificazioni",
      desc: "Partner ufficiale Arval Premium Center e installatore autorizzato Block Shaft®."
    },
    {
      icon: Users,
      title: "Team Esperto",
      desc: "35+ professionisti altamente qualificati e costantemente aggiornati."
    },
    {
      icon: CheckCircle2,
      title: "Qualità Garantita",
      desc: "Utilizziamo solo ricambi originali e lubrificanti di alta gamma Petronas."
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden" id="azienda">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-block border border-primary/30 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider mb-6">
              LA NOSTRA STORIA
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8 leading-tight">
              Passione per l'Auto, <br />
              <span className="text-primary">Dedizione al Cliente</span>
            </h2>
            
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Fondata nel 1982 da Michele Starace, la nostra azienda è cresciuta fino a diventare un punto di riferimento per l'assistenza automotive in Campania. La nostra missione è garantire la massima sicurezza su strada attraverso l'innovazione tecnologica e la cura artigianale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-white/50 text-sm leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={aboutImg} 
                alt="Il nostro team al lavoro" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-primary/95 backdrop-blur-sm text-black">
                <p className="font-display font-black text-xl italic mb-1">"La sicurezza non è un optional, è la nostra promessa."</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">— Michele Starace</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/30 z-0" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-primary/30 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
