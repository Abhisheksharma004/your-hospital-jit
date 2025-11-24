import Hero from "../components/Hero";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}
