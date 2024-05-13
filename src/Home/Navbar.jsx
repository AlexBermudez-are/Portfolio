import React, { useEffect, useRef } from 'react'
import { ReactComponent as Github } from '../Assets/vectorGithub.svg'
import { ReactComponent as IconLinkedin } from '../Assets/vectorLinkedin.svg'
import './Navbar.css'
import { useState } from 'react'

const Navbar = ({ state }) => {

    const arr = ["Inicio", "Tecnologías", "Proyectos"]
    const [navbar, setNavbar] = useState("container-Main")
    const [menuControll, setmenuControll] = useState(false)
    const refDespegable = useRef()

    const mq1025 = window.matchMedia('(min-width: 1025px)'),
        mq768 = window.matchMedia('(min-width: 768px)'),
        mq320 = window.matchMedia('(min-width: 320px)');

    useEffect(() => {
        if (mq1025.matches || mq768.matches) {
            state ? setNavbar('container-Main active') : setNavbar('container-Main')
        } else {
            setNavbar('container-Main mq425')
        }
    }, [state])

    function btnFunction(e) {
        if (mq1025.matches) {
            if (e.target.innerText === 'Tecnologías') {
                window.scrollTo({
                    top: 1700,
                    behavior: 'smooth'
                });
            } else if (e.target.innerText === 'Proyectos') {
                window.scrollTo({
                    top: 2700,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } else if (mq768.matches) {
            if (e.target.innerText === 'Tecnologías') {
                window.scrollTo({
                    top: 1300,
                    behavior: 'smooth'
                });
            } else if (e.target.innerText === 'Proyectos') {
                window.scrollTo({
                    top: 2300,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } else if (mq320.matches) {
            if (e.target.innerText === 'Tecnologías') {
                window.scrollTo({
                    top: 1500,
                    behavior: 'smooth'
                });
            } else if (e.target.innerText === 'Proyectos') {
                window.scrollTo({
                    top: 2800,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            setNavbar('container-Main mq425')
            refDespegable.current.className = 'hamburger hamburger--squeeze'
            setmenuControll(!menuControll)
        }
    }

    const menuDespegable = () => { // Menu hamburguesa
        console.log(refDespegable);
        if (!menuControll) {
            refDespegable.current.className = 'hamburger active hamburger--squeeze is-active'
            setNavbar('container-Main mq425 active')
        }
        if (menuControll) {
            refDespegable.current.className = 'hamburger hamburger--squeeze'
            setNavbar('container-Main mq425')
        }
        setmenuControll(!menuControll)
    }


    return (
        <>
            <button onClick={menuDespegable} ref={refDespegable} id="btn-Hamburguer" className="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <div className={navbar}>
                <section className="container-Info">
                    <a target='_blank' href='/CV' className="download-CV">Descargar CV</a>
                    <div className="container-Github-Linkedin-Icons">
                        <a href="https://www.linkedin.com/in/edwin-alexis-berm%C3%BAdez-0379621b6/" target="_blank" rel="noopener noreferrer">
                            <IconLinkedin className='logo-Linkedin' />
                        </a>
                        <a className='github-Icon' href="https://github.com/AlexBermudez-are" target="_blank" rel="noopener noreferrer">
                            <Github className='logo-Github' />
                        </a>
                    </div>
                </section>
                <section className="container-Nav-Btns">
                    {
                        arr.map((el, i) => <div key={i} className="container-Nav-Btn">
                            <button name={el} className="nav-Scroll-Btn" onClick={(e) => btnFunction(e)}>
                                <h1 style={{ margin: "0px" }}>
                                    {el}
                                </h1>
                            </button>
                        </div>)
                    }
                </section>
            </div>
        </>
    )
}

export default Navbar