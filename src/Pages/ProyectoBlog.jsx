import React from 'react'
import HeaderProyectos from '../Proyectos/HeaderProyectos'
import proyectoBlog from '../Assets/Proyecto-Blog.png'
import IconGithub from '../Assets/vectorGithub.svg'
import '../Proyectos/ProyectoBlog.css'
import inicioSesionBlog from '../Assets/Blog_Inicio_Sesion.png'
import inicioBlog from '../Assets/Inicio_Blog.png'

const ProyectoBlog = () => {
    return (
        <div className='proyecto-Blogs'>
            <HeaderProyectos />
            <section className='header-Blogs'>
                <h1 className='titulo-Blogs'>Creación de Blogs</h1>
            </section>
            <section className='Padre-Blogs-Proyecto'>
                <div className='info-Blogs-Proyecto'>
                    <img className='img-Blogs-Header' src={proyectoBlog} alt="" />
                    <h2 className='info-Blogs-Texto'>
                        Cursando la aceleración de alkemy nos hicieron una segunda prueba técnica.
                        Debiamos crear una pagina que pueda obtener la información de los post creados y modelarlos
                        en el inicio.
                        <br />
                        Es necesario iniciar sesión para poder crear, editar y eliminar los posts existentes.
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
                <div className="detalles-Redirecciones">
                    <section className='Demo-Final-Blogs'>
                        <p>Abrir la Demo del Proyecto Final:</p>
                        <a href="https://blog-de-posts-alkemy.vercel.app/" target="_blank" rel="noopener noreferrer">
                            https://blog-de-posts-alkemy.vercel.app/
                        </a>
                    </section>
                    <section className='codigo-Blogs'>
                        <img src={IconGithub} alt="todo-sobre-cafe" width="50px" height="50px" />
                        <p>Codigo del proyecto con Api local:</p>
                        <a href="https://github.com/AlexBermudez-are/Blog-de-Posts" target="_blank" rel="noopener noreferrer">
                            https://github.com/AlexBermudez-are/Blog-de-Posts
                        </a>
                    </section>
                </div>
                <div className='seccion-Crear-Cuenta-Blogs'>
                    <section className="info-Crear-Cuenta-Blogs">
                        <p className='crear-Cuenta-Blogs'>Inicio con sesión:</p>
                        <br />
                        <p className='info-Crear-Cuenta-Texto-Blogs'>
                            En cada apartado de la pagina y en el buscador te pedira iniciar sesión, lo que hará una petición
                            post, donde devolvera un token que se guardará en el localStorage para mantener la seción iniciada.
                            <br />
                            <br />
                            <h2 className='info-Crear-Cuenta-Texto-Blogs' style={{ color: "#ff9e9e", margin: "0" }}>
                                (Esta función solo esta disponible en el proyecto local por restricciones con la api)
                            </h2>
                        </p>
                    </section>
                    <img src={inicioSesionBlog} alt="" />
                </div>
                <div className='seccion-Grupo-Blogs'>
                    <section className="info-Grupo-Blogs">
                        <p className='Grupo-Blogs'>Lista de post</p>
                        <br />
                        <p className='info-Grupo-Blogs-Texto'>
                            Se hace una petición a la api para obtener la data de los post y asi modelarlos en el
                            inicio, cada post tiene 3 botones para eliminar, editar o ver los detalles de cada post
                            <br />
                            <br />
                            Si editamos el post te redirige a otra pestaña con la información del post para editar y actualizar
                            el post.
                        </p>
                    </section>
                    <img src={inicioBlog} alt="Grupo de Superheroes" />
                </div>
            </section>
        </div>
    )
}

export default ProyectoBlog
