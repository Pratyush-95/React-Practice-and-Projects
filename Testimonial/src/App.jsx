import React from 'react';
import reviews from './data';
import Testimonial from './components/Testimonial';
import './App.css';

function App(){
  return(
  <div className="app-container">
    <h1 className="title">Our Testimonials</h1>
    <div className="title-line"></div>

    <Testimonial reviews={reviews} />
  </div>

  );
};

export default App;