import React from "react";
import JSicon from "../../public/JS.png";
import PHP from "../../public/PHP.png";
import ReactIcon from "../../public/React.png";
import SQL from "../../public/SQL.png";
import CSS from "../../public/CSS.svg";
import Tailwind from "../../public/Tailwind.svg";

const MySkill = () => {
  return (
    <div className="my-20 p-10 rounded-xl mx-auto w-fit bg-white">
      <p className="text-2xl font-semibold text-center">My Skills</p>
      <div className="mt-10 flex flex-row gap-14">
        <img src={JSicon} className="size-12" />
        <img src={PHP} className="size-12" />
        <img src={ReactIcon} className="size-12" />
        <img src={SQL} className="size-12" />
        <img src={CSS} className="size-12" />
        <img src={Tailwind} className="size-12" />
      </div>
    </div>
  );
};

export default MySkill;
