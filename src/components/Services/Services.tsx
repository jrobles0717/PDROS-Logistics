// src/components/Services/Services.tsx
import React from "react";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import styles from "./Services.module.css";

const items = [
  { src: img1, alt: "Residential Junk Removal" },
  { src: img2, alt: "Commercial Cleanup Services" },
  { src: img3, alt: "Truck Hauling Services" },
];

const Services: React.FC = () => (
  <section id="services" className={styles.services} data-aos="fade-up">
    <div className={styles.content}>
      <h2 className={styles.title}>Our Services</h2>
      <p className={styles.subtitle}>
        Explore our professional junk removal, hauling, and cleanup services. We
        handle everything from residential to commercial projects.
      </p>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.item} data-aos="zoom-in">
            <img src={item.src} alt={item.alt} className={styles.image} />
            <div className={styles.overlay}>
              <p className={styles.overlayText}>{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
