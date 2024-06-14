import React from "react";
import EducatonTimeLine from "./EducatonTimeLine";

const Education = () => {
  return (
    <div className="m-20 pt-3 grid grid-cols-2 gap-10">
      <div className="flex justify-center">
        <img className="w-2/3 h-fit" src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      <div>
        <p className="text-5xl mb-10">
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
