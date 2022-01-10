import React from 'react'
import logo from '../Assets/Icono_Programador.png'
import './BodyHome.css'
import foto from '../Assets/foto-Perfil.jpg'
import { useRef } from 'react'
import Tecnologias from './Tecnologias'
import Proyectos from './Proyectos'
import Contacto from './Contacto'

const BodyHome = ({state,setstate}) => {

    const btnRef = useRef();
    const textoRef = useRef();

    document.addEventListener("scroll", e => {
        const scroll = window.pageYOffset
        if (scroll > 50 && scroll < 1000 && btnRef.current) {
            textoRef.current.className = 'texto-Presentacion-P active'
            return btnRef.current.className = 'img-Perfil active'
        }
        if (btnRef.current) {
            textoRef.current.className = 'texto-Presentacion-P'
            btnRef.current.className = 'img-Perfil'
        }
    })

    const menuHamburguesa = () => {
        if(state){
            setstate(!state)
        }
    }

    return (
        <div className='Padre-Body' onClick={menuHamburguesa}>
            <section className='contenedor-Presentacion'>
                <img src={logo} alt="Icono Programador" />
                <div className='texto-Introductorio'>
                    <h2 className='mi-Nombre'>Edwin Alexis Bermúdez</h2>
                    <span className='animacion-Span'>Desarrollador Front End</span>
                </div>
            </section>
            <section className="presentacion">
                <img src={foto} alt="foto-Edwin-Alexis" className='img-Perfil' ref={btnRef} />
                <div className='texto-Presentacion-P' ref={textoRef}>
                    <p className='hola-Mundo'>Hola Mundo!</p>
                    <p className='presentacion-Personal'>
                        Mi nombre es Alexis, tengo 23 años, soy Mexicano y actualmente vivo en Argentina.
                        <br />
                        Desde hace un año inicie en el mundo del desarrollo web por mi propia cuenta y asi fuí adquiriendo
                        experiencia y puliendo mis habilidades.
                        <br />
                        <br />
                        Me gusta dibujar, escuchar OST de Videojuegos ❤️ y aspiro a poder trabajar como desarrollador de videojuegos.
                    </p>
                </div>
            </section>
            <Tecnologias />
            <Proyectos />
            <Contacto />
        </div>
    )
}

export default BodyHome
