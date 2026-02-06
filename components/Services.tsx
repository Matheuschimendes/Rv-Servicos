
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
    <section id="serviços" className="py-24 md:py-32 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-dark font-black uppercase text-[10px] md:text-xs tracking-[0.3em] mb-3 md:mb-4 block">Soluções Completas</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-dark">NOSSOS SERVIÇOS</h2>
          <div className="w-16 md:w-24 h-1.5 bg-brand-light mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((item, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-card shadow-sm hover:shadow-xl transition-all border border-slate-50 group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark mb-8 md:mb-10 group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-brand-dark leading-snug">{item.title}</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}

          {exams.map((exam) => (
            <div key={exam.title} className="bg-white p-8 md:p-10 rounded-card shadow-sm hover:shadow-xl transition-all border border-slate-50 group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark mb-8 md:mb-10 group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={exam.icon} />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-brand-dark leading-snug">{exam.title}</h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">{exam.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 md:mt-14 text-center text-brand-dark text-base md:text-lg font-semibold">
          Nossa missão é promover eficiência, inovação e humanização na saúde, conectando
          instituições, profissionais e tecnologia.
        </p>

        <div className="mt-16 md:mt-24 text-center">
          <a href="#formulario" className="inline-block w-full md:w-auto bg-brand-dark text-white px-10 md:px-12 py-5 rounded-xl font-black shadow-xl hover:bg-brand-light transition-all transform hover:scale-[1.02] active:scale-95">
            SOLICITAR ESTUDO DE VIABILIDADE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
