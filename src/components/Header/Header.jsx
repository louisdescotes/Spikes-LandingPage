import React, { useRef } from "react";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
        gsap.to('.header', { 
          y: 0, 
          ease: "power2.out",
          duration: 1,
        });
    },
  );
  return (
    <header className="header -translate-y-10 fixed top-0 mt-8 flex justify-center w-full h-fit mx-auto text-base z-30">
      <nav className="w-full max-w-[90%] flex items-center justify-between rounded-3xl px-10 mx-auto h-16 bg-[#0B081C80]">
        <div>
          <img src="/logo.png" alt="logo Vaultflow" />
        </div>
        <div className="flex gap-8 ">
          <a className="text-bones hover:scale-105 duration-150 ease-inOut" href="">
            Features
          </a>
          <a className="text-bones hover:scale-105 duration-150 ease-in" href="">
            Pricing
          </a>
          <a className="text-bones hover:scale-105 duration-150 ease-in" href="">
            About us
          </a>
        </div>
        <div>
          <a className="bg-bones rounded-[50px] px-5 py-2 border" href="">
            Download the app
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
