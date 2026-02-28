import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import rentalBg from "@/assets/images/rental-bg.jpg";
import { Check } from "lucide-react";

export default function Rental() {
  const benefits = [
    "Flotta costantemente rinnovata",
    "Manutenzione inclusa nel canone",
    "Pick up & Delivery incluso",
    "Consulenza dedicata"
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="noleggio">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative z-10"
          >
            <div className="inline-block border border-primary/30 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider mb-6">
              ARVAL PREMIUM CENTER
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 leading-tight">
              Noleggio Arval a <br />
              <span className="text-primary">Lungo e Breve</span> Termine
            </h2>
            
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Soluzioni su misura per privati e aziende con parchi auto. 
              Semplifica la mobilità della tua azienda o la tua vita quotidiana con le nostre formule di noleggio tutto compreso.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-white text-black hover:bg-primary transition-colors font-bold h-14 px-8 rounded-none text-base">
              Richiedi Preventivo Noleggio
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] relative">
              {/* Offset border accent */}
              <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 z-0" />
              
              <div className="absolute inset-0 z-10 overflow-hidden bg-card">
                <img 
                  src={rentalBg} 
                  alt="Arval Rental Fleet" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
