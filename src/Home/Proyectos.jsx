import React from "react";
import "./Proyectos.css";
import ProjectCard from "./ProjectCard";
import dataProject from "./dataProject";

const Proyectos = () => {
  return (
    <div
      className="padre-Proyectos mt-[40vh] lg:mt-0 pt-[10rem]"
      id="proyectos"
    >
      <h2 className="proyectos-Titulo">PROYECTOS</h2>
      <section className="Contenedor-Proyectos mb-20">
        {dataProject.map((el, i) => (
          <ProjectCard el={el} i={i} key={i} />
        ))}
      </section>
    </div>
  );
};

export default Proyectos;
