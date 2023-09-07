
import Hero from 'components/front/Hero';
import Newcollouction from 'components/front/Newcollouction';
import { Onsele } from 'components/front/Onsele';
import { Popular } from 'components/front/Popular';
import Reviews from 'components/front/Reviews';
import Spring from 'components/front/Spring';
import Twoiimage from 'components/front/Twoimage';

import Twosimpleimge from 'components/front/Twosimpleimge';

import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
    <Hero/>
    <Popular/>
      <Twoiimage />
      <Suspense>
        <Newcollouction/>
        <Spring/>
     
<Onsele/>
        <Suspense>
          <Reviews/>
          <Twosimpleimge/>
           
             
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
