import React from 'react'
import './Banner.scss';
import author1 from "../../assets/author1.png";
import author2 from "../../assets/author2.png";
import banner1 from "../../assets/banner-1.avif";
import banner2 from "../../assets/banner-2.jpeg";


const Banner = () => {
  return (
    <section className='banners'>
        <div className='bannerLeft'>
        <div className='bannerBackground' style={{ 
                backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))'}}
                ></div>
            <img src={banner2}
                alt="banner" className='bannerImage'/>

            <div className='bannerText'>
                <span>
                    Science
                </span>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
                <div className='bannerAuthor'>
                    <img src={author2} alt='bannerProfile'/>
                    <div>
                        <p>Chrishell Staus</p>
                        <p>14 Aug</p>
                    </div>
                </div>

            </div>

        </div>

        <div className='bannerRight'>
            <div className='bannerBackground' style={{ 
                backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))'}}
                ></div>
            <img className='bannerImage' src={banner1}
                alt="banner"/>

            <div className='bannerText'>
                <span>
                    Nutrition
                </span>
                <h2>
                    Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
                </h2>
                <div className='bannerAuthor'>
                    <img src={author1} alt='bannerProfile'/>
                    <div>
                        <p>Mike Sullivan</p>
                        <p>14 Aug</p>
                    </div>
                </div>

            </div>
        </div>
       
    </section>
  )
}

export default Banner
