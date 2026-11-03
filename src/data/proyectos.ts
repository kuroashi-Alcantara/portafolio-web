export interface Proyecto {
    id: number;
    slug: string;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    imagenPrincipal: string; // Será la imagen en reposo (ej: el logo)
    imagenHover?: string;    // Será la imagen que aparece al pasar el cursor
    
    // Información detallada para la pantalla del proyecto
    elReto?: string;
    laSolucion?: string;
    arquitecturaBackend?: string;
    caracteristicasCliente?: string[];
    caracteristicasAdmin?: string[];
    
    // Enlaces de Interacción (Para los botones e íconos)
    enlaceWeb?: string | null;
    githubFrontend?: string | null;
    githubBackend?: string | null;
}

export const misProyectos: Proyecto[] = [
    {
        id: 1,
        slug: "el-detallista",
        titulo: "E-Commerce El Detallista",
        descripcion: "Plataforma completa de ventas en producción. Incluye panel administrativo, gestión de inventario en tiempo real y módulo de direcciones con geolocalización.",
        tecnologias: ["React", "TypeScript", "C# .NET API", "SQL Server"],
        imagenPrincipal: "/images/detallista-logo.jpg",
        imagenHover: "/images/detallista-hero.jpg",
        elReto: "El supermercado necesitaba digitalizar su catálogo completo y gestionar pedidos locales sin depender de plataformas de terceros con comisiones altas.",
        laSolucion: "Diseñé e implementé una arquitectura full-stack desacoplada con una API REST sólida en C# .NET y un frontend altamente reactivo en React con TypeScript.",
        arquitecturaBackend: "Endpoints optimizados para la consulta rápida del catálogo, autenticación segura y lógica de negocio para la gestión de estados de pedidos.",
        caracteristicasCliente: [
            "Catálogo dinámico por categorías e inventario en tiempo real.",
            "Módulo interactivo de direcciones con geolocalización por mapas.",
            "Carrito de compras responsivo y flujo de checkout simplificado."
        ],
        caracteristicasAdmin: [
            "Dashboard de administración protegido para control del negocio.",
            "Gestión de productos (crear, editar, ocultar y eliminar stock).",
            "Controles dinámicos de visibilidad de categorías en la portada."
        ],
        enlaceWeb: "https://www.eldetallistacotuisano.com", // El link real de tu CV
        githubFrontend: null,
        githubBackend: null
    },
    {
        id: 2,
        slug: "sanapi-movil",
        titulo: "SanApi: Gestión de Ahorros",
        descripcion: "Aplicación móvil nativa para la administración automatizada de fondos de ahorro colaborativo (San). Arquitectura cliente-servidor con reglas de negocio estrictas.",
        tecnologias: ["Flutter", "Dart", "C# .NET API", "SQL Server"],
        imagenPrincipal: "/images/sanapi-logo.jpg",
        imagenHover: "/images/sanapi-hero.jpg",
        elReto: "Digitalizar y estructurar el modelo tradicional de ahorro dominicano ('San'). El desafío consistía en crear un sistema escalable que permitiera a los organizadores crear grupos, gestionar participantes mediante invitaciones y administrar turnos, eliminando la fricción y el desorden del control manual.",
        laSolucion: "Desarrollé una aplicación móvil nativa en Flutter respaldada por una API REST robusta construida desde cero en C# .NET. Toda la lógica de negocio, validación de turnos y control de estados reside en el backend, garantizando la seguridad y consistencia de los datos financieros de los usuarios.",
        arquitecturaBackend: "API en C# .NET encargada de la autenticación segura, generación de códigos de invitación únicos y manejo de máquinas de estado para las 'salas' (bloqueando modificaciones estructurales una vez que el ciclo de ahorro ha iniciado).",
        caracteristicasCliente: [
            "Sistema de 'Salas' aisladas con códigos de invitación y flujo de aprobación.",
            "Participación simultánea en múltiples grupos de ahorro interactivos.",
            "Autenticación y gestión de perfiles de usuario."
        ],
        caracteristicasAdmin: [
            "Control total de la sala: alteración de turnos, admisión y eliminación de usuarios (fase de preparación).",
            "Bloqueo automático de reglas de negocio al cambiar el estado a 'Iniciado'.",
            "Módulo de validación de comprobantes y conciliación de pagos (Fase de integración)."
        ],
        enlaceWeb: null,
        githubFrontend: "https://github.com/kuroashi-Alcantara/app_san_movil.git", // Del CV
        githubBackend: "https://github.com/kuroashi-Alcantara/SanApi.git" // Del CV
    },
    {
        id: 3,
        slug: "landing-promocional-bpd",
        titulo: "Landing BPD: Beneficios que Suman",
        descripcion: "Propuesta de maquetación web responsiva y pixel-perfect para campaña promocional del Banco Popular Dominicano, desarrollada bajo rigurosos estándares corporativos.",
        tecnologias: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
        imagenPrincipal: "/images/bpd-logo.jpg",
        imagenHover: "/images/bpd-hero.jpg",
        elReto: "Desarrollar una propuesta de maquetación web de alto rendimiento para la promoción 'Beneficios que suman' del Banco Popular Dominicano. El principal desafío consistía en replicar con absoluta fidelidad (pixel-perfect) la identidad visual del banco, garantizar una adaptabilidad móvil impecable (Mobile-First) y validar un formulario de registro sin depender de librerías externas pesadas.",
        laSolucion: "Implementé una interfaz ligera y de rápida carga utilizando HTML5 semántico y CSS3 personalizado con variables nativas para gestionar la paleta corporativa (Ultramar, Larimar y Mamey). Utilicé el sistema de grillas de Bootstrap 5 para lograr una adaptabilidad fluida y desarrollé scripts en Vanilla JavaScript para la validación interactiva del formulario en el lado del cliente.",
        arquitecturaBackend: "Proyecto de maquetación Frontend (Serverless) optimizado para el lado del cliente, estructurado con buenas prácticas de accesibilidad y SEO, y desplegado de manera continua a través de GitHub Pages.",
        caracteristicasCliente: [
            "Diseño responsivo y Mobile-First adaptado a múltiples resoluciones y pantallas.",
            "Formulario de registro interactivo con validación de campos en tiempo real mediante Vanilla JavaScript.",
            "Estilos alineados estrictamente con el manual de marca corporativo del banco."
        ],
        caracteristicasAdmin: [
            "Estructura de archivos y directorios limpia, modular y altamente mantenible.",
            "Uso de variables CSS nativas para facilitar cambios globales de color de forma escalable.",
            "Optimización de recursos y despliegue automatizado directo desde el repositorio."
        ],
        enlaceWeb: "https://kuroashi-alcantara.github.io/landing-page-promocional-bpd/",
        githubFrontend: "https://github.com/kuroashi-Alcantara/landing-page-promocional-bpd",
        githubBackend: null
    }
];