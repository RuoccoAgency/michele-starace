import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/images/hero-bg.jpg";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20" id="azienda">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img 
          src={heroBg} 
          alt="Premium Automotive Workshop" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block border border-primary/30 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider mb-6">
              PARTNER UFFICIALE ARVAL
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] mb-6"
          >
            La certezza di <br />
            viaggiare <span className="text-primary">sicuri</span>,<br />
            dal 1982.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed"
          >
            Centro Assistenza Automotive Autorizzato a Castellammare di Stabia e Portici. 
            Il tuo punto di riferimento per l'eccellenza motoristica.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="bg-primary text-black hover:bg-white hover:text-black transition-all duration-300 font-bold h-14 px-8 rounded-none text-base flex items-center gap-2 group">
              Prenota Intervento
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white transition-all duration-300 font-bold h-14 px-8 rounded-none text-base">
              Scopri il Noleggio
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
