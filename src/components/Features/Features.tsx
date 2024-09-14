import React from "react";
import FeatureItem from "./FeatureItem";
import styles from "./Features.module.scss";
import FeatureList from "./FeatureData";

const Features: React.FC = () => {
  return (
    <div className={styles.features}>
      <h1>Features that suit your needs</h1>
      <div className={styles.featuresGrid}>
        {FeatureList.map((feature, index) => (
          <FeatureItem
            key={index}
            imgSrc={feature.imgSrc}
            imgAlt={feature.imgAlt}
            title={feature.title}
            description={feature.description}
            isComingSoon={feature.isComingSoon}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
