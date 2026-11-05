export interface CaracteristicaDetalle {
    titulo: string;
    descripcion: string[];
    imagenes: string[]; // Arreglo para soportar 1 o más imágenes por característica
}

export interface SeccionCasoEstudio {
    titulo: string;
    introduccion?: string;
    caracteristicas: CaracteristicaDetalle[];
}

export interface Proyecto {
    id: number;
    slug: string;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    imagenPrincipal: string;
    imagenHover?: string;

    // Estructura Clásica (Para SanApi y Landing BPD)
    elReto?: string;
    laSolucion?: string;
    arquitecturaBackend?: string;
    caracteristicasCliente?: string[];
    caracteristicasAdmin?: string[];

    // NUEVA ESTRUCTURA: Para Casos de Estudio Avanzados (El Detallista)
    casoEstudio?: SeccionCasoEstudio[];

    // Enlaces
    enlaceWeb?: string | null;
    githubFrontend?: string | null;
    githubBackend?: string | null;
}

export const misProyectos: Proyecto[] = [
    {
        id: 1,
        slug: "el-detallista",
        titulo: "E-Commerce El Detallista",
        descripcion: "Plataforma completa de ventas en producción y sistema operativo logístico. Incluye panel administrativo, gestión de inventario en tiempo real y módulo de direcciones con geolocalización satelital.",
        tecnologias: ["React", "TypeScript", "C# .NET API", "SQL Server"],
        imagenPrincipal: "/images/detallista-logo.jpg", 
        imagenHover: "/images/detallista-hero.jpg",
        enlaceWeb: "https://www.eldetallistacotuisano.com", // ENLACE A PRODUCCIÓN
        githubFrontend: null,
        githubBackend: null,

        // NUEVA ESTRUCTURA DE CASO DE ESTUDIO CON IMÁGENES
        casoEstudio: [
            {
                titulo: "La Experiencia del Cliente (B2C)",
                introduccion: "El enfoque principal del frontend fue reducir la fricción en el proceso de compra, adaptando lógicas de negocio complejas de un supermercado físico a una interfaz digital intuitiva.",
                caracteristicas: [
                    {
                        titulo: "Catálogo Inteligente y Filtrado Dinámico",
                        descripcion: [
                            "Lógica Dual de Productos: Sistema de renderizado condicional para manejar productos con venta por unidades fraccionadas (ej. libras de carne o vegetales) frente a productos de unidad estándar.",
                            "Filtros Accionables: Categorías dinámicas alimentadas desde el panel administrativo, integrando filtros automáticos para ofertas, combos y especiales por volumen."
                        ],
                        imagenes: ["/images/img-catalogo.jpg", "/images/img-categoria.jpg"]
                    },
                    {
                        titulo: "Fricción Cero en la Compra",
                        descripcion: [
                            "Accesibilidad Constante: Diseño de un botón de carrito flotante con indicador de estado en tiempo real, garantizando que el usuario nunca pierda de vista su intención de compra.",
                            "Motor de Cálculo Dinámico: Lógica de carrito que procesa cálculos instantáneos en el cliente, desglosando subtotales, ahorros por ofertas y retenciones de impuestos (ITBIS)."
                        ],
                        imagenes: ["/images/img-botoncarritoflotante.jpg", "/images/img-carrito.jpg"]
                    },
                    {
                        titulo: "Checkout y Logística de Última Milla",
                        descripcion: [
                            "Geolocalización de Alta Precisión: Mapas interactivos que capturan las coordenadas exactas (Lat/Lng) del usuario y se inyectan en la base de datos para trazar la ruta directa del repartidor.",
                            "Gestión Inteligente de Pagos: Lógica condicional en el formulario. Si selecciona 'Efectivo', el sistema exige ingresar con cuánto pagará para calcular la devuelta. Si es 'Tarjeta', detona una alerta logística para despachar el Verifone."
                        ],
                        imagenes: ["/images/img-checkout.jpg", "/images/img-checkout2.jpg"]
                    },
                    {
                        titulo: "Ecosistema del Usuario",
                        descripcion: [
                            "Retención y Autogestión: Panel centralizado donde el cliente administra su historial de pedidos, listas recurrentes y una libreta de direcciones con soporte de reubicación manual de pines en el mapa."
                        ],
                        // Login como miniaturas complementarias a la cuenta de usuario
                        imagenes: ["/images/img-cuenta-datosusurios.jpg", "/images/img-login.jpg", "/images/img-loginregistro.jpg"]
                    }
                ]
            },
            {
                titulo: "El Motor Administrativo (B2B Operativo)",
                introduccion: "El backend y el panel de control fueron estructurados para darle al supermercado control total sobre su catálogo y coordinar el flujo de trabajo interno.",
                caracteristicas: [
                    {
                        titulo: "Gestión de Catálogo e Inventario",
                        descripcion: [
                            "Panel de Control Centralizado: Interfaz CRUD completa para que la gerencia gestione inventario, ajuste precios en tiempo real y controle la visibilidad pública de los productos según el stock."
                        ],
                        imagenes: ["/images/img-paneladministrador-inventario.jpg"]
                    },
                    {
                        titulo: "Arquitectura de Roles Operativos (RBAC)",
                        descripcion: [
                            "Control de Acceso Basado en Roles: Creación de perfiles estrictos para Pickers (almacenistas) y Deliveries (repartidores).",
                            "Auditoría Operativa: Módulo para registrar nuevos empleados, auditar su estado y activar/desactivar sus accesos instantáneamente."
                        ],
                        imagenes: ["/images/img-paneladministrador-registroempleado.jpg", "/images/img-paneladministrador-gestionpersonal.jpg"]
                    },
                    {
                        titulo: "Auditoría y Despacho de Pedidos",
                        descripcion: [
                            "Dashboard Operativo: Consola de monitoreo con filtros de estado (Activos, En Camino, Entregados). Otorga a la gerencia una vista panorámica de la asignación de personal por cada orden."
                        ],
                        imagenes: ["/images/img-paneladministrador-gestiopedidos.jpg"]
                    }
                ]
            }
        ]
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