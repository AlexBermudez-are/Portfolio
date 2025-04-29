import React, { useState } from "react";
import { motion } from "framer-motion"; // Importa framer-motion
import cssIcon from "../Assets/css_icon.png";
import htmlIcon from "../Assets/html_icon.png";
import jsIcon from "../Assets/javascript_icon.png";
import reactIcon from "../Assets/react_icon.png";
import reduxIcon from "../Assets/redux_icon.png";
import bootstrap from "../Assets/Bootstrap.png";
import git from "../Assets/Git.png";
import tailwind from "../Assets/Tailwind.png";
import node from "../Assets/IconNode.svg";
import postgres from "../Assets/Postgresql_elephant.png";
import sequelize from "../Assets/sequelize_original_logo_icon_146348.svg";
import mongodb from "../Assets/mongodb.png";
import php from "../Assets/vectorPhp.png";
import laravel from "../Assets/laravel_icon.png";
import "./Tecnologias.css";
import { useInView } from "react-intersection-observer";

const Tecnologias = () => {
  const iconos = [
    [node, "Node", "#38f737cf"],
    [jsIcon, "Javascript", "#e0ed32f0"],
    [htmlIcon, "HTML 5", "#f76e37"],
    [reactIcon, "React", "#37f5f7cf"],
    [reduxIcon, "Redux", "#9962ffcf"],
    [cssIcon, "CSS 3", "#58d7ffcf"],
    [git, "Git", "#ff1a00cf"],
    [tailwind, "TailwindCSS", "#38edb4cf"],
    [bootstrap, "Bootstrap", "#d2a0ffcf"],
    [postgres, "Postgres", "#5497ffcf"],
    [sequelize, "Sequelize", "#007bffcf"],
    [php, "Php", "#6e76ef"],
    [mongodb, "MongoDB", "#00ff51cf"],
    [laravel, "Laravel", "#ff1a00cf"],
  ];

  return (
    <div className="container-Padre-Tecnologias">
      <h2 className="tecnologias-Usadas" id="tecnologias">
        TECNOLOGÍAS
      </h2>
      <div className="Padre-Tecnologias">
        <section className="lista-Iconos">
          {iconos.map((el, index) => (
            <IconosTecno el={el} key={index} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tecnologias;

const IconosTecno = ({ el, index }) => {
  const [hovered, setHovered] = useState("#0000");

  // Configuración de Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activar la animación una vez
    threshold: 0.3, // Cuándo se activa la animación (cuando el 30% del elemento es visible)
  });

  return (
    <motion.div
      ref={ref} // Vincula el observer con el div
      className="tecnologías"
      key={index}
      onMouseEnter={() => {
        setHovered(el[2]);
      }}
      onMouseLeave={() => {
        setHovered("#0000");
      }}
      style={{
        boxShadow: `${hovered} 0px 10px 36px 0px, ${hovered} 0px 0px 0px 2px`,
      }}
      initial={{ y: 20, opacity: 0 }} // Comienza desde abajo y es transparente
      animate={{ y: inView ? 0 : 20, opacity: inView ? 1 : 0 }} // Aparece y se desplaza cuando entra en la vista
      transition={{ type: "spring", stiffness: 100, damping: 25 }} // Configura la transición
    >
      <img className="icono-Tec" src={el[0]} alt={el} />
      <span style={{ color: el[2] }} className="nombre-Tecno">
        {el[1]}
      </span>
    </motion.div>
  );
};
