import { Link } from 'react-router-dom';
import { misProyectos } from '../data/proyectos';

const Proyectos = () => {
    return (
        <section id="proyectos" className="py-20 px-6 md:px-24 bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-12 flex items-center">
                    <span className="text-cyan-400 mr-4 font-mono text-2xl">01.</span> Mis Proyectos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {misProyectos.map((proyecto) => (
                        <div key={proyecto.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col justify-between">
                            <div>
                                {/* Contenedor de Imagen */}
                                <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center border-b border-slate-700 group">
                                    {/* Texto de respaldo (solo se ve si las imágenes fallan o están cargando) */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-500 text-xs font-mono px-4 text-center z-0">
                                        Cargando {proyecto.titulo}...
                                    </div>

                                    {/* Imagen Principal (Estado en Reposo) */}
                                    <img
                                        src={proyecto.imagenPrincipal}
                                        alt={`Logo ${proyecto.titulo}`}
                                        className="w-full h-full object-cover object-center absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-0"
                                        onError={(e) => {
                                            // Si la imagen falla en cargar, la ocultamos para ver el texto de respaldo
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />

                                    {/* Imagen Hover (Estado Revelado) */}
                                    {proyecto.imagenHover && (
                                        <img
                                            src={proyecto.imagenHover}
                                            alt={`Interfaz ${proyecto.titulo}`}
                                            className="w-full h-full object-cover object-top absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Contenido de la Tarjeta */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">{proyecto.titulo}</h3>

                                    {/* Descripción restaurada */}
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                        {proyecto.descripcion}
                                    </p>

                                    {/* Tecnologías */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {proyecto.tecnologias.map((tech, index) => (
                                            <span key={index} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* FOOTER DE LA TARJETA: Enlaces Internos y Externos */}
                            <div className="px-6 pb-6 pt-0 mt-auto">
                                <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                                    
                                    {/* Enlace Interno: Ver Caso de Estudio */}
                                    <Link 
                                        to={`/proyecto/${proyecto.slug}`} 
                                        className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        Ver Caso de Estudio <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                    </Link>

                                    {/* Enlaces Externos: Producción y GitHub */}
                                    <div className="flex items-center gap-4">
                                        
                                        {/* Ícono para GitHub Frontend / App */}
                                        {proyecto.githubFrontend && (
                                        <a href={proyecto.githubFrontend} target="_blank" rel="noopener noreferrer" title="Ver Código (Frontend/App)" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                        )}

                                        {/* Ícono para GitHub Backend / API */}
                                        {proyecto.githubBackend && (
                                        <a href={proyecto.githubBackend} target="_blank" rel="noopener noreferrer" title="Ver Código (Backend/API)" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                            {/* Pequeño indicador para diferenciar el backend */}
                                            <span className="absolute -bottom-2 -right-2 text-[9px] font-bold bg-slate-800 text-cyan-400 px-1 rounded">API</span>
                                        </a>
                                        )}

                                        {/* Ícono para Enlace Web en Producción */}
                                        {proyecto.enlaceWeb && (
                                        <a href={proyecto.enlaceWeb} target="_blank" rel="noopener noreferrer" title="Visitar Sitio Web" className="text-slate-400 hover:text-cyan-400 transition-transform hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proyectos;