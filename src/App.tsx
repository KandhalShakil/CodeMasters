import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SmoothScroll } from "./components/layout/SmoothScroll";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Portfolio } from "./components/sections/Portfolio";
import { TechStack } from "./components/sections/TechStack";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Contact } from "./components/sections/Contact";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      // Reveal sections on scroll
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Special parallax for Hero
      if (document.querySelector(".hero-content")) {
        gsap.to(".hero-content", {
          yPercent: -20,
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [loading]);

  return (
    <div className="bg-black text-white selection:bg-accent selection:text-white antialiased">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <SmoothScroll key="content">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <TechStack />
              <WhyChooseUs />
              <Contact />
            </main>
            <Footer />
          </SmoothScroll>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
