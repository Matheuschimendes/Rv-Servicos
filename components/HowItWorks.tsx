
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Cadastro Rápido',
    description: 'Envie seus documentos básicos através da nossa plataforma digital segura em poucos minutos.'
  },
  {
    number: '02',
    title: 'Escolha seu Plantão',
    description: 'Acesse nossa central de vagas em tempo real e filtre por localização, especialidade e valor.'
  },
  {
    number: '03',
    title: 'Pronto para Atuar',
    description: 'Confirme sua escala e conte com nosso suporte 24h para qualquer necessidade durante o serviço.'
  },
  {
    number: '04',
    title: 'Recebimento Garantido',
    description: 'Pagamento ágil, transparente e sem burocracia direto na sua conta, conforme o acordado.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/5 skew-x-12 translate-x-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-light font-black uppercase text-[10px] md:text-xs tracking-[0.3em] mb-3 md:mb-4 block">Simplicidade</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Como funciona a parceria?</h2>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            Criamos um fluxo pensado na rotina intensa do médico. Do cadastro ao pagamento, tudo é feito para poupar seu tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-7xl md:text-8xl font-display font-black text-white/5 absolute -top-12 left-0 group-hover:text-brand-light/10 transition-all duration-500">
                {step.number}
              </div>
              <div className="relative z-10 pt-10">
                <div className="w-12 h-1.5 bg-brand-light mb-8 group-hover:w-20 transition-all duration-500 rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
