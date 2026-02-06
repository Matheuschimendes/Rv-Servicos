
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="início" className="relative min-h-[90vh] md:min-h-[110vh] flex items-center overflow-hidden bg-brand-dark pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_80%_10%,rgba(255,255,255,0.12),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_15%_85%,rgba(255,255,255,0.08),transparent)]"></div>
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-brand-light/10 -skew-x-12 translate-x-1/2 md:translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-black/40 via-brand-dark/60 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 bg-white/10 border border-white/20 rounded-full backdrop-blur">
            <span className="text-white/80 text-[10px] md:text-sm font-bold uppercase tracking-widest block">
              Parceria médica completa para clínicas, hospitais e IES
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-6xl lg:text-6xl font-extrabold text-white leading-[1.15] md:leading-[1.05] mb-6 md:mb-0 text-balance">
            Eficiência assistencial <br />
            <span className="text-brand-light">sem aumentar estrutura: </span>

          </h1>
          <h3 className="font-display text-2xl md:text-5xl lg:text-2xl font-bold text-white leading-[1.2] md:leading-[1.2] lg:leading-[2.2] mb-6 md:mb-5 text-balance">
            <span className="text-white">Equipes, telemedicina e laudos com padrão de
              excelência.</span>
          </h3>

          <p className="text-base md:text-xl text-white/80 mb-10 md:mb-10 leading-relaxed font-light max-w-2xl">
            Somos parceiros estratégicos na <strong className="text-white">terceirização médica, preceptoria e telemedicina,
              integrando profissionais, gestão de escalas e diagnóstico para entregar agilidade,
              confiabilidade e qualidade no atendimento.</strong>
          </p>

          {/* <p className="text-base md:text-xl text-white/80 mb-10 md:mb-12 leading-relaxed font-light max-w-2xl">
            Especialistas em <strong className="text-white">terceirização médica, preceptoria e telemedicina</strong>, entregando agilidade e confiabilidade.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <a
              href="#formulario"
              className="bg-brand-light text-white text-center px-8 md:px-12 py-4 md:py-5 rounded-xl text-base md:text-lg font-black shadow-[0_20px_60px_-25px_rgba(0,0,0,0.65)] hover:bg-white hover:text-brand-dark transition-all active:scale-95"
            >
              FALAR NO WHATSAPP
            </a>
            <a
              href="#serviços"
              className="bg-white/10 backdrop-blur-md border border-white/25 text-white text-center px-8 md:px-10 py-4 md:py-5 rounded-xl text-base md:text-lg font-bold hover:bg-white/20 transition-all active:scale-95"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
