import React from 'react'
import { BiPhone } from 'react-icons/bi'
import ReservationForm from './ReservationForm'

const Reservation = () => {
  return (
    <div className='pt-[5rem] bg-center bg-cover relative  pb-[5rem] mb-[3rem] bg-cyan-950'>
   
          <div className='absolute w-full h-full bg-[#000000a6] top-0 left-0 right-0 bottom-0'> </div>
            <div className='w-[80%] relative mx-auto grid item-center grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
              <div>
                <h1 className='text-[30px] md:text-[40px] lg:text[50px] text-white font-bold leading-[3rem] md:leading-[4rem]'>
                  Dou you Have Any Dinner Plan Today? Reserve Your Table
                </h1>
              <p className='text-[17px] mt-[1rem] text-white text-opacity-50'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dolore cum dignissimos officiis placeat, similique quis provident reprehenderit recusandae tenetur ullam, ex nemo hic dicta!
              </p>


              <div className='flex mt-[2rem] items-center space-x-4'>
                <div className='w-[3rem] h-[3rem] bg-red-500 rounded-full flex items-center justify-center flex-col '>
                  <BiPhone className='w-[1.7rem] h-[1.7rem] text-white' />
                </div>
                <div>
                <h1 className='text-[25px] text-white font-semibold mb-2'>Quick order 24/7</h1>
                <h1 className='text-yellow-300 text-[30px] font-bold'>
                  +91 5462 1987
                </h1>
                </div>
              </div>
              </div>
              <ReservationForm />
              </div>
     
    </div>
  )
}

export default Reservation