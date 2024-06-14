import React, { useEffect } from "react";
import FuturePlan from "./FuturePlan";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

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
    <div className="m-20 pt-3 grid grid-cols-2 gap-10 futureContainer">
      <div className="flex justify-center futureLeft">
        <img
          className="w-2/3 h-fit"
          src="https://images.unsplash.com/photo-1584259097593-a34c6bc53860?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div>
        <p className="text-5xl mb-10 futureRight">
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
