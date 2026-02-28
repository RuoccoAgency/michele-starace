import { motion } from "framer-motion";

const stats = [
  { value: "40+", label: "Anni di attività" },
  { value: "50.000+", label: "Auto Riparate" },
  { value: "35+", label: "Professionisti nel Team" }
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/10 bg-background relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-6xl font-display font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-white/80 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
