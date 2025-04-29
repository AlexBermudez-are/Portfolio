import React from "react";
import { motion } from "framer-motion";
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
    <div className="container-Padre-Tecnologias" id="tecnologias">
      <h2 className="tecnologias-Usadas">TECNOLOGÍAS</h2>
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
  const color = el[2];

  return (
    <motion.div
      className="tecnologías"
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        boxShadow: `${color} 0px 10px 36px 0px, ${color} 0px 0px 0px 2px`,
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: `${color} 0px 10px 36px 0px, ${color} 0px 0px 0px 2px`,
      }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
    >
      <img className="icono-Tec" src={el[0]} alt={el[1]} />
      <motion.span
        className="nombre-Tecno"
        style={{ color: color }}
        whileHover={{ color: color }}
        whileTap={{ color: color }}
      >
        {el[1]}
      </motion.span>
    </motion.div>
  );
};
