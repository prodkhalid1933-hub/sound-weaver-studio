import { ScrollReveal } from "@/components/ScrollReveal";

const timeline = [
  { year: "2018", title: "SMK WIKRAMA BOGOR", desc: "Foundation in technology and creativity." },
  { year: "2020", title: "Ausbildung Germany", desc: "Professional training in engineering." },
  { year: "2022", title: "S1 – Network Engineer", desc: "Bachelor's degree in network engineering." },
  { year: "2024", title: "S2 – Music Producer", desc: "Master's in music production and sound design." },
];

export const Career = () => (
  <section id="career" className="py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-16 text-gradient">
          Career & Education
        </h2>
      </ScrollReveal>

      <div className="relative max-w-2xl mx-auto">
        {/* Line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 neon-border flex items-center justify-center">
                  <span className="font-heading text-xs sm:text-sm font-bold text-primary">{item.year}</span>
                </div>
                <div className="pt-2 sm:pt-3">
                  <h3 className="font-heading text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
