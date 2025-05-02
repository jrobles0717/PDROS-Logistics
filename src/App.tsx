import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
// src/App.tsx
import React from "react";

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
