'use client'

import React from 'react';
import { motion } from "framer-motion";
import { Rocket, Users, BookOpen, Code, Trophy } from "lucide-react";

type TimelineItem = {
    date: string;
    title: string;
    description: string;
    icon: React.ReactNode;
};

const timelineData: TimelineItem[] = [
    {
        date: "Feb 10 - Feb 20",
        title: "Kickoff & Website Launch",
        description: "Finalizing volunteers and launching the event website.",
        icon: <Rocket className="text-green-400" />
    },
    {
        date: "Feb 10 - Feb 20",
        title: "Open Registrations",
        description: "Launching promotional activities and onboarding contributors.",
        icon: <Users className="text-blue-400" />
    },
    {
        date: "Feb 20 - Mar 15",
        title: "Learning & Workshops",
        description: "Hosting online workshops by external communities.",
        icon: <BookOpen className="text-yellow-400" />
    },
    {
        date: "Feb 20 - Mar 30",
        title: "Hands-On Contribution",
        description: "Engaging participants in open-source contributions.",
        icon: <Code className="text-purple-400" />
    },
    {
        date: "Apr 10 - Apr 25",
        title: "Winners & Celebrations",
        description: "Announcing winners and distributing prizes.",
        icon: <Trophy className="text-red-400" />
    },
];

export const Timeline = () => {
    return (
        <div className="mt-20 p-4 sm:p-8 md:p-12 lg:px-[8%] relative">
            <div className="flex justify-center">
                <motion.h2
                    className="block bg-green-500 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-6 py-3 sm:py-5 rounded-lg"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Event Timeline
                </motion.h2>
            </div>
            <div className="relative flex flex-col items-center gap-12 mt-12">
                <div className="absolute w-1 bg-gray-400 h-full left-1/2 transform -translate-x-1/2"></div>
                {timelineData.map((item, index) => (
                    <EachTimeline key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

type EachTimelineProps = {
    item: TimelineItem;
    index: number;
};

const EachTimeline = ({ item, index }: EachTimelineProps) => {
    const isLeft = index % 2 === 0;
    return (
        <motion.div 
        className={`relative flex  items-center w-full max-w-2xl ${isLeft ? 'justify-start' : 'justify-end'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: index * 0.2 }}
        viewport={{ once: true }}
    >
        <div className="relative  flex items-center">
        {!isLeft?<div className="w-[50px] h-[50px] ml-5 flex justify-center items-center rounded-[20px] bg-gray-800 border-4 border-white">
                {item.icon}
            </div>:<div>
            </div>}
        </div>
        
        <div className={`bg-gray-900 p-4  rounded-[20px] shadow-lg text-white w-64 ${isLeft ? 'mr-4' : 'ml-4'}`}
            style={{ textAlign: isLeft ? 'left' : 'right' }}>
            <div className="text-sm text-gray-300">{item.date}</div>
            <div className="text-lg font-semibold mt-1">{item.title}</div>
            <div className="text-sm mt-2">{item.description}</div>
            
        
    </div>
    {isLeft?<div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-gray-800 border-4 border-white">
                {item.icon}
            </div>:<div>
            </div>}
    </motion.div> 
    );
};

export default Timeline;
