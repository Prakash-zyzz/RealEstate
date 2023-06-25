import React from 'react'

import Aparments from "../assets/apartments.jpg"
import Villa from "../assets/villa.jpg"
import Office from "../assets/office.jpg"
import Office2 from "../assets/office2.jpg"
import Villa2 from "../assets/villa2.jpg"


const Types = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
    <h1 className = 'text-[#5d8aa8]'>We build your Today & Tommorow.</h1>
    <p className='py-4'>With Best Views</p>
    <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
       <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Aparments} alt='/' />
       <img className='w-full h-full object-cover' src={Villa } alt='/' />
       <img className='w-full h-full object-cover' src={Office} alt='/' />
       <img className='w-full h-full object-cover' src={Office2} alt='/' />
       <img className='w-full h-full object-cover' src={Villa2} alt='/' />
       
    </div>
    </div>
  )
}

export default Types