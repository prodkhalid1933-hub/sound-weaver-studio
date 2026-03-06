import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import mixerImg from "@/assets/mixer-equipment.jpg";

const tools = [
  {
    name: "FL Studio",
    desc: "Primary DAW",
    logo: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 mx-auto mb-3">
        <rect width="100" height="100" rx="16" fill="#1a1a2e" />
        <path d="M25 70V30h30v10H35v8h15v10H35v12H25z" fill="#ff6600" />
        <path d="M60 30h10v30h15v10H60V30z" fill="#ff6600" />
      </svg>
    ),
  },
  {
    name: "Waves Audio",
    desc: "Mixing & Mastering",
    logo: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 mx-auto mb-3">
        <rect width="100" height="100" rx="16" fill="#1a1a2e" />
        <path d="M15 60l10-25 8 15 8-20 8 25 8-30 8 20 8-15 8 25 4-10" stroke="#00b4d8" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Arturia",
    desc: "Virtual Instruments",
    logo: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 mx-auto mb-3">
        <rect width="100" height="100" rx="16" fill="#1a1a2e" />
        <path d="M50 25L25 75h12l13-35 13 35h12L50 25z" fill="#00c2ff" />
      </svg>
    ),
  },
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
              {t.logo}
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
