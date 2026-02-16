
import React, { useEffect, useRef } from 'react';
import sitePreview from '../assets/images/site-preview.png';


const webImages = {
  institutions:
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80',
  transparency:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
  excellence:
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80',
  career:
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
  innovation:
    'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=900&q=80',
};

const professionalFeatures = [
  {
    title: "Oportunidades em diferentes instituições",
    desc: "Acesso a vagas e plantões em diferentes instituições.",
    image: webImages.institutions,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14M9 9h2m-2 4h2m4-4h2m-2 4h2m-6 8v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
      </svg>
    )
  },
  {
    title: "Transparência e valorização profissional",
    desc: "Condições claras e reconhecimento contínuo.",
    image: webImages.transparency,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Inserção em ambientes de excelência",
    desc: "Atuação em instituições de alto padrão.",
    image: webImages.excellence,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.377-2.455a1 1 0 00-1.175 0l-3.377 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.95 9.397c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.97z" />
      </svg>
    )
  },
  {
    title: "Apoio contínuo no desenvolvimento da carreira",
    desc: "Acompanhamento e oportunidades para evolução.",
    image: webImages.career,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0118 17.5a11.95 11.95 0 01-6 2.5 11.95 11.95 0 01-6-2.5 12.083 12.083 0 01.84-6.922L12 14z" />
      </svg>
    )
  },
  {
    title: "Flexibilidade e Inovações",
    desc: "Tecnologia para escalar com agilidade e equilíbrio.",
    image: webImages.innovation,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    )
  }
];

const ProfessionalBenefits: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let autoScrollTimer: ReturnType<typeof setInterval> | null = null;
    let autoScrollStartTimer: ReturnType<typeof setTimeout> | null = null;

    const stopAutoScroll = () => {
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
        autoScrollTimer = null;
      }
      if (autoScrollStartTimer) {
        clearTimeout(autoScrollStartTimer);
        autoScrollStartTimer = null;
      }
    };

    const startAutoScroll = (withDelay = true) => {
      stopAutoScroll();

      if (!desktopQuery.matches || reducedMotionQuery.matches) {
        return;
      }

      const beginInterval = () => {
        autoScrollTimer = setInterval(() => {
          const currentCarousel = carouselRef.current;
          if (!currentCarousel) return;
          const maxScrollLeft = currentCarousel.scrollWidth - currentCarousel.clientWidth;
          if (maxScrollLeft <= 0) return;
          const scrollStep = Math.max(420, Math.round(currentCarousel.clientWidth * 0.2));
          const nextPosition = currentCarousel.scrollLeft + scrollStep;

          currentCarousel.scrollTo({
            left: nextPosition >= maxScrollLeft - 20 ? 0 : nextPosition,
            behavior: 'smooth',
          });
        }, 2400);
      };

      if (withDelay) {
        autoScrollStartTimer = setTimeout(beginInterval, 3000);
        return;
      }

      beginInterval();
    };

    const syncAutoScroll = () => {
      if (desktopQuery.matches && !reducedMotionQuery.matches) {
        carousel.scrollTo({ left: 0, behavior: 'auto' });
        startAutoScroll(true);
      } else {
        stopAutoScroll();
      }
    };

    const handleMouseLeave = () => startAutoScroll(false);

    syncAutoScroll();
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', syncAutoScroll);

    return () => {
      stopAutoScroll();
      carousel.removeEventListener('mouseenter', stopAutoScroll);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', syncAutoScroll);
    };
  }, []);

  const onImageError = (fallbackSrc: string) => (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    img.onerror = null;
    if (img.src !== fallbackSrc) {
      img.src = fallbackSrc;
    }
  };

  return (
    <section id="beneficios-medicos" className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_80%_10%,rgba(255,255,255,0.12),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_15%_85%,rgba(255,255,255,0.08),transparent)]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/10 skew-x-12 translate-x-20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/65 via-brand-dark/70 to-brand-dark/45"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] font-bold text-white/80">
            Para Médicos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 leading-tight">
            AMBIENTE DE PROJEÇÃO E <span className="text-brand-light">CONSOLIDAÇÃO PROFISSIONAL</span>
          </h2>
        </div>

        {/* <div ref={carouselRef} className="flex gap-6 md:gap-6 overflow-x-auto pb-6 md:pb-8 w-screen relative px-0 snap-x snap-mandatory "> */}
        <div ref={carouselRef} className="flex gap-6 md:gap-6 overflow-x-auto pb-6 md:pb-8 w-screen ml-[calc(50%-50vw)] px-6 relative snap-x snap-mandatory scroll-px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {professionalFeatures.map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 md:p-8 lg:p-10 shadow-[0_25px_70px_-55px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 min-w-[82%] sm:min-w-[60%] md:min-w-[420px] lg:min-w-[520px] snap-start"
            >
              <div className="absolute left-5 top-5 bottom-5 w-1 rounded-full bg-gradient-to-b from-brand-light/70 via-brand-light/25 to-transparent"></div>
              <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-brand-light/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="pl-5 md:pl-6">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-light/20 rounded-2xl flex items-center justify-center text-brand-light group-hover:scale-110 transition-transform duration-500 shrink-0">
                    {f.icon}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold">
                    Benefício clínico
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed font-light group-hover:text-white/80 transition-colors">
                  {f.desc}
                </p>
                <div className="mt-5 rounded-2xl overflow-hidden border border-white/20">
                  <img
                    src={f.image}
                    alt={`Imagem de apoio para ${f.title}`}
                    className="w-full h-28 md:h-36 object-cover"
                    loading="lazy"
                    onError={onImageError(sitePreview)}
                  />
                </div>

                <div className="mt-5 flex items-center text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">
                  <span className="h-px w-10 bg-brand-light mr-3"></span>
                  Valorização real
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
