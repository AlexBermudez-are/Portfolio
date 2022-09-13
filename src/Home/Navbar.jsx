/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'
import './Navbar.css'

const Navbar = ({ prop }) => {

    const refMenuPadre = useRef() // Ref controlador del scroll en el navbar
    const refInicio = useRef()
    const refTecnologias = useRef()
    const refProyectos = useRef()



    document.onscroll = function () {

        var scroll = window.scrollY;

        if (scroll < 1100) {
            refInicio.current.className = 'inicio-Navbar active'
            refTecnologias.current.className = 'tecnologias-Navbar'
            refProyectos.current.className = 'proyectos-Navbar'
        } else if (scroll < 1800) {
            refInicio.current.className = 'inicio-Navbar'
            refTecnologias.current.className = 'tecnologias-Navbar active'
            refProyectos.current.className = 'proyectos-Navbar'
        } else if (scroll >= 1800) {
            refInicio.current.className = 'inicio-Navbar'
            refTecnologias.current.className = 'tecnologias-Navbar'
            refProyectos.current.className = 'proyectos-Navbar active'
        }
    };

    function scrollBtn(e) {

        if (e.target.className === 'inicio-Navbar' || e.target.className === 'inicio-Navbar active') {

            refInicio.current.className = 'inicio-Navbar active'
            refTecnologias.current.className = 'tecnologias-Navbar'
            refProyectos.current.className = 'proyectos-Navbar'

            return window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }

        if (e.target.className === 'tecnologias-Navbar' || e.target.className === 'tecnologias-Navbar active') {

            refInicio.current.className = 'inicio-Navbar'
            refTecnologias.current.className = 'tecnologias-Navbar active'
            refProyectos.current.className = 'proyectos-Navbar'
            console.log(window.screen.availWidth);

            if (window.screen.availWidth <= 1024 && window.screen.availWidth >= 769) {
                return window.scroll({
                    top: 1000,
                    behavior: 'smooth'
                })
            } else if (window.screen.availWidth <= 768 && window.screen.availWidth >= 426) {
                return window.scroll({
                    top: 1400,
                    behavior: 'smooth'
                })
            } else if (window.screen.availWidth <= 425) {
                return window.scroll({
                    top: 1200,
                    behavior: 'smooth'
                })
            } else {
                return window.scroll({
                    top: 1200,
                    behavior: 'smooth'
                })
            }
        }

        if (e.target.className === 'proyectos-Navbar' || e.target.className === 'proyectos-Navbar active') {

            refInicio.current.className = 'inicio-Navbar'
            refTecnologias.current.className = 'tecnologias-Navbar'
            refProyectos.current.className = 'proyectos-Navbar active'

            return window.scroll({
                top: 1900,
                behavior: 'smooth'
            })
        }

    }

    useEffect(() => {
        prop
            ? refMenuPadre.current.className = 'Padre-Header'
            : refMenuPadre.current.className = 'Padre-Header active'
    }, [prop])

    return (
        <div ref={refMenuPadre} className='Padre-Header active'>
            <div className='separador-Menu'>
                <section className="nombre-Navbar">
                    <h1 className='nombre-Navbar-h1'>Alexis Bermúdez</h1>
                </section>
                <section className="contenedorBtns">
                    <button ref={refInicio} className="inicio-Navbar" onClick={scrollBtn}>Inicio</button>
                    <button ref={refTecnologias} className="tecnologias-Navbar" onClick={scrollBtn}>Tecnologias</button>
                    <button ref={refProyectos} className="proyectos-Navbar" onClick={scrollBtn}>Proyectos</button>
                </section>
            </div>
        </div>
    )
}

export default Navbar
