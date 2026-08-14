import React from 'react';
import { ArrowRight } from 'lucide-react';
import { exclusiveOffers } from '../assets/assets';

function ExclusiveOffers() {
  return (
    <div className="m-auto mt-20 flex flex-col gap-5 min-h-[43vh] mb-20">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-5xl font-playfair text-center">
            Exclusive Offers
          </h1>
          <div className=" md:flex justify-between gap-5 w-90/100 m-auto">
            <p className="text-[#6B7280E5]/90 text-center md:text-left max-w-2xl">
              Take advantage of our limited-time offers and special packages to
              enhance your stay and create unforgettable memories.
            </p>
            <h3 className="flex mt-4 md:-mt-5 gap-4 text-gray-500 justify-center md:justify-end">
              View All Offers <ArrowRight />{' '}
            </h3>
          </div>
        </div>
      </div>
      <div className="items-center mt-5 m-auto flex flex-col gap-10 w-90/100 justify-center lg:flex lg:flex-row  overflow-x-auto">
        {exclusiveOffers.map((item) => (
          <div className="w-3/4 lg:w-1/3">
            <div
              key={item._id}
              className="group relative h-60 flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
                {item.priceOff}%OFF
              </p>
              <div className="flex flex-col gap-2">
                <p className="font-playfair text-2xl">{item.title}</p>
                <p>{item.description}</p>
                <p className="text-xs text-white/70">
                  Expires {item.expiryDate}
                </p>
              </div>
              <button className="flex pb-2  gap-2">
                View Offers <ArrowRight className="mt-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExclusiveOffers;
