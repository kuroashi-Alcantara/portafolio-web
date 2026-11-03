import { useParams, Link } from 'react-router-dom';
import { misProyectos } from '../data/proyectos';

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
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 font-mono text-sm">
          ← Volver a todos los proyectos
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-100">{proyecto.titulo}</h1>
        <p className="text-xl text-slate-400 mb-8 leading-relaxed">{proyecto.descripcion}</p>

        {/* Stack Tecnológico */}
        <div className="flex flex-wrap gap-2 mb-12">
          {proyecto.tecnologias.map((tech, idx) => (
            <span key={idx} className="text-sm font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* IMAGEN PRINCIPAL DEL PROYECTO */}
        <div className="w-full h-64 md:h-96 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 mb-12 flex items-center justify-center relative group">
          <span className="text-slate-500 absolute z-0">Capture Principal: {proyecto.imagenPrincipal}</span>
          {/* Cuando tengas la imagen real en la carpeta public, esta etiqueta la mostrará tapando el texto */}
          <img src={proyecto.imagenPrincipal} alt={proyecto.titulo} className="object-cover w-full h-full relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* El Reto y la Solución */}
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

        {/* Funcionalidades Clave y Capturas Internas */}
        {proyecto.caracteristicasCliente && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Vista Cliente */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Módulo de Cliente</h3>
              <ul className="space-y-2 mb-6 flex-grow">
                {proyecto.caracteristicasCliente.map((item, i) => (
                  <li key={i} className="text-slate-300 flex items-start">
                    <span className="text-cyan-400 mr-2">▹</span>{item}
                  </li>
                ))}
              </ul>
              {/* Espacio para Capture secundario (Opcional a futuro) */}
              <div className="h-32 bg-slate-800 rounded-lg border border-slate-600 flex items-center justify-center mt-4">
                 <span className="text-slate-500 text-xs">Capture Vista Cliente</span>
              </div>
            </div>

            {/* Vista Admin */}
            {proyecto.caracteristicasAdmin && (
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col">
                <h3 className="text-xl font-bold text-slate-100 mb-4">Panel de Administración</h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {proyecto.caracteristicasAdmin.map((item, i) => (
                    <li key={i} className="text-slate-300 flex items-start">
                      <span className="text-cyan-400 mr-2">▹</span>{item}
                    </li>
                  ))}
                </ul>
                {/* Espacio para Capture secundario (Opcional a futuro) */}
                <div className="h-32 bg-slate-800 rounded-lg border border-slate-600 flex items-center justify-center mt-4">
                   <span className="text-slate-500 text-xs">Capture Vista Admin</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProyectoDetalle;