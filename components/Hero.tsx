
import React from 'react';
import heroLogo from '../assets/images/logos/log.svg';
import sitePreview from '../assets/images/site-preview.png';

const webImages = {
  doctorOne:
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=520&q=80',
  doctorTwo:
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=520&q=80',
  doctorThree:
    'https://images.unsplash.com/photo-1651008376619-9f7f6d03c2f7?auto=format&fit=crop&w=520&q=80',
  hospitalBg:
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=80',
  hospitalBgTwo:
    'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1500&q=80',
  hospitalBgThree:
    'https://images.unsplash.com/photo-1631217868264-e6b4f1f9f2f5?auto=format&fit=crop&w=1500&q=80'
};

const whatsappLink = "https://wa.me/5511915735662?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20contratar%20a%20RV%20Servi%C3%A7os%20M%C3%A9dicos!%20Pode%20me%20ajudar%3F";

const Hero: React.FC = () => {
  const onImageError = (fallbackSrc: string) => (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    img.onerror = null;
    if (img.src !== fallbackSrc) {
      img.src = fallbackSrc;
    }
  };

  return (
    <section id="início" className="relative min-h-[90vh] md:min-h-[110vh] flex items-center overflow-hidden bg-brand-dark pt-32 pb-20 md:pt-40 md:pb-32">
      <img // Fundo da dobra 1
        src={webImages.hospitalBg}
        alt="Ambiente hospitalar moderno"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        loading="lazy"
        onError={onImageError(sitePreview)}
      />

      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_80%_10%,rgba(255,255,255,0.12),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_15%_85%,rgba(255,255,255,0.08),transparent)]"></div>
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-brand-light/10 -skew-x-12 translate-x-1/2 md:translate-x-20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-brand-dark/65 to-brand-dark/40"></div>

      {/* Sombra escura do lado esquerdo (textos) */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-center">
          <div className="md:col-span-7 lg:col-span-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 md:mb-8 bg-white/95 border border-white/30 rounded-full shadow-lg">
              <span className="text-brand-dark text-[11px] md:text-xs font-black uppercase tracking-[0.10em] block">
                Soluções Médicas Integradas para Instituições de Saúde e Ensino
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-[1.50rem] text-white/100 font-light text-white leading-tight md:leading-tight mb-6 text-balance drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">

              Operação médica mais <span className="text-brand-light">eficiente</span>, sem aumentar sua estrutura: equipes completas e gestão de escalas com <span className="text-brand-light">previsibilidade</span>.
            </h1>
            <div className="w-24 h-1.5 bg-brand-light rounded-full mb-8"></div>

            <p className="text-base md:text-lg text-white/70 mb-10 md:mb-12 leading-relaxed max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Somos parceiros estratégicos na <strong className="font-semibold text-brand-light">terceirização de serviços médicos</strong>, atuando da seleção de profissionais à gestão de escalas e cobertura assistencial, para garantir <strong className="font-semibold text-brand-light">continuidade no atendimento</strong>, <strong className="font-semibold text-brand-light">organização operacional</strong> e <strong className="font-semibold text-brand-light">segurança</strong> para a sua instituição.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <a
                href={whatsappLink}
                target="_blank"
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

          <div className="hidden md:flex md:col-span-5 lg:col-span-6 justify-end">
            <div className="relative w-full max-w-[1080px] aspect-[5/4]">
              <div className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-brand-light/40 via-white/5 to-transparent blur-2xl"></div>
              <img // Mapa azul
                src={heroLogo}
                alt="Logo RV Serviços Médicos"
                className="absolute inset-0 h-full w-full object-contain opacity-85 brightness-110 contrast-125 saturate-120 drop-shadow-[0_45px_90px_rgba(0,0,0,0.55)] pointer-events-none select-none transform scale-150"
                fetchPriority="high"
                decoding="async"
                onError={onImageError(sitePreview)}
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
