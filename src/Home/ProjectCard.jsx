import React, { useEffect } from "react";
import { ReactComponent as GithubLogo } from "../Assets/github_Logo.svg";
import { ReactComponent as Web } from "../Assets/Web.svg";
import PaginaSuperheroes from "../Assets/Buscador_Superheroes_Proyecto.png";
import proyectoDeBlogs from "../Assets/Proyecto-Blog.png";
import ProyectoONG from "../Assets/Proyecto_ONG.png";
import proyectoDePokedex from "../Assets/Proyecto_Pokedex.png";
import TodoSobreCafe from "../Assets/Todo_Sobre_Cafe_Proyecto.png";
import TMDB from "../Assets/TMDB.png";
import GlobalNewsFeedback from "../Assets/Global News Feedback.png";
import ProyectoHotelinking from "../Assets/Proyecto_Hotelinking.png";
import ContratosExpress from "../Assets/Contratos-Express.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const obj = [
  ContratosExpress,
  GlobalNewsFeedback,
  ProyectoHotelinking,
  TodoSobreCafe,
  proyectoDePokedex,
  TMDB,
  ProyectoONG,
  PaginaSuperheroes,
  proyectoDeBlogs,
];

const ProjectCard = ({ el, i }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const mobileVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const desktopVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={isMobile ? mobileVariant : desktopVariant}
      className="proyecto-Backend h-[80vh] lg:h-[60vh]"
    >
      <img className="img-Proyecto-Backend" src={obj[i]} alt={el.titulo} />
      <div className="texto-Proyecto-ONG">
        <h2 className="titulo-Proyecto-Backend">{el.titulo}</h2>
        <p className="info-Proyecto-Backend">{el.descripcion}</p>

        <section className="container-tecnologias">
          {el.tecnologias?.map((tecno, index) => {
            let estilo = {};
            if (tecno === "Back") {
              estilo = {
                boxShadow:
                  "rgb(25 255 0) 0px 0px 12px 0px, rgb(172 255 163) 0px 0px 0px 2px",
                color: "rgb(172 255 163)",
              };
            } else if (tecno === "Front") {
              estilo = {
                boxShadow:
                  "rgb(0 135 255) 0px 0px 12px 0px, rgb(121 192 255) 0px 0px 0px 2px",
                color: "rgb(121 192 255)",
              };
            } else if (tecno === "Fullstack") {
              estilo = {
                boxShadow:
                  "rgb(160 35 251) 0px 0px 12px 0px, rgb(211 97 255) 0px 0px 0px 2px",
                color: "rgb(211 97 255)",
              };
            }

            return (
              <p
                key={index}
                style={estilo}
                className="info-Proyecto-Tecnologia text-xs md:text-base lg:text-base"
              >
                {tecno}
              </p>
            );
          })}
        </section>

        <section className="contenedor-GitHub-Proyecto">
          {el.deploy && (
            <a
              className="container-Links"
              href={el.deploy}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Web />
            </a>
          )}
          {el.github && (
            <a
              className="container-Links"
              href={el.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo
                className="github-Vgs"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          )}
        </section>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
