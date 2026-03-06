import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";

const contacts = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/prodkhalid", color: "hover:text-primary" },
  { icon: Mail, label: "Email", href: "mailto:hello@prodkhalid.com", color: "hover:text-accent" },
];

export const Contact = () => (
  <section id="contact" className="py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-gradient">Contact Me</h2>
        <p className="text-muted-foreground mb-12">Let's create something together.</p>
      </ScrollReveal>

      <div className="flex gap-6">
        {contacts.map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <motion.a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-card neon-border glow-card transition-colors ${c.color}`}
            >
              <c.icon size={22} />
              <span className="font-medium">{c.label}</span>
            </motion.a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
