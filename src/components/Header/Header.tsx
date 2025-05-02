// src/components/Header/Header.tsx
import React from "react";
import logo from "../../assets/pdros-logistics-logo-image.jpg"; // Ensure your logo is in the correct path
import styles from "./Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <img src={logo} alt="PDROS Logistics Logo" className={styles.logo} />
      <span className={styles.companyName}>PDROS Logistics LLC</span>
    </div>
    <nav>
      <ul className={styles.navList}>
        <li>
          <a href="#home" className={styles.link}>
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" className={styles.link}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
