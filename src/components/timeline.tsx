'use client'

import React from 'react';
import { motion } from "framer-motion"

type TimelineItem = {
    date: string;
    title: string;
    description: string;
}

const timelineData = [
    {
        date: "Feb 10 - Feb 20",
        title: "Game Start",
        description: "Volunteers are finalised and Website goes live."
    },
    {
        date: "Feb 10 - Feb 20",
        title: "Registration Starts",
        description: "Promotional activities and Registration of contributors"
    },
    {
        date: "Feb 20 - Mar 15",
        title: "Learning Phase",
        description: "Online Workshops conducted by outside communities"
    },
    {
        date: "Feb 20 - Mar 30",
        title: "Lets Get Started",
        description: "Open Source contributions phase"
    },
    {
        date: "Apr 10 - Apr 25",
        title: "Finding a winners",
        description: "Prize distribution after announcement of Winners"
    },
    
];

export const Timeline = () => {
    const variant = {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
    }

    return (
        <div className="mt-20 p-4 sm:p-8 md:p-12 lg:px-[8%]">
            <div className="flex justify-center">
                <motion.h2
                    className="block bg-green-500 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-6 py-3 sm:py-5"
                    variants={variant}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        type: "spring",
                        damping: 10,
                        delay: 0.3
                    }}
                    viewport={{ once: true }}
                >
                    {"<Timeline />"}
                </motion.h2>
            </div>
            <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                <div className="relative px-4 sm:px-8 md:px-12 lg:px-16 grid gap-8 sm:gap-6">
                    {timelineData.map((item, index) => (
                        <EachTimeline
                            key={index}
                            item={item}
                            last={index === timelineData.length - 1}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

type EachTimelineProps = {
    item: TimelineItem;
    last: boolean;
    index: number;
}

const EachTimeline = ({ item, last, index }: EachTimelineProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition:{
                duration: 0.5, 
                ease: "easeIn", 
                type: "linear", 
                damping: 10, 
                delay: index * 0.2,
            }
        }
    };

    return (
        <motion.div 
            className="space-y-4 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="absolute top-0 right-0 font-thin text-sm sm:text-base">{item.date}</div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="flex justify-center w-6 sm:w-8">
                    <div className="rounded-full w-6 h-6 sm:w-8 sm:h-8 border-4 border-white"></div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl">{item.title}</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-start gap-4">
                <div className="flex flex-col items-center w-6 sm:w-8 gap-3 sm:gap-5">
                    {!last && (
                        <>
                            <div className="rounded-full w-2 h-2 sm:w-3 sm:h-3 bg-white"></div>
                            <div className="rounded-full w-2 h-2 sm:w-3 sm:h-3 bg-white"></div>
                            <div className="rounded-full w-2 h-2 sm:w-3 sm:h-3 bg-white"></div>
                            <div className="rounded-full w-2 h-2 sm:w-3 sm:h-3 bg-white"></div>
                        </>
                    )}
                </div>
                <div className="text-sm sm:text-base">
                    {item.description}
                </div>
            </div>
        </motion.div>
    );
};

export default Timeline;