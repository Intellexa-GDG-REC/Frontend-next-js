'use client';
import Image from 'next/image'
import React, { useEffect } from 'react';

export default function NotFound() {
  const [count, setcount] = React.useState(0);
  const [currentImage, setcurrentImage] = React.useState("/dog.gif");
  const [showBlast, setShowBlast] = React.useState(false);

  // Image options
  const images = ["/dog.gif","/girl.gif","/girl2.gif"];

  function handleClick() {
    setcount(count+1);
  
    if (count > 9) {
      
      const randomIndex = Math.floor(Math.random() * images.length);
      setcurrentImage(images[randomIndex]);
      setShowBlast(true);
    setTimeout(() => setShowBlast(false), 1000); // Hide blast after 1 second
      //console.log(currentImage)
      setcount(0); 
    }
  }
  


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black p-5">
     
      <Image
      onClick={handleClick}
      src={currentImage}
      width={300}
      height={300}
      alt="Picture of the author"
      className='cursor-pointer'
    />
     <p className="mb-2 mt-1 text-[10px] text-gray-600">
      Click the image, and every 10 clicks unlock a  surprise.
      </p>
      <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-300">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/home"
        className="text-white mt-10 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        
        Go Back Home
      </a>
     
      {showBlast && (
        <div className="absolute i inset-0 animate-blast">
           <Image
      src="/blast.gif"
     layout="fill"
      alt="Picture of the author"
      className='cursor-pointer'
    />
        </div>
      )}
    </main>
  );
}
