// src/components/Header/Header.tsx
import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <a href="#home" className={styles.link}>
      MyServicesCo
    </a>
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
