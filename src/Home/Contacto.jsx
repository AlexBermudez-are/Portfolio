import React, { useRef } from 'react'
import './Contacto.css'
import { ReactComponent as IconoVector } from '../Assets/vectorFormularioContacto.svg'
import { useState } from 'react'

const initialState = {
    nombreError: "El caracter ingresado no es valido para un nombre",
    emailError: "El caracter ingresado no es valido para un email",
}

const Contacto = () => {

    const [form, setForm] = useState(initialState)
    let campoVacio = "El formulario no puede estar vacio"
    const nombreRef = useRef()
    const emailRef = useRef()
    const asuntoRef = useRef()
    const comentarioRef = useRef()

    const validarForm = (e) => {
        if (e.target.name === 'nombre') {
            if (e.target.value === '') {

                nombreRef.current.className = 'span-Error-Nombre active'
                setForm({
                    ...form,
                    nombreError: campoVacio
                })

            } else {
                let regEx = new RegExp(e.target.pattern);
                if (regEx.exec(e.target.value)) {
                    nombreRef.current.className = 'span-Error-Nombre'
                    setForm({
                        ...form,
                        nombreError: initialState.nombreError
                    })
                } else {
                    nombreRef.current.className = 'span-Error-Nombre active'
                    setForm({
                        ...form,
                        nombreError: initialState.nombreError
                    })
                }
            }
        }
        if (e.target.name === 'email') {
            if (e.target.value === '') {
                emailRef.current.className = 'span-Error-Email active'
                setForm({
                    ...form,
                    emailError: campoVacio
                })
            } else {
                let regEx = new RegExp(e.target.pattern);
                if (regEx.exec(e.target.value)) {
                    emailRef.current.className = 'span-Error-Email'
                    setForm({
                        ...form,
                        emailError: initialState.emailError
                    })
                } else {
                    emailRef.current.className = 'span-Error-Email active'
                    setForm({
                        ...form,
                        emailError: initialState.emailError
                    })
                }
            }
        }
        if (e.target.name === 'asunto') {
            if (e.target.value === '') {
                asuntoRef.current.className = 'span-Error-Asunto active'
            } else {
                asuntoRef.current.className = 'span-Error-Asunto'
            }
        }
        if (e.target.name === 'comentario') {
            if (e.target.value === '') {
                comentarioRef.current.className = 'span-Error-Comentario active'
            } else {
                comentarioRef.current.className = 'span-Error-Comentario'
            }
        }
    }

    return (
        <div className='padre-Contacto'>
            <h1 className='titulo-Contacto'>Contacto</h1>
            <form className='form-Padre' action="https://formsubmit.co/edbwinn@gmail.com" method="POST">
                <div className='inputs-Icono-Contenedor'>
                    <section className="inputs-Contacto">
                        <label className="label-Input" htmlFor="nombre">
                            <p className='titulo-Input'>Nombre:</p>
                            <input
                                autoComplete='off'
                                onChange={validarForm}
                                className='input-Contacto'
                                type="text" name="nombre" required
                                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                            />
                            <span ref={nombreRef} className="span-Error-Nombre">{form.nombreError}</span>
                        </label>
                        <label className="label-Input" htmlFor="email">
                            <p className='titulo-Input'>Email:</p>
                            <input
                                autoComplete='off'
                                onChange={validarForm}
                                className='input-Contacto'
                                type="email" name="email" required
                                pattern="^[a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,15})$"
                            />
                            <span ref={emailRef} className="span-Error-Email">{form.emailError}</span>
                        </label>
                        <label className="label-Input" htmlFor="asunto">
                            <p className='titulo-Input'>Asunto:</p>
                            <input
                                autoComplete='off'
                                className='input-Contacto'
                                type="text" name='asunto' required
                                onChange={validarForm}
                            />
                            <span ref={asuntoRef} className="span-Error-Asunto">{campoVacio}</span>
                        </label>
                    </section>
                    <IconoVector className='icono-Vector' fill='#B8E4F0' />
                </div>
                <label htmlFor="comentario" className='comentarios-Contacto'>
                    <p className='titulo-Input'>Mensaje:</p>
                    <textarea required onChange={validarForm} className='text-Area' name="comentario" cols="30" rows="10"></textarea>
                    <span ref={comentarioRef} className="span-Error-Comentario">{campoVacio}</span>
                </label>
                <button className='btn-Enviar'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto
