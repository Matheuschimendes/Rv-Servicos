
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <span className="text-brand-green font-black uppercase text-xs tracking-[0.3em] mb-4 block">Fale Conosco</span>
            <h2 className="font-display text-4xl font-extrabold mb-10 text-brand-petrol">Canais de Atendimento</h2>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start space-x-4 md:space-x-5 group">
                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-petrol text-base md:text-lg">WhatsApp Central</h4>
                  <a href="https://wa.me/5511967780772" className="text-xl md:text-2xl font-black text-brand-green hover:underline">+55 (11) 96778-0772</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-5 group">
                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-petrol text-base md:text-lg">Sede Administrativa</h4>
                  <p className="text-slate-500 font-light text-sm md:text-base">Rua Acyr Guimarães, 222 - 6º Andar, Curitiba/PR</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:space-x-5 group">
                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-petrol text-base md:text-lg">Email Corporativo</h4>
                  <p className="text-slate-500 font-light text-sm md:text-base">contato@helpmedsaude.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-2 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-brand-petrol/5 overflow-hidden h-[300px] md:h-[450px]">
              <iframe 
                src="https://maps.google.com/maps?q=Rua%20Acyr%20Guimar%C3%A3es%2C%20222%206%C2%BA%20andar%20-%20%C3%81gua%20Verde%20-%C2%A0Curitiba%2FPR%20-%C2%A0CEP%3A%2080240-230&t=m&z=15&output=embed&iwloc=near"
                className="w-full h-full rounded-[1.8rem] md:rounded-[2rem]"
                loading="lazy"
                title="HelpMed Localização"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
