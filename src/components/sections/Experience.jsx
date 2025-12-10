import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profile } from "../../data/profile";

// Componente reutilizable para la tarjeta de experiencia
const JobCard = ({ job }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
      {job.role}
    </h3>
    <p className="text-blue-500 dark:text-blue-400 font-semibold mb-2">
      {job.company}
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
      {job.period}
    </p>
    <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
  </div>
);

const Experience = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Experiencia Laboral
        </h2>
        <div className="relative">
          {/* Línea vertical central fija (SOLO esta línea) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500"></div>

          {profile.experience.map((job, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="
                mb-12
                grid
                grid-cols-1                
                lg:grid-cols-[1fr_80px_1fr]
                items-center
                gap-6
              "
            >
              {/* Columna IZQUIERDA (Desktop content) */}
              {/* Se muestra solo si el índice es impar (1, 3, ...) y solo en desktop */}
              <div
                className={`hidden lg:block ${
                  index % 2 !== 0 ? "text-right" : ""
                }`}
              >
                {index % 2 !== 0 && <JobCard job={job} />}
              </div>

              {/* COLUMNA CENTRAL → ICONO */}
              <div className="relative z-10 flex items-center justify-center">
                {/* Icono centrado sobre la línea principal */}
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full shadow-lg">
                  <Briefcase className="text-white" />
                </div>
              </div>

              {/* Columna DERECHA (Desktop content) */}
              {/* Se muestra solo si el índice es par (0, 2, ...) y solo en desktop */}
              <div
                className={`hidden lg:block ${
                  index % 2 === 0 ? "text-left" : ""
                }`}
              >
                {index % 2 === 0 && <JobCard job={job} />}
              </div>

              {/* MOBILE: TARJETA DEBAJO DEL ICONO (Solo en móvil) */}
              {/* Ocupa el ancho completo de la cuadrícula en móvil */}
              <div className="z-20 lg:hidden col-span-full">
                <JobCard job={job} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
