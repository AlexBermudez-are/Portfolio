import React, { useEffect } from "react";
import cvPdf from "../../assets/Cv_Alexis_Bermudez_Fullstack.pdf";

const CV = () => {
  const mobile = () => {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("enlaceDescargarPdf").click();
      window.close();
    }
  };

  useEffect(() => {
    mobile();
  }, []);

  return (
    <div>
      <object
        data={cvPdf}
        type="application/pdf"
        width="100%"
        style={{ height: "100vh" }}
      >
        <a
          href={cvPdf}
          id="enlaceDescargarPdf"
          download="CV-Edwin-Alexis-Bermúdez.pdf"
        >
          Tu dispositivo no puede visualizar los PDF, da click aquí para
          descargar el cv.
        </a>
      </object>
    </div>
  );
};

export default CV;
