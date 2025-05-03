import { FaFacebook } from "react-icons/fa"; // Import the Facebook icon
// src/components/Contact/Contact.tsx
import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => (
  <section id="contact" className={styles.contact}>
    <h2 className={styles.title}>Get in Touch</h2>
    <p className={styles.subtitle}>
      We’d love to hear from you! Reach out to us through any of the methods
      below.
    </p>
    <div className={styles.contactInfo}>
      <div className={styles.card}>
        <span className={styles.icon}>📧</span>
        <h3>Email</h3>
        <a href="mailto:info@myservicesco.com" className={styles.link}>
          info@myservicesco.com
        </a>
      </div>
      <div className={styles.card}>
        <span className={styles.icon}>📞</span>
        <h3>Phone</h3>
        <a href="tel:+16892877076" className={styles.link}>
          +1 (689) 287-7076
        </a>
      </div>
      <div className={styles.card}>
        <span className={`${styles.icon} ${styles.facebookIcon}`}>
          {" "}
          {/* Apply the Facebook icon class */}
          <FaFacebook />
        </span>
        <h3>Facebook</h3>
        <a
          href="https://www.facebook.com/profile.php?id=61575080154489"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          fb.com/pdros-logistics
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
