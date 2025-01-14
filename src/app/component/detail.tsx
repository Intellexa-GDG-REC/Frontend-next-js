import Image from 'next/image';

interface DetailProps {
  title: string; 
  dis: string; 
  imageurl?: string; 
  isleft?: boolean;
}

export default function Detail({ title, dis, imageurl,isleft }: DetailProps) {
  return (
    <main>
      {/* Overview Start */}
      {isleft ?(<div className="flex mt-20 pr-[10%] pl-[10%]">
        {/* Image Section */}

          {imageurl ? (
            <Image
            className='w-1/2 h-[22rem] rounded-md '
              src={imageurl}
              alt="Detail Image"
              width={500}
              height={500}
              
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white">
              No Image Available
            </div>
          )}
        

        {/* Text Section */}
        <div className="w-1/2 h-[300px] text-white text-justify ml-10">
          <div className="text-[40px] font-bold">{title}</div>
          <div className="font-thin text-[20px] mt-4">{dis}</div>
        </div>
      </div>):(  <div className='flex mt-20 pr-[10%] pl-[10%]'>

<div className='w-1/2 h-[300px] text-white text-justify me-10'>
    <div className='text-[40px] font-bold'>Title name</div>
    <div className='font-thin text-[20px]'>Are you planning on buying a new car? Well, we know that with so many car options available out there,</div>
</div>

          {imageurl ? (
            <Image
            className='w-1/2 h-[22rem] rounded-md '
              src={imageurl}
              alt="Detail Image"
              width={500}
              height={500}
              
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white">
              No Image Available
            </div>
          )}
        </div>
) }
      
      {/* Overview End */}
    </main>
  );
}
