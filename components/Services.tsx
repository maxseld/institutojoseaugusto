
import React from 'react';

const services = [
  {
    title: "Implantes Dentários",
    desc: "Reabilitação funcional e estética com foco em longevidade. Utilizamos as melhores marcas e tecnologias mundiais.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.288a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.168 1.168a2 2 0 00.566 3.285l4.99 2.495a2 2 0 001.788 0l4.99-2.495a2 2 0 00.566-3.285l-1.168-1.168z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.5 3H9.5a2 2 0 00-2 2v1h9V5a2 2 0 00-2-2z" />
      </svg>
    )
  },
  {
    title: "Cirurgias Complexas",
    desc: "Expertise técnica superior para extrações impactadas, enxertos ósseos avançados e cirurgias reconstrutivas.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Saúde da ATM",
    desc: "Controle de bruxismo e disfunções da articulação temporomandibular com protocolos clínicos validados.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-ice-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-gold font-bold tracking-[0.3em] text-sm uppercase">Excelência Técnica</h2>
          <h3 className="text-4xl font-bold text-royal-blue font-montserrat uppercase">Pilares de Atuação</h3>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-10 group hover:bg-royal-blue transition-all duration-500 shadow-sm hover:shadow-2xl border-b-4 border-transparent hover:border-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-gray-400 group-hover:opacity-10">
                <span className="text-8xl font-bold font-montserrat">0{idx + 1}</span>
              </div>
              
              <div className="text-gold mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-royal-blue group-hover:text-white font-montserrat mb-4">
                {s.title}
              </h4>
              
              <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed mb-8">
                {s.desc}
              </p>
              
              <button className="text-royal-blue font-bold text-sm tracking-widest group-hover:text-gold flex items-center gap-2">
                SABER MAIS 
                <span className="w-4 h-[1px] bg-royal-blue group-hover:bg-gold transition-all group-hover:w-8"></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
