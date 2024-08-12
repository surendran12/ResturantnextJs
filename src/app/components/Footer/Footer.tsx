import React from 'react'
import { FaBurger, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900 '>
        <div className='w-[80%] pb-[2rem]  mx-auto border-b-[2px] border-b-gray-300 border-opacity-50 max-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-center'>
            <div>
                <div className='flex items-center space-x-2'>
                    <FaBurger className='w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h[1.4rem] text-orange-500' />
                        <h1 className='text-[20px] sm:text-[30px] font-semibold text-white'>
                            BurgerBite
                        </h1>
                </div>
                <p className='mt-[0.4rem] text-white text-opacity-60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, esse!
                </p>
                <p className='mt-[1rem] text-white'>support@example.com</p>
                <p className='text-red-300 text-[19px] font-bold'>+(91) 8956 89562</p>
            </div>
            <div>
                <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>
                    Products
                </h1>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>

                </div>
                <div>
                <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>
                    Quick Links
                </h1>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>
                <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p>

                </div>
                <div>
                <h1 className='text-[23px] font-semibold mb-[2rem] uppercase text-white'>
                    Opening Hours
                </h1> 
                <p className='text-white text-[18px]'>Monday - Friday : <span className='text-yellow-300'>8am - 4pm</span></p>
                <p className='text-white text-[18px]'>Saturday - Friday : <span className='text-yellow-300'>8am - 12pm</span></p>
                <div className='flex mt-[2rem] items-center space-x-6'>
                    <FaFacebook  className='w-[1.5rem] h-[1.5rem] text-blue-400'/>
                    <FaInstagram className='w-[1.5rem] h-[1.5rem] text-red-400'/>
                    <FaWhatsapp  className='w-[1.5rem] h-[1.5rem] text-green-400' />
                </div>
                </div>
        </div>
        <div>
            <p className='text-center text-white opacity-50 mt-[1.5rem]'>Copyright @ 2024 <span className='text-yellow-600'>msms web.</span> All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer