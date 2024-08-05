import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './Navbar.scss';
import { IoMenu } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {

    // controls the nav bar when window is scrolled
    const [isScrolled, setIsScrolled] = useState();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };

    }, [setIsScrolled])

    // close and open menu for md and sm screens
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
    <nav className={`navBar ${isScrolled ? 'active' : ''}`}>
        <Link to="/" className='link'>
            <span>BLOG-IT.</span>
        </Link>

        <div className='searchBar'>
            <Search />
        </div>

        <div className={`navLinks ${toggleMenu ? 'active' : ''}`}>
            <Link className='link active' to="/">
                <span>Home</span>
            </Link>

            <Link className='link' to="/about">
                <span>About</span>
            </Link>

            <Link className='link' to="/press">
                <span>Press</span>
            </Link>

            <Link className='link' to="/contact">
                <span>Contact</span>
            </Link>

            <Link className='link' to="/login">
                <span>Login</span>
            </Link>

        </div>

        {
            toggleMenu ? <AiOutlineMenuUnfold onClick={() => {
                setToggleMenu(false)
            }} className='icon' /> : <IoMenu onClick={() => {
                setToggleMenu(true)
            }} className='icon' /> 
        }
        
            
    </nav>
    )
}

export default Navbar
