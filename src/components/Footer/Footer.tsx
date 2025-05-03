// src/components/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p>
        © {new Date().getFullYear()} PDROS Logistics LLC. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
