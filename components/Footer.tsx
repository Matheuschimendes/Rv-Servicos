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


        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_4fr] gap-12 md:gap-20 mb-16 md:mb-24">
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
                    <span className="font-bold text-sm md:text-[15px]">(11) 94111-0402</span>
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
                    <span className="font-bold text-base md:text-[15px] break-all">atendimento@rvsmed.com.br</span>
                  </div>
                </div>

                <a href="https://www.instagram.com/rvservicosmedicos/" className="flex items-start space-x-4" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-start space-x-4">
                    <span className="text-brand-light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Instagram</p>
                      <span className="font-bold text-base md:text-[15px] break-all">rvservicosmedicos</span>
                    </div>
                  </div>
                </a>
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
                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed">
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
