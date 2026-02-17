
import React, { useState } from 'react';
import sitePreview from '../assets/images/site-preview.png';

const faqs = [
  {
    q: "Qual o prazo para implementação dos serviços?",
    a: "Após análise do estudo de viabilidade, a implementação pode iniciar em até 15 dias úteis, dependendo da complexidade e demanda da instituição. Nossa equipe garante uma transição ágil e segura."
  },
  {
    q: "Como funciona o estudo de viabilidade?",
    a: "Realizamos uma análise completa e gratuita das necessidades da sua instituição, mapeando demandas, especialidades necessárias e propondo soluções personalizadas com previsão de custos e prazos. Resposta em até 24h."
  },
  {
    q: "A RV atende em todo o Brasil?",
    a: "Sim! Atuamos em diferentes estados do país com equipes qualificadas e estrutura para atender demandas em diversas localidades. Consulte disponibilidade para sua região."
  },
  {
    q: "Quais documentos são necessários para o cadastro?",
    a: "Basicamente CRM ativo, comprovante de residência e documentos de identificação. Para especialistas, solicitamos o RQE ou certificado de conclusão de residência."
  },
  {
    q: "Qual o diferencial da RV Serviços Médicos?",
    a: "Combinamos eficiência operacional, tecnologia de gestão, equipe qualificada e atendimento humanizado, garantindo parceria estratégica de longo prazo com foco em resultados."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionBg = "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1800&q=80";
  const onImageError = (fallbackSrc: string) => (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    img.onerror = null;
    if (img.src !== fallbackSrc) img.src = fallbackSrc;
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <img
        src={sectionBg}
        alt="Fundo com equipamentos médicos"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
        loading="lazy"
        onError={onImageError(sitePreview)}
      />

      <div className="absolute inset-0 bg-white/85"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <span className="text-brand-dark font-black uppercase text-[10px] md:text-xs tracking-[0.3em] mb-3 md:mb-4 block">Transparência</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-dark mb-8 leading-tight">Perguntas <br /> Frequentes</h2>
            <p className="text-slate-600 mb-10 text-base md:text-xl">
              Não encontrou o que procurava? Entre em contato direto com nosso time comercial.
            </p>
            <button className="text-brand-dark font-bold flex items-center space-x-3 group text-lg">
              <span className="border-b-2 border-brand-light pb-1 group-hover:border-brand-dark transition-colors">Falar com suporte</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="lg:w-2/3 space-y-6">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${openIndex === idx ? 'border-brand-light bg-brand-surface shadow-sm' : 'border-slate-100 bg-white'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-7 text-left flex justify-between items-center"
                >
                  <span className={`font-bold text-lg md:text-xl ${openIndex === idx ? 'text-brand-dark' : 'text-slate-700'}`}>{item.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-brand-dark text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-8 pb-8 text-slate-600 leading-relaxed text-sm md:text-base font-normal">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
