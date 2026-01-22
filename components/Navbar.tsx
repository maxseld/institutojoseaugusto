
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Instituto', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Capacitação', href: '#education' },
    { label: 'Unidade', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-royal-blue shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded-sm transform rotate-45 flex items-center justify-center">
              <span className="text-royal-blue font-bold text-xl -rotate-45">JA</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold font-montserrat tracking-tighter leading-none ${isScrolled ? 'text-white' : 'text-royal-blue'}`}>
                INSTITUTO
              </span>
              <span className={`text-sm font-light tracking-widest leading-none ${isScrolled ? 'text-gold' : 'text-gold'}`}>
                JOSÉ AUGUSTO
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-montserrat text-sm font-semibold tracking-wide hover:text-gold transition-colors duration-200 ${isScrolled ? 'text-white' : 'text-royal-blue'}`}
              >
                {item.label.toUpperCase()}
              </a>
            ))}
            <a
              href="https://wa.me/5543999999999"
              className="bg-gold text-royal-blue px-6 py-2 rounded-full font-bold text-sm tracking-widest hover:brightness-110 transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              CONTATO DIRETO
            </a>
          </div>

          <div className="md:hidden">
            <button className={`${isScrolled ? 'text-white' : 'text-royal-blue'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
