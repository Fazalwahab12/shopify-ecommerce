'use client'
import Image from 'next/image';
import React from 'react'
import hero from '../../components/icons/collection-03.jpg';

import { useRouter } from 'next/navigation';
const Spring = () => {
  const router = useRouter();
  
  const goToProductPage = () => {
    router.push('/search');
  };
  return (
    <div className="mt-4 min-h-screen md:grid md:grid-cols-2   md:m-12">
       <div className="bg-red-100 p-6    ">
    
       <Image src={hero} alt="Product Image" width={450} height={300} />
    

    </div>


    <div className=' m-6  md:mt-44 sm:min-h-full   text-start  '>
    <h1 className=" font-bold ">WOMEN</h1>
     
      <h2 className=" text-4xl font-bold"> Spring Summer Collection</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci. Aliquam venenatis dui lectus, eu convallis turpis convallis et. Pellentesque</p>
       
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

export default Spring