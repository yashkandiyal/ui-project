import React from "react";
import styles from "./Footer.module.scss";
import CompanyLogo from "../../assets/images/company-logo.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>
          Manage your travel and expenses the smart way!
        </h2>
        <form className={styles.trialForm}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input
            type="email"
            placeholder="Official email ID"
            className={styles.input}
          />
          <button type="submit" className={styles.startButton}>
            Start trial
          </button>
        </form>
        <p className={styles.trialInfo}>30 Days free trial • Upto 10 users</p>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.logoWrapper}>
          <img src={CompanyLogo} alt="ExpenseBook" className={styles.logo} />
        </div>
        <div className={styles.contactInfo}>
          <p>
            <span className={styles.icon}>📍</span> Address
          </p>
          <p>
            <span className={styles.icon}>📞</span> +91 1234567890
          </p>
        </div>
        <div className={styles.socialMedia}>
          <p>Social Media</p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path
                  fill="currentColor"
                  d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                />
              </svg>
            </a>
          </div>
        </div>
        <nav className={styles.navigation}>
          <a href="#">Blogs</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Integrations</a>
        </nav>
      </div>
      <p className={styles.copyright}>Copyright © 2024 • ExpenseBook</p>
    </footer>
  );
};

export default Footer;
