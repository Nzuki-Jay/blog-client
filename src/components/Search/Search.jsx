import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import './Search.scss';
import { setSearch } from '../../redux/features/blogs/blogsStateSlice';
import { useDispatch } from 'react-redux';


const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(query))
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit} className='searchForm'>
      <IoIosSearch className='icon'/>
      <input type='text' value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder='Search Blogs' />  
    </form>
  )
}

export default Search
