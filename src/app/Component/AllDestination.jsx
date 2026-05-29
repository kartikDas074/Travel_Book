
import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const AllDestination = ({destination}) => {
    return (
        <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100 group cursor-pointer">
      
      {/* Image Section */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={destination.imageUrl} 
          alt={destination.destinationName} 
            fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge (Optional - ছবির ওপরে রেটিং বা ক্যাটাগরি দেখানোর জন্য) */}
        <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-md text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          {destination.category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5">
        
        {/* Country with Icon */}
        <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium mb-1">
          <FaMapMarkerAlt className="text-gray-400" />
          <span>{destination.country}</span>
        </div>

        {/* Destination Name & Price Row */}
        <div className="flex justify-between items-start gap-2 mb-3">
          <h1 className="text-xl font-bold text-gray-800 font-serif leading-tight line-clamp-1">
            {destination.destinationName}
          </h1>
          <div className="text-right flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">${destination.price}</span>
            <span className="text-xs text-gray-500 block">/Person</span>
          </div>
        </div>

        {/* Duration with Icon */}
        <div className="flex items-center gap-2 text-gray-600 text-sm font-medium mb-4">
          <FaRegCalendarAlt className="text-gray-400" />
          <span>{destination.duration}</span>
        </div>

       

        {/* Divider */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* Book Now Button */}
        <div className="flex items-center justify-between">
          <button className="text-sky-500 font-bold text-sm tracking-wider uppercase inline-flex items-center gap-2 hover:text-sky-600 transition-colors border-b-2 border-transparent hover:border-sky-500 pb-0.5">
            BOOK NOW
            <FaArrowUpRightFromSquare className="text-xs" />
          </button>
          
          {/* Departure Date (ছোট করে কর্নারে দেখানোর জন্য) */}
          <span className="text-[10px] text-gray-400 font-mono">
            Dept: {destination.departureDate}
          </span>
        </div>

      </div>
    </div>
    );
};

export default AllDestination;