import React from "react";
import "./BodyHome.css";
import Tecnologias from "./Tecnologias";
import Proyectos from "./Proyectos";
import { ReactComponent as IconProgramming } from "../Assets/vectorProgramming.svg";
import AnimatedSvgBackground from "./AnimatedSvgBackground";

const BodyHome = () => {
  return (
    <div className="Padre-Body">
      {/* Introducción */}
      <div className="Presentacion-Wrapper">
        <section className="presentacion">
          <AnimatedSvgBackground />
          <div className="bg-black/60 p-4 z-10">
            <p className="presentacion-Personal w-[70vw] p-4 line-height-inherit">
              Desde 2021, me especializo en el desarrollo de soluciones web
              modernas, centradas en el rendimiento, la escalabilidad y una
              experiencia de usuario intuitiva.
              <br />
              <br />
              He participado en proyectos personales y profesionales, creando
              interfaces accesibles y APIs robustas.
              <br />
              <br />
              Trabajo con tecnologías como{" "}
              <strong>
                JavaScript, TypeScript, React, Next.js, Node.js
              </strong> y <strong>Express</strong>. Manejo bases de datos
              relacionales y no relacionales como <strong>PostgreSQL</strong>{" "}
              (Sequelize) y <strong>MongoDB</strong> (Mongoose).
              <br />
              <br />
              Me considero autodidacta, proactivo y orientado a resultados.
              Disfruto resolver problemas, optimizar procesos y mantenerme en
              constante aprendizaje.
            </p>
          </div>
        </section>
        <div className="vector-Desarrollador hidden lg:visible">
          <IconProgramming width="100%" height="inherit" />
        </div>
      </div>

      {/* Otras secciones */}
      <Tecnologias />
      <Proyectos />
    </div>
  );
};

export default BodyHome;
