import React from 'react';
import { FeatchDes } from '../../lib/Action';
import AllDestination from '../Component/AllDestination';
import { FaSearch } from 'react-icons/fa';

const AllDestinationPage = async () => {

    const data = await FeatchDes();

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white px-6 md:px-12 py-12">

            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-14">

                <span className="bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                    Explore The World
                </span>

                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-5 leading-tight">
                    Discover Your Dream Destination
                </h1>

                <p className="text-gray-500 text-lg mt-5 leading-relaxed">
                    Travel across the world and experience beautiful beaches,
                    mountains, cultures, and unforgettable adventures.
                </p>

                {/* Search Box */}
                <div className="mt-8 flex items-center justify-center">
                    <div className="flex items-center bg-white shadow-xl rounded-full overflow-hidden border border-gray-200 w-full max-w-2xl">

                        <input
                            type="search"
                            placeholder="Search your favorite destination..."
                            className="w-full px-6 py-4 outline-none text-gray-700"
                        />

                        <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white px-7 py-4 flex items-center gap-2 font-semibold">
                            <FaSearch />
                            Search
                        </button>

                    </div>
                </div>
            </div>

            {/* Section Title */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">

                <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Popular Destinations
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Choose your next unforgettable journey from our best travel places.
                    </p>
                </div>

                <button className="mt-5 md:mt-0 border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300 px-6 py-3 rounded-full font-semibold">
                    View All Tours
                </button>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    data.map(res =>
                        <AllDestination
                            key={res._id}
                            destination={res}
                        />
                    )
                }
            </div>

        </div>
    );
};

export default AllDestinationPage;