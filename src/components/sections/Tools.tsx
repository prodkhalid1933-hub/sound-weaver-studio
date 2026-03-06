import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import mixerImg from "@/assets/mixer-equipment.jpg";

const tools = [
  { name: "FL Studio", desc: "Primary DAW" },
  { name: "Waves Audio", desc: "Mixing & Mastering" },
  { name: "Arturia", desc: "Virtual Instruments" },
];

export const Tools = () => (
  <section id="tools" className="py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-gradient">Tools I Use</h2>
        <p className="text-muted-foreground mb-12">The software behind the sound.</p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl">
        {tools.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl bg-card neon-border glow-card transition-all duration-300 text-center"
            >
              <h3 className="font-heading text-lg font-semibold mb-1">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 rounded-xl overflow-hidden neon-border max-w-3xl">
          <img src={mixerImg} alt="Mixer Equipment" className="w-full h-48 sm:h-64 object-cover" loading="lazy" />
        </div>
      </ScrollReveal>
    </div>
  </section>
);
