import { ScrollReveal } from "@/components/ScrollReveal";

export const SpotifyEmbed = () => (
  <section className="py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-gradient">My Playlist</h2>
        <p className="text-muted-foreground mb-12">Listen directly on Spotify.</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-3xl rounded-xl overflow-hidden neon-border glow-card">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/49zmQ49zeid2wbXByqeURz?utm_source=generator&theme=0"
            width="100%"
            height="452"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);
