import { Wrench, Car, CircleDot, ShieldCheck, PlusSquare } from "lucide-react";

export type Service = {
    id: string;
    icon: any;
    title: string;
    desc: string;
    details: string[];
};

export const services: Service[] = [
    {
        id: "meccatronica",
        icon: Wrench,
        title: "MECCATRONICA",
        desc: "Manutenzione ordinaria e straordinaria, tagliandi case madri, diagnosi computerizzata. Utilizziamo lubrificanti Petronas by Selenia.",
        details: [
            "Manutenzione ordinaria e straordinaria per tutte le marche",
            "Tagliandi ufficiali validi per la garanzia della casa madre",
            "Diagnosi computerizzata con software di ultima generazione",
            "Utilizzo esclusivo di lubrificanti Petronas by Selenia",
            "Assistenza specializzata su veicoli ibridi ed elettrici"
        ]
    },
    {
        id: "carrozzeria",
        icon: Car,
        title: "CARROZZERIA",
        desc: "Verniciatura Sikkens (risultato originale e rispetto ambiente), riparazioni veloci (Spot Repair), levabolli e ripristino cerchi in lega.",
        details: [
            "Verniciatura professionale con prodotti Sikkens ecosostenibili",
            "Spot Repair per riparazioni rapide in giornata",
            "Servizio levabolli per danni da grandine o piccoli urti",
            "Ripristino e verniciatura cerchi in lega",
            "Gestione completa sinistri con tutte le assicurazioni"
        ]
    },
    {
        id: "pneumatici",
        icon: CircleDot,
        title: "CENTRO PNEUMATICI",
        desc: "Sostituzione multimarca, assetto ruote Hunter (raccomandato dalle case automobilistiche) e garanzia fino a 4 anni.",
        details: [
            "Vendita e montaggio pneumatici delle migliori marche",
            "Assetto ruote con tecnologia Hunter 3D",
            "Equilibratura elettronica di precisione",
            "Stoccaggio stagionale pneumatici",
            "Garanzia Arval aggiuntiva fino a 4 anni"
        ]
    },
    {
        id: "sicurezza",
        icon: ShieldCheck,
        title: "SICUREZZA",
        desc: "Installazione ufficiale Block Shaft® (l'antifurto meccanico n.1 in Italia).",
        details: [
            "Centro autorizzato installazione Block Shaft®",
            "Sistemi di antifurto satellitare avanzati",
            "Installazione Dash Cam e sensori di parcheggio",
            "Check-up completo sistemi di sicurezza attiva",
            "Certificazione ufficiale di installazione"
        ]
    },
    {
        id: "servizi-extra",
        icon: PlusSquare,
        title: "SERVIZI EXTRA",
        desc: "Sanificazione Ozono (Sanity System), oscuramento vetri certificato, soccorso stradale.",
        details: [
            "Sanificazione completa all'ozono con Sanity System",
            "Oscuramento vetri con pellicole certificate e garantite",
            "Soccorso stradale H24",
            "Auto sostitutiva per interventi prolungati",
            "Ritiro e consegna veicolo a domicilio"
        ]
    },
];
