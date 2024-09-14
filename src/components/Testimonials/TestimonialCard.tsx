import React from "react";
import style from "./Testimonials.module.scss";
interface props {
  description: string;
  image: string;
  name: string;
  position: string;
  location: string;
  altText: string;
}
const TestimonialCard: React.FC<props> = ({
  description,
  image,
  name,
  position,
  location,
  altText,
}) => {
  return (
    <div className={style.testimonialCard}>
      <p>{description}</p>
      <div>
        <img src={image} alt={altText} />
        <div>
          <p>{name}</p>
          <p>
            {position},{location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
