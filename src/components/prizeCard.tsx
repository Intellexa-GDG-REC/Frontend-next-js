"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

export function PrizeCard({title, amount, description} :{
    title: string,
    amount: string,
    description: string
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto md:w-[33rem] h-auto rounded-xl p-6 border bg-grid-white/5">
        <CardItem
          translateZ="50"
          className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-white text-center w-full"
        >
          {title}
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full text-center mt-2 text-neutral-300 md:text-[300px] text-[180px]  tracking-wide bg-gradient-to-bl from-green-300 to-green-500 bg-clip-text text-transparent p-0 font-outwardBlock"
        >
          {amount}
        </CardItem>
        <CardItem
          as="p"
          className="w-full text-center mt-2"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
    // drop-shadow-[0_16px_24px_rgba(96,155,61,0.60)]
  );
}
