
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/tech1/400/500" alt="Tech 1" className="rounded-sm shadow-lg translate-y-8" />
              <img src="https://picsum.photos/seed/tech2/400/500" alt="Tech 2" className="rounded-sm shadow-lg -translate-y-4" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-royal-blue/5 rounded-full -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-royal-blue font-bold tracking-widest text-sm uppercase">O Instituto</h2>
            <h3 className="text-4xl font-bold text-gray-900 font-montserrat leading-tight">
              Infraestrutura de Ponta para <br />
              <span className="text-gold">Casos de Alta Complexidade</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              O Instituto José Augusto foi projetado para ser mais do que um consultório. Somos um centro avançado focado na integração entre tecnologia digital e técnica cirúrgica apurada.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Centro Cirúrgico de Nível Hospitalar",
                "Tecnologia de Planejamento 3D e Scanner Intraoral",
                "Ambiente preparado para Reabilitações Totais",
                "Protocolos Rigorosos de Biossegurança"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="bg-gold p-1 rounded-full mt-1">
                    <svg className="w-3 h-3 text-royal-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8">
              <a href="#services" className="text-royal-blue font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                VER NOSSOS PILARES DE ATUAÇÃO →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
