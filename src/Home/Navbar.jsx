import React, { useEffect, useRef } from 'react'
import { ReactComponent as Github } from '../Assets/vectorGithub.svg'
import { ReactComponent as IconLinkedin } from '../Assets/vectorLinkedin.svg'
import './Navbar.css'
import { useState } from 'react'

const Navbar = ({ prop }) => {

    const arr = ["Inicio", "Tecnologías", "Proyectos"]
    const [navbar, setNavbar] = useState("container-Main")
    // const [menuControll, setmenuControll] = useState(false)
    // const refDespegable = useRef()

    const mq1440 = window.matchMedia('(min-width:1440px)'),
        mq1024 = window.matchMedia('(min-width: 1024px)'),
        mq768 = window.matchMedia('(min-width: 768px)'),
        mq425 = window.matchMedia('(min-width: 425px)');

    useEffect(() => {
        if (mq1440.matches || mq1024.matches || mq768.matches) {
            prop ? setNavbar('container-Main active') : setNavbar('container-Main')
        } else {
            setNavbar('container-Main mq425')
        }
    }, [prop])

    function btnFunction(e) {
        if (mq1440.matches) {
            if (e.target.innerText === 'Tecnologías') {
                window.scrollTo({
                    top: 1500,
                    behavior: 'smooth'
                });
            } else if (e.target.innerText === 'Proyectos') {
                window.scrollTo({
                    top: 2500,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } else if (mq1024.matches) {
            if (e.target.innerText === 'Tecnologías') {
                window.scrollTo({
                    top: 1100,
                    behavior: 'smooth'
                });
            } else if (e.target.innerText === 'Proyectos') {
                window.scrollTo({
                    top: 2200,
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
                    top: 1000,
                    behavior: 'smooth'
                });
            } else if (e.target.innerText === 'Proyectos') {
                window.scrollTo({
                    top: 2000,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } else if (mq425.matches) {
            setNavbar('container-Main')
        }
    }

    // const menuDespegable = () => { // Menu hamburguesa
    //     if (!menuControll) {
    //         refDespegable.current.className = 'hamburger active hamburger--squeeze is-active'
    //     }
    //     if (menuControll) {
    //         refDespegable.current.className = 'hamburger hamburger--squeeze'
    //     }
    //     setmenuControll(!menuControll)
    // }


    return (
        <>
            {/* <button onClick={menuDespegable} ref={refDespegable} id="btn-Hamburguer" className="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button> */}
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