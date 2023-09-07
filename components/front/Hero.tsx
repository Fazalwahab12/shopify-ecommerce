import Image from 'next/image';
import React from 'react';
import hero from '../../components/icons/hero.png';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className={"flex  md:flex-row sm:flex-col min-h-max items-center justify-center bg-[#faedeb] m-2"}>
             <div className=" md:mx-16 w-100">
                <h2 className="font-normal text-left px-5 md:px-5 pb-2 pt-4 md:pb-4 ">WOMEN</h2>
                <h1 className="text-3xl md:text-5xl font-extrabold text-center md:text-right">
                    Slick. Modern
                </h1>
                <h1 className="text-3xl md:text-5xl px-5 md:px-10 font-extrabold text-center">Awesome.</h1>
                <Link href={'/search'}  className="mx-5 md:mx-14 mb-6 mt-10 md:mt-4 bg-green-500 hover:bg-green-600 px-4 md:px-6 text-white py-1 md:py-2 rounded-full">
                    Shop Collection
                </Link >
            </div>

            <div className="  lg:mt-28 ">
                <div className="bg-white rounded-full md:ml-3 md:mr-20 lg:-mt-24 sm:mt-6">
                    <Image src={hero} alt="Product Image" width={500} height={650} />
                </div>
            </div>
        </div>
    );
};

export default Hero;