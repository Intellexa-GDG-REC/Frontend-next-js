import React from 'react'
import { Footer } from '@/components/footer'
import { motion } from "framer-motion";
import Image from 'next/image';
export default function form() {
  return (
    <div className='w-full h-full' >
    <div className="lg:flex  justify-center items-center gap-2">
            
            <Image
                    alt="loading"
                    src={'/wtm_white.png'}
                    className="p-5 mx-auto  rounded-[20px]"
                    width={170}
                    height={300}
                  />
            <Image
                    alt="loading"
                    src={'/gdg_white.png'}
                    className="p-5 mx-auto  rounded-[20px]"
                    width={300}
                    height={400}
                  />
            <Image
                    alt="loading"
                    src={'/college.webp'}
                    className="p-5 mx-auto"
                    width={300}
                    height={400}
                  />
                     <Image
                    alt="loading"
                    src={'/image-removebg-preview.png'}
                    className="p-5 mx-auto"
                    width={300}
                    height={400}
                  />
            </div>
    <div className='w-full  h-full sm:p-2  lg:p-10'  data-tf-live="01JM7Z78RDJGXPM9887AXCAWF6"></div><script src="//embed.typeform.com/next/embed.js"></script>\
    
 
    </div>
  )
}
