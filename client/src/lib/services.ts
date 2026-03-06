import { Wrench, Car, CircleDot, ShieldCheck, PlusSquare } from "lucide-react";

export type Service = {
    id: string;
    icon: any;
    title: string;
    desc: string;
    fullDesc: string;
    image: string;
    details: string[];
};

export const services: Service[] = [
    {
        id: "meccatronica",
        icon: Wrench,
        title: "MECCATRONICA",
        desc: "Manutenzione ordinaria e straordinaria, tagliandi case madri, diagnosi computerizzata. Utilizziamo lubrificanti Petronas by Selenia.",
        fullDesc: "Il nostro reparto di meccatronica rappresenta il cuore tecnologico di Michele Starace. Grazie a strumentazioni di diagnosi all'avanguardia e a un team costantemente aggiornato, siamo in grado di intervenire su qualsiasi tipologia di guasto elettronico o meccanico, garantendo standard qualitativi d'eccellenza.",
        image: "/src/assets/images/service-mechatronics.jpg",
        details: [
            "Manutenzione ordinaria e straordinaria per tutte le marche",
            "Tagliandi ufficiali validi per la garanzia della casa madre",
            "Diagnosi computerizzata con software di ultima generazione",
            "Utilizzo esclusivo di lubrificanti Petronas by Selenia",
            "Assistenza specializzata su veicoli ibridi ed elettrici",
            "Riparazione impianti di iniezione e sovralimentazione"
        ]
    },
    {
        id: "carrozzeria",
        icon: Car,
        title: "CARROZZERIA",
        desc: "Verniciatura Sikkens (risultato originale e rispetto ambiente), riparazioni veloci (Spot Repair), levabolli e ripristino cerchi in lega.",
        fullDesc: "La nostra carrozzeria combina l'arte della riparazione tradizionale con le più moderne tecnologie di verniciatura. Utilizziamo prodotti Sikkens per garantire una finitura identica all'originale, rispettando l'ambiente e assicurando una durata eccezionale nel tempo.",
        image: "/src/assets/images/service-bodywork.jpg",
        details: [
            "Verniciatura professionale con prodotti Sikkens ecosostenibili",
            "Spot Repair per riparazioni rapide in giornata",
            "Servizio levabolli per danni da grandine o piccoli urti",
            "Ripristino e verniciatura cerchi in lega",
            "Gestione completa sinistri con tutte le assicurazioni",
            "Lucidatura professionale e trattamenti nanotecnologici"
        ]
    },
    {
        id: "pneumatici",
        icon: CircleDot,
        title: "CENTRO PNEUMATICI",
        desc: "Sostituzione multimarca, assetto ruote Hunter (raccomandato dalle case automobilistiche) e garanzia fino a 4 anni.",
        fullDesc: "Come partner Arval Premium Center, offriamo un servizio pneumatici completo. Dalla scelta del battistrada più adatto al tuo stile di guida all'assetto ruote di precisione con tecnologia Hunter, ci prendiamo cura dell'unico punto di contatto tra la tua auto e la strada.",
        image: "/src/assets/images/service-tyres.jpg",
        details: [
            "Vendita e montaggio pneumatici delle migliori marche",
            "Assetto ruote con tecnologia Hunter 3D",
            "Equilibratura elettronica di precisione",
            "Stoccaggio stagionale pneumatici",
            "Garanzia Arval aggiuntiva fino a 4 anni",
            "Riparazione forature e controllo pressione"
        ]
    },
    {
        id: "sicurezza",
        icon: ShieldCheck,
        title: "SICUREZZA",
        desc: "Installazione ufficiale Block Shaft® (l'antifurto meccanico n.1 in Italia).",
        fullDesc: "La tua tranquillità è la nostra priorità. Siamo centro autorizzato per l'installazione di Block Shaft®, il sistema antifurto meccanico più sicuro sul mercato, integrando inoltre le migliori soluzioni elettroniche e satellitari per la protezione del tuo veicolo.",
        image: "/src/assets/images/service-security.jpg",
        details: [
            "Centro autorizzato installazione Block Shaft®",
            "Sistemi di antifurto satellitare avanzati",
            "Installazione Dash Cam e sensori di parcheggio",
            "Check-up completo sistemi di sicurezza attiva",
            "Certificazione ufficiale di installazione",
            "Assistenza tecnica dedicata su sistemi installati"
        ]
    },
    {
        id: "servizi-extra",
        icon: PlusSquare,
        title: "SERVIZI EXTRA",
        desc: "Sanificazione Ozono (Sanity System), oscuramento vetri certificato, soccorso stradale.",
        fullDesc: "Oltre alla meccanica e alla carrozzeria, offriamo una serie di servizi accessori pensati per migliorare il comfort e la longevità della tua auto. Dalla sanificazione certificata all'oscuramento vetri, ogni dettaglio è curato con la massima professionalità.",
        image: "/src/assets/images/service-extra.jpg",
        details: [
            "Sanificazione completa all'ozono con Sanity System",
            "Oscuramento vetri con pellicole certificate e garantite",
            "Soccorso stradale H24",
            "Auto sostitutiva per interventi prolungati",
            "Ritiro e consegna veicolo a domicilio",
            "Lavaggio interni e rigenerazione pelle"
        ]
    },
];

