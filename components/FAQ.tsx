
import React, { useState } from 'react';

const faqs = [
  {
    q: "Quais documentos são necessários para o cadastro?",
    a: "Basicamente CRM ativo, comprovante de residência e documentos de identificação. Para especialistas, solicitamos o RQE ou certificado de conclusão de residência."
  },
  {
    q: "Como é feito o pagamento dos plantões?",
    a: "O pagamento é realizado via transferência bancária ou PIX, seguindo o cronograma acordado para cada unidade, sempre com máxima pontualidade."
  },
  {
    q: "A RV oferece suporte durante o plantão?",
    a: "Sim! Nossa Central de Atendimento ao Médico (CAM) funciona 24h por dia, 7 dias por semana, para auxiliar em qualquer intercorrência administrativa ou de escala."
  },
  {
    q: "Posso escolher plantões em outros estados?",
    a: "Com certeza. Atuamos em diversos estados e você pode se candidatar a vagas em qualquer um deles, desde que possua o visto provisório ou secundário no CRM local."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <span className="text-brand-dark font-black uppercase text-[10px] md:text-xs tracking-[0.3em] mb-3 md:mb-4 block">Transparência</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-dark mb-8 leading-tight">Perguntas <br/> Frequentes</h2>
            <p className="text-slate-500 mb-10 font-light text-base md:text-lg">
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
                  <p className="px-8 pb-8 text-slate-500 leading-relaxed text-sm md:text-base font-light">
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
