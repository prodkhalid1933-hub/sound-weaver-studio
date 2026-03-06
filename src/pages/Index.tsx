import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Career } from "@/components/sections/Career";
import { SpotifyWrapped } from "@/components/sections/SpotifyWrapped";
import { Streams } from "@/components/sections/Streams";
import { Tools } from "@/components/sections/Tools";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Career />
    <SpotifyWrapped />
    <Streams />
    <Tools />
    <Contact />
    <Footer />
  </>
);

export default Index;
