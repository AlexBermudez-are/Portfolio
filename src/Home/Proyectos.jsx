import React from 'react'
import TodoSobreCafe from '../Assets/Todo_Sobre_Cafe_Proyecto.png'
import PaginaSuperheroes from '../Assets/Buscador_Superheroes_Proyecto.png'
import proyectoDeBlogs from '../Assets/Proyecto-Blog.png'
import ProyectoONG from '../Assets/Proyecto_ONG.png'
import proyectoDePokedex from '../Assets/Proyecto_Pokedex.png'
import Backend from '../Assets/backend-img.png'
import './Proyectos.css'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Web } from '../Assets/Web.svg'
import { ReactComponent as GithubLogo } from '../Assets/github_Logo.svg'

const Proyectos = () => {

    return (
        <div className='padre-Proyectos'>
            <h2 className='proyectos-Titulo'>PROYECTOS</h2>
            {/* <section className='todo-Sobre-Cafe-Proyecto'>
                <img className='img-Todo-Sobre-Cafe' src={TodoSobreCafe} alt="todo-Sobre-Cafe" />
                <div className='texto-Proyecto-Cafe'>
                    <h2 className='titulo-Todo-Sobre-Cafe'>Todo Sobre Café</h2>
                    <p className='info-Proyecto-Comida'>
                        Todo Sobre Café es una página de comida, con carrito de compras, inicio de sesión, crear cuenta y contacto.
                        <br />
                        Hecha en Javascript con React, CSS y un poco de Bootstrap
                    </p>
                    <section className='contenedor-Mas-Info'>
                        <a className='container-Links' href="https://pagina-de-comida-con-react-demo.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Web />
                        </a>
                        <NavLink to="/Todo-Sobre-Cafe" className='btn-Cafe'>Mas Info +</NavLink >
                        <a className='container-Links' href="https://github.com/AlexBermudez-are/Pagina-de-comida-con-React" target="_blank" rel="noopener noreferrer">
                            <GithubLogo style={{ width: "50px", height: "50px" }} />
                        </a>
                    </section>
                </div>
            </section> */}
            <section className='proyecto-Backend'>
                <img className='img-Proyecto-Backend' src={Backend} alt="proyecto ONG" />
                <div className="texto-Proyecto-ONG">
                    <h2 className="titulo-Proyecto-Backend">Todo sobre café (Backend)</h2>
                    <p className="info-Proyecto-Backend">
                        Creé una Api para la página 'Todo sobre café'.
                        <br />
                        Permite crear una cuenta, obtener la contrasñea olvidada, iniciar sesión y autenticar el usuario.
                        <br />
                        Hecha con Node, Moongosee, Express, Mongo Atlas y JWT.
                    </p>
                    <section className='contenedor-GitHub-Proyecto'>
                        <a className='container-Links' href="https://github.com/AlexBermudez-are/Backend-Todo-Sobre-Cafe" target="_blank" rel="noopener noreferrer">
                            <GithubLogo style={{ width: "50px", height: "50px" }} />
                        </a>
                    </section>
                </div>
            </section>
            <section className='proyecto-Pokedex'>
                <img className='img-Proyecto-Pokedex' src={proyectoDePokedex} alt="" />
                <div className="texto-Proyecto-Pokedex">
                    <h2 className="titulo-Proyecto-Pokedex">Pokedex</h2>
                    <p className="info-Proyecto-Pokedex">Una pokedex en donde puedes buscar pokemons,
                        armar un equipo y agregar favoritos.
                        <br />
                        Creada con React, Javascript y Css.
                    </p>
                    <section className='contenedor-GitHub-Proyecto'>
                        <a className='container-Links' href="https://pokedex-web-beige.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Web />
                        </a>
                        <a className='container-Links' href="https://github.com/AlexBermudez-are/pokedex-Web" target="_blank" rel="noopener noreferrer">
                            <GithubLogo style={{ width: "50px", height: "50px" }} />
                        </a>
                    </section>
                </div>
            </section>
            <section className='proyecto-Superheroes'>
                <img className='img-Proyecto-Superheroes' src={PaginaSuperheroes} alt="" />
                <div className="texto-Proyecto-Superheroes">
                    <h2 className="titulo-Proyecto-Superheroes">Superheroes</h2>
                    <p className="info-Proyecto-Superheroes">Un buscador de superheroes donde armas un equipo
                        y te muestra los stats del grupo.
                        <br />
                        Hecha en Javascript con React, Bootstrap, CSS y Formik
                    </p>
                    <section className='contenedor-Mas-Info'>
                        <a className='container-Links' href="https://proyecto-superheroes-sin-sesion.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Web />
                        </a>
                        <NavLink to="/Proyecto-Superheroes" className='btn-Cafe'>Mas Info +</NavLink >
                        <a className='container-Links' href="https://github.com/AlexBermudez-are/Equipo-de-Superheroes-Alkemy" target="_blank" rel="noopener noreferrer">
                            <GithubLogo style={{ width: "50px", height: "50px" }} />
                        </a>
                    </section>
                </div>
            </section>
            <section className='proyecto-Blog'>
                <img className='img-Proyecto-Blog' src={proyectoDeBlogs} alt="" />
                <div className="texto-Proyecto-Blog">
                    <h2 className="titulo-Proyecto-Blog">Creación de Posts</h2>
                    <p className="info-Proyecto-Blog">Un blog donde puedes crear, eliminar y editar posts.
                        <br />
                        Hecha en Javascript con React, Bootstrap, CSS y Formik
                    </p>
                    <section className='contenedor-Mas-Info'>
                        <a className='container-Links' href="https://blog-de-posts-alkemy.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Web />
                        </a>
                        <NavLink to="/Proyecto-Blog" className='btn-Cafe'>Mas Info +</NavLink >
                        <a className='container-Links' href="https://github.com/AlexBermudez-are/Blog-de-Posts" target="_blank" rel="noopener noreferrer">
                            <GithubLogo style={{ width: "50px", height: "50px" }} />
                        </a>
                    </section>
                </div>
            </section>
            <section className='proyecto-ONG'>
                <img className='img-Proyecto-ONG' src={ProyectoONG} alt="proyecto ONG" />
                <div className="texto-Proyecto-ONG">
                    <h2 className="titulo-Proyecto-ONG">Proyecto ONG Somos Más</h2>
                    <p className="info-Proyecto-ONG">
                        Proyecto final de la aceleracion de Alkemy una pagina ONG.
                        <br />
                        Hecho en Javascript con React, Bootstrap,
                        Formik, Redux y SASS
                    </p>
                    <section className='contenedor-Mas-Info'>
                        <a className='container-Links' href="https://github.com/AlexBermudez-are/OT-92-Server" target="_blank" rel="noopener noreferrer">
                            <GithubLogo style={{ width: "50px", height: "50px" }} />
                        </a>
                        <NavLink to="/Proyecto-ONG" className='btn-Cafe'>Mas Info +</NavLink >
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Proyectos
