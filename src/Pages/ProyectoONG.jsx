import React, { useEffect } from 'react'
import IconGithub from '../Assets/vectorGithub.svg';
import HeaderProyectos from '../Proyectos/HeaderProyectos'
import headerProyectoONG from '../Assets/Proyecto_ONG.png'
import carruselONG from '../Assets/carrusel_ONG.png'
import ultimoEvento from '../Assets/Ultimo_Evento.png'
import SlidesBackoffice from '../Assets/Slides_ONG.png'
import '../Proyectos/ProyectoONG.css'
import FooterHome from '../Home/FooterHome';

const ProyectoONG = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='proyecto-ONG-Demo'>
            <HeaderProyectos />
            <section className='header-ONG-Demo'>
                <h1 className='titulo-ONG-Demo'>ONG Somos Más</h1>
            </section>
            <section className='Padre-ONG-Proyecto-Demo'>
                <div className='info-ONG-Proyecto-Demo'>
                    <img className='img-ONG-Header-Demo' src={headerProyectoONG} alt="" />
                    <h2 className='info-ONG-Texto-Demo'>
                        El proyecto final de alkemy, una pagina ONG.
                        <br />
                        <br />
                        Trabajando junto a 5 compañeros y un SCRUM Master pudimos crear la pagina 'Somos
                        más'.
                        <br />
                        Con inicio de sesión como administrador o usuario podemos dividir la pagina en 2.
                        <br />
                        El modo de administrador con backoffice y herramientas de administrador o el modo usuario (que es la vista de la pagina por defecto).
                        <br />
                        <br />
                        Trabajamos con una api dada por alkemy para poder modelar la pagina y darle mas realismo.
                        <br /><br />
                        <div className='info-ONG-Texto-Demo-Warning'>
                            (La pagina no esta desplegada en linea por algunos problemas con el api, pero pueden ver el proyecto de manera local.)
                        </div>
                    </h2>
                </div>
                <div className="detalles-Redirecciones-ONG">
                    <section className='codigo-ONG-Somos-Mas'>
                        <img src={IconGithub} alt="todo-sobre-cafe" width="50px" height="50px" />
                        <p>Codigo del proyecto:</p>
                        <a href="https://github.com/AlexBermudez-are/OT-92-Server" target="_blank" rel="noopener noreferrer">
                            https://github.com/AlexBermudez-are/OT-92-Server
                        </a>
                    </section>
                </div>
                <div className='seccion-Ultimo-Evento'>
                    <section className="info-Ultimo-Evento">
                        <p className='Ultimo-Evento'>Ultimo-Evento:</p>
                        <br />
                        <p className='info-Ultimo-Evento-Texto'>
                            Cree un componente para la seccion de Novedades con una librería llamada 'ReactPlayer'
                            para poder mostrar un video de youtube, haciendo una peticion 'Get' a la api para obtener la información y
                            configurando los controles que vienen por defecto.
                        </p>
                    </section>
                    <img src={ultimoEvento} alt="Inicio de sesión" />
                </div>
                <div className='seccion-Grupo-ONG'>
                    <section className="info-Grupo-ONG">
                        <p className='Grupo-ONG'>Carrusel en el Inicio</p>
                        <br />
                        <p className='info-Grupo-ONG-Texto'>
                            Obteniendo la información de la api, cree un carrusel que cada 5 segundos cambie de imagen o puedes
                            hacerlo de forma manual con los botones en forma de flecha
                            <br />
                            <br />
                            Cada imagen en el carrusel tiene un titulo y una descripción que solo se muestra cuando se pasa el cursor
                            por encima del carrusel.
                        </p>
                    </section>
                    <img src={carruselONG} alt="Grupo de Superheroes" />
                </div>
                <div className='seccion-Crear-Cuenta-Superheroes'>
                    <section className="info-Crear-Cuenta-Superheroes">
                        <p className='crear-Cuenta-Superheroes'>Lista de Slides 'Backoffice':</p>
                        <br />
                        <p className='info-Crear-Cuenta-Texto-Superheroes'>
                            Cree un Buscador de slides en el Backoffice hecho con redux con efecto 'debounce' y un condicional
                            de mínimo 3 caracteres para controlar las peticiones hechas a la api.
                            <br /><br />
                            Hay dos botones.
                            <br />
                            Para eliminar el slide o editar el slide que redirige al componente de otro compañero.
                        </p>
                    </section>
                    <img src={SlidesBackoffice} alt="Inicio de sesión" />
                </div>
            </section>
            <FooterHome/>
        </div>
    )
}

export default ProyectoONG
