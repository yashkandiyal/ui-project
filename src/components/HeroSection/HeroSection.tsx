import React from "react";
import styles from "./HeroSection.module.scss";
import Hotjar from "../../assets/images/hotjar.png";
const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.subtitle}>The World's Most Configurable</span>
          Travel & Expense Management Software
        </h1>

        <p className={styles.description}>
          Configure <span className={styles.highlight}>any</span> rule. Enable a
          world class mobile experience for your users. Get seamless reporting &
          integrations. Inbuilt OCR expense scanning. Manage travel & non-travel
          expenses. Open APIs to connect with external systems.
        </p>

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

        <div className={styles.usedBySection}>
          <p className={styles.usedByText}>USED BY OVER 50 ENTERPRISES</p>
          <div className={styles.logoContainer}>
            {[...Array(6)].map((_, index) => (
              <img
                key={index}
                src={Hotjar}
                alt="Hotjar"
                className={styles.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
