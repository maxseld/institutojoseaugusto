
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-royal-blue">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/doctor1/1920/1080" 
          alt="Dr. José Augusto Camargo" 
          className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue via-royal-blue/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-block border-l-4 border-gold pl-4">
              <span className="text-gold font-bold tracking-[0.3em] text-sm uppercase">Excelência em Cirurgia Oral</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-montserrat leading-tight">
              Especialista em <br />
              <span className="text-gold">Casos Desafiadores</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-lg font-light leading-relaxed">
              Referência em Cirurgia Oral Avançada e Saúde da ATM. Ciência, tecnologia e expertise técnica para resolver o que outros consideram impossível.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gold text-royal-blue px-8 py-4 rounded-sm font-bold text-lg tracking-wider hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2">
                AGENDAR AVALIAÇÃO ESPECIALIZADA
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-4 rounded-sm font-bold text-lg tracking-wider hover:bg-white/10 transition-all">
                CONHECER INSTITUTO
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10">
              <div>
                <div className="text-gold text-3xl font-bold font-montserrat">15+</div>
                <div className="text-white/60 text-xs uppercase tracking-widest mt-1">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-gold text-3xl font-bold font-montserrat">5k+</div>
                <div className="text-white/60 text-xs uppercase tracking-widest mt-1">Cirurgias Realizadas</div>
              </div>
              <div>
                <div className="text-gold text-3xl font-bold font-montserrat">1k+</div>
                <div className="text-white/60 text-xs uppercase tracking-widest mt-1">Alunos Formados</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-end relative">
             <div className="absolute -inset-4 bg-gold opacity-10 rounded-full blur-3xl"></div>
             <div className="relative border-[1px] border-gold/30 p-4">
               <img 
                 src="https://picsum.photos/seed/doctor2/600/800" 
                 alt="Dr. José Augusto" 
                 className="relative z-10 w-full max-w-md shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute bottom-10 -left-10 bg-white p-6 shadow-2xl z-20 max-w-[200px]">
                 <p className="text-royal-blue font-bold text-sm italic">"A ciência é o pilar de cada intervenção de sucesso."</p>
                 <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">— Dr. José Augusto</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
