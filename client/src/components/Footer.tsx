import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-20 pb-10" id="contatti">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-display font-black text-2xl tracking-tighter text-white">
                MICHELE STARACE
              </span>
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Arval Premium Center
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Dal 1982 garantiamo la certezza di viaggiare sicuri. Centro Assistenza Automotive Autorizzato a Castellammare di Stabia e Portici.
            </p>
          </div>

          {/* Sedi Col */}
          <div>
            <h4 className="text-white font-bold tracking-wider mb-6">LE NOSTRE SEDI</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  <strong className="text-white block mb-1">Castellammare di Stabia (NA)</strong>
                  Via Napoli 138/140, 80053
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  <strong className="text-white block mb-1">Portici</strong>
                  Sede operativa autorizzata
                </span>
              </li>
            </ul>
          </div>

          {/* Contatti Col */}
          <div>
            <h4 className="text-white font-bold tracking-wider mb-6">CONTATTI</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:0818716141" className="text-sm hover:text-primary transition-colors">081 871 6141</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-[#25D366]" />
                <a href="https://wa.me/393667457167" className="text-sm hover:text-primary transition-colors">WhatsApp: 366 745 7167</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@michelestarace.it" className="text-sm hover:text-primary transition-colors">info@michelestarace.it</a>
              </li>
            </ul>
          </div>

          {/* Orari Col */}
          <div>
            <h4 className="text-white font-bold tracking-wider mb-6">ORARI APERTURA</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Lun - Ven:</span>
                    <span className="text-white">08:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato:</span>
                    <span className="text-white">08:30 - 13:00</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} STARACE S.R.L. Tutti i diritti riservati.
          </p>
          <p className="text-white/40 text-xs">
            P.IVA: 07752741210
          </p>
        </div>
      </div>
    </footer>
  );
}
