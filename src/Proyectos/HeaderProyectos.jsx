import React, { useState } from 'react'
import { useRef } from 'react'
import { ReactComponent as Logo } from '../Assets/vectorHome.svg'
import { ReactComponent as Github } from '../Assets/vectorGithub.svg'
import { ReactComponent as IconLinkedin} from '../Assets/vectorLinkedin.svg'
import { NavLink } from 'react-router-dom'
import './HeaderProyectos.css'

let inisialState = {
    inicio: false
}

const HeaderProyectos = () => {

    const [spanControll, setSpanControll] = useState(inisialState)
    const [menuControll, setmenuControll] = useState(false)
    const refSpanInicio = useRef()
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
        }else{
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
            <div className='separador-Menu'>
                <section className="contenido-Adicional">
                    <button className='descargar-CV'>Descargar CV</button>
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
                    <div className='contenedor-C-Linea-Inicio-Proyectos' onMouseEnter={animacionSpanE} onMouseLeave={animacionSpanL}>
                        <NavLink style={{textDecoration:"none"}} to="/" className='btns-Menu-Inicio' onClick={ScrollTo}>
                            <h1 className='h1-Inicio'>Inicio</h1>
                            <Logo className='vector-Home' fill={spanControll.inicio ? "#e6feff" : "#B8E4F0"} />
                        </NavLink>
                        <span className="span-Border-Bottom-Inicio" ref={refSpanInicio}></span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeaderProyectos
