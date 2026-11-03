import { useState, useEffect } from 'react';

const BotonSubir = () => {
  const [esVisible, setEsVisible] = useState(false);

  // Escuchar el evento de scroll
  useEffect(() => {
    const controlarScroll = () => {
      // Si el usuario baja más de 400px, mostramos el botón
      if (window.scrollY > 400) {
        setEsVisible(true);
      } else {
        setEsVisible(false);
      }
    };

    window.addEventListener('scroll', controlarScroll);
    
    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  // Función para subir con animación suave
  const subirArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={subirArriba}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-cyan-500 text-slate-900 shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 hover:bg-cyan-400 hover:scale-110 focus:outline-none ${
        esVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Volver arriba"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
  );
};

export default BotonSubir;