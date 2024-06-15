import React, { useEffect } from "react";
import ProjectCard from "../Genearl/ProjectCard";
import AlexandarArt from "../../Photos/AlexandarArt.png";
import GG from "../../Photos/G&G.png";
import Valley from "../../Photos/Valley.png";
import AlexaDashboard from "../../Photos/AlexaDashboard.png";
import MyMovie from "../../Photos/MyMovie.png";
import AlexaFunicture from "../../Photos/AlexaFunicture.png";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const body = [
  "This is my first time creating a parallax website and my first use of GSAP. Utilizing GSAP's ScrollTrigger and timeline functions, I developed this website. To achieve this, I first studied GSAP through YouTube tutorials, with many components of the website being inspired by those tutorials.",
  "This is my second React project. This website is created in early of 2023. I make this website for practising the manual api fetching, react content and reducer and to make point of sale project react. So in this website I don't use the redux tool kit and make manually state management.",
  "This website is a website develop by using pure html and css. This website is a one of my school assignment. From this assignment, I can use the HTML CSS well and know the W3C validation and rules to use HTML and CSS.",
  "This is my first dashboard website by using react. The design of the dashboard is inspired from the dribble. The dashboard charts are made with chart js. The design are made with tailwind and daisy ui.",
  "My Movie website is a type of steaming website by using MovieDB api. This website use rdk query to api fetching and state management. The design is also inspired from dribble. In this website, the user can search the movie, sort with the type, popularity and can see the movie details.",
  "At first I want to request that this website cannot host because I use JSON server to run this website but the video link is added. In this website use Rtk to state management and Axios to fetching the data. This website contains the some POS features like add to craft and others.",
];

const MyProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(".homeProjectTitle", {
      scrollTrigger: {
        trigger: ".homeProjectTitle",
        start: "center center",
      },
      opacity: 0,
      duration: 0.6,
    });

    gsap.from(".project", {
      scrollTrigger: {
        trigger: ".project",
        start: "25% 75%",
      },
      opacity: 0,
      y: 150,
      duration: 1,
      stagger: 0.6,
    });
    gsap.from(".homeProjectViewMore", {
      scrollTrigger: {
        trigger: ".homeProjectViewMore",
        start: "center 75%",
      },
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="lg:m-20 m-5 my-10">
      <p className="text-2xl font-semibold text-center homeProjectTitle">
        My Best Projects
      </p>
      <div className="mt-10 gap-6 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <ProjectCard
          photo={AlexandarArt}
          title={"Alexandar Art website"}
          type={"parallax"}
          language={"React, GSAP, Tailwind"}
          body={body[0]}
          sourceCode={"https://github.com/KaungPyae223/parallax"}
          demon={"https://splendid-pithivier-dc9e3e.netlify.app/"}
        />
        <ProjectCard
          photo={GG}
          title={"Grab & Go"}
          type={"POS"}
          language={"React, Framer Motion, Tailwind, Fakestore api"}
          body={body[1]}
          demon={"https://bright-klepon-c3516e.netlify.app/"}
          sourceCode={"https://github.com/KaungPyae223/productselling"}
        />
        <ProjectCard
          photo={Valley}
          title={"Valley Vintage Car Club"}
          type={"Club"}
          language={"HTML, CSS"}
          body={body[2]}
          demon={"https://bucolic-peony-6ddc87.netlify.app/"}
          sourceCode={"https://github.com/KaungPyae223/Assigment"}
        />
        <ProjectCard
          photo={AlexaDashboard}
          title={"Alexa Mobile Phone Retail Dashboard"}
          type={"Dashboard"}
          language={"React, chart js, tailwind, daisy ui"}
          body={body[3]}
          demon={"https://sparkling-pika-c68167.netlify.app/"}
          sourceCode={"https://github.com/KaungPyae223/alexaDashboard"}
        />

        <ProjectCard
          photo={MyMovie}
          title={"My Movie"}
          type={"Streaming"}
          language={"React, tailwind, preline ui"}
          body={body[4]}
          demon={"https://monumental-griffin-0034af.netlify.app/"}
          sourceCode={"https://github.com/KaungPyae223/mywebproject"}
        />
        <ProjectCard
          photo={AlexaFunicture}
          title={"Alexa Furniture"}
          type={"Company's portfolio"}
          language={"React, tailwind, material ui"}
          body={body[5]}
          demon={"https://www.youtube.com/watch?v=pQej76x3Ync&t=10s"}
          sourceCode={"https://github.com/KaungPyae223/funicture"}
        />
      </div>
      <div
        onClick={() => navigate("/projects")}
        className="homeProjectViewMore mt-10 px-6 py-3 rounded-full bg-yellow-300 w-fit mx-auto cursor-pointer  hover:bg-yellow-800 duration-300 hover:text-white"
      >
        View All Products
      </div>
    </div>
  );
};

export default MyProject;
