import React, { useState } from 'react'
import { useRef } from 'react'
import { ReactComponent as Logo } from '../Assets/vectorHome.svg'
import { ReactComponent as Github } from '../Assets/vectorGithub.svg'
import { ReactComponent as IconLinkedin } from '../Assets/vectorLinkedin.svg'
import { NavLink } from 'react-router-dom'
import './HeaderProyectos.css'

const initialState = {
    inicio: false,
    cafe: false,
    superheroes: false,
    blog: false,
    ong: false
}

const HeaderProyectos = () => {

    const [spanControll, setSpanControll] = useState(initialState)
    const [menuControll, setmenuControll] = useState(false)
    const refSpanInicio = useRef()
    const refHamburguesa = useRef()
    const refMenuPadre = useRef()
    const refSpanCafe = useRef()
    const refSpanSuperheroes = useRef()
    const refSpanBlogs = useRef()
    const refSpanONG = useRef()

    const animacionSpanE = (e) => {
        if (e.target.className === "contenedor-C-Linea-Inicio-Proyectos" || e.target.className === "btns-Menu-Inicio-Proyectos" || e.target.className === "btns-Menu-Inicio-Proyectos active") {
            refSpanInicio.current.className = 'span-Border-Bottom-Inicio-Proyecto active'
            return setSpanControll({
                ...spanControll,
                inicio: true
            })
        }
        if (e.target.className === "contenedor-C-Linea-Cafe" || e.target.className === "redireccion-Proyectos-Cafe" || e.target.className === "redireccion-Proyectos-Cafe active") {
            refSpanCafe.current.className = "span-Border-Bottom-Cafe active"
            return setSpanControll({
                ...spanControll,
                cafe: true
            })
        }
        if (e.target.className === "contenedor-C-Linea-Superheroes" || e.target.className === "redireccion-Proyectos-Superheroes" || e.target.className === "redireccion-Proyectos-Superheroes active") {
            refSpanSuperheroes.current.className = "span-Border-Bottom-Superheroes active"
            return setSpanControll({
                ...spanControll,
                superheroes: true
            })
        }
        if (e.target.className === "contenedor-C-Linea-Blog" || e.target.className === "redireccion-Proyectos-Blog" || e.target.className === "redireccion-Proyectos-Blog active") {
            refSpanBlogs.current.className = 'span-Border-Bottom-Blog active'
            return setSpanControll({
                ...spanControll,
                blog: true
            })
        }
        if (e.target.className === "contenedor-C-Linea-ONG" || e.target.className === "redireccion-Proyectos-ONG" || e.target.className === "redireccion-Proyectos-ONG active") {
            refSpanONG.current.className = "span-Border-Bottom-ONG active"
            return setSpanControll({
                ...spanControll,
                ong: true
            })
        }
    }

    const animacionSpanL = (e) => {
        if (e.target.className === "contenedor-C-Linea-Inicio-Proyectos" || e.target.className === "span-Border-Bottom-Inicio-Proyecto active" || e.target.className === "btns-Menu-Inicio-Proyectos") {
            if (spanControll) {
                refSpanInicio.current.className = 'span-Border-Bottom-Inicio-Proyecto'
                return setSpanControll({
                    ...spanControll,
                    inicio: false
                })
            }
        }
        if (e.target.className === "contenedor-C-Linea-Cafe" || e.target.className === "redireccion-Proyectos-Cafe active" || e.target.className === "redireccion-Proyectos-Cafe") {
            refSpanCafe.current.className = "span-Border-Bottom-Cafe"
            return setSpanControll({
                ...spanControll,
                cafe: false
            })
        }
        if (e.target.className === "contenedor-C-Linea-Superheroes" || e.target.className === "redireccion-Proyectos-Superheroes active" || e.target.className === "redireccion-Proyectos-Superheroes") {
            refSpanSuperheroes.current.className = "span-Border-Bottom-Superheroes"
            return setSpanControll({
                ...spanControll,
                superheroes: false
            })
        }
        if (e.target.className === "contenedor-C-Linea-Blog" || e.target.className === "redireccion-Proyectos-Blog active" || e.target.className === "redireccion-Proyectos-Blog") {
            refSpanBlogs.current.className = 'span-Border-Bottom-Blog'
            return setSpanControll({
                ...spanControll,
                blog: false
            })
        }
        if (e.target.className === "contenedor-C-Linea-ONG" || e.target.className === "redireccion-Proyectos-ONG active" || e.target.className === "redireccion-Proyectos-ONG") {
            refSpanONG.current.className = "span-Border-Bottom-ONG"
            return setSpanControll({
                ...spanControll,
                ong: false
            })
        }
    }

    const btn_Hamburguesa = (e) => {
        if (!menuControll) {
            refHamburguesa.current.className = 'hamburger active hamburger--squeeze is-active'
            refMenuPadre.current.className = 'Padre-Header active'
        } else {
            refHamburguesa.current.className = 'hamburger hamburger--squeeze'
            refMenuPadre.current.className = 'Padre-Header'
        }
        setmenuControll(!menuControll)
    }

    const ScrollTo = (e) => {
        if (!menuControll) {
            refHamburguesa.current.className = 'hamburger active hamburger--squeeze is-active'
            refMenuPadre.current.className = 'Padre-Header active'
        } else {
            refHamburguesa.current.className = 'hamburger hamburger--squeeze'
            refMenuPadre.current.className = 'Padre-Header'
        }
        setmenuControll(!menuControll)
    }

    return (
        <div ref={refMenuPadre} className='Padre-Header'>
            <button
                ref={refHamburguesa}
                onClick={btn_Hamburguesa}
                className="hamburger hamburger--squeeze" type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <div className='separador-Menu-Proyectos'>
                <section className="contenido-Adicional-Proyecto">
                    <NavLink target="_blank" to="/CV" className='descargar-CV-Proyectos'>Descargar CV</NavLink>
                    <div className='redireccion-Github-Linkedin'>
                        <a rel='noreferrer' target="_blank" href="https://github.com/AlexBermudez-are">
                            <Github className='logo-Github' />
                        </a>
                        <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/edwin-alexis-berm%C3%BAdez-0379621b6/">
                            <IconLinkedin className='logo-Linkedin' />
                        </a>
                    </div>
                </section>
                <section className="contenedorBtns-Proyectos">
                    <div className='contenedor-C-Linea-Inicio-Proyectos' onMouseEnter={animacionSpanE} onMouseLeave={animacionSpanL}>
                        <NavLink style={{ textDecoration: "none" }} to="/" className='btns-Menu-Inicio-Proyectos' onClick={ScrollTo}>
                            <h1 style={{ margin: "0"}} className='h1-Inicio'>Inicio</h1>
                            <Logo className='vector-Home-Proyectos' fill={spanControll ? "#e6feff" : "#B8E4F0"} />
                        </NavLink>
                        <span className="span-Border-Bottom-Inicio-Proyecto" ref={refSpanInicio}></span>
                    </div>
                    <div className='contenedor-C-Linea-Cafe' onMouseEnter={animacionSpanE} onMouseLeave={animacionSpanL}>
                        <NavLink className="redireccion-Proyectos-Cafe" to="/Todo-Sobre-Cafe" onClick={ScrollTo}>
                            <h1 style={{ margin: "0", fontFamily: "'Lobster', cursive" }}>Todo Sobre Café</h1>
                        </NavLink>
                        <span className='span-Border-Bottom-Cafe' ref={refSpanCafe}></span>
                    </div>
                    <div className='contenedor-C-Linea-Superheroes' onMouseEnter={animacionSpanE} onMouseLeave={animacionSpanL}>
                        <NavLink className="redireccion-Proyectos-Superheroes" to="/Proyecto-Superheroes" onClick={ScrollTo}>
                            <h1 style={{ margin: "0", fontFamily: "'Bebas Neue', cursive" }}>Superheroes</h1>
                        </NavLink>
                        <span className='span-Border-Bottom-Superheroes' ref={refSpanSuperheroes}></span>
                    </div>
                    <div className='contenedor-C-Linea-Blog' onMouseEnter={animacionSpanE} onMouseLeave={animacionSpanL}>
                        <NavLink className="redireccion-Proyectos-Blog" to="/Proyecto-Blog" onClick={ScrollTo}>
                            <h1 style={{ margin: "0", fontFamily: "sans-serif" }}>Creación de Posts</h1>
                        </NavLink>
                        <span className='span-Border-Bottom-Blog' ref={refSpanBlogs}></span>
                    </div>
                    <div className='contenedor-C-Linea-ONG' onMouseEnter={animacionSpanE} onMouseLeave={animacionSpanL}>
                        <NavLink className="redireccion-Proyectos-ONG" to="/Proyecto-ONG" onClick={ScrollTo}>
                            <h1 style={{ margin: "0", fontFamily: 'Shadows Into Light' }}>ONG Somos Más</h1>
                        </NavLink>
                        <span className='span-Border-Bottom-ONG' ref={refSpanONG}></span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeaderProyectos
