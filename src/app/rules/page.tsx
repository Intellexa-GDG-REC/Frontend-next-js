'use client';
import Image from 'next/image'
export default function Rules() {
    return (
      <div className="h-screen-full w-screen bg-gradient-to-l  from-black via-gray-900 to-black  p-5 text-white ">
    
    <div className=" lg:w-1/3 md:w-1/3 mx-auto">
   

    {/* GDG Logo Section with Gradient Glow */}
    <div className="relative group mt-10 ">
      <div
        className="absolute -inset-1 bg-gradient-to-r animate-pulse from-red-600 to-violet-600 rounded-[30px] blur opacity-55 opacity-100 transition duration-1000 duration-200"
      ></div>
      <div className="relative">
        <Image
          src="/GitRecQuest.svg"
          className="mx-auto rounded-[31px] shadow-2xl  pointer-events-none "
          width={500}
          height={400}
          alt="GDG Logo"
        />
      </div>
    </div>
  </div>
          
        <div className="max-w-4xl border-2 border-gray-400  backdrop-blur-lg w-full rounded-lg mt-10 mx-auto p-6">
          <h1 className="text-5xl font-bold mb-4">Rules And Regulations </h1>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-lg">
            The open source event is judged as a single person event, there will be no formation of teams of any sort.
            </li>
            <li className="text-lg">
            Each participant will disclose their active github account at the beginning of the event to the judges and maintainers of the repositories.

            </li>
            <li className="text-lg">
            Each participant will ensure that commits are being made every once in a while, any participant judged to be stagnant for more than a week at a time, will be disqualified from the open source event , and thereby lose any chances to accumulate any awards. </li>
            <li className="text-lg">
            Each repository will have a maintainer, who will overlook the repository and ensure that everything with respect to their repository is proper at all times during the event's duration.

            </li>
            <li className="text-lg">
            Additionally, each repository will be themed [Web Dev, App Dev etc] , and each repository will have a set number of questions, which will be of varying difficulties in order to vary the event and its judging further.
            </li>
            <li className="text-lg">
            At the end of the event, the top 10 at the leaderboard, whoever has accumulated and achieved the most and highest number of points from the repositories in a free and fair nature will be rewarded. </li>
            <li className="text-lg">
            Additionally , beginners to the event will also be awarded a “beginner badge” to commend their courage and enthusiasm to work in an event of this nature.</li>
            <li className="text-lg">
            Disqualification can also be judged and given out in the case that the participant(s) are cheating outside the bounds of the competition i.e seeking help et al. with rewards and prizes also being scrapped from them if necessary.</li>
            <li className="text-lg">
            The maintainers can be of internal or external nature but need to maintain strict professionalism throughout all times of the event. </li>
            <li className="text-lg">
            The final evaluation period will begin in month 3 of the event where the maintainers of the repositories will have to carry out the following and ensure  </li>
            <li className="text-lg">
            Code quality, completeness, and functionality. 
            </li>
            <li className="text-lg">
            Adherence to project goals and milestones. 
            </li>
            <li className="text-lg">
            Communication 
            </li>
         
          </ul>
        </div>
      </div>
    );
  }
  