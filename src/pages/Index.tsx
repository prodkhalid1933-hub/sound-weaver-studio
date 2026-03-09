import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Streams } from "@/components/sections/Streams";
import { Tools } from "@/components/sections/Tools";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Streams />
    <Tools />
    <Contact />
    <Footer />
  </>
);

export default Index;
