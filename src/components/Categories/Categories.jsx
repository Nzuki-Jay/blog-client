import React from 'react'
import './Categories.scss';
import { setTags } from '../../redux/features/blogs/blogsStateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Categories = () => {
    const [listTags, setListTags] = useState({});
    const {tagCount} = useSelector(state => state.blogs)

    const dispatch = useDispatch();

    // Handle tag click event
    const handleTagClick = (tag) => {
        setListTags(prev => { 
            const newTagValue = !prev[tag];
            
            return {
                ...prev,
                [tag]: newTagValue
            };
        });
    };

    // Effect to handle side effects based on listTags changes
    useEffect(() => {
        const filteredTags = Object.keys(listTags).filter(key => listTags[key]);
        dispatch(setTags(filteredTags));
    }, [listTags, dispatch]);


    return (
    <div className='categories'>
        <h5>Popular Topics</h5>
        <ul>
        {
                Object.entries(tagCount).map(([tag, count]) => (
                    <li onClick={() => {handleTagClick(tag)}}  key={tag} className={`category ${listTags[tag] ? 'active' : ''}`}>
                        <div>
                            <span className={`checkbox ${
                                count > 50 
                                    ? 'green' 
                                    : count >= 20 
                                    ? 'darkblue' 
                                    : count < 5 
                                    ? 'lightblue' 
                                    : 'yellow'
                                }`}></span>
                            <p>{tag}</p>
                        </div>
                        <small>{count || 0} articles</small>
                    </li>
                ))

        }
            
        </ul>
    </div>
    )
}

export default Categories
