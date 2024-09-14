import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialData from "./TestimonialData";
import styles from "./Testimonials.module.scss";

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our customers love us</h2>
        <div className={styles.cardContainer}>
          {TestimonialData.map((data, index) => (
            <TestimonialCard key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
