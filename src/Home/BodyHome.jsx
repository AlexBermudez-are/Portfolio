import React from 'react'
import './BodyHome.css'
import Tecnologias from './Tecnologias'
import Proyectos from './Proyectos'

const BodyHome = () => {

    return (
        <div className='Padre-Body'>
            <section className="presentacion">
                <div className='texto-Presentacion-P'>
                    <p className='hola-Mundo'>Hola Mundo!</p>
                    <p className='presentacion-Personal'>
                        Soy desarrollador web Fullstack de 24 años.
                        <br />
                        <br />
                        Soy una persona en constante capacitación, comprometida, empática y apasionada por la tecnología. Inicié en el mundo de la tecnología a principios del 2021 lo que me permitio desarrollar y pulir habilidades tanto tecnicas como blandas.
                        <br />
                        <br />
                        Tengo conocimientos en bases de datos SQL y NoSQL, como Postgres con Sequelize y MongoDB con Mongoose. 
                        <br />
                        He trabajado en proyectos personales y profesionales utilizando tecnologías como JavaScript, Node.js, React, Redux, Express y JWT.
                        <br />
                        <br />
                        Actualmente, me encuentro trabajando en un proyecto utilizando Next.js, TypeScript, AWS, Docker y Postgres con Sequelize de manera parcial (part-time).
                    </p>
                </div>
            </section>
            <Tecnologias />
            <Proyectos />
        </div>
    )
}

export default BodyHome
