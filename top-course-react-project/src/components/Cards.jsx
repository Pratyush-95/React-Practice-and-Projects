import React, { useState } from 'react'
import './Cards.css'
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category=props.category;
    const [likedCourses, setLikedCourses] = useState([]);

   // If courses is null/undefined, return nothing (or a placeholder)
   function getCourses(){
    if(!courses) return [];
    if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })

        })
        return allCourses;
    }
    else{
      return courses[category] || [];
    }
       
   }

  return (
    <div className="cards-grid">
      {
        getCourses().map((course) => (
            <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
        ))
      }
    </div>
  )
}

export default Cards
