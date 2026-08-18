import React from 'react';
import { assets, dashboardDummyData } from '../../assets/assets';

const DashBoard = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-4xl">Dashboard</h1>
        <p className="text-gray-400 max-w-1/2 mt-2">
          Monitor your room listings, track bookings and analyze revenue—all in
          one place. Stay updated with real-time insights to ensure smooth
          operations.
        </p>
      </div>

      <div className="flex gap-5 my-10">
        <div className="flex gap-5 border rounded border-gray-200 bg-blue-100/40 px-5 py-5">
          <img src={assets.totalBookingIcon} alt="" />
          <div className="flex flex-col">
            <p className="text-blue-500 font-semibold">Total Bookings</p>
            <span className="text-gray-400">
              {dashboardDummyData.totalBookings}
            </span>
          </div>
        </div>
        <div className="flex gap-5 border rounded border-gray-200 bg-blue-100/40 px-5 py-5">
          <img src={assets.totalBookingIcon} alt="" />
          <div className="flex flex-col">
            <p className="text-blue-500 font-semibold">Total Revenue</p>
            <span className="text-gray-400">
              ₹ {dashboardDummyData.totalRevenue}
            </span>
          </div>
        </div>        
      </div>
      <h2 className="text-gray-600 text-2xl">Recent Bookings</h2>
        <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-100 overflow-y-scroll mt-5' >
            <table className='w-full' > 
                <thead className='bg-gray-50' >
                    <tr>
                        <th className='py-3 px-4 text-gray-800 font-medium' >User Name </th>
                        <th className='py-3 px-4 text-gray-800 font-medium' >Room Name </th>
                        <th className='py-3 px-4 text-gray-800 font-medium' >Total Amount</th>
                        <th className='py-3 px-4 text-gray-800 font-medium' >Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default DashBoard;
