
import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-ice-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl overflow-hidden grid lg:grid-cols-3">
          <div className="p-12 lg:col-span-1 bg-royal-blue text-white space-y-8">
            <div>
              <h2 className="text-gold font-bold tracking-widest text-xs uppercase mb-2">Visite-nos</h2>
              <h3 className="text-3xl font-bold font-montserrat">Unidade Londrina</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-gold mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">Av. Garibaldi Deliberador, 701</p>
                  <p className="text-gray-300">Parque Res. Alcantara, Londrina - PR</p>
                  <p className="text-gray-300">CEP 86047-410</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="text-gold mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">(43) 99999-9999</p>
                  <p className="text-gray-400 text-xs">WhatsApp para agendamentos</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <button className="w-full bg-gold text-royal-blue font-bold py-4 rounded-sm hover:brightness-110 transition-all uppercase tracking-widest text-sm">
                Como Chegar
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-2 min-h-[400px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.15170425785!2d-51.1578351!3d-23.3465133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb430e3f283d5d%3A0x6b4998782f9c8f07!2sAv.%20Garibaldi%20Deliberador%2C%20701%20-%20Parque%20Res.%20Alcantara%2C%20Londrina%20-%20PR%2C%2086047-410!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
