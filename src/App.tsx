import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
// src/App.tsx
import React from "react";
import Services from "./components/Services/Services";

const App: React.FC = () => (
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

export default App;
