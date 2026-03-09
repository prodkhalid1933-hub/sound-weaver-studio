import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

import flStudioLogo from "@/assets/flstudio.png";
import wavesLogo from "@/assets/wavesaudio.png";
import arturiaLogo from "@/assets/arturia.png";
import fabfilterlogo from "@/assets/fabfilter.png";
import izotopelogo from "@/assets/izotope.png";
import korglogo from "@/assets/korg.png";
import nativelogo from "@/assets/native.png";
import xferrecordslogo from "@/assets/xferrecords.png";
import uhelogo from "@/assets/uhe.png";
import soundtoyslogo from "@/assets/soundtoys.png";
import valhallalogo from "@/assets/valhalla.png";
import antareslogo from "@/assets/antares.png";

const tools = [
  {
    name: "FL Studio",
    desc: "Primary DAW",
    logo: flStudioLogo,
    monochrome: false,
    plugins: ["FLEX", "Edison", "Wave Candy"],
  },
  {
    name: "Waves Audio",
    desc: "Mixing & Mastering",
    logo: wavesLogo,
    monochrome: true,
    plugins: ["CLA-76", "Renaissance Comp", "SSL Comp", "SSL E-Channel", "Waves Tune Real-Time"],
  },
  {
    name: "Arturia",
    desc: "Virtual Instruments",
    logo: arturiaLogo,
    monochrome: true,
    plugins: ["Juno-6 V", "Prophet-V", "Jup-8 V", "DX7"],
  },
  {
    name: "FabFilter",
    desc: "Mastering Professional",
    logo: fabfilterlogo,
    monochrome: false,
    plugins: ["Pro-Q4", "Pro-L2", "Pro-C2", "Saturn 2"],
  },
  {
    name: "Izotope",
    desc: "Mastering & Vocal Repair",
    logo: izotopelogo,
    monochrome: true,
    plugins: ["Ozone", "RX"],
  },
  {
    name: "KORG",
    desc: "Synthesizer",
    logo: korglogo,
    monochrome: true,
    plugins: ["MS-40", "Wavestation"],
  },
  {
    name: "Native Instrument",
    desc: "Sound Design",
    logo: nativelogo,
    monochrome: true,
    plugins: ["Kontakt 8"],
  },
  {
    name: "Xfer Records",
    desc: "High-Quality Music",
    logo: xferrecordslogo,
    monochrome: true,
    plugins: ["Serum 2"],
  },
  {
    name: "U-he",
    desc: "Bass Synthesizer",
    logo: uhelogo,
    monochrome: true,
    plugins: ["Diva", "Hive", "Repro"],
  },
  {
    name: "SoundToys",
    desc: "Voice Effects",
    logo: soundtoyslogo,
    monochrome: true,
    plugins: ["Echoboy", "Decapitator", "Little Plate"],
  },
  {
    name: "Valhalla DSP",
    desc: "Digital Reverb",
    logo: valhallalogo,
    monochrome: true,
    plugins: ["VintageVerb", "Delay", "Room", "Supermasive"],
  },
  {
    name: "Antares Autotune",
    desc: "Hign-Vocal Quality",
    logo: antareslogo,
    monochrome: true,
    plugins: ["Auto-Key", "Auto-Tune Pro", "Auto-Tune Slice"],
  },
];

export const Tools = () => {

  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="tools" className="py-24">
      <div className="container">

        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Tools I Use
          </h2>

          <p className="text-muted-foreground mb-12">
            The software behind the sound.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl">

          {tools.map((tool, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setActive(active === i ? null : i)}
                className="cursor-pointer p-6 rounded-xl bg-card neon-border glow-card transition-all duration-300 text-center"
              >

                <div className="flex items-center justify-center mb-4">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className={`w-14 h-14 object-contain transition-transform duration-300 hover:scale-110 ${
                      tool.monochrome ? "tool-logo-mono" : ""
                    }`}
                  />
                </div>

                <h3 className="font-heading text-lg font-semibold mb-1">
                  {tool.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-2">
                  {tool.desc}
                </p>

                {/* Plugin List */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-xs text-muted-foreground space-y-1"
                    >
                      {tool.plugins.map((plugin, idx) => (
                        <div key={idx}>• {plugin}</div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
};
