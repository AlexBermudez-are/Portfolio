/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import cssIcon from "../../assets/projects/css_icon.png";
import htmlIcon from "../../assets/projects/html_icon.png";
import jsIcon from "../../assets/projects/javascript_icon.png";
import reactIcon from "../../assets/projects/react_icon.png";
import reduxIcon from "../../assets/projects/redux_icon.png";
import bootstrap from "../../assets/projects/Bootstrap.png";
import git from "../../assets/projects/Git.png";
import tailwind from "../../assets/projects/Tailwind.png";
import node from "../../assets/projects/IconNode.svg";
import postgres from "../../assets/projects/Postgresql_elephant.png";
import sequelize from "../../assets/projects/sequelize_original_logo_icon_146348.svg";
import mongodb from "../../assets/projects/mongodb.png";
import php from "../../assets/projects/vectorPhp.png";
import laravel from "../../assets/projects/laravel_icon.png";

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
    <div className="w-full py-20 md:py-28 bg-[var(--purple-bg-color)]">
      <h2
        id="skills"
        className="text-center mx-auto text-4xl md:text-5xl font-bold text-[var(--main-lettering-color)] mb-16 p-4"
      >
        Habilidades Técnicas
      </h2>

      <div className="mx-auto w-[90%] md:w-[80%] bg-[var(--purple-bg-color)] rounded-xl p-8 md:p-12 shadow-lg">
        <section
          className="
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
            gap-8 sm:gap-10 lg:gap-12
          "
        >
          {iconos.map((el, i) => (
            <IconosTecno el={el} key={i} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tecnologias;

// ----------------------------------------------------
// Componente Ícono Individual (hover + glow + motion)
// ----------------------------------------------------

const IconosTecno = ({ el }) => {
  const [hovered, setHovered] = useState("#0000");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(el[2])}
      onMouseLeave={() => setHovered("#0000")}
      style={{
        boxShadow: `${hovered} 0px 10px 36px 0px, ${hovered} 0px 0px 0px 2px`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20,
      }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="
        flex flex-col items-center justify-center
        cursor-pointer rounded-xl
        transition-all duration-300
        hover:scale-110 p-4 sm:p-6
      "
    >
      <img
        src={el[0]}
        alt={el[1]}
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
      />

      <span
        style={{ color: el[2] }}
        className="mt-3 text-lg sm:text-xl font-semibold text-center"
      >
        {el[1]}
      </span>
    </motion.div>
  );
};
