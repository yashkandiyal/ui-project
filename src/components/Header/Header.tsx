import React, { useState } from "react";
import styles from "./Header.module.scss";
import CompanyLogo from "../../assets/images/company-logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <img src={CompanyLogo} alt="CompanyLogo" className={styles.logo} />
      <button
        className={`${styles.mobileMenuButton} ${
          isMenuOpen ? styles.active : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className={styles.hamburger}></div>
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
        <ul className={styles.navList}>
          <li>
            <a href="#blogs" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </a>
          </li>
          <li>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#integrations" onClick={() => setIsMenuOpen(false)}>
              Integrations
            </a>
          </li>
        </ul>
        <button className={styles.ctaButton}>Start trial</button>
      </nav>
    </header>
  );
};

export default Header;
