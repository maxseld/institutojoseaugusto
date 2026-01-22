
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gold rounded-sm transform rotate-45 flex items-center justify-center">
                  <span className="text-royal-blue font-bold text-sm -rotate-45">JA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold font-montserrat tracking-tighter leading-none text-royal-blue">
                    INSTITUTO
                  </span>
                  <span className="text-[10px] font-light tracking-[0.2em] leading-none text-gold">
                    JOSÉ AUGUSTO
                  </span>
                </div>
              </div>
              <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                Referência em Cirurgia Oral Avançada e Capacitação Profissional. Tecnologia, ética e ciência a serviço do seu sorriso e da sua saúde.
              </p>
              <div className="flex gap-4">
                {['instagram', 'facebook', 'linkedin', 'youtube'].map(icon => (
                  <a key={icon} href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-royal-blue hover:bg-royal-blue hover:text-white hover:border-royal-blue transition-all">
                    <span className="sr-only">{icon}</span>
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
          </div>

          <div>
            <h4 className="text-royal-blue font-bold uppercase tracking-widest text-xs mb-6">Links Úteis</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gold transition-colors">Sobre o Instituto</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Cirurgias e Procedimentos</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Cursos para Dentistas</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Linktree Oficial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-royal-blue font-bold uppercase tracking-widest text-xs mb-6">Atendimento</h4>
            <div className="space-y-4 text-sm text-gray-500">
               <p>Segunda à Sexta</p>
               <p className="font-bold text-royal-blue">08:30 — 18:30</p>
               <a href="https://wa.me/5543999999999" className="inline-block bg-green-500 text-white px-4 py-2 rounded-sm font-bold mt-2 hover:bg-green-600 transition-colors">
                 WhatsApp Direto
               </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2024 Instituto José Augusto. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-royal-blue">Privacidade</a>
            <a href="#" className="hover:text-royal-blue">Termos</a>
            <p>Londrina - PR</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
