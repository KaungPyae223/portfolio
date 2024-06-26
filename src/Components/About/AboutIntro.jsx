import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const AboutIntro = () => {
  useEffect(() => {
    const aboutIntroTimeLine = gsap.timeline();

    aboutIntroTimeLine.from(".left", {
      delay: 0.5,
      x: -100,
      opacity: 0,
      duration: 1.2
    }, 0) .from(".right", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 1
    }, 0); 
  }, []);
  return (
    <div className="m-20 lg:mx-20 mx-5 grid md:grid-cols-2 grid-cols-1 gap-10 overflow-hidden">
      <div className="left">
        <p className="text-5xl mb-10 leading-[5rem]">
          <span className="p-3 px-6 font-medium bg-yellow-300">
            Introduction
          </span>{" "}
          of My Story
        </p>
        <p className="text-justify mt-10 mb-5">
          <span className="ms-20"></span>Hi my name is Kaung Pyae Aung and
          currently a student at KMD pursuing a diploma in software development.
          I have completed the NCC Level 5 Diploma in Computing and am preparing
          to attend the Bachelor of Computing program at the University of
          Greenwich. Since 2022, I have focused on front-end web development,
          starting my studies at MMSIT, and I advanced my skills in React by
          2023. In 2024, I expanded my expertise into back-end development, also
          at MMSIT.
        </p>
        <p className="text-justify mt-10 mb-5">
          <span className="ms-20"></span>Throughout my academic journey, I have
          worked on various diploma assignments and self-initiated projects,
          gaining practical experience in HTML, CSS, JavaScript, Tailwind CSS,
          and React. While I acknowledge that my current coding practices need
          refinement to meet real-world standards, I am eager to improve through
          junior positions or internships. I am passionate about learning and
          tackling new challenges, continually striving to create and innovate.
        </p>
      </div>
      <div className="flex justify-center right">
        <img
          className="xl:w-1/2 w-full object-cover"
          src="https://images.unsplash.com/photo-1517865288-978fcb780652?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default AboutIntro;
