import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from '../assets/assets';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);

  return (
    room && (
      <div className="pt-25 md:pt-30 pb-5 px-4 md:px-16 lg:px-32 ">
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-4">
            <h1 className="flex text-2xl items-baseline gap-1">
              {room.hotel.name}{' '}
              <span className="text-sm">({room.roomType})</span>{' '}
            </h1>
            <p className="bg-orange-500 rounded-2xl px-2 py-1 text-white">
              20%OFF
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <img src={assets.starIconFilled} alt="" />
            <img src={assets.starIconFilled} alt="" />
            <img src={assets.starIconFilled} alt="" />
            <img src={assets.starIconFilled} alt="" />
            <img src={assets.starIconOutlined} alt="" />
            <p className="ml-2 text-xs ">200+ reviews</p>
          </div>
          <p className="flex text-gray-500/90">
            <img src={assets.locationIcon} alt="" /> {room.hotel.address}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full mt-1">
            <img
              src={mainImage}
              alt=""
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="RoomImgs"
                  className="w-full rounded-xl shadow-md object-cover cursor-pointer"
                />
              ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <div className="border-b border-gray-300 flex flex-col gap-5 pb-5">
            <h1 className="text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center mt-1 mb-1 gap-5">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-200/70"
                >
                  <img src={facilityIcons[item]} alt="" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-3xl">₹999/day</p>
        </div>

        <form
          action=""
          className="w-90/100 md:w-90/100 lg:w-90/100 xl:w-full  m-auto rounded-2xl md:rounded-xl flex flex-col lg:flex-row text-gray-500 gap-25 lg:gap-0 xl:gap-90 shadow-[0_0_5px_rgba(0,0,0,0.5)] py-8 px-5 justify-center mt-10 "
        >
          <div className="flex flex-col md:flex-row px-5 gap-10 lg:gap-15 justify-between">
            <div className="flex flex-col md:border-r border-gray-300 pr-5 ">
              <label htmlFor="checkIn">Check-In </label>
              <input
                className="w-35 py-1 px-2 outline outline-gray-300 rounded "
                type="date"
                id="checkIn"
              />
            </div>
            <div className="flex flex-col md:border-r border-gray-400 pr-5 ">
              <label htmlFor="checkOut">Check-Out </label>
              <input
                className="w-35 py-1 px-2 outline outline-gray-300 rounded "
                type="date"
                id="checkOut"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="guests">Guests </label>
              <input
                className="w-25 py-1 px-2 outline outline-gray-300 rounded "
                type="number"
                placeholder="2 guests"
                id="guests"
              />
            </div>
          </div>
          <button
            className="bg-blue-500 w-90/100 m-auto xl:px-5  cursor-pointer text-center text-white py-5 rounded"
            type="submit"
          >
            Check Availability
          </button>
        </form>
        <div className='mt-15 text-gray-600 border-b w-full md:w-1/2 border-gray-300 pb-15'>
          {roomCommonData.map((item) => (
            <div className='flex items-start gap-2 py-2' >
              <img src={item.icon} alt="" />
              <div className="flex flex-col">
                <h1 className='text-black' >{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='text-gray-600 w-1/2 py-10 border-b border-gray-300 ' >
          <p>Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.</p>
        </div>
        <div className='mt-5 border-b pb-10 border-gray-300' >
          <p className='text-2xl'>Hosted By {room.hotel.name}</p>
          <button className='bg-blue-500 px-5 cursor-pointer py-2 rounded mt-2 text-white text-md' type='submit' >Contact Now</button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
