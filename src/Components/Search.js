import React from 'react'
import {RiCustomerService2Fill} from "react-icons/ri"
import {MdOutlineTravelExplore} from "react-icons/md"



const Search = () => {
  return (
    <div>
         <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
    <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
            <h2 className='text-[#5d8aa8]'>ABOUT ZANE BUILDERS PRIVATE LIMITED.</h2>
            <p className='py-4'>
            Zane Builders Private Limited is a real estate enterprise committed to building aspirations and delivering value. In the last eighteen years, we have developed over 36 million sqft of prime residential real estate across Chennai, Bengaluru, and Coimbatore. Over 27,000 happy families across 140+ landmark properties stand testimony to our commitment.In the eighteen years of our journey, we at Zane are all set to progress further forward with projects worth over ₹8000 crores in the pipeline.
                </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button><RiCustomerService2Fill size={50} /></button>
                <div className='mr-2'>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 18 YEARS IN-A-ROW</p>
                </div>
            </div>
            <div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button><MdOutlineTravelExplore size={50}  /></button>
                <div className='mr-2'>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 18 YEARS IN-A-ROW</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div>
        <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='p-4'>12 HOURS LEFT</p>
            <p className='bg-[#5d8aa8] text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form>
            <div className='flex flex-col my-2'>
            <label>Location</label>
            <select className='border rounded-md p-2'>
                <option>Chennai</option>
                <option>Bengaluru</option>
                <option>Coimbatore</option>
                <option>Mumbai</option>
            </select>
            </div>
            <div className='flex flex-col my-4'>
               <label>Type</label>
               <select className='border rounded-md p-2'>
                <option>Apartments</option>
                <option>Villa</option>
                <option>Individual Home</option>
                
            </select> 
            </div>
            {/* <div className='flex flex-col my-2'>
               <label>Check-Out</label>
               <input className='border rounded-md p-2' type='date'></input> 
            </div> */}
        </form>
        <div>
            <button className='w-full mt-2'>Rates</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Search