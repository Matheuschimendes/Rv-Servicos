
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 md:py-32 bg-white text-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 w-full">
            <div className="bg-brand-surface p-12 md:p-16 rounded-card border border-slate-100 relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/10 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-light/20 transition-all duration-500"></div>
              <div className="text-center">
                <h3 className="font-display text-2xl md:text-4xl font-black mb-2 tracking-tighter text-brand-dark">RV <span className="font-light">Serviços</span></h3>
                <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-brand-light font-bold">Médicos</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-brand-light font-black uppercase text-[10px] md:text-xs tracking-widest mb-3 md:mb-4 block">Sobre a RV</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-8 md:mb-10 leading-tight uppercase text-brand-dark">QUEM SOMOS</h2>
            <p className="text-base md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed font-light">
              A <strong className="text-brand-dark font-semibold">RV Serviços Médicos</strong> é parceira estratégica de clínicas, hospitais e IES, garantindo eficiência e qualidade assistencial.
            </p>
            <p className="text-sm md:text-lg text-slate-500 mb-10 md:mb-12 leading-relaxed font-light italic border-l-2 border-brand-light/30 pl-6">
              “Nosso propósito é oferecer soluções completas em terceirização, preceptoria e telemedicina, conectando o melhor da medicina com instituições de excelência.”
            </p>
            <div className="bg-brand-light/10 p-8 md:p-10 rounded-2xl border-l-4 border-brand-light">
              <p className="text-brand-dark text-base md:text-lg font-bold italic leading-relaxed">
                “Ser nosso parceiro significa contar com suporte especializado e um time comprometido com a excelência.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
