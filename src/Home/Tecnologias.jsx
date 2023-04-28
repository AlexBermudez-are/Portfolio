import React from 'react'
import cssIcon from '../Assets/css_icon.png'
import htmlIcon from '../Assets/html_icon.png'
import jsIcon from '../Assets/javascript_icon.png'
import reactIcon from '../Assets/react_icon.png'
import reduxIcon from '../Assets/redux_icon.png'
import bootstrap from '../Assets/Bootstrap.png'
import git from '../Assets/Git.png'
import tailwind from '../Assets/Tailwind.png'
import node from '../Assets/IconNode.svg'
import postgres from '../Assets/Postgresql_elephant.png'
import sequelize from '../Assets/sequelize_original_logo_icon_146348.svg'
import mongodb from '../Assets/mongodb.png'
import './Tecnologias.css'

const Tecnologias = () => {
    const iconos = [
        [node, "Node"],
        [jsIcon, "Javascript"],
        [htmlIcon, "HTML 5"],
        [reactIcon, "React"],
        [reduxIcon, "Redux"],
        [cssIcon, "CSS 3"],
        [git, "Git"],
        [tailwind, "TailwindCSS"],
        [bootstrap, "Bootstrap"],
        [postgres, "Postgres"],
        [sequelize, "Sequelize"],
        [mongodb, "MongoDB"]
    ]
    return (
        <div>
            <h2 className='tecnologias-Usadas'>TECNOLOGÍAS</h2>
            <div className='Padre-Tecnologias'>
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
        </div>
    )
}

export default Tecnologias
