import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import BodyHome from '../Home/BodyHome'
import HeaderHome from '../Home/HeaderHome'
import Particle from '../Home/Particle'
import Navbar from '../Home/Navbar'

const Home = () => {

    let scroll = window.scrollY

    const [state, setState] = useState(false)

    window.onscroll = function () {
        const mq1024 = window.matchMedia('(min-width: 1024px)'),
            mq768 = window.matchMedia('(min-width: 768px)'),
            mq425 = window.matchMedia('(min-width: 425px)');

        scroll = window.scrollY;
        
        if(mq1024){
            if (scroll > 1200) {
                return setState(true)
            } else {
                return setState(false)
            }
        } else if (mq768) {
            if (scroll > 1400) {
                return setState(true)
            } else {
                return setState(false)
            }
        }
    };


    return (
        <div >
            <Particle />
            <Navbar prop={state} prop2={scroll} />
            <HeaderHome/>
            <BodyHome/>
            <Footer />
        </div>
    )
}

export default Home
