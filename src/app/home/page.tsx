import Detail from "../component/detail";

export default function Home() {
    return (
      <main className="h-screen-full w-screen bg-gradient-to-l  from-gray-900 via-black to-gray-900  p-5 text-white bg-animate-pulse">
      <div>
            {/* Header Start */}
            <div className=' sticky top-5 mt-5  border-solid border-[1px] border-gray-600 border-opacity-30 p-1   bg-[#292828] backdrop-blur-lg text-[18px] bg-opacity-30 w-[80%] mx-auto m-7 rounded-lg'>


                <div className='flex p-4 text-[#AAA7A7] flex-auto'>
                    <div className='flex-0'>How it works?</div>
                    <div className='flex-1 ml-10'>Other Info</div>
                    <div className='flex-auto text-white text-[23px]'>Intellexa X GDG</div>
                    <div className='flex-3 '><div className='bg-white p-1 pr-2 pl-2 font-bold rounded-lg  text-black'> uygug
</div></div>
                
                </div>
            </div>
            
            {/* Header End */}
            {/* Hero Start */}
            
            <div className=' text-center mt-[150px]'>
                <div className='text-white font-bold '>
                    <div className=' text-6xl mb-10'>GitRecQuest v.1.0.0</div>
                    <div className="text-2xl">Gear Up For The Great Git-Together!</div>
                </div>
                <div className='bg-white w-[300px] p-4 mt-10 mx-auto text-[22px] font-bold rounded-lg  text-black' >Begin Your Adventure</div>
            </div>
            {/* Hero End */}
            <div className='mt-[150px]'>
                <div className='text-white  text-center '>
                    <div className='font-bold text-[20px] text-purple-700'>
                        Overview
                    </div>
                    <div className='font-bold text-[44px]'>
                        How it works?
                    </div>
                    <div className='text-gray-400 font-bold text-[17px] '>
                        Everything here to write
                    </div>
                </div>
            <Detail title={"dfgdfg"} dis={"dsfsdfsd"} isleft={true} imageurl={"https://img.freepik.com/premium-photo/south-indian-girl-hoodie-shirt_905085-77.jpg"}/>
            <Detail title={"dfgdfg"} dis={"dsfsdfsd"} isleft={false} imageurl={"https://img.freepik.com/premium-photo/south-indian-girl-hoodie-shirt_905085-77.jpg"}/>
            
            </div>
          
            {/* Footer Start */}
            <div className='h-[200px]  '>
                <div className='text-white end-0 pt-20 text-center text-[25px] font-bold'>Project Name</div>
            <div className='text-white text-center end-0 mt-2 text-[15px] opacity-70'>Made With 💖</div>
            </div>
            {/* Footer End */}


        </div>
       
      </main>
    );
  }
  