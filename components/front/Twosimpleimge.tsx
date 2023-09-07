import Image from 'next/image';
import menImage from '../../components/icons/cat-men-.jpg';
import womenImage from '../../components/icons/cat-women.jpg';
import React from 'react';
import Link from 'next/link';

const ProductPage = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center  justify-center   min-h-full md:space-x-12 sm:space-y-4 m-3">
    <Link href={'/search/man'} >
    <div className="relative">
        <Image src={menImage} alt="Man T-shirt" width={500} height={500} />
        <h1 className="absolute top-1/2 left-1/2 mt-28 0transform  bg-black w-80 px-16 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold  text-white">
          T-shirt MAN
        </h1>
      </div>
      </Link>
      <Link href={'/search/female'} >
      <div className="relative">
        <Image src={womenImage} alt="Man T-shirt" width={500} height={500} />
        <h1 className="absolute top-1/2 left-1/2 mt-28 0transform  bg-black w-80 px-10 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold  text-white">
          T-shirt women
        </h1>
      </div>
      </Link>
    </div>
  );
};

export default ProductPage;
