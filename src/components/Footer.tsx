const Footer = () => {
  return (
    <footer id="contacto" className="bg-gradient-to-b from-slate-800 to-slate-900 py-20 px-6 md:px-24 border-t border-slate-700 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
          ¿Listo para construir algo juntos?
        </h2>
        
        <p className="text-slate-400 mb-12 text-lg max-w-2xl leading-relaxed">
          Actualmente estoy abierto a nuevas oportunidades laborales como desarrollador de software y proyectos freelance. 
          Ya sea que tengas una vacante, una pregunta técnica o solo quieras saludar, mi bandeja de entrada siempre está abierta.
        </p>
        
        {/* Bloque de Contactos Directos */}
        <div className="flex flex-col md:flex-row gap-4 mb-16 w-full justify-center items-center font-mono text-sm">
          
          {/* Correo Principal */}
          <a 
            href="mailto:alcantarafeliberto0@gmail.com" 
            className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-slate-300 w-full md:w-auto justify-center group shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 group-hover:scale-110 transition-transform">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>alcantarafeliberto0@gmail.com</span>
          </a>

          {/* Correo Secundario */}
          <a 
            href="mailto:tu-segundo-correo@gmail.com" 
            className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-slate-300 w-full md:w-auto justify-center group shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 group-hover:scale-110 transition-transform">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>correo-alternativo@gmail.com</span>
          </a>

          {/* Número de Teléfono / WhatsApp */}
          <a 
            href="tel:+18090000000" 
            className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-slate-300 w-full md:w-auto justify-center group shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 group-hover:scale-110 transition-transform">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+1 (809) 000-0000</span>
          </a>

        </div>

        {/* Enlaces Sociales y CV */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 font-mono text-sm">
          <a href="https://github.com/kuroashi-Alcantara" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            GITHUB
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            LINKEDIN
          </a>
          <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
            DESCARGAR CV
          </a>
        </div>
        
        <p className="text-slate-500 text-sm font-mono mt-4">
          Diseñado y construido por Feliberto Alcantara &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;