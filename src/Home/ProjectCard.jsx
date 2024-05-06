import React from 'react'
import { ReactComponent as GithubLogo } from '../Assets/github_Logo.svg'
import { ReactComponent as Web } from '../Assets/Web.svg'
import PaginaSuperheroes from '../Assets/Buscador_Superheroes_Proyecto.png'
import proyectoDeBlogs from '../Assets/Proyecto-Blog.png'
import ProyectoONG from '../Assets/Proyecto_ONG.png'
import proyectoDePokedex from '../Assets/Proyecto_Pokedex.png'
import TodoSobreCafe from '../Assets/Todo_Sobre_Cafe_Proyecto.png'
import TMDB from '../Assets/TMDB.png'
import GlobalNewsFeedback from '../Assets/Global News Feedback.png'

const obj = [
    GlobalNewsFeedback,
    TodoSobreCafe,
    proyectoDePokedex,
    TodoSobreCafe,
    ProyectoONG,
    TMDB,
    PaginaSuperheroes,
    proyectoDeBlogs,
]

const ProjectCard = ({ el, i }) => {
    
    return (
        <section className='proyecto-Backend'>
            <img className='img-Proyecto-Backend' src={obj[i]} alt={el.titulo} />
            <div className="texto-Proyecto-ONG">
                <h2 className="titulo-Proyecto-Backend">{el.titulo}</h2>
                <p className="info-Proyecto-Backend">{el.descripcion}</p>
                <section className="container-tecnologias">
                {
                    el.tecnologias && el.tecnologias.map((tecno,index)=>{
                        if(tecno === "Back"){
                            return <p key={index} style={{boxShadow:"rgb(25 255 0) 0px 0px 12px 0px, rgb(172 255 163) 0px 0px 0px 2px", color:"rgb(172 255 163)"}} className="info-Proyecto-Tecnologia">{tecno}</p>
                        }else if (tecno === "Front"){
                            return <p key={index} style={{boxShadow:"rgb(0 135 255) 0px 0px 12px 0px, rgb(121 192 255) 0px 0px 0px 2px", color:"rgb(121 192 255"}} className="info-Proyecto-Tecnologia">{tecno}</p>
                        }else{
                            return <p key={index} className="info-Proyecto-Tecnologia">{tecno}</p>
                        }
                    })
                }
                </section>
                <section className='contenedor-GitHub-Proyecto'>
                    {
                        el.deploy && <a className='container-Links' href={el.deploy} target="_blank" rel="noopener noreferrer">
                            <Web />
                        </a>
                    }
                    {
                        el.github && <a className='container-Links' href={el.github} target="_blank" rel="noopener noreferrer">
                            <GithubLogo className="github-Vgs" style={{ width: "100%", height: "100%" }} />
                        </a>
                    }
                </section>
            </div>
        </section>
    )
}

export default ProjectCard