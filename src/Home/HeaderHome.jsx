import React from "react";
import "./HeaderHome.css";
import foto from "../Assets/Foto.jpg";
import { ReactComponent as Github } from "../Assets/vectorGithub.svg";
import { ReactComponent as IconLinkedin } from "../Assets/vectorLinkedin.svg";

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
    <div className="container-Padre-Presentacion">
      <section className="container-Img-Perfil active" >
        <img className="foto-Perfil" src={foto} alt="foto-Perfil" />
        <p className="introduccion-Mia-Corta">
          Soy una persona en constante capacitación, comprometido, empático y
          apasionado con programar de noche.
        </p>
      </section>
      <section className="container-Presentacion-Info active">
        <div className="container-Presentacion-Nombre">
          <h1 className="Hola">Hola!</h1>
          <h2 className="nombre">Soy Alexis Bermúdez</h2>
          <h3 className="desarrolladorFS">{"<Desarrollador Web/>"}</h3>
        </div>
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
