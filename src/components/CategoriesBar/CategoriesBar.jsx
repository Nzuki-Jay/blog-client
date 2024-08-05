import React from 'react';
import './CategoriesBar.scss';
import Subscribe from '../Subscribe/Subscribe';
import Categories from '../Categories/Categories';

const CategoriesBar = () => {
  return (
    <div className='categoriesBar'>
        <Categories />
        <div className='divider'></div>
        <Subscribe />
        <div className='divider'></div>
    </div>
  )
}

export default CategoriesBar
