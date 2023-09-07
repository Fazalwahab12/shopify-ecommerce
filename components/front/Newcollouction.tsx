import Link from 'next/link';
import React from 'react';

const Newcollouction = () => {
  return (
    <div className=' sm:mt-8'>
    <div className=' sm:mt-10 flex flex-col items-center justify-center  md:min-h-screen sm:min-h-full  bg-hero bg-no-repeat bg-cover bg-center md:bg-fixed md:m-12 sm:m-1' >
      <h1 className=' text-lg font-semibold sm:mt-4 '>NEW COLLECTION</h1>
      <h2 className=' text-3xl font-semibold sm:mt-4 sm:px-8 '>Be different in your own way!</h2>
      <h3 className=''>Find your unique style.</h3>
      <Link  href={'/search'} className="mx-4 sm:mb-5 mt-8 bg-green-500 hover:bg-green-600  px-6 text-white py-3 md:py-3 rounded-full">
        
          Shop Now

      </Link>
    </div>
    </div>
  );
}

export default Newcollouction;
