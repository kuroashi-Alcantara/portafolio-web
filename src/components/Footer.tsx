import { useState } from 'react';

const Footer = () => {
  // Estado para saber qué elemento se acaba de copiar y mostrar un "check" temporal
  const [copiadoId, setCopiadoId] = useState<string | null>(null);

  const copiarTexto = (texto: string, id: string) => {
    navigator.clipboard.writeText(texto);
    setCopiadoId(id);
    setTimeout(() => setCopiadoId(null), 2000); // Regresa al ícono normal después de 2 segundos
  };

  // Íconos SVG reutilizables para no repetir código
  const IconoCopiar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
  );

  const IconoCheck = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M20 6 9 17l-5-5"/></svg>
  );

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
        <div className="flex flex-col md:flex-row gap-4 mb-16 w-full max-w-full justify-center items-center font-mono text-xs md:text-sm overflow-hidden px-2">
          
          {/* Tarjeta: Correo Principal */}
          <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all text-slate-300 w-full md:w-auto shadow-lg group">
            <a 
              href="mailto:alcantarafeliberto0@gmail.com" 
              className="flex items-center gap-2 md:gap-3 pl-3 md:pl-6 pr-2 md:pr-4 py-3 md:py-4 hover:text-cyan-400 transition-colors flex-grow justify-center md:justify-start overflow-hidden"
              title="Enviar correo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 group-hover:scale-110 transition-transform shrink-0 md:w-[18px] md:h-[18px]">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="truncate">alcantarafeliberto0@gmail.com</span>
            </a>
            <div className="w-px h-8 bg-slate-700 shrink-0"></div>
            <button 
              onClick={() => copiarTexto('alcantarafeliberto0@gmail.com', 'correo1')}
              className="p-3 md:p-4 text-slate-500 hover:text-cyan-400 transition-colors shrink-0"
              title="Copiar al portapapeles"
            >
              {copiadoId === 'correo1' ? <IconoCheck /> : <IconoCopiar />}
            </button>
          </div>

          {/* Tarjeta: Correo Secundario */}
          <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all text-slate-300 w-full md:w-auto shadow-lg group">
            <a 
              href="mailto:mrprincevinsmoke50@gmail.com" 
              className="flex items-center gap-2 md:gap-3 pl-3 md:pl-6 pr-2 md:pr-4 py-3 md:py-4 hover:text-cyan-400 transition-colors flex-grow justify-center md:justify-start overflow-hidden"
              title="Enviar correo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 group-hover:scale-110 transition-transform shrink-0 md:w-[18px] md:h-[18px]">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="truncate">mrprincevinsmoke50@gmail.com</span>
            </a>
            <div className="w-px h-8 bg-slate-700 shrink-0"></div>
            <button 
              onClick={() => copiarTexto('mrprincevinsmoke50@gmail.com', 'correo2')}
              className="p-3 md:p-4 text-slate-500 hover:text-cyan-400 transition-colors shrink-0"
              title="Copiar al portapapeles"
            >
              {copiadoId === 'correo2' ? <IconoCheck /> : <IconoCopiar />}
            </button>
          </div>

          {/* Tarjeta: Teléfono */}
          <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all text-slate-300 w-full md:w-auto shadow-lg group">
            <a 
              href="tel:+18097745099" 
              className="flex items-center gap-2 md:gap-3 pl-3 md:pl-6 pr-2 md:pr-4 py-3 md:py-4 hover:text-cyan-400 transition-colors flex-grow justify-center md:justify-start overflow-hidden"
              title="Llamar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 group-hover:scale-110 transition-transform shrink-0 md:w-[18px] md:h-[18px]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="whitespace-nowrap">+1 (809) 774-5099</span>
            </a>
            <div className="w-px h-8 bg-slate-700 shrink-0"></div>
            <button 
              onClick={() => copiarTexto('+18097745099', 'telefono')}
              className="p-3 md:p-4 text-slate-500 hover:text-cyan-400 transition-colors shrink-0"
              title="Copiar al portapapeles"
            >
              {copiadoId === 'telefono' ? <IconoCheck /> : <IconoCopiar />}
            </button>
          </div>

        </div>

        {/* Enlaces Sociales y CV */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 font-mono text-sm">
          <a href="https://github.com/kuroashi-Alcantara" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/feliberto-alcantara-otañez-2189a3322/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            LINKEDIN
          </a>
          <a 
            href="/Feliberto_Alcantara_CV.pdf" 
            download="Feliberto_Alcantara_CV.pdf"
            className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            DESCARGAR CV
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
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