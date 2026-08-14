import React from 'react'
import { assets, testimonials } from '../assets/assets'

function Testimonials() {
  return (
    <div className='min-h-[60vh] py-20 flex flex-col gap-10 justify-center items-center bg-slate-50 '>
      <div className='text-center flex flex-col gap-3 px-10' >
        <h1 className='text-[clamp(2rem,2vw,3rem)] font-playfair' >What Our Guests Say</h1>
        <p className='text-gray-500/90 text-lg max-w-200'>Discover why discerning travelers consistently choose StayHub for their exclusive and luxurious accommodations around the world.</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-15 max-w-70/100' >
        {testimonials.map((item)=>(
            <div key={item.id} className='flex flex-col gap-3 rounded-xl overflow-hidden bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.5)] px-10 py-5'> 
                <div className='flex gap-3 items-center'>
                    <img src={item.image} alt="" className='rounded-full h-15' />
                    <div className='flex flex-col gap-1' >
                        <h1>{item.name}</h1>
                        <p className='text-sm text-gray-500/90' >{item.address}</p>
                    </div>
                </div>
                <div className='flex' > 
                  <img src={assets.starIconFilled} alt="" /> 
                  <img src={assets.starIconFilled} alt="" />
                  <img src={assets.starIconFilled} alt="" /> 
                  <img src={assets.starIconFilled} alt="" />
                  <img src={assets.starIconOutlined} alt="" /> 
                </div>
                <p className='text-gray-500/90' > {item.review}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
