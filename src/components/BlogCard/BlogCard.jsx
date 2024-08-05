import React from 'react'
import author2 from '../../assets/author2.png';
import banner2 from '../../assets/banner-2.jpeg';
import './BlogCard.scss';
import { Link } from 'react-router-dom';
import { IoArrowForward } from "react-icons/io5";

const BlogCard = ({blog}) => {
  return (
    <div className='blogCard'>
        <div className='blogImage' style={{
          backgroundImage: `url(${blog.image})`
        }}></div>
        <div className='blogDetails'>
          <h5 className='title'>
            {blog.title}
          </h5>
          <p className='blogContent'>
            {blog.content}
            <Link className='link' to={`/blog/${blog.id}`}>
              See More 
              <IoArrowForward />
            </Link>
          </p>
          <small className='tags'>{blog.tags.join(" ,")}</small>
          <div className='author'>
            <img src={blog.authorPic} alt="author image" />
            <div>
              <p>{blog.author}</p>
              <span>{blog.published_date}</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BlogCard
