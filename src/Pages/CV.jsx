import React, { useEffect } from 'react'

const CV = () => {

    const mobile = () => {
        if (typeof window.orientation !== "undefined") {
            document.getElementById('enlaceDescargarPdf').click();
            window.close();
        }
    }

    useEffect(() => {
        mobile()
    }, [])

    return (
        <div>
            <object
                data={require('../Assets/Cv Edwin Alexis Bermúdez Bermúdez.pdf')}
                type="application/pdf"
                width="100%"
                height="800px"
            >
                <a
                    href={require('../Assets/Cv Edwin Alexis Bermúdez Bermúdez.pdf')}
                    id="enlaceDescargarPdf"
                    download="CV-Edwin-Alexis-Bermúdez.pdf"
                >Tu dispositivo no puede visualizar los PDF, da click aquí para descargarlo</a>
            </object>
        </div>
    )
}

export default CV
