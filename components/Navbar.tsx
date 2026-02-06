
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia o scroll da página quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Início', href: '#início' },
    { name: 'Serviços', href: '#serviços' },
    { name: 'Gestores', href: '#beneficios-gestores' },
    { name: 'Médicos', href: '#beneficios-medicos' },
    { name: 'Quem Somos', href: '#quem-somos' },
  ];

  return (
    <>
      {/* Header Fixo */}
      <header
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-500 ${isMenuOpen
          ? 'bg-brand-dark py-4 shadow-none'
          : (isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-6')
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative z-[130]">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="flex flex-col leading-none">
              <span className={`font-display text-lg md:text-xl font-extrabold tracking-tighter transition-colors duration-300 ${isMenuOpen || !isScrolled ? 'text-white' : 'text-brand-dark'}`}>
                RV <span className="font-light">Serviços</span>
              </span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-brand-light">
                Médicos
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {menuItems.slice(1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${!isScrolled ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-brand-dark'
                  }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#formulario"
              className="bg-brand-light text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-brand-dark transition-all transform hover:scale-105 active:scale-95"
            >
              SOLICITAR PROPOSTA
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors relative z-[130] focus:outline-none ${isMenuOpen || !isScrolled ? 'text-white' : 'text-brand-dark'}`}
            aria-label="Alternar menu"
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark z-[110] md:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Background Decorative Element */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-brand-dark via-brand-dark to-[#003a66] opacity-100"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-brand-light opacity-[0.03] -skew-x-12 translate-x-1/2"></div>

        <div className="flex flex-col h-full pt-32 pb-10 px-8 sm:px-12 relative z-10 overflow-y-auto overflow-x-hidden">
          {/* Navigation Links with Staggered Animation */}
          <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 mb-12">
            <span className="text-brand-light font-black uppercase text-[10px] tracking-[0.4em] mb-2 block opacity-40">Menu Principal</span>
            {menuItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl sm:text-4xl font-display font-extrabold text-white hover:text-brand-light transition-all transform duration-500 flex items-center group ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                  }`}
                style={{ transitionDelay: `${200 + idx * 60}ms` }}
              >
                <span className="w-0 group-hover:w-6 h-1 bg-brand-light mr-0 group-hover:mr-4 transition-all duration-300 rounded-full"></span>
                {item.name}
              </a>
            ))}
          </div>

          {/* Bottom Info Section */}
          <div className={`mt-auto space-y-8 transition-all duration-700 delay-[500ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="h-px w-full bg-white/10"></div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              <div className="space-y-1">
                <span className="text-brand-light font-bold text-[10px] uppercase tracking-widest block opacity-60">Suporte & Plantões</span>
                <p className="text-white text-xl font-bold">(11) 96778-0772</p>
              </div>
              <div className="space-y-1">
                <span className="text-brand-light font-bold text-[10px] uppercase tracking-widest block opacity-60">Diretoria Comercial</span>
                <p className="text-white/70 text-sm break-all font-medium">ricardo@rvsmed.com.br</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {['Instagram', 'LinkedIn', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/40 hover:text-brand-light text-[10px] font-bold uppercase tracking-widest transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#formulario"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-brand-light text-white py-5 rounded-2xl text-center text-lg font-black shadow-2xl active:scale-95 transition-all transform hover:scale-[1.02] border border-white/10"
              >
                SOLICITAR PROPOSTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
