import React from "react";
import NavigarionBar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/About/AboutMe";
import Skills from "./components/Tech-skills/TechSkills";
import Projects from "./components/Projects/Projects";
import TimeLine from "./components/Timeline/Timeline";
import Contact from "./components/contact/Contact";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <NavigarionBar />
      <Intro />
      <AboutMe />
      <Skills />
      <TimeLine />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
};

export default App;
