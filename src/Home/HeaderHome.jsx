import React, { useEffect, useRef } from 'react'
import './HeaderHome.css'
import foto from '../Assets/Foto-Perfil.jpg'
import { ReactComponent as Github } from '../Assets/vectorGithub.svg'
import { ReactComponent as IconLinkedin } from '../Assets/vectorLinkedin.svg'
import { ReactComponent as IconDownArrow } from '../Assets/Icon-Down-Arrow.svg'

const HeaderHome = ({ prop }) => {

    const refMenuPadreHeader = useRef() // Ref controlador del scroll en el navbar

    useEffect(() => {
        prop
            ? refMenuPadreHeader.current.className = 'container-Padre-Presentacion active'
            : refMenuPadreHeader.current.className = 'container-Padre-Presentacion'
    }, [prop])

    return (
        <div ref={refMenuPadreHeader} className='container-Padre-Presentacion'>
            <section className="container-Img-Perfil">
                <img className='foto-Perfil' src={foto} alt="foto-Perfil" />
            </section>
            <section className="container-Presentacion-Nombre">
                <h2 className='nombre'>Edwin Alexis Bermúdez</h2>
            </section>
            <section className='container-Presentacion-Stack'>
                <h3 className="desarrolladorFS">Desarrollador Fullstack</h3>
            </section>
            <section className="redireccion-Github-Linkedin">
                <a href="https://github.com/AlexBermudez-are" target="_blank" rel="noopener noreferrer">
                    <Github className='logo-Github' />
                </a>
                <a href='/CV' className="descargar-CV" target='_blank'>
                    Descargar Cv
                </a>
                <a href="https://www.linkedin.com/in/edwin-alexis-berm%C3%BAdez-0379621b6/" target="_blank" rel="noopener noreferrer">
                    <IconLinkedin className='logo-Linkedin' />
                </a>
            </section>
            <button className="mostrar-Mas" onClick={()=>{
                window.scroll({
                    top: 300,
                    behavior: 'smooth'
                })
            }}>
                <IconDownArrow className='show-More-Arrow' />
            </button>
        </div>
    )
}

export default HeaderHome