
import React from 'react';

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Paciente de Reabilitação Complexa",
    text: "Passei por vários consultórios antes de encontrar o Dr. José Augusto. O que parecia impossível foi resolvido com total segurança e profissionalismo."
  },
  {
    name: "Dra. Mariana Souza",
    role: "Cirurgiã-Dentista",
    text: "A mentoria do Dr. José Augusto mudou minha visão sobre planejamento cirúrgico. Ele é uma referência indispensável para quem busca excelência."
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-royal-blue font-bold tracking-widest text-sm uppercase mb-4">Reconhecimento</h2>
          <h3 className="text-3xl font-bold font-montserrat text-gray-900 uppercase">Prova de Excelência</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-ice-white p-10 rounded-sm border-l-4 border-gold relative shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-6 right-10 text-gold/20">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed mb-6 relative z-10">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-royal-blue">{t.name}</h4>
                <p className="text-gray-400 text-sm uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-16">
          <p className="text-center text-gray-400 text-xs uppercase tracking-[0.4em] mb-10 font-bold">Apoio e Parceiros Tecnológicos</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Mock Logos */}
             <div className="text-2xl font-bold font-montserrat tracking-tighter">STRAUMANN</div>
             <div className="text-2xl font-bold font-montserrat tracking-tighter">NEODENT</div>
             <div className="text-2xl font-bold font-montserrat tracking-tighter">ZEISS</div>
             <div className="text-2xl font-bold font-montserrat tracking-tighter">DENTSPLY</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
