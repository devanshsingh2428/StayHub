import React, { useState } from 'react';
import { assets, userBookingsDummyData } from '../assets/assets';

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className="pt-20 md:pt-25 pb-5 px-4 md:px-16 lg:px-32">
      <div className=" w-1/2">
        <h1 className="font-playfair text-5xl">My Bookings</h1>
        <p className="text-gray-500 mt-5 text-lg">
          Easily manage your past, current, and upcoming hotel reservations in
          one place. Plan your trips seamlessly with just a few clicks
        </p>
      </div>
      <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-4">
        <div className="w-1/3">Hotels</div>
        <div className="w-1/3">Date & Timings</div>
        <div className="w-1/3"> Payment</div>
      </div>
      <div className="">
        {bookings.map((booking) => (
          <div className="  grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-4">
            <div className="flex gap-5">
              <img
                src={booking.room.images[0]}
                alt="image"
                className="md:w-45 rounded shadow object-cover"
              />
              <div className='' >
                <div className='flex'>
                  <h1 className='font-playfair text-3xl  ' >
                    {booking.hotel.name}
                    <span className='font-outfit text-sm '>({booking.room.roomType})</span>
                  </h1>
                </div>
                <div className='flex gap-2 text-gray-500' >
                  <img src={assets.locationIcon} alt="" />
                  <p>{booking.hotel.address}</p>
                </div>
                <div className='flex gap-2 text-gray-500' >
                  <img src={assets.guestsIcon} alt="" />
                  <p>Guests: {booking.guests}</p>
                </div>
                <p>Total: ₹{booking.totalPrice}</p>
              </div>
            </div>
            <div className='flex gap-10 items-center' >
                <div className='text-gray-500' >
                    <h1>Check-In:</h1>
                    <p>{new Date(booking.checkInDate).toDateString()}</p>
                </div>
                <div className='text-gray-500'>
                    <h1>Check-Out</h1>
                    <p>{new Date(booking.checkOutDate).toDateString()}</p>
                </div>
            </div>
            <div className='my-auto' >
                <div className='flex items-center gap-2' >
                    <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500" }`}  ></div>
                    <p className={`${booking.isPaid ? "text-green-500" : "text-red-500" }`} >{booking.isPaid ? "Paid" : "Unpaid"}</p>
                </div>
                {!booking.isPaid && (
                    <button className='mt-4 cursor-pointer border px-4 py-2 rounded-full' >Pay now</button>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
