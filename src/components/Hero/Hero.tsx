// src/components/Hero/Hero.tsx
import React from "react";
import serviceImg from "../../assets/services-image-1.jpg";
import styles from "./Hero.module.css";

const Hero: React.FC = () => (
  <section id="home" className={styles.hero}>
    <div className={styles.content}>
      <div className={styles.text} data-aos="fade-up" data-aos-duration="1000">
        <h1 className={styles.title}>
          Fast & Reliable <span className={styles.highlight}>Junk Removal</span>{" "}
          Services
        </h1>
        <p className={styles.subtitle}>
          We specialize in hassle-free junk removal and truck services for homes
          and businesses. Let us help you clear out the clutter!
        </p>
        <div className={styles.ctaContainer}>
          <a href="#contact" className={styles.primaryBtn}>
            Schedule a Pickup
          </a>
          <a href="#services" className={styles.secondaryBtn}>
            See Our Work
          </a>
        </div>
      </div>
      <div
        className={styles.imageContainer}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <img
          src={serviceImg}
          alt="Our Junk Removal Services"
          className={styles.image}
        />
      </div>
    </div>
  </section>
);

export default Hero;
