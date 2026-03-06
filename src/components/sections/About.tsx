import { ScrollReveal } from "@/components/ScrollReveal";
import profilePhoto from "@/assets/profile-photo.jpg";
import studioBg from "@/assets/studio-bg.jpg";

export const About = () => (
  <section id="about" className="py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12 text-gradient">About Me</h2>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl" />
            <img
              src={profilePhoto}
              alt="Profile"
              className="relative w-full max-w-md rounded-2xl neon-border object-cover aspect-square"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Music producer passionate about crafting unique soundscapes, blending modern R&B,
              electronic elements, and cinematic textures. With years of experience behind the mixing
              console, I transform raw ideas into polished productions that resonate with listeners worldwide.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground leading-relaxed">
              From composing orchestral arrangements to designing intricate electronic beats,
              every project is an opportunity to push creative boundaries and deliver something truly memorable.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="relative mt-6 rounded-xl overflow-hidden neon-border">
              <img
                src={studioBg}
                alt="Music Studio"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <span className="absolute bottom-4 left-4 font-heading text-sm font-medium text-foreground">
                My Production Studio
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);
