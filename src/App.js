import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Element } from "react-scroll";
import Contact from "./components/Contact/Contact";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Element name="home">
          <section id="home">
            <Home />
          </section>
        </Element>
        <Element name="about">
          <section id="about">
            <About />
          </section>
        </Element>
        <Element name="project">
          <section id="project">
            <Projects />
          </section>
        </Element>
        <Element name="resume">
          <section id="resume">
            <Resume />
          </section>
        </Element>
        <Element name="contact">
          <section id="contact">
            <Contact />
          </section>
        </Element>
        <Footer />
      </div>
    </>
  );
}

export default App;
