import { motion } from "framer-motion";

const stats = [
  { value: "40+", label: "Anni di attività" },
  { value: "50.000+", label: "Auto Riparate" },
  { value: "35+", label: "Professionisti nel Team" }
];

export default function Stats() {
  return (
    <section className="py-24 border-y border-white/5 bg-background relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className={`flex flex-col items-center text-center px-8 pt-8 md:pt-0 ${index !== stats.length - 1 ? "md:border-r border-white/10" : ""
                }`}
            >
              <div className="text-6xl md:text-7xl font-display font-black text-primary mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white/50 uppercase tracking-[0.3em] max-w-[170px] leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
