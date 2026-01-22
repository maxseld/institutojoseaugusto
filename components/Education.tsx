
import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-royal-blue text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white h-full"></div>
            ))}
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-gold text-royal-blue px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-sm">
              Para Profissionais
            </div>
            <h3 className="text-4xl md:text-5xl font-bold font-montserrat leading-tight">
              Mentoria e <br />
              <span className="text-gold">Capacitação em Casos Desafiadores</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Dr. José Augusto Camargo dedica-se a elevar o nível da cirurgia oral no Brasil. Seus cursos e mentorias são focados na transmissão de conhecimento prático e científico para dentistas que desejam dominar procedimentos complexos.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-xl">Imersões Teórico-Práticas</h5>
                  <p className="text-gray-400 text-sm">Treinamento intensivo com foco clínico.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-xl">Hands-on e Mentorias</h5>
                  <p className="text-gray-400 text-sm">Acompanhamento direto para elevar sua segurança cirúrgica.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-white text-royal-blue px-10 py-4 rounded-sm font-bold tracking-widest hover:bg-gold transition-colors">
                VER PRÓXIMAS TURMAS
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-full absolute -inset-10 animate-pulse"></div>
            <img 
              src="https://picsum.photos/seed/training/800/800" 
              alt="Training Session" 
              className="relative z-10 rounded-lg shadow-2xl border-2 border-gold/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
