import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // ✅ Import Routes and Route
import Auth from './Components/Auth';
import Home from './Components/Home';
import Blog from './Components/Blog';

const App = () => {
  return (
    <>
      {/* Navbar */}
      <div className='mx-20 flex justify-between items-center p-5'>
        <h1 className='text-3xl font-bold mr-40'>
          <Link to='/'><span className='text-sky-400 underline'>Arivani</span> Blogs📑</Link>
          
        </h1>
        <div className='flex'>
          <ul className='flex items-center text-lg font-semibold ml-40'>
            <li className='ml-10'><Link to="/">Home</Link></li>
            <li className='ml-10'><Link to="/blog">Blog</Link></li>
            <li className='ml-10'><Link to="/register">Register</Link></li> 
          </ul>
        </div>
      </div>

      

      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path="/register" element={<Auth />} />  
      </Routes>
    </>
  );
}

export default App;
