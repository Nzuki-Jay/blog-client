import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import '../App.scss';
import Footer from '../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery } from '../redux/features/blogs/blogsApiSlice';
import { setTagCount, setAllBlogs } from '../redux/features/blogs/blogsStateSlice';
import { useEffect } from 'react';

const Layout = () => {

  // ENSURE STATE IS ALWAYS LOADED FOR ALL PAGES...

  const dispatch = useDispatch();
  const {tags, search, page, pageSize} = useSelector(state => state.blogs)
  const {
    data: blogData,
    error,
    isLoading
  } = useGetPostsQuery({tags, search, page, pageSize});
  
  useEffect(() => {
    if (blogData) {
      dispatch(setTagCount(blogData.tagCounts));
      dispatch(setAllBlogs(blogData.blogList))
    }

  }, [blogData, dispatch]);


  return (
    <div className='layout'>
        <Navbar />
        <div className='content'>
          <Outlet/>
        </div> 
        <Footer />
    </div>
  )
}

export default Layout
