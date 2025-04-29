import React from "react";
import "./HeaderHome.css";
import foto from "../Assets/Foto.jpg";
import { ReactComponent as Github } from "../Assets/vectorGithub.svg";
import { ReactComponent as IconLinkedin } from "../Assets/vectorLinkedin.svg";
import { motion } from "framer-motion";

const redirect = (validator) => {
  const externalUrlGithub = "https://github.com/AlexBermudez-are",
    externalUrlLinkedin =
      "https://www.linkedin.com/in/edwin-alexis-berm%C3%BAdez-0379621b6/";
  validator
    ? window.open(externalUrlGithub, "_blank")
    : window.open(externalUrlLinkedin, "_blank");
};

const HeaderHome = () => {
  return (
    <div
      className="flex flex-col h-screen justify-evenly items-center w-[90%] mx-auto mt-[10%]"
      id="inicio"
    >
      <section className="container-Img-Perfil active w-[60vw]">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="profile-Pic"
          src={foto}
          alt="profile-Pic"
        />
        <p className="my-Short-Introduction">
          Desarrollador full stack freelance.
          <br />
          Me especializo en construir plataformas web eficientes y seguras,
          integrando APIs, pagos online y bases de datos robustas.
        </p>
      </section>
      <section className="container-Presentacion-Info active w-full">
        <motion.div
          className="container-Presentacion-Nombre"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="Hola">Hola, soy Alexis</h1>
          <h3 className="desarrolladorFS">
            {"<Desarrollador Web Fullstack />"}
          </h3>
        </motion.div>
        <div className="redireccion-Github-Linkedin">
          <button
            className="github-Button-Redirect"
            onClick={() => {
              redirect(true);
            }}
          >
            <Github className="logo-Github" />
          </button>
          <a href="/CV" className="descargar-CV" target="_blank">
            Descargar Cv
          </a>
          <button
            className="linkedin-Button-Redirect"
            onClick={() => {
              redirect(false);
            }}
          >
            <IconLinkedin className="logo-Linkedin" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeaderHome;
