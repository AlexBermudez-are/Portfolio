import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile;
};

const TechnologyItem = ({ tecno }) => {
  const isMobile = useIsMobile();

  // Estilos base + condicionales para tecnologías especiales
  const baseStyle = "info-Proyecto-Tecnologia text-xs md:text-base lg:text-lg";
  const specialStyles = {
    Back: {
      boxShadow:
        "rgb(25 255 0) 0px 0px 12px 0px, rgb(172 255 163) 0px 0px 0px 2px",
      color: "rgb(172 255 163)",
    },
    Front: {
      boxShadow:
        "rgb(0 135 255) 0px 0px 12px 0px, rgb(121 192 255) 0px 0px 0px 2px",
      color: "rgb(121 192 255)",
    },
    Fullstack: {
      boxShadow:
        "rgb(160 35 251) 0px 0px 12px 0px, rgb(211 97 255) 0px 0px 0px 2px",
      color: "rgb(211 97 255)",
    },
  };

  // Animaciones responsivas
  const animations = {
    mobile: {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      whileTap: { x: 10, ...specialStyles[tecno] },
      transition: { type: "tween", duration: 1 },
    },
    desktop: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      whileHover: {
        scale: 1.1,
        ...specialStyles[tecno],
        transition: { type: "spring", stiffness: 300 },
      },
    },
  };

  return (
    <motion.p
      className={baseStyle}
      style={specialStyles[tecno] || {}}
      {...(isMobile ? animations.mobile : animations.desktop)}
    >
      {tecno}
    </motion.p>
  );
};

export default TechnologyItem;
