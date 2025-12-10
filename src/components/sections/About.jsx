/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { DownloadIcon } from "lucide-react";

const squareVariants = {
  float: {
    y: [0, -20, 0],
    rotate: [0, 15, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const roles = [
  "Desarrollador Fullstack",
  "Desarrollador Front End",
  "Desarrollador Back End",
];

const About = () => {
  /** ============================
   *  🔵 TYPEWRITER LOGIC
   *  ============================ */
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const speed = isDeleting ? 50 : 100; // velocidad escritura/borrado

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      // escribir texto
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, speed);

      if (text === current) {
        setTimeout(() => setIsDeleting(true), 1200); // pausa antes de borrar
      }
    } else {
      // borrar texto
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, speed);

      if (text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length); // siguiente rol
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 h-[100vh] flex items-center overflow-hidden"
    >
      {/* 🔵 Cuadros animados de fondo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          variants={squareVariants}
          animate="float"
          className="absolute w-32 h-32 bg-blue-500/40 rounded-lg"
          style={{ top: "10%", left: "15%" }}
        />

        <motion.div
          variants={squareVariants}
          animate="float"
          transition={{ delay: 1 }}
          className="absolute w-24 h-24 bg-blue-500/40 rounded-lg"
          style={{ top: "55%", left: "5%" }}
        />

        <motion.div
          variants={squareVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute w-40 h-40 bg-blue-500/30 rounded-lg"
          style={{ top: "30%", right: "10%" }}
        />

        <motion.div
          variants={squareVariants}
          animate="float"
          transition={{ delay: 1.5 }}
          className="absolute w-20 h-20 bg-blue-500/30 rounded-lg"
          style={{ bottom: "15%", right: "25%" }}
        />

        <motion.div
          variants={squareVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute w-20 h-20 bg-blue-500/30 rounded-lg"
          style={{ bottom: "25%", left: "45%" }}
        />
      </motion.div>

      {/* Contenido */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <div className="md:w-1/3 flex items-center justify-center">
            <img
              src={profile.photo}
              alt={profile.name}
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>

          <div className="md:w-2/3 text-center flex flex-col items-center justify-center md:text-left md:items-start">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              Alexis Bermúdez
            </h1>

            <h2 className="text-2xl text-blue-500 font-semibold mt-2">
              {text}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mt-6">
              {profile.about}
            </p>
            <a
              href="/CV" // Usa el href aquí
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 rounded-md mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
            >
              <p>Descargar Cv</p>
              <DownloadIcon className="inline-block w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
