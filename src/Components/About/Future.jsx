import React, { useEffect } from "react";
import FuturePlan from "./FuturePlan";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import futureImage from "../../Photos/Future.png"

const Future = () => {
  useEffect(() => {
    const futureTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".futureContainer",
        start: "center 65%"
      },
    });

    futureTimeLine
      .from(
        ".futureLeft",
        {
          x: -100,
          opacity: 0,
          duration: 1.2,
        },
        0
      )
      .from(
        ".futureRight",
        {
          y: 70,
          opacity: 0,
          duration: 0.5,
          stagger: 0.3,
          delay: 0.3,
        },
        0
      );
  }, []);
  return (
    <div className="overflow-hidden m-20 lg:mx-20 mx-5 grid md:grid-cols-2 grid-cols-1 gap-10  futureContainer">
      <div className="flex justify-center futureLeft">
        <img
          className="xl:w-2/3 w-full object-cover"
          src={futureImage}
        />
      </div>
      <div className="row-start-1 md:col-start-2">
        <p className="text-5xl mb-10 futureRight leading-[5rem]">
          My <span className="p-3 px-6 font-medium bg-yellow-300">Future</span>{" "}
          Plans
        </p>
        <div className="mt-16 pe-5">
          <FuturePlan
            title={"To study React Native"}
            text={
              "After studying the React, plan to study React Native for mobile development"
            }
          />
          <FuturePlan
            title={"To study Next JS"}
            text={
              "Have a plan to study react framework Next js for full stack development with react"
            }
          />
          <FuturePlan
            title={"To study Laravel"}
            text={
              "Currently studying the Laravel framework to backend development"
            }
          />
          <FuturePlan
            title={"To study Node js"}
            text={
              "After studying the Laravel, plan to study Node js for other backend framework like Nest JS and Express JS"
            }
          />
          <FuturePlan
            title={"To study ML / AI"}
            text={
              "After studying the full stack web development, plan to start study the machine learning and AI"
            }
          />
          <FuturePlan
            title={"To study Japanese and English language"}
            text={
              "Language is the most important thing in communication. In this currently I am Japanese N5 level and English pre intermediate level. I have a plan to reach Japanese N2 and English is IELTS bands 7.0"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Future;
