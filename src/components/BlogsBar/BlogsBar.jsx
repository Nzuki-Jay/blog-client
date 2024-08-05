import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BlogCard from '../BlogCard/BlogCard';
import './BlogsBar.scss';
import { useGetPostsQuery } from '../../redux/features/blogs/blogsApiSlice';
import { setPage, setTagCount, setAllBlogs } from '../../redux/features/blogs/blogsStateSlice';
import { useEffect } from 'react';


const BlogsBar = () => {

  // UPDATE STATE WHEN THE BLOG COMPONENT IS MOUNTED...

  const dispatch = useDispatch();
  const {tags, search, page, pageSize, allBlogs} = useSelector(state => state.blogs)
  const {
    data: blogData,
    error,
    isLoading
  } = useGetPostsQuery({page, pageSize, tags, search});
  
  useEffect(() => {
    if (blogData) {
      dispatch(setTagCount(blogData.tagCounts));
      dispatch(setAllBlogs(blogData.blogList))
    }

  }, [blogData, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Loading Blogs!!</div>;

  const {
    data: blogs, total, totalPages, page: currentPage, tagCounts
  } = blogData;

  
  return (
    <div className='leftBar'>
        <div className='blogs'>  
          {
            blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          }
          <div className='pagination'>
            <button disabled={currentPage === 1} onClick={() => {
              dispatch(setPage(page - 1))
            }} className='prev'>Previous</button>
            <p>{currentPage} of {totalPages}</p>
            <button disabled={currentPage === totalPages} onClick={() => {
               dispatch(setPage(page + 1))
            }} className='next'>Next</button>
          </div>
        </div>
    </div>
  )
}

export default BlogsBar
