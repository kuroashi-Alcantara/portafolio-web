import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import Proyectos from './components/Proyectos';
import Habilidades from './components/Habilidades';
import Formacion from './components/Formacion'; // <-- 1. Importa el componente
import Footer from './components/Footer';
import ProyectoDetalle from './components/ProyectoDetalle';

function HomePage() {
  return (
    <>
      <Hero />
      <Proyectos />
      <Habilidades />
      <Formacion /> {/* <-- 2. Colócalo aquí */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 font-sans text-slate-50 selection:bg-cyan-500 selection:text-slate-900 flex flex-col justify-between">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proyecto/:slug" element={<ProyectoDetalle />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;