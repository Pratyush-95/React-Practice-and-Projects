import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./Card.css";

const Card = ({ review }) => {
  return (
    <div className="card">
        <div className="image-wrapper">
            <img src={review.image} className="profile-img" />
            <div className="image-bg"></div>
        </div>

        <div className="content">
            <div className="name">{review.name}</div>
            <div className="job">{review.job}</div>

           <FaQuoteLeft className="quote-icon" />

           <p className="review-text">{review.text}</p>

           <FaQuoteRight className="quote-icon" />
        </div>
    </div>

  );
};

export default Card;
