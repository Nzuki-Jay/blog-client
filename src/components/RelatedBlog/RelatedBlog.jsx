import './RelatedBlog.scss';
import React from 'react';
import banner2 from "../../assets/banner-2.jpeg";
import { Link } from 'react-router-dom';
import { IoArrowForward } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";

const RelatedBlog = ({blog}) => {
  return (
    <li className='relatedBlog'>
        <img src={blog?.image} alt="relatedBlog image" />
        <div className='relatedBlogDetails'>
            <small>{blog?.category}</small>
            <h6>
                {blog?.title}
            </h6> 
            <p>
                {blog?.content.substring(0, 150)} ...
            </p>

            <div className='relatedBlogLinks'>
                <Link className='link' to={`/blog/${blog.id}`}>
                    Learn More 
                    <IoArrowForward />
                </Link>

                <div>
                    <span>
                        15k
                        <FaRegEye />
                    </span>

                    <span>
                        8k
                        <FaRegComment />
                    </span>
                </div>

            </div>

        </div>

    </li>
      
   
  )
}

export default RelatedBlog
