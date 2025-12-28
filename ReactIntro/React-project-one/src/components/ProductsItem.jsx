import React, { useState } from "react";
import ProductsDate from "./ProductsDate";
import Card from "./Card";
import "./ProductsItem.css";

const ProductsItem = (props) => {
  const [title, setTitle] = useState(props.title); // why use const here? this is my homework question.

  const clickHandler = () => {
    // title = 'Popcorn'; // This line is likely commented out or meant to be an example of incorrect state update.
    setTitle('Popcorn'); // ye settitle wala function turnat update ho jata hai ya shedule ho jata hai.
    console.log('Button clicked!');
  };

  return (
    <Card className='product-item'>
      <ProductsDate date={props.date} />
      <div className='product-item_description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductsItem;