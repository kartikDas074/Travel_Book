import { DelDes, FeatchSingleDes, UpdateBokking } from '@/lib/Action';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Clock, Star, Check, Edit3, XCircle, ArrowRight } from 'lucide-react';
import { EditModal } from '@/app/Component/EditModal';
import { DeleteDes } from '@/app/Component/Delete';


const DestinationDetails = async ({params}) => {
    const {destinationId} = await params;
    const data=await FeatchSingleDes(destinationId);
    console.log(data);
    
    return (
        <div className="max-w-full mx-auto px-4 md:px-8 py-6 bg-white text-gray-800 min-h-screen">
      
      {/* TOP BAR: Back Link & Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <Link 
          href="/all" 
          className="text-gray-500 hover:text-gray-900 transition flex items-center gap-2 text-sm font-medium"
        >
          &larr; Back to Destinations
        </Link>
        
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <EditModal data={data} Updateme={UpdateBokking}></EditModal>
          <DeleteDes id={data._id} Del={DelDes}></DeleteDes>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-8 shadow-sm">
        <Image
          src={data.imageUrl}
          alt={data.destinationName}
          fill
          priority
          className="object-cover"
        />
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full shadow-md">
          {data.category}
        </span>
      </div>

      {/* TWO COLUMN CONTENT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT COLUMN: Main Info */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            {/* Country and Location info */}
            <div className="flex items-center gap-1 text-gray-500 text-sm font-medium mb-2">
              <MapPin size={16} className="text-gray-400" />
              <span>{data.country}</span>
            </div>
            
            {/* Destination Name */}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              {data.destinationName}
            </h1>

            {/* Sub-ratings & Duration */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-amber-400 text-amber-400" />
                <span className="text-gray-900 font-bold">4.9</span>
                <span className="text-gray-400">(234 reviews)</span>
              </div>
              <div className="text-gray-300 hidden sm:block">|</div>
              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-gray-400" />
                <span>{data.duration}</span>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Overview Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
            <p className="text-gray-600 leading-relaxed font-normal">
              {data.description} Discover the authentic vibes, local architecture, and breathtaking panoramic views that make this a must-visit spot.
            </p>
          </div>

          {/* Highlights Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Luxury beachfront accommodation",
                "Traditional Balinese spa treatment",
                "Sunrise trek to Mount Batur",
                "Visit Uluwatu Temple at sunset",
                "Private beach dinner experience"
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Booking Card */}
        <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 lg:sticky lg:top-24">
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Starting from</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-cyan-600">${data.price}</span>
              <span className="text-sm text-gray-500 font-medium">/ per person</span>
            </div>
          </div>

          {/* Booking Info Fields */}
          <div className="space-y-4 mb-5">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1.5">Departure Date</label>
              <div className="flex items-center gap-2.5 w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-700">
                <Calendar size={16} className="text-gray-400" />
                <span className="font-medium">{data.departureDate}</span>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-2 text-sm shadow-md shadow-cyan-600/10">
            Book Now <ArrowRight size={16} />
          </button>

          {/* Small Trust Badges */}
          <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Check size={14} className="text-emerald-500" /> Free cancellation up to 7 days
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Check size={14} className="text-emerald-500" /> Travel insurance included
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Check size={14} className="text-emerald-500" /> 24/7 customer support
            </div>
          </div>
        </div>

      </div>
    </div>
    );
};

export default DestinationDetails;


