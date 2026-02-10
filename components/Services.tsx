
import React from 'react';

const services = [
  {
    title: 'Terceirização de Equipes',
    desc: 'Especialidades médicas completas e adaptadas à sua demanda.',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  {
    title: 'Gestão de Escalas',
    desc: 'Cobertura total de plantões com inteligência e suporte 24h.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Apoio Administrativo',
    desc: 'Gestão de processos e suporte estratégico hospitalar.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Preceptoria Médica',
    desc: 'Foco em instituições de ensino superior e formação de qualidade.',
    icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
  },
  {
    title: 'Telemedicina',
    desc: 'Apoio diagnóstico conectado, ágil e altamente resolutivo.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
  }
];

const exams = [
  {
    title: "MAPA",
    desc: "Monitoração Ambulatorial da Pressão Arterial",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Holter",
    desc: "Gravação Digital",
    icon: "M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z M12 8v4l2.5 2.5"
  },
  {
    title: "EEG",
    desc: "Eletroencefalograma",
    icon: "M4 7h4l2 4 2-6 3 9 2-5h3"
  },
  {
    title: "ENMG",
    desc: "Eletroneuromiografia",
    icon: "M4 12h3l2-3 2 6 2-4 2 3h3"
  }
];

const Services: React.FC = () => {
  return (
    <section id="serviços" className="py-24 md:py-32 bg-brand-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_10%_0%,rgba(12,74,110,0.18),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_90%_90%,rgba(25,146,180,0.18),transparent)]"></div>
      <div className="absolute -top-20 -right-24 w-72 h-72 bg-brand-light/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-brand-dark/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-dark font-black uppercase text-[10px] md:text-xs tracking-[0.35em] mb-3 md:mb-4 block">
            Soluções Completas
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-dark">
            NOSSOS SERVIÇOS
          </h2>
          <div className="w-20 md:w-28 h-1.5 bg-brand-light mx-auto mt-6 rounded-full"></div>
          <p className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto mt-6 font-light">
            Integramos pessoas, gestão e tecnologia para entregar escala, qualidade e previsibilidade operacional.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 overflow-x-auto md:overflow-visible pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory scroll-px-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[2.25rem] border border-white/50 bg-gradient-to-br from-white via-white to-brand-light/10 p-[1px] shadow-[0_30px_80px_-55px_rgba(15,23,42,0.6)] transition-transform duration-500 hover:-translate-y-1 min-w-[84%] sm:min-w-[60%] md:min-w-0 snap-start"
            >
              <div className="relative h-full rounded-[2.25rem] bg-white/85 backdrop-blur-sm p-7 md:p-10">
                <div className="absolute -top-8 -right-6 w-20 h-20 bg-brand-light/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute left-5 top-6 bottom-6 w-1.5 rounded-full bg-gradient-to-b from-brand-light/70 via-brand-light/20 to-transparent"></div>

                <div className="pl-6 md:pl-7">
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/60 font-bold">
                      Serviço Premium
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-brand-dark leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
                  <div className="mt-6 md:mt-8 flex items-center text-[11px] uppercase tracking-[0.3em] text-brand-dark/60 font-bold">
                    <span className="h-px w-10 bg-brand-light mr-3"></span>
                    Diferencial estratégico
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 rounded-[3rem] border border-white/60 bg-gradient-to-r from-brand-dark/95 via-brand-dark to-brand-light/70 p-[1px] shadow-[0_40px_120px_-70px_rgba(2,6,23,0.7)]">
          <div className="relative rounded-[3rem] bg-brand-dark text-white px-8 md:px-12 py-12 md:py-16 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(800px_320px_at_15%_0%,rgba(255,255,255,0.10),transparent)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(600px_280px_at_90%_80%,rgba(255,255,255,0.08),transparent)]"></div>
            <div className="absolute -top-24 -right-20 w-72 h-72 bg-brand-light/15 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-14 items-start lg:items-center">
              <div className="lg:w-1/3">
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-white/70 font-bold">
                  Diagnósticos
                </span>
                <h3 className="font-display text-2xl md:text-4xl font-extrabold mt-4">
                  Exames e laudos com padrao de excelencia
                </h3>
                <p className="text-white/70 text-sm md:text-base mt-5 leading-relaxed">
                  Integração de tecnologia e especialistas para laudos rápidos e seguros.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="px-4 py-2 rounded-full border border-white/25 text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">
                    SLA 24h
                  </div>
                  <div className="px-4 py-2 rounded-full bg-white/10 text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">
                    LGPD
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {exams.map((exam, idx) => (
                  <div
                    key={exam.title}
                    className={`rounded-[2rem] p-6 md:p-7 border backdrop-blur transition-transform duration-500 hover:-translate-y-1 ${
                      idx === 0
                        ? 'bg-white/18 border-white/30 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.8)]'
                        : 'bg-white/10 border-white/15'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={exam.icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">{exam.title}</h4>
                        <p className="text-white/70 text-sm leading-relaxed">{exam.desc}</p>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">
                      <span className="h-px w-10 bg-brand-light mr-3"></span>
                      Laudo digital
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 md:mt-14 text-center text-brand-dark text-base md:text-lg font-semibold">
          Nossa missão é promover eficiência, inovação e humanização na saúde, conectando
          instituições, profissionais e tecnologia.
        </p>

        <div className="mt-16 md:mt-24 text-center">
          <a
            href="#formulario"
            className="inline-block w-full md:w-auto bg-brand-dark text-white px-10 md:px-12 py-5 rounded-xl font-black shadow-xl hover:bg-brand-light transition-all transform hover:scale-[1.02] active:scale-95"
          >
            SOLICITAR ESTUDO DE VIABILIDADE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
