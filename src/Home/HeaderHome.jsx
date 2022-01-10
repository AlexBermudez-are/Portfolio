/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import './HeaderHome.css'
import { ReactComponent as Proyectos } from '../Assets/vectorProject.svg'
import { ReactComponent as Logo } from '../Assets/vectorHome.svg'
import { ReactComponent as ContactoIcon } from '../Assets/vectorContacto.svg'
import { ReactComponent as Github } from '../Assets/vectorGithub.svg'
import { ReactComponent as IconLinkedin } from '../Assets/vectorLinkedin.svg'
import { NavLink } from 'react-router-dom'


const HeaderHome = ({ state, setstate }) => {

    let inisialState = {
        inicio: false,
        proyecto: false,
        contacto: false
    }

    const [spanControll, setSpanControll] = useState(inisialState)
    const [menuControll, setmenuControll] = useState(false)
    const refSpanInicio = useRef()
    const refSpanProyectos = useRef()
    const refSpanContacto = useRef()
    const refHamburguesa = useRef()
    const refMenuPadre = useRef()

    const animacionSpanE = (e) => {
        if (e.target.className === "contenedor-C-Linea-Inicio" || e.target.className === "btns-Menu-Inicio") {
            refSpanInicio.current.className = 'span-Border-Bottom-Inicio active'
            return setSpanControll({
                ...spanControll,
                inicio: true
            })
        }
        if (e.target.className === "contenedor-C-Linea-Proyectos" || e.target.className === "btns-Menu-Proyectos") {
            refSpanProyectos.current.className = 'span-Border-Bottom-Proyectos active'
            return setSpanControll({
                ...spanControll,
                proyecto: true
            })
        }
        if (e.target.className === "contenedor-C-Linea-Contacto" || e.target.className === "btns-Menu-Contacto") {
            refSpanContacto.current.className = 'span-Border-Bottom-Contacto active'
            return setSpanControll({
                ...spanControll,
                contacto: true
            })
        }
    }

    const animacionSpanL = (e) => {
        if (e.target.className === "contenedor-C-Linea-Inicio" || e.target.className === "span-Border-Bottom-Inicio active" || e.target.className === "btns-Menu-Inicio") {
            if (spanControll.inicio) {
                refSpanInicio.current.className = 'span-Border-Bottom-Inicio'
                return setSpanControll({
                    ...spanControll,
                    inicio: false
                })
            }
        }
        if (e.target.className === "contenedor-C-Linea-Proyectos" || e.target.className === "span-Border-Bottom-Proyectos active" || e.target.className === "btns-Menu-Proyectos") {
            if (spanControll.proyecto) {
                refSpanProyectos.current.className = 'span-Border-Bottom-Proyectos'
                return setSpanControll({
                    ...spanControll,
                    proyecto: false
                })
            }
        }
        if (e.target.className === "contenedor-C-Linea-Contacto" || e.target.className === "span-Border-Bottom-Contacto active" || e.target.className === "btns-Menu-Contacto") {
            refSpanContacto.current.className = 'span-Border-Bottom-Contacto'
            return setSpanControll({
                ...spanControll,
                contacto: false
            })
        }
    }

    const ScrollTo = (e) => {
        e.stopPropagation();
        e.preventDefault();

        // validacion de inicio y redirección

        if (
            e.target.className === "btns-Menu-Inicio"
            || e.target.className === 'h1-Inicio'
            || e.target.className.animVal === "vector-Home"
        ) {
            window.scrollTo({ //<==== mover la pagina a top : 0
                behavior: "smooth",
                top: 0
            })
        }

        // validacion de proyectos y redirección

        if (
            e.target.className === "btns-Menu-Proyectos" ||
            e.target.className === 'h1-Proyectos' ||
            e.target.className.animVal === "vector-Proyecto"
        ) {
            window.scrollTo({ //<==== mover la pagina a top : 1800
                behavior: "smooth",
                top: 1900
            })
        }

        // validacion de contacto y redirección

        if (
            e.target.className === "btns-Menu-Contacto" ||
            e.target.className === 'h1-Contacto' ||
            e.target.className.animVal === "vector-Contacto"
        ) {
            window.scrollTo({ //<==== mover la pagina a top : 1800
                behavior: "smooth",
                top: 4100
            })
        }
        if (!menuControll) {
            refHamburguesa.current.className = 'hamburger active hamburger--squeeze is-active'
            refMenuPadre.current.className = 'Padre-Header active'
        } else {
            refHamburguesa.current.className = 'hamburger hamburger--squeeze'
            refMenuPadre.current.className = 'Padre-Header'
        }
        setmenuControll(!menuControll)
        setstate(!state)
    }

    const btn_Hamburguesa = (e) => {
        if (!menuControll) {
            refHamburguesa.current.className = 'hamburger active hamburger--squeeze is-active'
            refMenuPadre.current.className = 'Padre-Header active'
        } if (menuControll) {
            refHamburguesa.current.className = 'hamburger hamburger--squeeze'
            refMenuPadre.current.className = 'Padre-Header'
        }
        setmenuControll(!menuControll)
        setstate(!state)
    }


    useEffect(() => {
        if (!state) {
            refHamburguesa.current.className = 'hamburger hamburger--squeeze'
            refMenuPadre.current.className = 'Padre-Header'
        } else {
            refHamburguesa.current.className = 'hamburger active hamburger--squeeze is-active'
            refMenuPadre.current.className = 'Padre-Header active'
        }
        setmenuControll(!menuControll)
    }, [state])

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
            <div className='separador-Menu'>
                <section className="contenido-Adicional">
                    <NavLink target="_blank" to="./CV" className='descargar-CV'>Descargar CV</NavLink>
                    <div className='redireccion-Github-Linkedin'>
                        <a rel='noreferrer' target="_blank" href="https://github.com/AlexBermudez-are">
                            <Github className='logo-Github' />
                        </a>
                        <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/edwin-alexis-berm%C3%BAdez-0379621b6/">
                            <IconLinkedin className='logo-Linkedin' />
                        </a>
                    </div>
                </section>
                <section className="contenedorBtns">
                    <div className='contenedor-C-Linea-Inicio' onMouseEnter={animacionSpanE} onMouseLeave={animacionSpanL}>
                        <button className='btns-Menu-Inicio' onClick={ScrollTo}>
                            <h1 className='h1-Inicio'>Inicio</h1>
                            <Logo className='vector-Home' fill={spanControll.inicio ? "#e6feff" : "#B8E4F0"} />
                        </button>
                        <span className="span-Border-Bottom-Inicio" ref={refSpanInicio}></span>
                    </div>
                    <div className='contenedor-C-Linea-Proyectos' onMouseEnter={animacionSpanE} onMouseLeave={animacionSpanL}>
                        <button className='btns-Menu-Proyectos' onClick={ScrollTo}>
                            <h1 className='h1-Proyectos'>Proyectos</h1>
                            <Proyectos className='vector-Proyecto' fill={spanControll.proyecto ? "#e6feff" : "#B8E4F0"} />
                        </button>
                        <span className="span-Border-Bottom-Proyectos" ref={refSpanProyectos}></span>
                    </div>
                    <div className='contenedor-C-Linea-Contacto' onMouseEnter={animacionSpanE} onMouseLeave={animacionSpanL}>
                        <button className='btns-Menu-Contacto' onClick={ScrollTo}>
                            <h1 className='h1-Contacto'>Contacto</h1>
                            <ContactoIcon className='vector-Contacto' fill={spanControll.contacto ? "#e6feff" : "#B8E4F0"} />
                        </button>
                        <span className="span-Border-Bottom-Contacto" ref={refSpanContacto}></span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeaderHome
