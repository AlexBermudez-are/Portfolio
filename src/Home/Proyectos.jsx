import React from 'react'
import TodoSobreCafe from '../Assets/Todo_Sobre_Cafe_Proyecto.png'
import PaginaSuperheroes from '../Assets/Buscador_Superheroes_Proyecto.png'
import proyectoDeBlogs from '../Assets/Proyecto-Blog.png'
import ProyectoONG from '../Assets/Proyecto_ONG.png'
import './Proyectos.css'
import { NavLink } from 'react-router-dom'

const Proyectos = () => {
    return (
        <div className='padre-Proyectos'>
            <h2 className='proyectos-Titulo'>PROYECTOS</h2>
            <section className='todo-Sobre-Cafe-Proyecto'>
                <img className='img-Todo-Sobre-Cafe' src={TodoSobreCafe} alt="todo-Sobre-Cafe" />
                <div className='texto-Proyecto-Cafe'>
                    <h2 className='titulo-Todo-Sobre-Cafe'>Todo Sobre Café</h2>
                    <p className='info-Proyecto-Comida'>Todo Sobre Café es una página de comida, con carrito de compras
                        hecha en Javascript con React, CSS y un poco de Bootstrap</p>
                    <section className='contenedor-Mas-Info'>
                        <NavLink to="/Todo-Sobre-Cafe" className='btn-Cafe'>Mas Info +</NavLink >
                    </section>
                </div>
            </section>
            <section className='proyecto-Superheroes'>
                <img className='img-Proyecto-Superheroes' src={PaginaSuperheroes} alt="" />
                <div className="texto-Proyecto-Superheroes">
                    <h2 className="titulo-Proyecto-Superheroes">Superheroes</h2>
                    <p className="info-Proyecto-Superheroes">Un buscador de superheroes donde armas un equipo
                        y te muestra los stats del grupo,
                        hecha en Javascript con React, Bootstrap, CSS y Formik
                    </p>
                    <section className='contenedor-Mas-Info'>
                        <NavLink to="/Proyecto-Superheroes" className='btn-Cafe'>Mas Info +</NavLink >
                    </section>
                </div>
            </section>
            <section className='proyecto-Blog'>
                <img className='img-Proyecto-Blog' src={proyectoDeBlogs} alt="" />
                <div className="texto-Proyecto-Blog">
                    <h2 className="titulo-Proyecto-Blog">Creación de Blogs</h2>
                    <p className="info-Proyecto-Blog">Un blog donde puedes crear, eliminar y editar posts.
                        Hecha en Javascript con React, Bootstrap, CSS y Formik
                    </p>
                    <section className='contenedor-Mas-Info'>
                        <NavLink to="/Proyecto-Blog" className='btn-Cafe'>Mas Info +</NavLink >
                    </section>
                </div>
            </section>
            <section className='proyecto-ONG'>
                <img className='img-Proyecto-ONG' src={ProyectoONG} alt="proyecto ONG" />
                <div className="texto-Proyecto-ONG">
                    <h2 className="titulo-Proyecto-ONG">Proyecto ONG Somos Más</h2>
                    <p className="info-Proyecto-ONG">
                        Proyecto final de la aceleracion de Alkemy una pagina ONG, hecho en Javascript con React, Bootstrap,
                        Formik, Redux y SASS
                    </p>
                    <section className='contenedor-Mas-Info'>
                        <NavLink to="/Proyecto-ONG" className='btn-Cafe'>Mas Info +</NavLink >
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Proyectos
