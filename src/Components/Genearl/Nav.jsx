import gsap from "gsap";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  useEffect(() => {

    gsap.from(".navShadow",{opacity:0,y:-100,duration:0.8})
  },[])

  return (
    <div className="py-10 md:py-5 flex justify-center w-full ">
      <div className="bg-white navShadow p-3 rounded-full flex flex-row justify-center items-center gap-10">
        <p className="font-medium px-5 text-lg hidden md:block">Kaung Pyae's portfolio</p>
        <div className="border-e border-e-gray-400 h-full hidden md:block"></div>

        <div className="flex flex-row justify-center items-center gap-5">
          <NavLink
            to={"/"}
            className="px-6 py-2 cursor-pointer rounded-full text-gray-700"
          >
            Home
          </NavLink>
          <NavLink
            to={"/projects"}
            className="px-6 py-2 cursor-pointer rounded-full text-gray-700"
          >
            Projects
          </NavLink>
          <NavLink
            to={"/about"}
            className="px-6 py-2 cursor-pointer rounded-full text-gray-700"
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
