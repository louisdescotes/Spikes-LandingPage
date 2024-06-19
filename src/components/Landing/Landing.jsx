import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Landing = () => {
  gsap.registerPlugin(useGSAP);

const container = useRef();

useGSAP(
  () => {
      gsap.to('.text', { 
        delay: .2,
        y: 0, 
        stagger: .1,
        ease: "power3.out",
        duration: 1,
      });
  },
  { scope: container }
);
  return (
    <main ref={container} className="bg-hero bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center w-full pt-44 pb-18">
      <div className='w-4/6 flex gap-5 flex-col items-center'>
        <p className="text -translate-y-12 text-bones text-base max-w-fit border border-[#FFFFFF4D] rounded-[62px] py-2 px-5">We just raised $20M in Series B. Learn more</p>
        <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text -translate-y-12 bg-clip-text bg-gradient-to-t from-[#ECECEC00] to-[#ECECEC] text-transparent inline-block text-[80px] leading-[80px]">Modern analytics <br />for the modern world</h2>
            <p className="text -translate-y-12 w-4/6 text-[#ECECECA6] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
        </div>
        <div className="text -translate-y-12 flex gap-2 text-base mt-4">
            <a className="rounded-[60px] text-dark bg-bones py-3 px-6" href="">Download the app</a>
            <a className="text-bones rounded-[60px] border border-bones py-3 px-6 hover:bg-bones hover:text-dark transition-colors duration-500" href="">Talk to an expert</a>
        </div>
        <div>
            <img className=' hover:scale-110 duration-500 cursor-pointer' src="/landing.png" alt="Graphique de visite du site"/>
        </div>
      </div>
    </main>
  )
}

export default Landing
