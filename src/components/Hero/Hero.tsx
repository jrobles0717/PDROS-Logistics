// src/components/Hero/Hero.tsx
import React from "react";
import serviceImg from "../../assets/services-image.jpg";
import styles from "./Hero.module.css";

const Hero: React.FC = () => (
  <section id="home" className={styles.hero}>
    <div className={styles.text}>
      <h1 className={styles.title}>We Take Your Business to the Next Level</h1>
      <p className={styles.subtitle}>
        Professional services in web development, design, and digital marketing.
      </p>
      <a href="#contact" className={styles.btn}>
        Get a Quote
      </a>
    </div>
    <img src={serviceImg} alt="Our Services" className={styles.image} />
  </section>
);

export default Hero;
