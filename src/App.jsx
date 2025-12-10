import React from "react";
import Layout from "./components/Layout";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CV from "./components/sections/CV";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <About />
              <Experience />
              <Education />
              <Skills />
              <Projects />
              <Contact />
            </Layout>
          }
        />
        <Route path="/CV" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
