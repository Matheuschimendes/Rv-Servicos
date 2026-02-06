
import React from 'react';

const testimonials = [
  {
    text: "Tenho orgulho e prazer em trabalhar na Helpmed. Uma empresa compromissada com a ética, seriedade e em prestar um serviço de qualidade.",
    author: "Dr. Emerson Diogo Ribeiro Izumi",
    role: "Médico Clínico Geral - Curitiba/PR"
  },
  {
    text: "Solucionamos um dos maiores problemas que toda gestão municipal pode enfrentar: a falta de médicos qualificados e empáticos.",
    author: "Juliana Dutra do Prado",
    role: "Ex-Secretária de Saúde - São Domingos/SC"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_80%_10%,rgba(255,255,255,0.12),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_15%_85%,rgba(255,255,255,0.08),transparent)]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/10 skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-black/40 via-brand-dark/60 to-transparent"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] font-bold text-white/80">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            O que dizem nossos parceiros
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Histórias de sucesso construídas com ética, agilidade e parceria duradoura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group bg-white/95 text-slate-900 p-10 md:p-12 rounded-[2.5rem] relative shadow-[0_20px_60px_-35px_rgba(0,0,0,0.65)] border border-white/40 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-8 right-8 text-brand-light/25">
                <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11M14.017 21H11.017V11C11.017 8.23858 13.2556 6 16.017 6H19.017C21.7784 6 24.017 8.23858 24.017 11V15C24.017 17.7614 21.7784 20 19.017 20H16.017C15.4647 20 15.017 20.4477 15.017 21H14.017ZM3.0166 21L3.0166 18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C8.56888 16 9.0166 15.5523 9.0166 15V9C9.0166 8.44772 8.56888 8 8.0166 8H4.0166C3.46432 8 3.0166 8.44772 3.0166 9V11M3.0166 21H0.0166V11C0.0166 8.23858 2.25518 6 5.0166 6H8.0166C10.778 6 13.0166 8.23858 13.0166 11V15C13.0166 17.7614 10.778 20 8.0166 20H5.0166C4.46432 20 4.0166 20.4477 4.0166 21H3.0166Z" />
                </svg>
              </div>

              <p className="text-lg md:text-xl italic text-slate-700 mb-8 leading-relaxed relative z-10">
                “{t.text}”
              </p>
              <div>
                <h5 className="font-bold text-slate-900">{t.author}</h5>
                <p className="text-brand-dark text-sm font-semibold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
