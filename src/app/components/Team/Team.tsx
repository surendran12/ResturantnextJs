import React from 'react'
import TeamCard from './TeamCard'
import Image from 'next/image';

const Team = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>
            Meet Our Expert <span className='text-red-600'>Chefs</span>
        </h1>
        <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center text-base gap-x-16'>
            <TeamCard image="/images/t1.jpg" name="john" position="Kitchen" />
            <TeamCard image="/images/t2.jpg" name="john" position="Kitchen" />
            <TeamCard image="/images/t3.png" name="john" position="Kitchen" />

        </div>
    </div>
  )
}

export default Team