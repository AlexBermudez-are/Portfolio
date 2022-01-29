import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Github } from '../Assets/vectorGithub.svg'
import { ReactComponent as IconLinkedin } from '../Assets/vectorLinkedin.svg'
import './FooterHome.css'

const FooterHome = () => {

    const acerca = (e) => {
        e.stopPropagation();
        e.preventDefault();

        // validacion de inicio y redirección

        if (
            e.target.className === "about" //Origen del evento
        ) {
            window.scrollTo({ //<==== mover la pagina a top : 0
                behavior: "smooth",
                top: 600
            })
        }
    }

    return (
        <div style={{width:"100%"}}>
            <div className="container">
                <div className="content">
                    <section className="footer-Padre">
                        <div className="acerca">
                            <button className='about' onClick={acerca}>Acerca de mí</button>
                        </div>
                        <div className="redireccion-Footer-Padre">
                            <span>Proyectos</span>
                            <div className='redireccion-Footer-Container'>
                                <section className="redireccion-Footer">
                                    <NavLink to="/Todo-Sobre-Cafe">Todo Sobre Café</NavLink>
                                    <NavLink to="/Proyecto-Superheroes">Superheroes</NavLink>
                                </section>
                                <section className="redireccion-Footer">
                                    <NavLink to="/Proyecto-Blog">Blog de posts</NavLink>
                                    <NavLink to="/Proyecto-ONG">ONG Somos Más</NavLink>
                                </section>
                            </div>
                        </div>
                        <div className="github-Linkedin-Footer">
                            <a rel='noreferrer' target="_blank" href="https://github.com/AlexBermudez-are">
                                <Github className='logo-Github' />
                                <span className='github-Footer'>Github</span>
                            </a>
                            <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/edwin-alexis-berm%C3%BAdez-0379621b6/">
                                <IconLinkedin className='logo-Linkedin' />
                                <span className='linkedin-Footer'>Linkedin</span>
                            </a>
                        </div>
                    </section>
                </div>
                <div className="waves">
                    <div className="wave circulo a"></div>
                    <div className="wave circulo b"></div>
                    <div className="wave circulo c"></div>
                </div>
            </div>
        </div>
    )
}

export default FooterHome
