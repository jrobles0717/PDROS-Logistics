// src/components/Portfolio/Portfolio.tsx
import React from "react";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import styles from "./Portfolio.module.css";

const items = [
  { src: img1, alt: "Project One" },
  { src: img2, alt: "Project Two" },
  { src: img3, alt: "Project Three" },
];

const Portfolio: React.FC = () => (
  <section id="portfolio" className={styles.portfolio}>
    <h2 className={styles.title}>Our Work</h2>
    <div className={styles.grid}>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
