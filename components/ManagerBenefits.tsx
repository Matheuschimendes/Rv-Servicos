
import React from 'react';

const managerFeatures = [
  {
    title: "Equipes completas e adaptadas",
    desc: "Equipes completas e adaptadas às necessidades da instituição.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-1a4 4 0 00-4-4h-1m-4 5H2v-1a4 4 0 014-4h7m-1-4a4 4 0 10-8 0 4 4 0 008 0zm6 2a3 3 0 10-6 0 3 3 0 006 0z" />
      </svg>
    )
  },
  {
    title: "Otimização de custos e processos",
    desc: "Otimização de custos e processos administrativos.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Suporte contínuo e especializado",
    desc: "Suporte contínuo e especializado com inovação tecnológica.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Segurança e qualidade no atendimento",
    desc: "Maior segurança e qualidade no atendimento com melhor experiência do paciente.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const ManagerBenefits: React.FC = () => {
  return (
    <section id="beneficios-gestores" className="py-24 md:py-32 bg-brand-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-brand-light/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start lg:items-center">
          <div className="lg:w-5/12">
            <span className="text-brand-dark font-black uppercase text-[10px] md:text-xs tracking-[0.3em] mb-3 md:mb-4 block">Para Instituições</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-dark mb-6 md:mb-8 leading-tight">
              Excelência estratégica para <span className="text-brand-light">Gestores de Saúde.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg mb-10 md:mb-12 font-light leading-relaxed">
              Entregamos previsibilidade e eficiência operacional, permitindo que o foco da gestão seja a qualidade do cuidado.
            </p>
            <div className="hidden md:block">
              <a href="#formulario" className="inline-flex items-center space-x-3 bg-brand-dark text-white px-8 py-5 rounded-2xl font-bold shadow-xl hover:bg-brand-light transition-all active:scale-95">
                <span>Estudo de Viabilidade</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {managerFeatures.map((f, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-card shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-dark/5 rounded-xl flex items-center justify-center text-brand-dark mb-6 md:mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4 leading-tight">{f.title}</h3>
                {f.desc ? (
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">{f.desc}</p>
                ) : null}
              </div>
            ))}
          </div>

          <div className="md:hidden w-full">
            <a href="#formulario" className="flex items-center justify-center space-x-3 bg-brand-dark text-white w-full py-5 rounded-xl font-bold shadow-xl active:scale-95 transition-all">
              <span>Estudo de Viabilidade</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerBenefits;
