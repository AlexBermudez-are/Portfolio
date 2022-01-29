import React, { useEffect } from 'react'
import HeaderProyectos from '../Proyectos/HeaderProyectos'
import '../Proyectos/ProyectoSuperheroes.css'
import imgSuperheroes from '../Assets/Buscador_Superheroes_Proyecto.png'
import inicioSesionSuper from '../Assets/Superheroes_Inicio_Sesion.png'
import grupoSuperheroes from '../Assets/Grupo-Superheroes.png'
import IconGithub from '../Assets/vectorGithub.svg';
import FooterHome from '../Home/FooterHome'

const ProyectoSuperheroes = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='proyecto-Superheroes-Demo'>
            <HeaderProyectos />
            <section className='header-Superheroes-Demo'>
                <h1 className='titulo-Superheroes-Demo'>Buscador de Superheroes</h1>
            </section>
            <section className='Padre-Superheroes-Proyecto-Demo'>
                <div className='info-Superheroes-Proyecto-Demo'>
                    <img className='img-Superheroes-Header-Demo' src={imgSuperheroes} alt="" />
                    <h2 className='info-Superheroes-Texto-Demo'>
                        Postulando para la aceleración de alkemy nos hicieron un challenge de React con Formik.
                        <br />
                        <br />
                        Un buscador de Superheroes y Villanos, donde puedes armar un grupo de 6 integrantes
                        con inicio de sesión y donde guarde el token generado para mantener la sesión activa.
                        <br />
                        <br />
                        Validando que en el grupo hayan 3 heroes y 3 villanos y que no se pueda agregar el mismo personaje.
                        <br />
                        <br />
                        Los datos para iniciar sesión son:
                        <br />
                        <br />
                        Email: 'challenge@alkemy.org'
                        <br />
                        <br />
                        Contraseña: 'React'
                    </h2>
                </div>
                <div className="detalles-Redirecciones-Superheroes">
                    <section className='Demo-Final-Superheroes'>
                        <p>Abrir la Demo del Proyecto Final:</p>
                        <a href="https://proyecto-superheroes-sin-sesion.vercel.app/" target="_blank" rel="noopener noreferrer">
                            https://proyecto-superheroes-sin-sesion.vercel.app/
                        </a>
                    </section>
                    <section className='codigo-Con-Sesion-Superheroes'>
                        <img src={IconGithub} alt="todo-sobre-cafe" width="50px" height="50px" />
                        <p>Codigo del proyecto con Inicio de Sesión:</p>
                        <a href="https://github.com/AlexBermudez-are/Equipo-de-Superheroes-Alkemy" target="_blank" rel="noopener noreferrer">
                            https://github.com/AlexBermudez-are/Equipo-de-Superheroes-Alkemy
                        </a>
                    </section>
                    <section className='codigo-Sin-Sesion-Superheroes'>
                        <img src={IconGithub} alt="todo-sobre-cafe" width="50px" height="50px" />
                        <p>Codigo del proyecto sin Inicio de Sesión:</p>
                        <a href="https://github.com/AlexBermudez-are/Proyecto-Superheroes-Sin-Sesion" target="_blank" rel="noopener noreferrer">
                            https://github.com/AlexBermudez-are/Proyecto-Superheroes-Sin-Sesion
                        </a>
                    </section>
                </div>
                <div className='seccion-Crear-Cuenta-Superheroes'>
                    <section className="info-Crear-Cuenta-Superheroes">
                        <p className='crear-Cuenta-Superheroes'>Inicio de sesión:</p>
                        <br />
                        <div className='info-Crear-Cuenta-Texto-Superheroes'>
                            En cada apartado de la pagina y en el buscador te pedira iniciar sesión, lo que hará una petición
                            post, donde devolvera un token que se guardará en el localStorage para mantener la seción iniciada.
                            <br />
                            <br />
                            <h2 className='info-Crear-Cuenta-Texto-Superheroes' style={{ color: "#ff9e9e", margin: "0" }}>
                                (Esta función solo esta disponible en el proyecto local por restricciones con la api)
                            </h2>
                        </div>
                    </section>
                    <img src={inicioSesionSuper} alt="Inicio de sesión" />
                </div>
                <div className='seccion-Grupo-Superheroes'>
                    <section className="info-Grupo-Superheroes">
                        <p className='Grupo-Superheroes'>Grupo de Superheroes</p>
                        <br />
                        <p className='info-Grupo-Superheroes-Texto'>
                            En el grupo hay stats generales, así como la estadistica dominante del grupo y el peso/altura,
                            promedio del equipo.
                            <br />
                            <br />
                            Podemos ver las estadisticas generales de cada personaje, información extra
                            y poder eliminar a cada uno.
                        </p>
                    </section>
                    <img src={grupoSuperheroes} alt="Grupo de Superheroes" />
                </div>
            </section>
            <FooterHome/>
        </div>
    )
}

export default ProyectoSuperheroes
