import React from "react";
import "./BodyHome.css";
import Tecnologias from "./Tecnologias";
import Proyectos from "./Proyectos";
import { ReactComponent as IconProgramming } from "../Assets/vectorProgramming.svg";

const BodyHome = () => {
  return (
    <div className="Padre-Body">
      <section className="presentacion">
        <div className="texto-Presentacion-P">
          <p className="hola-Mundo">Hola Mundo!</p>
          <p className="presentacion-Personal">
            Soy desarrollador web, inicié en el mundo de la tecnología a
            principios del 2021 lo que me permitio desarrollar y pulir mi
            entorno de trabajo.
            <br />
            <br />
            Tengo conocimiento en bases de datos SQL y NoSQL como PostgreSQL con
            Sequelize y MongoDB con Mongoose, usando Node y Express o PHP y
            Laravel con JWT.
            <br />
            <br />
            He trabajado en proyectos personales y profesionales como Back-End y Front-End utilizando
            tecnologías como JavaScript o Typescript, Docker, React, Next, Redux, Tailwind, Node y Express.
            <br />
            <br />
            Tengo experiencia en Trello y Jira para la gestión del proyecto y la organización de los sprints o 'daily meetings'.
          </p>
        </div>
        <div className="vector-Desarrollador">
          <IconProgramming width="100%" height="inherit" />
        </div>
      </section>
      <Tecnologias />
      <Proyectos />
    </div>
  );
};

export default BodyHome;
