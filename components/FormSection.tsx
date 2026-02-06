
import React, { useState } from 'react';

const FormSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [need, setNeed] = useState('Plantões Avulsos');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    const targetPhone = '5598996020952';
    const message = [
      'Olá, gostaria de uma proposta personalizada.',
      `Nome: ${name || 'Não informado'}`,
      `WhatsApp: ${phone || 'Não informado'}`,
      `Necessidade: ${need}`
    ].join('\n');
    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="formulario" className="py-24 md:py-32 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-brand-dark font-black uppercase text-[10px] md:text-xs tracking-widest mb-3 md:mb-4 block">Próximo Passo</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-dark mb-6 md:mb-8 tracking-tight uppercase leading-tight">VAMOS CONSTRUIR UMA PARCERIA ESTRATÉGICA?</h2>
            <p className="text-slate-500 text-base md:text-xl font-light">Com a RV Serviços Médicos, você garante agilidade, confiabilidade e soluções inovadoras.</p>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-card shadow-2xl border border-slate-50">
            <form className="space-y-8 md:space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-dark/50 block">Seu Nome</label>
                  <input
                    type="text"
                    placeholder="Como podemos te chamar?"
                    className="w-full bg-slate-50 border-0 rounded-xl p-6 focus:ring-2 focus:ring-brand-light outline-none text-brand-dark font-medium transition-all"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-dark/50 block">WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full bg-slate-50 border-0 rounded-xl p-6 focus:ring-2 focus:ring-brand-light outline-none text-brand-dark font-medium transition-all"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-dark/50 block">Necessidade Imediata</label>
                <select
                  className="w-full bg-slate-50 border-0 rounded-xl p-6 focus:ring-2 focus:ring-brand-light outline-none appearance-none text-brand-dark font-medium transition-all"
                  value={need}
                  onChange={(event) => setNeed(event.target.value)}
                >
                  <option>Plantões Avulsos</option>
                  <option>Equipe Médica Completa</option>
                  <option>Gestão de Preceptoria</option>
                  <option>Telemedicina / Laudos</option>
                  <option>Outros Serviços</option>
                </select>
              </div>

              <button className="w-full bg-brand-dark text-white py-6 md:py-8 rounded-xl text-lg md:text-xl font-black shadow-xl hover:bg-brand-light transition-all transform hover:-translate-y-1 active:scale-[0.98] uppercase tracking-widest">
                SOLICITAR PROPOSTA
              </button>
            </form>

            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-slate-100 pt-10">
              {[
                "Resposta em até 24h.",
                "Sem compromisso inicial.",
                "Escopo detalhado.",
                "Segurança LGPD."
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3 text-[10px] md:text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                  <div className="w-5 h-5 rounded-full bg-brand-light/10 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-brand-light" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
