import React from 'react'
import { ReactComponent as GithubLogo } from '../Assets/github_Logo.svg'
import { ReactComponent as Web } from '../Assets/Web.svg'
import PaginaSuperheroes from '../Assets/Buscador_Superheroes_Proyecto.png'
import proyectoDeBlogs from '../Assets/Proyecto-Blog.png'
import ProyectoONG from '../Assets/Proyecto_ONG.png'
import proyectoDePokedex from '../Assets/Proyecto_Pokedex.png'
import TodoSobreCafe from '../Assets/Todo_Sobre_Cafe_Proyecto.png'
import Backend from '../Assets/backend-img.png'
import TMDB from '../Assets/TMDB.png'

const obj = [
    TMDB,
    Backend,
    TodoSobreCafe,
    Backend,
    PaginaSuperheroes,
    ProyectoONG,
    proyectoDePokedex,
    proyectoDeBlogs,
]

const ProjectCard = ({ el, i }) => {
    return (
        <section className='proyecto-Backend'>
            <img className='img-Proyecto-Backend' src={obj[i]} alt={el.titulo} />
            <div className="texto-Proyecto-ONG">
                <h2 className="titulo-Proyecto-Backend">{el.titulo}</h2>
                <p className="info-Proyecto-Backend">{el.descripcion}</p>
                <section className='contenedor-GitHub-Proyecto'>
                    {
                        el.deploy && <a className='container-Links' href={el.deploy} target="_blank" rel="noopener noreferrer">
                            <Web />
                        </a>
                    }
                    {
                        el.github && <a className='container-Links' href={el.github} target="_blank" rel="noopener noreferrer">
                            <GithubLogo style={{ width: "50px", height: "50px" }} />
                        </a>
                    }
                </section>
            </div>
        </section>
    )
}

export default ProjectCard