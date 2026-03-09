import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const WaveformBars = () => (
  <div className="flex items-end gap-[3px] h-12">
    {Array.from({ length: 24 }).map((_, i) => (
      <motion.div
        key={i}
        className="w-1 bg-primary rounded-full"
        animate={{ height: ["20%", `${30 + Math.random() * 60}%`, "20%"] }}
        transition={{ duration: 0.8 + Math.random() * 0.8, repeat: Infinity, delay: i * 0.05 }}
      />
    ))}
  </div>
);

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <WaveformBars />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mt-6 mb-4">
                <span className="text-gradient">Producer</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Composer", "Songwriter", "Musician", "Artist"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm font-medium rounded-full neon-border bg-secondary/50 text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg text-muted-foreground max-w-md mb-8">
                Crafting soundscapes and producing emotion.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right" className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl" />
              <img
                src={profilePhoto}
                alt="Music Producer Profile"
                className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl neon-border"
                loading="eager"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
