import React from 'react'
import cssIcon from '../Assets/css_icon.png'
import htmlIcon from '../Assets/html_icon.png'
import jsIcon from '../Assets/javascript_icon.png'
import reactIcon from '../Assets/react_icon.png'
import reduxIcon from '../Assets/redux_icon.png'
import bootstrap from '../Assets/Bootstrap.png'
import git from '../Assets/Git.png'
import tailwind from '../Assets/Tailwind.png'
import './Tecnologias.css'

const Tecnologias = () => {
    const iconos = [
        [bootstrap, "Bootstrap"],
        [jsIcon, "Javascript"],
        [tailwind, "Tailwind"],
        [htmlIcon, "HTML 5"],
        [reactIcon, "React"],
        [reduxIcon, "Redux"],
        [cssIcon, "CSS 3"],
        [git, "Git"],
    ]
    return (
        <div className='Padre-Tecnologias'>
            <p className='tecnologias-Usadas'>Tecnologías que manejo:</p>
            <section className="lista-Iconos">
                {
                    iconos.map((el, index) => {
                        return (
                            <div className='tecnologías' key={index}>
                                <img className='icono-Tec' src={el[0]} alt={el} />
                                <span className='nombre-Tecno'>{el[1]}</span>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Tecnologias
