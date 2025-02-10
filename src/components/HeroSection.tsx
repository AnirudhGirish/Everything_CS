import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
         <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"/>
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className='mt-20 md:mt-0 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Everything is Computer Science</h1>
            <p className='mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minima blanditiis repellendus cupiditate eum officiis labore illum vitae hic aperiam. Ipsum quisquam laudantium fugiat minima maiores, facilis odit harum corporis libero ducimus repellat similique dicta.</p>
            <div className='mt-4'>
                <Link href={"/courses"}>
                    <Button duration={5000}>Explore Courses</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection