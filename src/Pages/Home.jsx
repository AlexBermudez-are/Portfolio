import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import BodyHome from '../Home/BodyHome'
import HeaderHome from '../Home/HeaderHome'
import Navbar from '../Home/Navbar'

const initialState = {
    Navbar: false,
    Header: false,
    BodyPresentacion: false
}


const Home = () => {

    const [state, setState] = useState(initialState)

    window.onscroll = function () {
        var scroll = window.scrollY;
        if (scroll > 0) {
            return setState({
                ...state,
                Navbar: true,
                Header: true,
                BodyPresentacion: true
            })
        } else {
            return setState({
                ...state,
                Navbar: false,
                Header: false,
                BodyPresentacion: false
            })
        }
    };

    return (
        <div >
            <Navbar prop={state.Navbar} />
            <HeaderHome prop={state.Header} />
            <BodyHome prop={state.BodyPresentacion} />
            <Footer/>
        </div>
    )
}

export default Home
