import React from 'react';
import imgError404 from '../Assets/404Error.png'

const Error404 = () => {
    return <div style={{
        width: "100%",
        backgroundColor: "white",
        height: "100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}>
        <img src={imgError404} alt="Img-Error-404" />
    </div>;
};

export default Error404;
