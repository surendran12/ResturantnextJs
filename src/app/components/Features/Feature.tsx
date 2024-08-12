import React from 'react'
import Image from 'next/image';
import Img1 from "../../../../public/images/img1.png";
import Img2 from "../../../../public/images/img2.webp";

const Feature = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-100'>
        <h1 className='heading'>
            Burger made with <br/>  love additionalTransfrom <span className='text-red-600'>Care</span>
        </h1>
      <div className='w-[90%] md:w-[80%] mt-[3rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" >
            <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                <Image src={Img1} alt="Img1" className='rounded-3xl' />
                <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Our Burger</h1>
                <p className='mt-[0.2rem] text-black text-opacity-60 text-center text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vitae dignissimos accusamus laborum culpa neque fugiat nulla. Consequuntur incidunt repellat possimus facilis, eum ut minus.</p>
            </div>
        </div>
        <div data-aos="Zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center" >
            <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                <Image src={Img2} alt="Img2" className='rounded-3xl' />
                <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Our Burger</h1>
                <p className='mt-[0.2rem] text-black text-opacity-60 text-center text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vitae dignissimos accusamus laborum culpa neque fugiat nulla. Consequuntur incidunt repellat possimus facilis, eum ut minus.</p>
            </div>
        </div>
        <div data-aos="faded-right" data-aos-delay="400" data-aos-anchor-placement="top-center" >
            <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                <Image src={Img1} alt="Img1" className='rounded-3xl' />
                <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Our Burger</h1>
                <p className='mt-[0.2rem] text-black text-opacity-60 text-center text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vitae dignissimos accusamus laborum culpa neque fugiat nulla. Consequuntur incidunt repellat possimus facilis, eum ut minus.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
