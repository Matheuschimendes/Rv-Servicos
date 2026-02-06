
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 md:gap-20 mb-20 md:mb-24">
          <div className="max-w-md">
            <div className="flex items-center space-x-3 mb-10">
              <svg width="40" height="30" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10H40L55 45L70 10H90L65 70H45L20 10Z" fill="#FFFFFF" />
                <path d="M10 10L25 70H5" stroke="#00B0FC" strokeWidth="8" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-extrabold">RV <span className="font-light">Serviços</span></span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-light">Médicos</span>
              </div>
            </div>
            <p className="text-white/50 text-base leading-relaxed font-light">
              Eficiência, inovação e humanização na gestão de serviços médicos. Conectando o melhor da medicina com instituições de excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-8">
              <h4 className="text-brand-light font-black uppercase text-xs tracking-[0.3em]">Contato</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-brand-light text-xl">📞</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">WhatsApp Central</p>
                    <span className="font-bold text-lg md:text-xl">(11) 94111-0402</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-brand-light text-xl">✉️</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Diretoria Comercial</p>
                    <span className="font-bold text-base md:text-lg break-all">ricardo@rvsmed.com.br</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-brand-light font-black uppercase text-xs tracking-[0.3em]">Endereço</h4>
              <div className="flex items-start space-x-4">
                <span className="text-brand-light text-xl">📍</span>
                <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
                  Av. Pereira Barreto, 1479 – Sala 809<br />
                  Baeta Neves – São Bernardo do Campo/SP<br />
                  CEP 09751-000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold text-center md:text-left">
            CNPJ 52.433.662/0001-59 | RV SERVIÇOS MÉDICOS LTDA
          </div>
          <div className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
            © 2026 RV Serviços Médicos. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
