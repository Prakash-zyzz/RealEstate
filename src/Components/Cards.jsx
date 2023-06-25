import React from 'react'
import {HiOutlineLocationMarker} from "react-icons/hi"
import {MdApartment} from "react-icons/md"
import {FaRupeeSign} from "react-icons/fa"

import cardChennai from "../assets/cardchennai.jpg"
import cardBanglore from "../assets/cardbanglore.jpg"
import cardMumbai from "../assets/cardmumbai.jpg"
import cardCoimbatore from "../assets/cardcoimbatore.jpg"


const Cards = () => {
  return (
    <div className='w-full py-[2rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-full h-full mx-auto  bg-white' src={cardChennai} alt="/"/>
        <h2 className='text-2xl font-bold text-center py-2 text-[#5d8aa8]'>Zane Majestica</h2>
        
        <div className='text-center font-medium'>
            
            <p className='py-2 px-8 mr-4 border-b mx-8 mt-2  flex justify-between'><HiOutlineLocationMarker size={20} /> <span className='mr-6'>Chennai</span></p>
            <p className='py-2 px-8 border-b mx-8 flex justify-between '><MdApartment size ={20} /> 2 & 3 BHK Apts</p>
            <p className='py-2 px-8 border-b mx-8 flex justify-between '><FaRupeeSign size ={20} /> Rs.81 Lakhs Onwards</p>
        </div>
        <button className='bg-[#00df9a] text-black mx-auto rounded-md font-medium w-[200px]  my-6 px-6 py-3'>Brouche</button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
      <img className='w-full h-full mx-auto  bg-white' src={cardBanglore} alt="/"/>
        <h2 className='text-2xl font-bold text-center py-2 text-[#5d8aa8]'>Zane Cloud9</h2>
        
        <div className='text-center font-medium'>
        <p className='py-2 px-3 border-b mx-8 mt-2  flex justify-between text-center'><HiOutlineLocationMarker className='ml-3' size={20} /> <span className='mr-3'> Bengaluru</span></p>
            <p className='py-2 px-8 border-b mx-8 flex justify-between '><MdApartment size ={20} /> 2 & 3 BHK Apts</p>
            <p className='py-2 px-8  border-b mx-8 flex justify-between '><FaRupeeSign size ={20} /> Rs.81 Lakhs Onwards</p>
        </div>
        <button className='text-black bg-black mx-auto rounded-md font-medium w-[200px]  my-6 px-6 py-3'>Brouche</button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-full h-full   bg-white' src={cardMumbai} alt="/"/>
        <h2 className='text-2xl font-bold text-center py-2 text-[#5d8aa8]'>Zane Elysium</h2>
        
        <div className='text-center font-medium'>
            <p className='py-2 px-8 border-b mx-8 mt-2  flex justify-between text-center'><HiOutlineLocationMarker className='mr-1' size={20} /><span className='mr-3'> Mumbai</span></p>
            <p className='py-2 px-8 border-b mx-8 flex justify-between '><MdApartment size ={20} /> 2 & 3 BHK Apts</p>
            <p className='py-2 px-8  border-b mx-8 flex justify-between '><FaRupeeSign size ={20} /> Rs.81 Lakhs Onwards</p>
        </div>
        <button className='bg-[#00df9a] text-black mx-auto rounded-md font-medium w-[200px]  my-6 px-6 py-3'>Brouche</button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-full h-full   bg-white' src={cardCoimbatore} alt="/"/>
        <h2 className='text-2xl font-bold text-center py-2 text-[#5d8aa8]'>Zane Elinor</h2>
        
        <div className='text-center font-medium'>
            <p className='py-2 px-3 border-b mx-8 mt-2  flex justify-between text-center'><HiOutlineLocationMarker className='ml-2' size={20} /> <span className='mr-2'>Coimbatore</span></p>
            <p className='py-2 px-8 border-b mx-8 flex justify-between '><MdApartment size ={20} /> 2 & 3 BHK Apts</p>
            <p className='py-2 px-8  border-b mx-8 flex justify-between '><FaRupeeSign size ={20} /> Rs.81 Lakhs Onwards</p>
        </div>
        <button className='bg-[#00df9a] text-black mx-auto rounded-md font-medium w-[200px]  my-6 px-6 py-3'>Brouche</button>
      </div>

      
    </div>

</div>
  )
}

export default Cards