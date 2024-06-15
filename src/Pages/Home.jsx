import React from "react";
import HomeIntro from "../Components/Home/HomeIntro";
import PersonalInfo from "../Components/Home/PersonalInfo";
import MySkill from "../Components/Home/MySkill";
import MyProject from "../Components/Home/MyProject";
import Contact from "../Components/Home/Contact";

const Home = () => {
  return (
    <div>
      <HomeIntro />
       <PersonalInfo/> 
       <MySkill/> 
       <MyProject/>
      <Contact/>
    </div>
  );
};

export default Home;
