import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../index.css'
import Spinner from './Spinner'

const Blogs = () => {
 // consume the data
 
  const {posts,loading} = useContext(AppContext);
  console.log(posts);
  
  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
      {
        loading ? 

        (<Spinner/>) : 
        (
          posts.length === 0 ? 
          (<div >
            <p>No Post Found</p>
          </div> ) : 
            (posts.map ((post) => (
              <div key={post.id} >
                <div >
                  {post.image && <img src={post.image} alt={post.title}  />}
                  <div >
                    <h2 className="font-bold text-sm mb-1">{post.title}</h2>
                    <p className="text-[14px] mb-1">
                    By <span className="italic">{post.author}</span> or{" "} <span className="underline font-bold">{post.category}</span>
                    </p>
                    <p className="text-[14px] mb-2">Posted On {post.date}</p>
                    <p className="text-[16px] mt-[13px]">{post.content}</p>
                    <div className="flex flex-wrap gap-x-2 items-center">
                      {post.tags.map((tag, index) =>{
                        return <span key={index}  className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</span>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )))
        ) 
      }
    </div>
  )
}

export default Blogs
