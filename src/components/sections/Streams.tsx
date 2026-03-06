import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const platforms = [
  { name: "Spotify", url: "#", icon: "🟢" },
  { name: "Apple Music", url: "#", icon: "🍎" },
  { name: "Deezer", url: "#", icon: "🎵" },
  { name: "SoundCloud", url: "#", icon: "☁️" },
];

export const Streams = () => (
  <section id="streams" className="py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-gradient">Listen On</h2>
        <p className="text-muted-foreground mb-12">Find my music on all major platforms.</p>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl">
        {platforms.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <motion.a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card neon-border glow-card transition-all duration-300"
            >
              <span className="text-4xl">{p.icon}</span>
              <span className="font-medium text-sm">{p.name}</span>
            </motion.a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
