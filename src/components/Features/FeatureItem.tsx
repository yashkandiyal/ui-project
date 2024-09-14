import React from "react";
import style from "./Features.module.scss";
interface FeatureItemProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  isComingSoon,
}) => {
  return (
    <div className={style.featureItem}>
      <div className={style.iconTitle}>
        <img src={imgSrc} alt={imgAlt} />
        <h3>
          {title}{" "}
          {isComingSoon && (
            <span className={style["coming-soon"]}>Coming soon</span>
          )}
        </h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
