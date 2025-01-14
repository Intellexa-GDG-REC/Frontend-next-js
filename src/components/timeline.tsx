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
        date: "FEB 14 2025",
        title: "Registration Starts",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa optio suscipit sed earum ratione numquam quas recusandae animi soluta voluptatum, ducimus nesciunt delectus? Sed dolorem aliquid omnis suscipit. Ut, ea?"
    },
    {
        date: "FEB 14 2025",
        title: "Registration Starts",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa optio suscipit sed earum ratione numquam quas recusandae animi soluta voluptatum, ducimus nesciunt delectus? Sed dolorem aliquid omnis suscipit. Ut, ea?"
    },
    {
        date: "FEB 14 2025",
        title: "Registration Starts",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa optio suscipit sed earum ratione numquam quas recusandae animi soluta voluptatum, ducimus nesciunt delectus? Sed dolorem aliquid omnis suscipit. Ut, ea?"
    },
    {
        date: "FEB 14 2025",
        title: "Registration Starts",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa optio suscipit sed earum ratione numquam quas recusandae animi soluta voluptatum, ducimus nesciunt delectus? Sed dolorem aliquid omnis suscipit. Ut, ea?"
    },
    {
        date: "FEB 14 2025",
        title: "Registration Starts",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa optio suscipit sed earum ratione numquam quas recusandae animi soluta voluptatum, ducimus nesciunt delectus? Sed dolorem aliquid omnis suscipit. Ut, ea?"
    },
    {
        date: "FEB 14 2025",
        title: "Registration Starts",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa optio suscipit sed earum ratione numquam quas recusandae animi soluta voluptatum, ducimus nesciunt delectus? Sed dolorem aliquid omnis suscipit. Ut, ea?"
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
        <div className="lg:px-[8%] mt-20">
            <div className="flex justify-center">
                <motion.h2
                    className="block bg-green-500 text-black text-5xl px-6 py-5"
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
            <div className="p-28">
                <div className="relative px-16 grid gap-2">
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
            <div className="absolute top-2 right-2 font-thin">{item.date}</div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="flex justify-center w-8">
                    <div className="rounded-full w-8 h-8 border-4 border-white"></div>
                </div>
                <div className="text-2xl">{item.title}</div>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-start gap-4">
                <div className="flex flex-col items-center w-8 gap-5">
                    {!last && (
                        <>
                            <div className="rounded-full w-3 h-3 bg-white"></div>
                            <div className="rounded-full w-3 h-3 bg-white"></div>
                            <div className="rounded-full w-3 h-3 bg-white"></div>
                            <div className="rounded-full w-3 h-3 bg-white"></div>
                        </>
                    )}
                </div>
                <div className="text-base">
                    {item.description}
                </div>
            </div>
        </motion.div>
    );
};

export default Timeline;