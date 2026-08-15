import React from 'react';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const CheckBox = ({ label }) => {
  return (
    <label className="flex gap-2 cursor-pointer">
      <input type="checkbox" />
      <span className="select-none"> {label} </span>
    </label>
  );
};

const Radio = ({ label }) => {
  return (
    <label className="flex gap-2 cursor-pointer">
      <input type="radio" name="priceRange" />
      <span> {label} </span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();

  const roomTypes = ['Single Bed', 'Family Suite', 'Double Bed', 'Luxury Room'];

  const priceRange = [
    '₹200-₹500',
    '₹501-₹1000',
    '₹1001-₹1500',
    '₹1501-₹2000',
    '₹2000+',
  ];

  const sortOptions = [
    'Price Low to High',
    'Price High to Low',
    'Newest First',
  ];

  return (
    <div className=" flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className=" text-gray-500/90 mt-2 text-lg max-w-150">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div className="flex flex-col items-start md:flex-row py-10 gap-5 border-b border-gray-300">
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotelImage"
              title="View Room Detail"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p className="text-gray-800 text-3xl font-playfair cursor-pointer ">
                {room.hotel.name}
              </p>
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
              <div className="flex flex-wrap items-center mt-1 mb-1 gap-5">
                {room.amenities.map((item, index) => (
                  <div key={index} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-200">
                    <img src={facilityIcons[item]} alt="" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl">$ {room.pricePerNight} /day</p>
            </div>
          </div>
        ))}
      </div>

      <form id="filterForm" action="">
        <div className="bg-white w-80 border border-gray-300 text-gray-400 max-lg:mb-8 lg:mt-16">
          <div className="flex justify-between border-b border-gray-300 px-4 py-4">
            <h1 className="text-black font-semibold text-lg">FILTERS</h1>
            <p className="cursor-pointer" onClick={()=>document.getElementById("filterForm").reset()} >CLEAR</p>
          </div>
          <div className="px-4 py-4">
            <h1 className="text-black">Popular filters</h1>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>
          <div className="px-4 py-4">
            <h1 className="text-black">Select Price Range</h1>
            {priceRange.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>
          <div className="px-4 py-4">
            <h1 className="text-black">Sort By</h1>
            {sortOptions.map((room, index) => (
              <Radio key={index} label={room} />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AllRooms;
