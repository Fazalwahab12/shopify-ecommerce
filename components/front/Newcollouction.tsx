'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Newcollouction = () => {
  const router = useRouter();
  
  const goToProductPage = () => {
    router.push('/search');
  };
  return (
    <div className=' sm:mt-8'>
    <div className=' sm:mt-10 flex flex-col items-center justify-center  md:min-h-screen sm:min-h-full  bg-hero bg-no-repeat bg-cover bg-center md:bg-fixed md:m-12 sm:m-1' >
      <h1 className=' text-lg font-semibold sm:mt-4 '>NEW COLLECTION</h1>
      <h2 className=' text-3xl font-semibold sm:mt-4 sm:px-8 '>Be different in your own way!</h2>
      <h3 className=''>Find your unique style.</h3>
      <button
       className='mx-5 md:mx-14 mb-6 mt-10 md:mt-4 bg-green-500 hover:bg-green-600 px-4 md:px-6 text-white py-1 md:py-2 rounded-full'
        onClick={goToProductPage}
      >
        Shop Collection
      </button>
    </div>
    </div>
  );
}

export default Newcollouction;
