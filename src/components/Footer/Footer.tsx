// src/components/Footer/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    © {new Date().getFullYear()} MyServicesCo. All rights reserved.
  </footer>
);

export default Footer;
