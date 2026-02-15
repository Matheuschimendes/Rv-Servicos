import React from 'react';
import logo from '../assets/images/logos/logo2.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_420px_at_10%_0%,rgba(255,255,255,0.10),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_90%_80%,rgba(0,176,252,0.14),transparent)]"></div>
      <div className="absolute -top-28 -right-20 w-72 h-72 bg-brand-light/12 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-brand-light/8 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">


        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 md:gap-20 mb-16 md:mb-24">
          <div className="max-w-md">
            <a href="/" className="group inline-flex flex-col leading-none [perspective:900px] mb-5">
              <span className="inline-flex items-end gap-1">
                <span
                  className={`font-display text-3xl md:text-4xl font-black tracking-[-0.035em] transition-all duration-300`}

                >
                  <img
                    src={logo}
                    alt="Logo RV Serviços Médicos"
                    className={`h-8 md:h-10 w-auto object-contain transition-all duration-300`}
                  />
                </span>
                <span
                  className={`font-display text-[1.9rem] md:text-[1.5rem] font-semibold tracking-[-0.03em] transition-all duration-300 group-hover:[transform:translateZ(6px)_rotateX(3deg)] `}
                >
                  Serviços
                </span>
              </span>
              <span className="mt-1 inline-flex items-center gap-2">
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.32em] font-black text-brand-light">
                  Médicos
                </span>
                <span className={`h-px w-10 transition-all duration-300 group-hover:w-14`}></span>
              </span>
            </a>

            <p className="text-white/50 text-base leading-relaxed font-light">
              Eficiência, inovação e humanização na gestão de serviços médicos. Conectando o melhor da medicina com instituições de excelência.
            </p>
            <div className="mt-8 flex items-center gap-4 text-white/50 text-sm">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Atendimento</span>
              <span className="h-px w-10 bg-white/20"></span>
              24/7
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div className="space-y-6">
              <h4 className="text-brand-light font-black uppercase text-xs tracking-[0.3em]">Navegação</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li><a href="#serviços" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#beneficios-gestores" className="hover:text-white transition-colors">Gestores</a></li>
                <li><a href="#beneficios-medicos" className="hover:text-white transition-colors">Médicos</a></li>
                <li><a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href="#formulario" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-brand-light font-black uppercase text-xs tracking-[0.3em]">Contato</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-brand-light">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h2l2 5-2 1a12 12 0 005 5l1-2 5 2v2a2 2 0 01-2 2h-1C8.82 18 6 15.18 6 11V10a2 2 0 01-2-2V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">WhatsApp Central</p>
                    <span className="font-bold text-lg md:text-xl">(11) 94111-0402</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-brand-light">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
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
                <span className="text-brand-light">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21s6-5.373 6-10a6 6 0 10-12 0c0 4.627 6 10 6 10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </span>
                <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
                  Av. Pereira Barreto, 1479 – Sala 809<br />
                  Baeta Neves – São Bernardo do Campo/SP<br />
                  CEP 09751-000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
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
