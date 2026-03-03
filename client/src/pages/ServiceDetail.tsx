import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { Wrench, Car, CircleDot, ShieldCheck, PlusSquare, ArrowLeft, Phone, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const servicesData = {
  "meccatronica": {
    icon: Wrench,
    title: "MECCATRONICA",
    desc: "Manutenzione ordinaria e straordinaria, tagliandi case madri, diagnosi computerizzata. Utilizziamo lubrificanti Petronas by Selenia.",
    image: "/src/assets/images/service-mechatronics.jpg",
    fullDesc: "Il nostro reparto di meccatronica rappresenta il cuore tecnologico di Michele Starace. Grazie a strumentazioni di diagnosi all'avanguardia e a un team costantemente aggiornato, siamo in grado di intervenire su qualsiasi tipologia di guasto elettronico o meccanico, garantendo standard qualitativi d'eccellenza.",
    details: [
      "Manutenzione ordinaria e straordinaria per tutte le marche",
      "Tagliandi ufficiali validi per la garanzia della casa madre",
      "Diagnosi computerizzata con software di ultima generazione",
      "Utilizzo esclusivo di lubrificanti Petronas by Selenia",
      "Assistenza specializzata su veicoli ibridi ed elettrici",
      "Riparazione impianti di iniezione e sovralimentazione"
    ]
  },
  "carrozzeria": {
    icon: Car,
    title: "CARROZZERIA",
    desc: "Verniciatura Sikkens (risultato originale e rispetto ambiente), riparazioni veloci (Spot Repair), levabolli e ripristino cerchi in lega.",
    image: "/src/assets/images/service-bodywork.jpg",
    fullDesc: "La nostra carrozzeria combina l'arte della riparazione tradizionale con le più moderne tecnologie di verniciatura. Utilizziamo prodotti Sikkens per garantire una finitura identica all'originale, rispettando l'ambiente e assicurando una durata eccezionale nel tempo.",
    details: [
      "Verniciatura professionale con prodotti Sikkens ecosostenibili",
      "Spot Repair per riparazioni rapide in giornata",
      "Servizio levabolli per danni da grandine o piccoli urti",
      "Ripristino e verniciatura cerchi in lega",
      "Gestione completa sinistri con tutte le assicurazioni",
      "Lucidatura professionale e trattamenti nanotecnologici"
    ]
  },
  "pneumatici": {
    icon: CircleDot,
    title: "CENTRO PNEUMATICI",
    desc: "Sostituzione multimarca, assetto ruote Hunter (raccomandato dalle case automobilistiche) e garanzia fino a 4 anni.",
    image: "/src/assets/images/service-tyres.jpg",
    fullDesc: "Come partner Arval Premium Center, offriamo un servizio pneumatici completo. Dalla scelta del battistrada più adatto al tuo stile di guida all'assetto ruote di precisione con tecnologia Hunter, ci prendiamo cura dell'unico punto di contatto tra la tua auto e la strada.",
    details: [
      "Vendita e montaggio pneumatici delle migliori marche",
      "Assetto ruote con tecnologia Hunter 3D",
      "Equilibratura elettronica di precisione",
      "Stoccaggio stagionale pneumatici",
      "Garanzia Arval aggiuntiva fino a 4 anni",
      "Riparazione forature e controllo pressione"
    ]
  },
  "sicurezza": {
    icon: ShieldCheck,
    title: "SICUREZZA",
    desc: "Installazione ufficiale Block Shaft® (l'antifurto meccanico n.1 in Italia).",
    image: "/src/assets/images/service-security.jpg",
    fullDesc: "La tua tranquillità è la nostra priorità. Siamo centro autorizzato per l'installazione di Block Shaft®, il sistema antifurto meccanico più sicuro sul mercato, integrando inoltre le migliori soluzioni elettroniche e satellitari per la protezione del tuo veicolo.",
    details: [
      "Centro autorizzato installazione Block Shaft®",
      "Sistemi di antifurto satellitare avanzati",
      "Installazione Dash Cam e sensori di parcheggio",
      "Check-up completo sistemi di sicurezza attiva",
      "Certificazione ufficiale di installazione",
      "Assistenza tecnica dedicata su sistemi installati"
    ]
  },
  "servizi-extra": {
    icon: PlusSquare,
    title: "SERVIZI EXTRA",
    desc: "Sanificazione Ozono (Sanity System), oscuramento vetri certificato, soccorso stradale.",
    image: "/src/assets/images/service-extra.jpg",
    fullDesc: "Oltre alla meccanica e alla carrozzeria, offriamo una serie di servizi accessori pensati per migliorare il comfort e la longevità della tua auto. Dalla sanificazione certificata all'oscuramento vetri, ogni dettaglio è curato con la massima professionalità.",
    details: [
      "Sanificazione completa all'ozono con Sanity System",
      "Oscuramento vetri con pellicole certificate e garantite",
      "Soccorso stradale H24",
      "Auto sostitutiva per interventi prolungati",
      "Ritiro e consegna veicolo a domicilio",
      "Lavaggio interni e rigenerazione pelle"
    ]
  }
};

export default function ServiceDetail() {
  const [, params] = useRoute("/servizi/:id");
  const serviceId = params?.id;
  const service = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;

  if (!service) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.a 
            href="/#servizi"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 font-bold tracking-widest text-sm uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna ai Servizi
          </motion.a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-primary text-black flex items-center justify-center rounded-2xl mb-8">
                <service.icon className="w-10 h-10" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tight leading-none">
                {service.title}
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {service.details.map((detail, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-white/80">{detail}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-black hover:bg-white transition-all duration-300 font-black h-14 px-8 rounded-full text-base flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Prenota Appuntamento
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black h-14 px-8 rounded-full text-base flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Richiedi Info
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[4/5] lg:aspect-square"
            >
              <div className="absolute inset-0 border-2 border-primary translate-x-6 translate-y-6 rounded-[2.5rem] z-0" />
              <div className="absolute inset-0 z-10 rounded-[2.5rem] overflow-hidden border border-white/10">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
