import PortfolioWrapper from "@/components/portfolio/PortfolioWrapper";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Navbar from "@/components/portfolio/Navbar";
import Marquee from "@/components/portfolio/Marquee";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <PortfolioWrapper>
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </PortfolioWrapper>
    </main>
  );
}
