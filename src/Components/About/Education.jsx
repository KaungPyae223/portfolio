import React, { useEffect } from "react";
import EducatonTimeLine from "./EducatonTimeLine";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import eductaionImage from "../../Photos/Education.png"

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
    <div className="overflow-hidden m-20 lg:mx-20 mx-5 grid md:grid-cols-2 grid-cols-1 gap-10  pt-3 educationContainer">
      <div className="flex justify-center educationleft">
        <img className="xl:w-2/3 w-full object-cover" src={eductaionImage}/>
      </div>
      <div className="row-start-1 md:col-start-2">
        <p className="text-5xl mb-10 educationUp leading-[5rem]">
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
