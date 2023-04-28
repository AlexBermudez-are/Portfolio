import React from 'react'
import './Proyectos.css'
import ProjectCard from './ProjectCard'
import dataProject from './dataProject'

const Proyectos = () => {

    return (
        <div className='padre-Proyectos'>
            <h2 className='proyectos-Titulo'>PROYECTOS</h2>
            <section className="Contenedor-Proyectos">
                {
                    dataProject.map((el, i) => <ProjectCard el={el} key={i} />)
                }
            </section>
        </div>
    )
}

export default Proyectos
