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
                        Me llamo Alexis, tengo 24 años, soy Mexicano y actualmente vivo en Argentina.
                        <br />
                        <br />
                        Desde hace un año y medio inicie en el mundo del desarrollo web por mi propia cuenta.
                        <br />
                        <br />
                        E trabajado
                        como freelance y creando proyectos personales de esa manera fuí adquiriendo
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
