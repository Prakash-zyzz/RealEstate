import React from 'react'
import {FaFacebook,FaTwitter,FaYoutube,FaPinterest,FaInstagram} from "react-icons/fa"
import {SiHomebridge} from "react-icons/si"

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
       <div className='w-full-[1240px] mx-auto flex flex-col px-4'>

        
        <div className='sm:flex text-center justify-between items-center m-4'>
            <div className='flex justify-center'>
            <h1 className='text-[#5d8aa8]'>Zane Builders.</h1>
            <SiHomebridge className='flex mx-2 text-[#5d8aa8]' size={20} />
            </div>
            <div className='flex justify-between w-full sm:max-w-[280px] my-4 icon '>
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaPinterest />
            <FaInstagram />
         </div>
         </div>

         <div className='flex justify-between py-4'>
            <ul className='lg:flex '>
                <li>About</li>
                <li>Patnership</li>
                <li>Careers</li>
                <li>Newsroom</li>
                <li>Advertising</li>
            </ul>
            <ul className='text-right lg:flex' >
            <li>Home</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>Listings</li>
            <li>Contact Us</li>
        </ul>
         </div>  
        

       </div>
    </div>
  )
}

export default Footer