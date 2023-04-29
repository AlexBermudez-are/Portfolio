import React from 'react'
import './HeaderHome.css'
import foto from '../Assets/Foto.jpg'
import { ReactComponent as Github } from '../Assets/vectorGithub.svg'
import { ReactComponent as IconLinkedin } from '../Assets/vectorLinkedin.svg'

const HeaderHome = () => {
    
    return (
        <div className='container-Padre-Presentacion'>
            <section className="container-Img-Perfil">
                <img className='foto-Perfil' src={foto} alt="foto-Perfil" />
            </section>
            <section className='container-Presentacion-Info'>
                <div className="container-Presentacion-Nombre">
                    <h1 className='Hola'>Hola!</h1>
                    <h2 className='nombre'>Soy Alexis Bermúdez</h2>
                    <h3 className="desarrolladorFS">Desarrollador Fullstack</h3>
                </div>
                <div className="redireccion-Github-Linkedin">
                    <a href="https://github.com/AlexBermudez-are" target="_blank" rel="noopener noreferrer">
                        <Github className='logo-Github' />
                    </a>
                    <a href='/CV' className="descargar-CV" target='_blank'>
                        Descargar Cv
                    </a>
                    <a href="https://www.linkedin.com/in/edwin-alexis-berm%C3%BAdez-0379621b6/" target="_blank" rel="noopener noreferrer">
                        <IconLinkedin className='logo-Linkedin' />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default HeaderHome