import React from "react";
import styles from "./Integrations.module.scss";
interface props {
  image: string;
  description: string;
  title: string;
  cssProperty?: {
    border: string;
    borderImageSource: string;
    borderImageSlice: number;
  };
}
const IntegrationModal: React.FC<props> = ({
  image,
  description,
  title,
  cssProperty,
}) => {
  return (
    <div className={styles.integrationModal} style={cssProperty}>
      <div id="header" className={styles.header}>
        <img src={image} alt="#" />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default IntegrationModal;
