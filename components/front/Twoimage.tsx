'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import boys2 from '../../components/icons/boy-2.jpg';
import boys1 from '../../components/icons/boy.jpeg';
import { useRouter } from 'next/navigation';

const Twoiimage = () => {
  const router = useRouter();
  
  const goToProductPage = () => {
    router.push('/search');
  };
  return (
    <div className=' justify-center gap-5 min-h-screen sm:min-h-full md:flex sm:flex-row m-1'>
      <div className='flex-col '>
      <Link  href={'/'}>
        <Image src={boys2} alt="Product Image" width={500} height={700} />
        </Link>
        <div className='text-center'>
          <p className='text-gray-300 pt-2'>MEN</p>
          <h1 className='text-2xl  mt-3 font-extrabold'>The base collection - Ideal every day.</h1>
          <button
       className='mx-5 md:mx-14 mb-6 mt-6 md:mt-4 bg-green-500 hover:bg-green-600 px-4 md:px-6 text-white py-1 md:py-2 rounded-full'
        onClick={goToProductPage}
      >
        Shop now
      </button>
        </div>
      </div>
      <div className='  sm:mt-5 md:mt-0 '>
      <Link  href={'/'}>
        <Image src={boys1} alt="Product Image" width={500} height={400} />
        </Link> 
      </div>
    </div>
  )
}

export default Twoiimage
