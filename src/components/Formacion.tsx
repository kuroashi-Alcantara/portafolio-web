const Formacion = () => {
  const experiencia = [
    {
      id: 1,
      titulo: "Desarrollador Full-Stack (Freelance)",
      institucion: "Independiente | Cotuí, RD",
      fecha: "Septiembre 2025 - Presente",
      descripcion: "Diseño, desarrollo y despliegue a producción de El Detallista Cotuisano (e-commerce en Azure) y desarrollo de un sistema de gestión administrativo y de inventario para un negocio local.",
      destacado: true
    }
  ];

  const educacion = [
    {
      id: 1,
      titulo: "Licenciatura en Informática",
      institucion: "Universidad Tecnológica del Cibao Oriental (UTECO)",
      fecha: "2024",
      descripcion: "Formación sólida en arquitectura de software, bases de datos relacionales y estructuras de datos.",
      destacado: true
    },
    {
      id: 2,
      titulo: "Taller de Introducción a la Ciberseguridad",
      institucion: "ITLA",
      fecha: "2025",
      descripcion: "Fundamentos de protección de redes y seguridad informática.",
      destacado: false
    },
    {
      id: 3,
      titulo: "Programa de Inglés por Inmersión",
      institucion: "MESCYT",
      fecha: "2023",
      descripcion: "Desarrollo de habilidades de comunicación técnica avanzada.",
      destacado: false
    }
  ];

  return (
    <section id="formacion" className="py-20 px-6 md:px-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-16 flex items-center justify-center md:justify-start">
          <span className="text-cyan-400 mr-4 font-mono text-2xl">03.</span> Mi Trayectoria
        </h2>

        {/* Contenedor Grid (2 Columnas en Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Columna Izquierda: Experiencia Laboral */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
              <h3 className="text-2xl font-bold text-slate-100">Experiencia Laboral</h3>
            </div>

            <div className="border-l-2 border-slate-700 ml-3">
              
             {/* Experiencia 1: Proyectos Grandes (Actual) */}
              <div className="relative pl-8 mb-12">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 border-2 border-cyan-400 rounded-full bg-slate-900"></div>
                <span className="text-cyan-400 font-mono text-sm">Septiembre 2026 - Presente</span>
                <h4 className="text-xl font-bold text-slate-100 mt-2">Desarrollador Full-Stack</h4>
                <span className="text-slate-400 text-sm block mb-4">Freelance | Cotuí, RD</span>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Provisión de servicios de desarrollo de software a medida. Como contrato principal, lideré el ciclo completo de creación de la plataforma e-commerce para el supermercado El Detallista, abarcando desde la arquitectura técnica hasta el despliegue en Microsoft Azure. En paralelo, desarrollo arquitecturas backend y APIs RESTful para aplicaciones móviles independientes.
                </p>
              </div>

              {/* Experiencia 2: Sistema de Gestión */}
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 border-2 border-slate-500 rounded-full bg-slate-900"></div>
                <span className="text-cyan-400 font-mono text-sm">Enero 2026 - Marzo 2026</span>
                <h4 className="text-xl font-bold text-slate-100 mt-2">Desarrollador de Software</h4>
                <span className="text-slate-400 text-sm block mb-4">Freelance | Cotuí, RD</span>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Desarrollo de un sistema de control administrativo e inventario adaptado a las necesidades operativas de un pequeño negocio de empanadas nombrado "Empanadas RYM", optimizando el flujo de caja y seguimiento de stock.
                </p>
              </div>

            </div>
          </div>

          {/* Columna Derecha: Educación */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-3"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Formación Académica
            </h3>
            
            <div className="space-y-8">
              {educacion.map((item) => (
                <div key={item.id} className="relative pl-6 border-l-2 border-slate-700 hover:border-cyan-400 transition-colors group">
                  <div className="absolute w-3 h-3 bg-slate-900 border-2 border-slate-500 rounded-full -left-[7.5px] top-1 group-hover:border-cyan-400 group-hover:bg-cyan-400 transition-colors"></div>
                  
                  <div className="text-cyan-400 font-mono text-sm mb-1">{item.fecha}</div>
                  <h4 className={`text-xl font-bold mb-1 ${item.destacado ? 'text-slate-100' : 'text-slate-200'}`}>{item.titulo}</h4>
                  <div className="text-slate-400 font-semibold text-sm mb-3">{item.institucion}</div>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Formacion;