const categorias = [
  {
    titulo: "Backend & BD",
    skills: ["C# .NET / ASP.NET Core", "SQL Server & T-SQL", "Entity Framework Core", "Arquitectura RESTful & JWT"]
  },
  {
    titulo: "Frontend & Web",
    skills: ["React & TypeScript", "Tailwind CSS & Bootstrap 5", "HTML5 Semántico & CSS3", "Arquitectura SPA"]
  },
  {
    titulo: "Móvil & Multiplataforma",
    skills: ["Flutter", "Dart", "Consumo de APIs REST", "SQLite"]
  },
  {
    titulo: "Cloud & Herramientas",
    skills: ["Microsoft Azure (Cloud)", "Azure App Service & SQL", "Git, GitHub & Vercel", "Postman & Visual Studio"]
  }
];

const Habilidades = () => {
  return (
    <section id="habilidades" className="py-20 px-6 md:px-24 bg-slate-800 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-12 flex items-center justify-center md:justify-start">
          <span className="text-cyan-400 mr-4 font-mono text-2xl">02.</span> Habilidades Técnicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((categoria, index) => (
            <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300 group">
              <h3 className="text-xl font-bold text-slate-100 mb-4 pb-2 border-b border-slate-700/50 group-hover:text-cyan-400 transition-colors">
                {categoria.titulo}
              </h3>
              <ul className="space-y-3">
                {categoria.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start text-slate-300">
                    <span className="text-cyan-400 mr-2 mt-1 font-mono text-sm">▹</span>
                    <span className="leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;