import { ScrollReveal } from "@/components/ScrollReveal";
import { Music, Users, Disc3, Globe } from "lucide-react";

const stats = [
  { icon: Music, label: "Total Streams", value: "2.4M+", color: "text-primary" },
  { icon: Users, label: "Monthly Listeners", value: "180K", color: "text-accent" },
  { icon: Disc3, label: "Top Track", value: "Midnight Echo", color: "text-neon-blue" },
  { icon: Globe, label: "Top Country", value: "Indonesia", color: "text-neon" },
];

export const SpotifyWrapped = () => (
  <section className="py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-gradient">
          Streaming Stats
        </h2>
        <p className="text-muted-foreground mb-12">My year in music, wrapped.</p>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="p-6 rounded-xl bg-card neon-border glow-card transition-all duration-300 text-center">
              <s.icon className={`mx-auto mb-3 ${s.color}`} size={28} />
              <p className="font-heading text-2xl sm:text-3xl font-bold mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
