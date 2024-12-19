import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // ✅ Import Routes and Route
import Auth from './Components/Auth';

const App = () => {
  return (
    <>
      {/* Navbar */}
      <div className='mx-20 flex justify-between items-center p-5'>
        <h1 className='text-3xl font-bold mr-40'>
          <span className='text-sky-400 underline'>Arivani</span> Blogs📑
        </h1>
        <div className='flex'>
          <ul className='flex items-center text-lg font-semibold ml-40'>
            <li className='ml-10'><Link to="/">Home</Link></li>
            <li className='ml-10'><Link to="/blog">Blog</Link></li>
            <li className='ml-10'><Link to="/register">Register</Link></li> 
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className='flex flex-col items-center justify-center m-20 gap-5'>
        <p className='border px-7 py-2 rounded-full border-sky-400 text-sky-600'>No. 1 Tech Blog App🥳</p>

        <div className='w-[60%] text-center mt-5'>
          <h1 className='text-6xl font-bold'>Read, Write & Explore <span className='text-red-400'>Tech World</span> with <span className='text-sky-400'>Arivani</span> Blogs</h1>
        </div>

         <button className='border px-7 py-1 rounded-full border-sky-400 text-sky-600 hover:border-gray-300 hover:text-gray-300'>Explore🧐</button>


        
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/register" element={<Auth />} />  {}
      </Routes>
    </>
  );
}

export default App;
