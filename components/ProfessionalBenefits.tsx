
import React from 'react';

const professionalFeatures = [
  {
    title: "Oportunidades em diferentes instituições",
    desc: "Acesso a vagas e plantões em diferentes instituições.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14M9 9h2m-2 4h2m4-4h2m-2 4h2m-6 8v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
      </svg>
    )
  },
  {
    title: "Transparência e valorização profissional",
    desc: "Condições claras e reconhecimento contínuo.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Inserção em ambientes de excelência",
    desc: "Atuação em instituições de alto padrão.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.377-2.455a1 1 0 00-1.175 0l-3.377 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.95 9.397c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.97z" />
      </svg>
    )
  },
  {
    title: "Apoio contínuo no desenvolvimento da carreira",
    desc: "Acompanhamento e oportunidades para evolução.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0118 17.5a11.95 11.95 0 01-6 2.5 11.95 11.95 0 01-6-2.5 12.083 12.083 0 01.84-6.922L12 14z" />
      </svg>
    )
  },
  {
    title: "Flexibilidade e Inovações",
    desc: "Tecnologia para escalar com agilidade e equilíbrio.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    )
  }
];

const ProfessionalBenefits: React.FC = () => {
  return (
    <section id="beneficios-medicos" className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_80%_10%,rgba(255,255,255,0.12),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_15%_85%,rgba(255,255,255,0.08),transparent)]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/10 skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-black/40 via-brand-dark/60 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] font-bold text-white/80">
            Para Médicos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 leading-tight">
            BENEFÍCIOS PARA <span className="text-brand-light">PROFISSIONAIS DE SAÚDE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {professionalFeatures.map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/15 p-8 md:p-12 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group shadow-[0_20px_60px_-40px_rgba(0,0,0,0.65)]">
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                <div className="w-14 h-14 bg-brand-light/20 rounded-2xl flex items-center justify-center text-brand-light group-hover:scale-110 transition-transform duration-500 shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{f.title}</h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed font-light group-hover:text-white/80 transition-colors">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <a href="#formulario" className="inline-block bg-brand-light text-white px-10 md:px-12 py-5 rounded-2xl font-black shadow-2xl shadow-brand-light/20 hover:bg-white hover:text-brand-dark transition-all transform hover:scale-105 active:scale-95">
            QUERO UMA PROPOSTA PERSONALIZADA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBenefits;
