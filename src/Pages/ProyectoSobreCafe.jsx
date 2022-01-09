import todoSobreCafe from '../Assets/Todo_Sobre_Cafe_Proyecto.png'
import HeaderProyectos from '../Proyectos/HeaderProyectos'
import VideoCrearCuenta from '../Assets/Crear Cuenta.mp4'
import VideoInciarSesion from '../Assets/Iniciar Sesión.mp4'
import IconGithub from '../Assets/vectorGithub.svg'
import '../Proyectos/ProyectoSobreCafe.css'
import React from 'react'

const ProyectoSobreCafe = () => {
    return (
        <div className='proyecto-Cafe'>
            <HeaderProyectos />
            <section className='header-Cafe'>
                <h1 className='titulo-Cafe'>Todo Sobre Café</h1>
            </section>
            <section className='Padre-Cafe-Proyecto'>
                <div className='info-Cafe-Proyecto'>
                    <img className='img-Cafe-Header' src={todoSobreCafe} alt="" />
                    <h2 className='info-Cafe-Texto'>
                        "Todo sobre café" es un proyecto hecho con react en el cual se simula un ecommerce
                        con formulario de contacto, inicio de sesión, creación de cuenta y un carrito.
                        <br />
                        <br />
                        Usé DbJson para manejar el inicio de sesión y creación de cuentas de manera local y para consumir
                        la información de los productos con el api 'falsa'.
                        <br />
                        <br />
                        Despúes use 'Heroku' para subir el api con la lista de los productos y así poder levantar el proyecto.
                        <br />
                        <br />
                        <div className='info-Cafe-Texto-Warning'>
                            (Las funciones de abajo no son visibles en el proyecto final por problemas con la api.
                            <br />
                            Para ver todas las funcionalidades se recomienda ver el proyecto con el api local.)
                        </div>
                    </h2>
                </div>
                <div className="detalles-Redirecciones">
                    <section className='Demo-Final'>
                        <p>Abrir la Demo del Proyecto Final:</p>
                        <a href="https://pagina-de-comida-con-react-demo.vercel.app/" target="_blank" rel="noopener noreferrer">
                            https://pagina-de-comida-con-react-demo.vercel.app/
                        </a>
                    </section>
                    <section className='codigo-Api-Local'>
                        <img src={IconGithub} alt="todo-sobre-cafe" width="50px" height="50px" />
                        <p>Codigo del proyecto con Api local:</p>
                        <a href="https://github.com/AlexBermudez-are/Pagina-de-comida-con-React" target="_blank" rel="noopener noreferrer">
                            https://github.com/AlexBermudez-are/Pagina-de-comida-con-React
                        </a>
                    </section>
                </div>
                <div className='seccion-Crear-Cuenta'>
                    <section className="info-Crear-Cuenta">
                        <p className='crear-Cuenta'>Crear Cuenta:</p>
                        <br />
                        <p className='info-Crear-Cuenta-Texto'>
                            Use dbjson para hacer las peticiones post y poder guardar los datos de cada cuenta y
                            validar que el correo no se repita, de ser así, saldrá una advertencia, caso contrario
                            se creará la cuenta y se guardarán los datos en el api 'falsa'.
                        </p>
                    </section>
                    <video className='video-Crear-Cuenta'  loop autoPlay muted>
                        <source src={VideoCrearCuenta} type="video/mp4" />
                    </video>
                </div>
                <div className='seccion-Inicio-Sesion'>
                    <section className="info-Inicio-Sesion">
                        <p className='inicio-Sesion'>Inicio de sesión</p>
                        <br />
                        <p className='info-Inicio-Sesion-Texto'>
                            De igual manera usando dbjson hago una peticion 'Get' para obtener la data de los usuarios existentes
                            y asi poder validar si el usuario existe o no, luego de verificar el usuario, guardo el token
                            del usuario existente el el 'LocalStorage' para mantener la sesion iniciada y elimino el token
                            cuando se cierra la sesión.
                        </p>
                    </section>
                    <video className='video-Inicio-Sesion' loop autoPlay muted>
                        <source src={VideoInciarSesion} type="video/mp4" />
                    </video>
                </div>
            </section>
        </div>
    )
}

export default ProyectoSobreCafe
