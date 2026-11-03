const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 bg-gradient-to-b from-slate-900 to-slate-800">
      
      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        
        <p className="text-cyan-400 font-mono mb-4 text-base md:text-lg">
          Hola, mi nombre es
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
          Feliberto Alcantara.
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 leading-tight">
          Construyo software que resuelve problemas reales.
        </h2>
        
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-center">
          Soy un Desarrollador Full-Stack especializado en <span className="text-cyan-400 font-semibold">C# .NET, React y TypeScript</span>. Me enfoco en diseñar arquitecturas escalables, desde sistemas de inventario hasta plataformas e-commerce en producción.
        </p>
        
        {/* Contenedor Vertical de Acciones para el balance visual */}
        <div className="flex flex-col items-center gap-8">
          
          {/* Fila 1: Botones de Navegación del Portafolio */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a 
              href="#proyectos" 
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              Ver mis proyectos
            </a>
            
            <a 
              href="#habilidades" 
              className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Habilidades
            </a>
            
            <a 
              href="#formacion" 
              className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Formación
            </a>
            
            <a 
              href="#contacto" 
              className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Contactarme
            </a>
          </div>

          {/* Fila 2: Botón de GitHub centrado debajo */}
          <a 
            href="https://github.com/kuroashi-Alcantara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-2 border border-slate-700 text-slate-400 rounded-full hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 group"
            title="Ir a mi GitHub"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="group-hover:-translate-y-1 transition-transform"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="font-mono text-sm">Visitar mi GitHub</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;