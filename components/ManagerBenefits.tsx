
import React from 'react';
import sitePreview from '../assets/images/site-preview.png';

const managerFeatures = [
  {
    title: "Equipes completas e adaptadas",
    desc: "Equipes completas e adaptadas às necessidades da instituição.",
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80',

    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-1a4 4 0 00-4-4h-1m-4 5H2v-1a4 4 0 014-4h7m-1-4a4 4 0 10-8 0 4 4 0 008 0zm6 2a3 3 0 10-6 0 3 3 0 006 0z" />
      </svg>
    )
  },
  {
    title: "Otimização de custos e processos",
    desc: "Otimização de custos e processos administrativos.",
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',

    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Suporte contínuo e especializado",
    desc: "Suporte contínuo e especializado com inovação tecnológica.",
    image: 'https://images.unsplash.com/photo-1578496479539-722d9dd1cc72?auto=format&fit=crop&w=900&q=80',


    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Segurança e qualidade no atendimento",
    desc: "Maior segurança e qualidade no atendimento com melhor experiência do paciente.",
    image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?auto=format&fit=crop&w=900&q=80',


    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const ManagerBenefits: React.FC = () => {
  // Imagem de fundo
  const sectionBgOne = "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1800&q=80";
  const onImageError = (fallbackSrc: string) => (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    img.onerror = null;
    if (img.src !== fallbackSrc) img.src = fallbackSrc;
  };

  return (
    <section id="beneficios-gestores" className="py-24 md:py-32 bg-brand-surface relative overflow-hidden">
      <img
        src={sectionBgOne}
        alt="Ambiente institucional de saúde"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
        loading="lazy"
        onError={onImageError(sitePreview)}
      />
      <div className="absolute inset-0 bg-white/78"></div>

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

          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            {managerFeatures.map((f, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.25rem] border border-white/70 bg-gradient-to-br from-white/90 via-white/80 to-brand-light/10 p-5 md:p-8 shadow-[0_25px_70px_-55px_rgba(15,23,42,0.6)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_-60px_rgba(15,23,42,0.65)] h-full"
              >
                <div className="absolute left-5 md:left-6 top-5 md:top-6 bottom-5 md:bottom-6 w-1.5 rounded-full bg-gradient-to-b from-brand-light/70 via-brand-light/25 to-transparent"></div>
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-brand-light/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="pl-4 md:pl-6">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-7">
                    <div className="w-11 h-11 md:w-14 md:h-14 bg-brand-dark/5 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                      {f.icon}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-brand-dark/60 font-bold">
                      Benefício-chave
                    </div>
                  </div>
                  <div className="space-y-4 md:space-y-4">
                    <h3 className="text-lg md:text-xl font-bold text-brand-dark leading-[1.28] break-words">{f.title}</h3>
                    <p className="text-slate-500 text-sm md:text-base leading-[1.55] md:leading-relaxed font-light">
                      {f.desc}
                    </p>
                  </div>

                  <div className="mt-5 md:mt-6 pt-1 flex items-center text-[10px] uppercase tracking-[0.3em] text-brand-dark/60 font-bold">
                    <span className="h-px w-10 bg-brand-light mr-3"></span>
                    Resultado mensurável
                  </div>
                </div>
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
