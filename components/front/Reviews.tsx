// components/Reviews.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div>
              <p className="font-semibold text-lg pb-4">Reviews</p>
              <p className="text-gray-600">
                "Very good quality T-shirts and lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua quis ipsum!"
              </p>
              <div className="space-x-4 pt-3 text-yellow-500 flex justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mx-auto mt-6">
                <p className="text-gray-500">Fazal Wahab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
