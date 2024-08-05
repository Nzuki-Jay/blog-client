import React from 'react'
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import BlogsBar from '../../components/BlogsBar/BlogsBar';

const Home = () => {
  return (
    <div className='home'>
      
      <Banner />

      <div className='homeContent'>
        <div className='topics'>
          <CategoriesBar />
        </div>
        <div className='blogs'>
          <BlogsBar />
        </div>
      </div>
      
    </div>
  )
}

export default Home
