import React from "react";
import "./BodyHome.css";
import Tecnologias from "./Tecnologias";
import Proyectos from "./Proyectos";
import { ReactComponent as IconDeveloper } from "../Assets/developer_activity.svg";
import { ReactComponent as IconControll } from "../Assets/vectorControl.svg";
import { ReactComponent as IconProgramming } from "../Assets/vectorProgramming.svg";

const BodyHome = () => {
  return (
    <div className="Padre-Body">
      <section className="presentacion">
        <div className="texto-Presentacion-P">
          <p className="hola-Mundo">Hola Mundo!</p>
          <p className="presentacion-Personal">
            Soy desarrollador web, inicié en el mundo de la tecnología a
            principios del 2021 lo que me permitio desarrollar y pulir mi entorno de trabajo. 
            <br />
            Tengo conocimiento en bases de datos SQL y
            NoSQL, como Postgres con Sequelize y MongoDB con Mongoose, usando Node, Express y JWT.
            <br />
            <br />
            He trabajado en proyectos personales y profesionales utilizando
            tecnologías como JavaScript, React, Next, Redux, CSS, Tailwind y Bootstrap.
            <br/>
            Y usando Scrum como metodología ágil e implementándola con Trello o Jira
          </p>
        </div>
        <div className="vector-Desarrollador">
            <IconProgramming width="100%" height="inherit"/>
        </div>
      </section>
      <Tecnologias />
      <Proyectos />
    </div>
  );
};

export default BodyHome;
