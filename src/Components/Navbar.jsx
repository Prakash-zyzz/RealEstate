import React, {useState}  from 'react'
import {BsPerson} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import {SiHomebridge} from "react-icons/si"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

    const[nav,setNav] = useState(false)
   const[logo,setLogo]= useState(false)

   const handleNav = ()=>{
        setNav(!nav);
        setLogo(!nav)
   }

  return (
    <div className='flex w-full justify-between h-20 items-center px-4 absolute z-10 drop-shadow-lg  text-[#5d8aa8]'>
       <div className='flex'>
            <h1 onClick={handleNav} className={nav ? "hidden" : "block"} >Zane Builders.</h1>
            <SiHomebridge size={20} />
       </div>

       <ul className='hidden md:flex cursor-pointer mr-[15%]'>
            <li>Home</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>Listings</li>
            <li>Contact Us</li>
        </ul>

        <div className='hidden md:flex cursor-pointer '>
            <BiSearch size={20} className='mr-4'  />
            <BsPerson size={20} className='mr-2' />
        </div>

        <div onClick={handleNav}  className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> :<AiOutlineMenu size={20}  />}
        </div>

        <div onClick={handleNav} className={nav ? 'absolute text-black left-[0] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[100%]'}>
        <ul >
            <div className='flex'>
            <h1>Zane Builders.</h1>
            <SiHomebridge size={20} />
            </div>
            <li className='border-b-2 cursor-pointer'>Home</li>
            <li className='border-b-2 cursor-pointer'>Buy</li>
            <li className='border-b-2 cursor-pointer'>Sell</li>
            <li className='border-b-2 cursor-pointer'>Listings</li>
            <li className='border-b-2 cursor-pointer'>Contact Us</li>
           <div className='flex flex-col'>
             <button className='my-6'>Search</button>
             <button>Sign In</button>
           </div>
           
           
        </ul>
        </div>
        

    </div>
  )
}

export default Navbar