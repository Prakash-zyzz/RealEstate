import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"

import backImg from "../assets/bgbg.jpg"

const Hero = () => {
  return (
    <div >
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={backImg} alt='/' />

        <div className='absolute w-full h-screen top-0 left-0 bg-white/30'>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-[#5d8aa8] p-4'>
            <h1>Your next home is here.</h1>
            <h2 className='py-4'>Find A Home</h2>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 bg-gray-100/90 rounded-md text-black'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] fonr-[poppins] focus:outline-none' type='text' placeholder='Search Homes' />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{color:"white"}}/></button>
                </div>
            </form>
        </div>

    </div>
    </div>
  )
}

export default Hero