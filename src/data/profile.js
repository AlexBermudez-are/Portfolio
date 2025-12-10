// src/data/profile.js

// 1. Importa todas las imágenes estáticamente usando rutas relativas correctas
import FotoPerfil from "../assets/projects/Foto.jpg";
import FiiniaImagen from "../assets/projects/Fiinia.png";
import LiaRHImagen from "../assets/projects/LiaRH.png";
import ContratosExpressImagen from "../assets/projects/Contratos-Express.png";
import GlobalNewsImagen from "../assets/projects/Global News Feedback.png";
import HotelinkingImagen from "../assets/projects/Proyecto_Hotelinking.png";
import TodoCafeImagen from "../assets/projects/Todo_Sobre_Cafe_Proyecto.png";
import PokedexImagen from "../assets/projects/Proyecto_Pokedex.png";
import AlamoImagen from "../assets/projects/alamo.png";
import TMDBImagen from "../assets/projects/TMDB.png";
import ONGSomosMasImagen from "../assets/projects/Proyecto_ONG.png";
import SuperheroesImagen from "../assets/projects/Buscador_Superheroes_Proyecto.png";
import BlogImagen from "../assets/projects/Proyecto-Blog.png";

export const profile = {
  name: "Alexis Bermúdez",
  role: "Desarrollador Web Fullstack",
  // 2. Asigna la variable importada en lugar del string
  photo: FotoPerfil,
  about:
    "Desarrollador fullstack freelance. Me especializo en construir plataformas web eficientes y seguras desarrollando tanto front como back, integrando APIs, pagos online y bases de datos robustas dentro del ecosistema de JavaScript, principalmente con React, Node.js y PostgreSQL con Sequelize ó MongoDB con Mongoose.",
  experience: [
    {
      company: "Desarrollador Frontend",
      role: "FiinIA",
      period: "Abril 2025 - Actualidad",
      description:
        "FiinIA es una plataforma de financiamiento empresarial que utiliza inteligencia artificial para conectar a las PyMEs con las mejores opciones de financiamiento del mercado.",
    },
    {
      company: "Desarrollador Full-Stack",
      role: "LiaRH",
      period: "Febrero 2025 - Actualidad",
      description:
        "Lía es una plataforma de reclutamiento impulsada por IA que automatiza y optimiza todo el proceso de selección, desde el análisis de CVs hasta la contratación.",
    },
    {
      company: "Desarrollador Full-Stack",
      role: "Contratos Express",
      period: "Julio 2024 - Enero 2025",
      description:
        "Plataforma digital especializada en la generación y edición de contratos en línea mediante un procesador de lenguaje natural (NLP), con compra y almacenamiento de contratos.",
    },
    {
      company: "Desarrollador Backend",
      role: "Global Newsgroup",
      period: "Enero 2024 - Mayo 2024",
      description:
        "Sistema de gestión de empleados para RRHH enfocado en mejorar el rendimiento en la empresa, con creación de usuarios, oficinas, equipos y devoluciones de desempeño.",
    },
    {
      company: "Desarrollador Full-Stack",
      role: "Todo sobre Café",
      period: "Septiembre 2023 - Noviembre 2023",
      description:
        "Aplicación delivery de cafetería con registro de usuarios, inicio de sesión, recuperación de contraseña, carrito de compras y formulario de contacto.",
    },
    {
      company: "Desarrollador Frontend",
      role: "Alamo.co",
      period: "Septiembre 2023 - Noviembre 2023",
      description:
        "Plataforma de compra/venta de vehículos usados con perfiles de usuario, publicación de autos, agendamiento de viajes, simulación de crédito y comparación de precios.",
    },
    {
      company: "Desarrollador Frontend",
      role: "ONG Somos Más",
      period: "Octubre 2021 - Diciembre 2022",
      description:
        "Página de donaciones para una ONG con registro de usuarios, inicio de sesión, donaciones y listado de aportes.",
    },
  ],
  education: [
    {
      institution: "Alkemy",
      degree: "Desarrollador Web Frontend",
    },
    {
      institution: "Plataforma 5",
      degree: "Desarrollador Web Full-Stack",
    },
  ],
  skills: [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Framer Motion", level: 70 },
    { name: "SQL", level: 80 },
  ],
  projects: [
    {
      name: "FiinIA",
      description:
        "FiinIA es una plataforma de financiamiento empresarial que utiliza inteligencia artificial para conectar a las PyMEs con las mejores opciones de financiamiento del mercado. Tecnologías: Node, React, Postgres, Sequelize, Express.",
      image: FiiniaImagen,
      github: null,
      demo: "https://fiinia.com/",
    },
    {
      name: "LiaRH",
      description:
        "Lía es una plataforma de reclutamiento impulsada por IA que automatiza y optimiza todo el proceso de selección, desde el análisis de CVs hasta la contratación. Tecnologías: Node, React, Postgres, Sequelize, Express.",
      image: LiaRHImagen,
      github: null,
      demo: "https://www.liarh.com/",
    },
    {
      name: "Contratos Express",
      description:
        "Una plataforma digital especializada en la generación y edición de contratos en línea mediante un procesador de lenguaje natural (NLP), permite al usuario comprar y almacenar los contratos generados. Tecnologías: Node, React, Postgres, Stripe, Sequelize.",
      image: ContratosExpressImagen,
      github: null,
      demo: null,
    },
    {
      name: "Global Newsgroup",
      description:
        "Un proyecto de gestión de empleados para RRHH enfocado en mejorar el rendimiento en la empresa. Permite crear usuarios, oficinas, equipos y dar devoluciones a empleados. Tecnologías: Node, Express, Postgres, Sequelize, JWT.",
      image: GlobalNewsImagen,
      github: null,
      demo: null,
    },
    {
      name: "Hotelinking",
      description:
        "Una prueba técnica donde un usuario puede obtener y canjear cupones únicos de distintos artículos, con registro e inicio de sesión. Tecnologías: PHP, Laravel, MySQL, React.",
      image: "/src/assets/projects/Proyecto_Hotelinking.png",
      github: HotelinkingImagen,
      demo: null,
    },
    {
      name: "Todo sobre Café",
      description:
        "App delivery de cafetería con creación de cuentas, inicio de sesión, recuperación de contraseña, carrito de compras y formulario de contacto. Tecnologías: Javascript, Node, React, MongoDB, JWT.",
      image: TodoCafeImagen,
      github: null,
      demo: "https://pagina-de-comida-con-react-demo.vercel.app/",
    },
    {
      name: "Pokedex",
      description:
        "Pokedex interactiva para buscar pokemons, agregarlos a favoritos y armar equipos de hasta 5, mostrando las estadísticas dominantes. Tecnologías: React, Redux, Tailwind, Javascript, CSS.",
      image: PokedexImagen,
      github: "https://github.com/AlexBermudez-are/pokedex-Web",
      demo: "https://pokedex-web-beige.vercel.app/",
    },
    {
      name: "Alamo.co",
      description:
        "Plataforma de compra/venta de vehículos usados, donde puedes crear tu perfil, publicar autos, rentar vehículos, agendar viajes, simular crédito y comparar precios. Tecnologías: NuxtJS, VueJS, Material-UI, Javascript, Swiper.",
      image: AlamoImagen,
      github: null,
      demo: "https://www.alamo.com/",
    },
    {
      name: "TMDB",
      description:
        "Aplicación que consume la API de TMDB para crear una página con inicio de sesión y favoritos asociados a cada cuenta. Tecnologías: Javascript, React, Postgres, Sequelize, Bootstrap.",
      image: TMDBImagen,
      github: "https://github.com/AlexBermudez-are/26-checkpoint-TMDB",
      demo: null,
    },
    {
      name: "ONG Somos Más",
      description:
        "Proyecto final de la aceleración de Alkemy: página de donaciones para una ONG, con registro de usuarios, inicio de sesión, donaciones y listado de aportes. Tecnologías: React, Bootstrap, Redux, SASS.",
      image: ONGSomosMasImagen,
      github: null,
      demo: null,
    },
    {
      name: "Superheroes",
      description:
        "Buscador de superhéroes donde puedes armar un equipo y ver los stats combinados del grupo. Tecnologías: React, Bootstrap, CSS, Formik.",
      image: SuperheroesImagen,
      github:
        "https://github.com/AlexBermudez-are/Equipo-de-Superheroes-Alkemy",
      demo: "https://proyecto-superheroes-sin-sesion.vercel.app/",
    },
    {
      name: "Creación de Posts",
      description:
        "Blog interactivo que permite crear, editar y eliminar publicaciones. Tecnologías: React, Bootstrap, CSS, Formik.",
      image: BlogImagen,
      github: "https://github.com/AlexBermudez-are/Blog-de-Posts",
      demo: "https://blog-de-posts-alkemy.vercel.app/",
    },
  ],
  contact: {
    email: "edbwinn@gmail.com",
    linkedin: "http://www.linkedin.com/in/alexisbermudezb/",
    github: "https://github.com/AlexBermudez-are",
  },
};
