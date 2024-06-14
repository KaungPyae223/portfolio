import React, { useEffect } from "react";
import EducatonTimeLine from "./EducatonTimeLine";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useEffect(() => {
    const educationTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".educationContainer",
        start: "center 65%",
      }
    });

    educationTimeLine.from(".educationleft", {
      x: -100,
      opacity: 0,
      duration: 1.2
    }, 0) .from(".educationUp", {
      y: -70,
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
      delay: 0.3
    }, 0) 
  }, []);
  return (
    <div className="overflow-hidden m-20 pt-3 grid grid-cols-2 gap-10 educationContainer">
      <div className="flex justify-center educationleft">
        <img className="w-2/3 h-fit" src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      <div>
        <p className="text-5xl mb-10 educationUp">
          My{" "}
          <span className="p-3 px-6 font-medium bg-yellow-300">Education</span>{" "}
          Journey
        </p>
        <EducatonTimeLine/>
      </div>
    </div>
  );
};

export default Education;
