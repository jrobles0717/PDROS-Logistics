// src/components/Contact/Contact.tsx
import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => (
  <section id="contact" className={styles.contact}>
    <h2 className={styles.title}>Contact Us</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Email:{" "}
        <a href="mailto:info@myservicesco.com" className={styles.link}>
          info@myservicesco.com
        </a>
      </li>
      <li className={styles.listItem}>
        Phone:{" "}
        <a href="tel:+16892877076" className={styles.link}>
          +1 (689) 287-7076
        </a>
      </li>
      <li className={styles.listItem}>
        Facebook:{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61575080154489"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          fb.com/pdros-logistics
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
