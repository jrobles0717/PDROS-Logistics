import { FaFacebook } from "react-icons/fa"; // Import the Facebook icon
// src/components/Contact/Contact.tsx
import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@myservicesco.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+16892877076";
  };

  const handleFacebookClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61575080154489",
      "_blank"
    );
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title} data-aos="fade-up">
        Get in Touch
      </h2>
      <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
        We’d love to hear from you! Reach out to us through any of the methods
        below.
      </p>
      <div className={styles.contactInfo}>
        <div
          className={styles.card}
          data-aos="zoom-in"
          data-aos-delay="200"
          onClick={handleEmailClick}
        >
          <span className={styles.icon}>📧</span>
          <h3>Email</h3>
          <a href="mailto:info@myservicesco.com" className={styles.link}>
            info@myservicesco.com
          </a>
        </div>
        <div
          className={styles.card}
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={handlePhoneClick}
        >
          <span className={styles.icon}>📞</span>
          <h3>Phone</h3>
          <a href="tel:+16892877076" className={styles.link}>
            +1 (689) 287-7076
          </a>
        </div>
        <div
          className={styles.card}
          data-aos="zoom-in"
          data-aos-delay="400"
          onClick={handleFacebookClick}
        >
          <span className={`${styles.icon} ${styles.facebookIcon}`}>
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
};

export default Contact;
