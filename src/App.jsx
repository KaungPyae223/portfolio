import React from "react";
import Home from "./Pages/Home";
import Nav from "./Components/Genearl/Nav";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
