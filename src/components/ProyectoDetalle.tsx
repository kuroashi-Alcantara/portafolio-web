import { useParams, Link } from 'react-router-dom';
import { misProyectos } from '../data/proyectos'; // Ajusta tu ruta de importación

const ProyectoDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const proyecto = misProyectos.find((p) => p.slug === slug);

  if (!proyecto) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
        <Link to="/" className="text-cyan-400 hover:underline">← Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-16 px-6 md:px-24">
      <div className="max-w-5xl mx-auto">
        
        {/* NAVEGACIÓN SUPERIOR */}
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 font-mono text-sm">
          ← Volver a todos los proyectos
        </Link>

        {/* CABECERA DEL PROYECTO */}
        <div className="mb-12 border-b border-slate-800 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-100">{proyecto.titulo}</h1>
          
          {/* BOTÓN ENLACE A PRODUCCIÓN (Se muestra si existe enlaceWeb) */}
          {proyecto.enlaceWeb && (
            <a 
              href={proyecto.enlaceWeb} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 mb-8 shadow-lg shadow-cyan-900/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Visitar plataforma en vivo
            </a>
          )}

          <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-3xl">{proyecto.descripcion}</p>

          <div className="flex flex-wrap gap-2">
            {proyecto.tecnologias.map((tech, idx) => (
              <span key={idx} className="text-sm font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded border border-cyan-900/30">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGEN HERO PRINCIPAL */}
        <div className="w-full h-[300px] md:h-[500px] bg-slate-800 rounded-xl overflow-hidden border border-slate-700 mb-16 relative">
          <img 
            src={proyecto.imagenHover} 
            alt={proyecto.titulo} 
            className="object-cover object-top w-full h-full" 
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        {/* RENDERIZADO CONDICIONAL: NUEVA ESTRUCTURA (Caso de Estudio Detallado) */}
        {proyecto.casoEstudio ? (
          <div className="space-y-20">
            {proyecto.casoEstudio.map((seccion, sIndex) => (
              <div key={sIndex} className="bg-slate-900 border-t border-slate-800 pt-16 first:border-0 first:pt-0">
                <h2 className="text-3xl font-bold text-slate-100 mb-4">{seccion.titulo}</h2>
                {seccion.introduccion && <p className="text-slate-400 mb-12 text-lg">{seccion.introduccion}</p>}
                
                <div className="space-y-16">
                  {seccion.caracteristicas.map((carac, cIndex) => (
                    <div key={cIndex} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Textos de la Característica */}
                      <div className="lg:col-span-5 space-y-4">
                        <h3 className="text-xl font-bold text-cyan-400">{carac.titulo}</h3>
                        <ul className="space-y-4">
                          {carac.descripcion.map((desc, dIndex) => (
                            <li key={dIndex} className="text-slate-300 flex items-start leading-relaxed">
                              <span className="text-cyan-600 mr-3 mt-1">▹</span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Galería de Imágenes de la Característica */}
                      <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {carac.imagenes.map((img, iIndex) => (
                          <div key={iIndex} className={`bg-slate-800 rounded-lg overflow-hidden border border-slate-700 ${carac.imagenes.length === 1 ? 'md:col-span-2' : ''}`}>
                            <img 
                              src={img} 
                              alt={`Captura ${carac.titulo} ${iIndex + 1}`} 
                              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                          </div>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          
          /* RENDERIZADO CONDICIONAL: VIEJA ESTRUCTURA (Para SanApi y BPD) */
          <div>
            {proyecto.elReto && (
              <div className="space-y-8 bg-slate-800 p-8 rounded-xl border border-slate-700 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">El Desafío</h2>
                  <p className="text-slate-300 leading-relaxed">{proyecto.elReto}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-3">La Arquitectura & Solución</h2>
                  <p className="text-slate-300 leading-relaxed">{proyecto.laSolucion}</p>
                </div>
              </div>
            )}
            
            {proyecto.caracteristicasCliente && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-bold text-slate-100 mb-4">Funcionalidades Clave</h3>
                  <ul className="space-y-2">
                    {proyecto.caracteristicasCliente.map((item, i) => (
                      <li key={i} className="text-slate-300 flex items-start">
                        <span className="text-cyan-400 mr-2">▹</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                {proyecto.caracteristicasAdmin && (
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <h3 className="text-xl font-bold text-slate-100 mb-4">Administración & Backend</h3>
                    <ul className="space-y-2">
                      {proyecto.caracteristicasAdmin.map((item, i) => (
                        <li key={i} className="text-slate-300 flex items-start">
                          <span className="text-cyan-400 mr-2">▹</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default ProyectoDetalle;