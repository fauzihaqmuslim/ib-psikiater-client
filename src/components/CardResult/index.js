import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const Index = ({
  first_name,
  last_name,
  work_address,
  experience_year,
  avatar_url,
  price,
  region,
  star,
  onClick,
}) => {
  const [rating] = useState();
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="left-side">
          <div className="name">
            <h4>
              {first_name} {""} {last_name}
            </h4>
          </div>
          <div className="address">
            <p>Work Address: {work_address}</p>
          </div>
          <div className="experience">
            <h6>Year of experience: {experience_year}</h6>
          </div>
          <div className="region">
            <h6>Region: {region}</h6>
          </div>
        </div>
        <div className="middle-side">
          <div className="star">
            <StarRatings rating={rating} numberOfStars={star} name="rating" />
          </div>
          <div className="price">
            <h2> Rp. {price} / hour</h2>
          </div>
        </div>
        <div className="right-side">
          <img
            src={avatar_url}
            alt="images"
            style={{
              width: "140px",
              borderRadius: "50%",
              float: "right",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
