import React from 'react'

const NewsLetter = () => {
  return (
    <div className='pt-[5rem] pb-[5rem]'>
        <div className='text-center'>
            <h1 className='text-[28px] mb-[2rem] sm:text-[38px] md:text-[50px] text-black font-bold uppercase'>
                join for hot offers
            </h1>
            <p className='text-black text-[24px] text-opacity-70 md:w-[60%] mx-auto'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsum alias quia tempore, quidem fuga explicabo hic minus voluptates quae rerum! Ipsam eaque fuga ut?
            </p>
            <div className='flex items-center space-x-2 mt-[3rem] justify-center '>
                <input type='email' placeholder='Email Address' className='px-5 py-4 bg-gray-400 w-[40%] text-[16px] outline-none rounded-lg placeholder:text-black'/>
                <button className='px-8 py-4 bg-green-700 hover:bg-green-900 transition-all text-[16px] duration-200 rounded-md text-white font-bold'>Subscribe</button> 
            </div>
        </div>
    </div>
  
  )
}

export default NewsLetter