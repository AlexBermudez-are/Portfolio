import React, { useEffect, useState } from 'react'
import BodyHome from '../Home/BodyHome'
import FooterHome from '../Home/FooterHome'
import HeaderHome from '../Home/HeaderHome'

const Home = () => {
    const [state, setstate] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <HeaderHome state={state} setstate={setstate} />
            <BodyHome state={state} setstate={setstate} />
            <FooterHome />
        </div>
    )
}

export default Home
