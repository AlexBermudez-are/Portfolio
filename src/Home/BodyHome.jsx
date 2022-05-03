import React, { useEffect } from 'react'
import './BodyHome.css'
import foto from '../Assets/foto-Perfil.jpg'
import { useRef } from 'react'
import Tecnologias from './Tecnologias'
import Proyectos from './Proyectos'

const BodyHome = ({ state, setstate }) => {

    const btnRef = useRef();
    const textoRef = useRef();

    document.addEventListener("scroll", e => {
        const scroll = window.pageYOffset
        if (scroll >= 400 && btnRef.current) {
            textoRef.current.className = 'texto-Presentacion-P'
            return btnRef.current.className = 'img-Perfil'
        }
        if (btnRef.current) {
            textoRef.current.className = 'texto-Presentacion-P active'
            return btnRef.current.className = 'img-Perfil active'
        }
    })

    const menuHamburguesa = () => {
        if (state) {
            setstate(!state)
        }
    }

    useEffect(() => {
        textoRef.current.className = 'texto-Presentacion-P active'
        btnRef.current.className = 'img-Perfil active'
    }, [])


    return (
        <div className='Padre-Body' onClick={menuHamburguesa}>
            <section className="presentacion">
                <img src={foto} alt="foto-Edwin-Alexis" className='img-Perfil' ref={btnRef} />
                <div className='texto-Presentacion-P' ref={textoRef}>
                    <p className='hola-Mundo'>Hola Mundo!</p>
                    <p className='presentacion-Personal'>
                        Me llamo Alexis, tengo 23 años, soy Mexicano y actualmente vivo en Argentina.
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
        </div>
    )
}

export default BodyHome
