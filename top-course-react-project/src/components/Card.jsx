import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';  
import './Card.css';
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;

  function clickHandler(){
    //Logic
    if(likedCourses.includes(course.id)){  // yadi likedcourses ke andar current course ki id hai to vo pahle se like hai
      // Pahle se Like hua tha
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));  // yaha course pahle se liked tha iss liye isko remove karna hai
      toast.warning("like removed");
    }
    else{
      // Pahle se like nhi hai ye course
      // insert karna hai isko liked course me 
      if(likedCourses.length===0){
        setLikedCourses([course.id]);
      }
      else{
        // non empty pahle se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }

  }

  return (
    <div className="card">
      
      <div className="card-media">
        <img className="card-image" src={course.image.url} alt={course.title} />

       
        <button onClick={clickHandler} className="like-container">
          {
            likedCourses.includes(course.id) ?
            (<FcLikePlaceholder size="22"/>) :
            ( <FcLike size="22" />)
           
          }
        </button>
      </div>

      <div className="card-body">
        <p className="card-title">{course.title}</p>
        <p className="card-desc">
          {
            course.description.length > 120 ?
            (course.description.substr(0,120)) + '...' :
            (course.description)
          }
        </p>
      </div>

    </div>
  )
}

export default Card;
