import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelRegistration = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-100  flex items-center justify-center bg-black/50' >
      <form action="" className='flex bg-white rounded-xl max-w-4xl max-md:mx-2' >
        <img src={assets.regImage} alt="Registration-Image" className='w-1/2 rounded-xl hidden md:block' />
        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-8' >
            <img src={assets.closeIcon} alt="closeIcon" className='absolute top-4 right-4 h-4 w-4 cursor-pointer' />
            <p className='text-2xl font-semibold mt-6' >Register Your Hotel</p>
            <div className='w-full mt-5 flex flex-col' >
                <label htmlFor="name" className='font-medium text-gray-500' >Hotel Name</label>
                <input type="text" className='text-gray-500 border border-gray-300 px-3 py-2 rounded mt-2 outline-blue-300' placeholder='Type here..' required/>
            </div>
            <div className='w-full mt-5 flex flex-col' >
                <label htmlFor="phone" className='font-medium text-gray-500' >Phone</label>
                <input type="tel" className='text-gray-500 border border-gray-300 px-3 py-2 rounded mt-2 outline-blue-300' placeholder='Type here..' required />
            </div>
            <div className='w-full mt-5 flex flex-col' >
                <label htmlFor="address" className='font-medium text-gray-500' >Address</label>
                <input type="text" className='text-gray-500 border border-gray-300 px-3 py-2 rounded mt-2 outline-blue-300' placeholder='Type here..' required />
            </div>
            <div className='w-full mt-5 flex flex-col' >
                <label htmlFor="city" className='font-medium text-gray-500' >City</label>
                <select type="dropdown" className='text-gray-500 border border-gray-300  px-3 py-2 rounded mt-2 outline-blue-300' placeholder='Type here..' required>
                    <option className='' value="">Select City</option>
                        {
                            cities.map((city)=>(
                                <option key={city} value={city}> {city} </option>
                            ))
                        }
                </select>
            </div>
            <button className='bg-blue-500 hover:bg-blue-600  text-white px-5 py-2 rounded cursor-pointer mt-5' >Register</button>
        </div>
      </form>
    </div>
  )
}

export default HotelRegistration
