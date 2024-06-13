import React from "react";
import ProjectCard from "../Genearl/ProjectCard";

const MyProject = () => {
  return (
    <div className="m-20">
      <p className="text-2xl font-semibold text-center">My Best Projects</p>
      <div className="mt-10 gap-6 grid grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="mt-10 px-6 py-3 rounded-full bg-yellow-300 w-fit mx-auto cursor-pointer  hover:bg-yellow-800 duration-300 hover:text-white">
        View All Products
      </div>
    </div>
  );
};

export default MyProject;
