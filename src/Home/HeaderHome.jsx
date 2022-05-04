/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import './HeaderHome.css'
import { ReactComponent as Github } from '../Assets/vectorGithub.svg'
import { ReactComponent as IconLinkedin } from '../Assets/vectorLinkedin.svg'
import { NavLink } from 'react-router-dom'
import { ReactComponent as HomeSvg } from '../Assets/Home.svg'


const HeaderHome = ({ state, setstate }) => {

    const [menuControll, setmenuControll] = useState(false)
    const refHamburguesa = useRef()
    const refMenuPadre = useRef() //ref para el menu mobile del navbar

    const btn_Hamburguesa = (e) => { //Controla la animacion del btn hamburguesa de mobile
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
        if (!state) { // animacion del btn hamburguesa controlado por un state
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
                    <h1>Alexis Bermúdez</h1>
                    <button className="inicio">
                        <div className="svg-Home">
                            <HomeSvg />
                        </div>
                        <h4>Home</h4>
                    </button>
                </section>
            </div>
        </div>
    )
}

export default HeaderHome
