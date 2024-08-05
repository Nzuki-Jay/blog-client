import React from 'react'
import './App.scss';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';


const App = () => {
  return (
    <BrowserRouter>
        <div className='App'>
            <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Home />}/>
                  <Route path="/blog/:blogId" element={<Blog />}/>
                </Route>
            </Routes>

            
        </div>
    </BrowserRouter>
    
  )
}

export default App
