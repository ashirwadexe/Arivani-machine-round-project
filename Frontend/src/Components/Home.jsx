import React from 'react'

const Home = () => {
  return (
    <div>
        {/* Hero Section */}
        <div className='flex flex-col items-center justify-center m-20 gap-5'>
            <p className='border px-7 py-2 rounded-full border-sky-400 text-sky-600'>No. 1 Tech Blog App🥳</p>

            <div className='w-[60%] text-center mt-5'>
            <h1 className='text-6xl font-bold'>Read, Write & Explore <span className='text-red-400'>Tech World</span> with <span className='text-sky-400'>Arivani</span> Blogs</h1>
            </div>

            <button className='mt-5 border px-7 py-1 rounded-full border-sky-400 text-sky-600 hover:border-gray-300 hover:text-gray-300'>Explore🧐</button>


            
        </div>
    </div>
  )
}

export default Home