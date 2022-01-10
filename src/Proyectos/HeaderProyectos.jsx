import React, { useState } from 'react'
import { useRef } from 'react'
import { ReactComponent as Logo } from '../Assets/vectorHome.svg'
import { ReactComponent as Github } from '../Assets/vectorGithub.svg'
import { ReactComponent as IconLinkedin } from '../Assets/vectorLinkedin.svg'
import { NavLink } from 'react-router-dom'
import './HeaderProyectos.css'


const HeaderProyectos = () => {

    const [spanControll, setSpanControll] = useState(false)
    const [menuControll, setmenuControll] = useState(false)
    const refSpanInicio = useRef()
    const refHamburguesa = useRef()
    const refMenuPadre = useRef()

    const animacionSpanE = (e) => {
        if (e.target.className === "contenedor-C-Linea-Inicio-Proyectos" || e.target.className === "btns-Menu-Inicio-Proyectos") {
            refSpanInicio.current.className = 'span-Border-Bottom-Inicio-Proyecto active'
            return setSpanControll(true)
        }
    }

    const animacionSpanL = (e) => {
        console.log(e, "out");
        if (e.target.className === "contenedor-C-Linea-Inicio-Proyectos" || e.target.className === "span-Border-Bottom-Inicio-Proyecto active" || e.target.className === "btns-Menu-Inicio-Proyectos") {
            if (spanControll) {
                refSpanInicio.current.className = 'span-Border-Bottom-Inicio-Proyecto'
                return setSpanControll(false)
            }
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
                <section className="contenido-Adicional">
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
                            <h1 className='h1-Inicio'>Inicio</h1>
                            <Logo className='vector-Home' fill={spanControll ? "#e6feff" : "#B8E4F0"} />
                        </NavLink>
                        <span className="span-Border-Bottom-Inicio-Proyecto" ref={refSpanInicio}></span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeaderProyectos
