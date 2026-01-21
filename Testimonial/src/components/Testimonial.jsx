import React, { useState } from "react";
import Card from "./Card.jsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Testimonial.css";

const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler(){
    if(index - 1 <0){
      setIndex(reviews.length -1);
    }
    else{
      setIndex(index - 1);
    }
  }

  function rightShiftHandler(){
    if(index +1 >= reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index + 1);
    }
  }

  function surpriseHandler(){
    let randomIndex=Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }


  return (
    <div className="testimonial">
      <Card review={reviews[index]} />

      <div className="arrow-container">
        <button onClick={leftShiftHandler} 
        className="arrow-btn">
          <FiChevronLeft />
        </button>
        <button onClick={rightShiftHandler}
         className="arrow-btn">
          <FiChevronRight />
        </button>
      </div>

      <div className="surprise-container">
        <button onClick={surpriseHandler} className="surprise-btn">Surprise Me</button>
      </div>
    </div>
  );
};

export default Testimonial;
