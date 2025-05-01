import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Github } from "../Assets/vectorGithub.svg";
import { ReactComponent as IconLinkedin } from "../Assets/vectorLinkedin.svg";
import "./Navbar.css";
import { Code, FileDown, Folder, Home } from "lucide-react";

const Navbar = ({ state }) => {
  const arr = [
    { icon: Home, label: "Inicio", id: "inicio" },
    { icon: Code, label: "Tecnologías", id: "tecnologias" },
    { icon: Folder, label: "Proyectos", id: "proyectos" },
  ];

  const [navbar, setNavbar] = useState("container-Main");
  const [menuControll, setmenuControll] = useState(false);
  const refDespegable = useRef();

  const mq1025 = window.matchMedia("(min-width: 1025px)");
  const mq768 = window.matchMedia("(min-width: 768px)");
  // const mq320 = window.matchMedia("(min-width: 320px)");

  useEffect(() => {
    if (mq1025.matches || mq768.matches) {
      state ? setNavbar("container-Main active") : setNavbar("container-Main");
    } else {
      setNavbar("container-Main mq425");
    }
  }, [state, mq1025.matches, mq768.matches]);

  function btnFunction(e) {
    const sectionId = e.currentTarget.dataset.section;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Solo cerrar menú hamburguesa si estamos en vista MOBILE (<768px)
    if (!mq768.matches) {
      setNavbar("container-Main mq425");
      if (refDespegable.current) {
        refDespegable.current.className = "hamburger hamburger--squeeze";
      }
      setmenuControll(false);
    }
  }

  const menuDespegable = () => {
    if (!menuControll) {
      refDespegable.current.className =
        "hamburger active hamburger--squeeze is-active";
      setNavbar("container-Main mq425 active");
    } else {
      refDespegable.current.className = "hamburger hamburger--squeeze";
      setNavbar("container-Main mq425");
    }
    setmenuControll(!menuControll);
  };

  return (
    <>
      <button
        onClick={menuDespegable}
        ref={refDespegable}
        id="btn-Hamburguer"
        className="hamburger hamburger--collapse"
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className={navbar} style={{ top: "0px" }}>
        <section className="container-Info">
          <a
            target="_blank"
            href="/CV"
            className="download-CV"
            rel="noopener noreferrer"
          >
            <FileDown />
            Descargar CV
          </a>
          <div className="container-Github-Linkedin-Icons">
            <a
              href="https://www.linkedin.com/in/edwin-alexis-berm%C3%BAdez-0379621b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedin className="logo-Linkedin lg:h-[3rem]" />
            </a>
            <a
              className="github-Icon"
              href="https://github.com/AlexBermudez-are"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="logo-Github lg:h-[3rem]" />
            </a>
          </div>
        </section>

        <section className="container-Nav-Btns">
          {arr.map((el, i) => {
            const Icon = el.icon;
            return (
              <div key={i} className="container-Nav-Btn">
                <button
                  className="nav-Scroll-Btn"
                  data-section={el.id}
                  onClick={btnFunction}
                >
                  <h1 style={{ margin: "0px" }}>{el.label}</h1>
                  <Icon className="icon-Nav mr-4" />
                </button>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Navbar;
