import React, { useRef, useEffect } from 'react';
import { meine, chargepoint, iitb, iitm, nasa, disq } from '../../../public/assets';
import Image from 'next/image';

const logos = [meine, chargepoint, iitb, iitm, nasa, disq];

const LogoScroller = () => {
  return (
    <section className='mt-8 flex flex-col items-center'>
      <div className='relative holder max-w-[62rem] overflow-hidden '>
        <div className='logoTrack flex flex-row justify-between overflow-hidden w-[124rem]'>
          {logos.map((logo, index) => (
            <Image src={logo} key={index} className='h-20 grayscale sm:h-20 w-auto' />
          ))}
          {logos.map((logo, index) => (
            <Image src={logo} key={index} className=' h-20 grayscale sm:h-20 w-auto' />
          ))}
        </div>
        <div className='mask absolute top-0 left-0 w-full h-full'>
          
        </div>
      </div>
    </section>
  );
};


export default LogoScroller