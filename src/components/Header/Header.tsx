import { FaEnvelope, FaHome, FaServicestack } from "react-icons/fa"; // Import icons
// src/components/Header/Header.tsx
import React, { useState } from "react";

import Hamburger from "hamburger-react"; // Correct import for the Hamburger component
import logo from "../../assets/pdros-logistics-logo-image.jpg"; // Ensure your logo is in the correct path
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="#home" className={styles.logoLink}>
          <img src={logo} alt="PDROS Logistics Logo" className={styles.logo} />
          <span className={styles.companyName}>PDROS Logistics LLC</span>
        </a>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="#home" className={styles.link}>
              <FaHome className={styles.icon} /> Home
            </a>
          </li>
          <li>
            <a href="#services" className={styles.link}>
              <FaServicestack className={styles.icon} /> Services
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.link}>
              <FaEnvelope className={styles.icon} /> Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a
            href="#home"
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            <FaHome className={styles.icon} /> Home
          </a>
          <a
            href="#services"
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            <FaServicestack className={styles.icon} /> Services
          </a>
          <a
            href="#contact"
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            <FaEnvelope className={styles.icon} /> Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
