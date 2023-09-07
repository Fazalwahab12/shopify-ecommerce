import Image from 'next/image';
import React from 'react'
import hero from '../../components/icons/collection-03.jpg';
import Link from 'next/link';
const Spring = () => {
  return (
    <div className="mt-4 min-h-screen md:grid md:grid-cols-2   md:m-12">
       <div className="bg-red-100 p-6    ">
    
       <Image src={hero} alt="Product Image" width={450} height={300} />
    

    </div>


    <div className=' m-6  md:mt-44 sm:min-h-full   text-start  '>
    <h1 className=" font-bold ">WOMEN</h1>
     
      <h2 className=" text-4xl font-bold"> Spring Summer Collection</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci. Aliquam venenatis dui lectus, eu convallis turpis convallis et. Pellentesque</p>
       
        <Link href={'/search'} className="mx-5 md:mx-14 mb-6 mt-7 md:mt-6 bg-green-500 hover:bg-green-600 px-4 md:px-6 text-white py-1 md:py-2 rounded-full">
                    Shop Collection
                </Link>
    </div>
  </div>
);
}

export default Spring