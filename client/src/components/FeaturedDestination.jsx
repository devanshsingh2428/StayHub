import React from 'react';
import { roomsDummyData } from '../assets/assets';
import HotelCard from './HotelCard';
import { useNavigate } from 'react-router-dom';

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col justify-center items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <div className="mt-18 flex flex-col justify-center gap-10 text-center">
        <h1 className="font-playfair text-5xl">Featured Destination</h1>
        <p className=" text-gray-500 text-lg">
          Discover our handpicked selection of exceptional properties around the
          world, offering <br /> unparalleled luxury and unforgettable
          experiences.
        </p>
      </div>

      <div className="flex  flex-col lg:flex-row justify-center gap-15 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/rooms');
          scrollTo(0, 10);
        }}
        className="my-16  px-4 py-2 text-md font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer text-gray-500"
      >
        Explore more Hotels...
      </button>
    </div>
  );
};

export default FeaturedDestination;
