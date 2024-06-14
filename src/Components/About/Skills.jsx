import { Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const skills = () => {
  useEffect(() => {
    const skillTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".skillsContainer",
        start: "center 65%",
      },
    });

    skillTimeLine
      .from(
        ".skillLeft",
        {
          x: -100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.3,
        },
        0
      )
      .from(
        ".skillRight",
        {
          x: 100,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
        },
        0
      );
  }, []);

  return (
    <div className="m-20 grid grid-cols-2 gap-10 pt-3 skillsContainer overflow-hidden">
      <div>
        <p className="text-5xl mb-10 skillLeft">
          My <span className="p-3 px-6 font-medium bg-yellow-300">Skills</span>{" "}
          Description
        </p>
        <div className="mt-16 pe-5">
          <div className="border-b border-b-gray-300 skillLeft">
            <Typography variant="h6" color="blue-gray" className="leading-none">
              HTML
            </Typography>
            <Typography
              variant="small"
              color="gary"
              className="font-normal my-3 text-gray-600"
            >
              HTML is basic of a web development and I know the most of HTML
              elements and in diploma assignments have a knowledge of W3C
              validation.
            </Typography>
          </div>
          <div className="mt-5 border-b border-b-gray-300 skillLeft">
            <Typography variant="h6" color="blue-gray" className="leading-none">
              CSS
            </Typography>
            <Typography
              variant="small"
              color="gary"
              className="font-normal my-3 text-gray-600"
            >
              In diploma assignments, I made a website only using a CSS and have
              knowledge of most use CSS properties.
            </Typography>
          </div>
          <div className="mt-5 border-b border-b-gray-300 skillLeft">
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Java Script
            </Typography>
            <Typography
              variant="small"
              color="gary"
              className="font-normal my-3 text-gray-600"
            >
              From MMSIT I have studied the vanilla js well and I think I can
              use the java script well.
            </Typography>
          </div>
          <div className="mt-5 border-b border-b-gray-300 skillLeft">
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Tailwind
            </Typography>
            <Typography
              variant="small"
              color="gary"
              className="font-normal my-3 text-gray-600"
            >
              The mostly use CSS library is tailwind and have experience of
              using popular tailwind plugins like material tailwind, preline,
              daisy ui.
            </Typography>
          </div>
          <div className="mt-5 border-b border-b-gray-300 skillLeft">
            <Typography variant="h6" color="blue-gray" className="leading-none">
              React
            </Typography>
            <Typography
              variant="small"
              color="gary"
              className="font-normal my-3 text-gray-600"
            >
              React is the I mostly used javascript framework. I have been used
              the popular React libraries such as GSAP, Framer motion, chartjs
              and others. I require many knowledge to expert the react but I
              think I can make the project react well.
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex justify-center skillRight">
        <img
          className="w-2/3 h-fit"
          src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default skills;
