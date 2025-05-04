import "aos/dist/aos.css"; // Import AOS styles

import React, { useEffect } from "react";

import AOS from "aos"; // Import AOS
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const App: React.FC = () => {
  useEffect(() => {
    // Disable scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Initialize AOS
    AOS.init({
      offset: 50, // Start animation closer to the viewport
      duration: 800, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: true, // Animate only once
      mirror: false, // Do not animate out when scrolling past
    });

    // Refresh AOS after the page has fully loaded
    window.addEventListener("load", () => {
      AOS.refresh();
      // Restore scroll position
      const scrollY = sessionStorage.getItem("scrollPosition");
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
      }
    });

    // Smooth scrolling code
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const target = document.querySelector(
          anchor.getAttribute("href") as string
        );
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    // Save scroll position before the page unloads
    const saveScrollPosition = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
