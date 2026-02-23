import React, { useState } from 'react';
import hospitalDaMulher from '../assets/images/instituicoes/hpmulher.svg';
import unicid from '../assets/images/instituicoes/unicid.svg';
import sejus from '../assets/images/instituicoes/sejus.svg';
import ub from '../assets/images/instituicoes/ub.svg';
import fundacaoDoAbc from '../assets/images/instituicoes/abc.svg';
import uninove from '../assets/images/instituicoes/uninove.svg';
import santoAndreSaude from '../assets/images/instituicoes/santosaude.svg';
import iesp from '../assets/images/instituicoes/iesp.svg';
import secretaria from '../assets/images/instituicoes/secretaria.svg';
import ame from '../assets/images/instituicoes/ame.svg';


type Institution = {
  name: string;
  logoSrc: string;
  logoClassName?: string;
};

const institutions: Institution[] = [
  { name: 'Hospital da Mulher', logoSrc: hospitalDaMulher, logoClassName: 'max-h-[5.7rem] md:max-h-[6.1rem]' },
  { name: 'UNICID', logoSrc: unicid, logoClassName: 'max-h-[4.9rem] md:max-h-[4.9rem]' },
  { name: 'SEJUS', logoSrc: sejus, logoClassName: 'max-h-[4.9rem] md:max-h-[4.9rem]' },
  { name: 'UB', logoSrc: ub, logoClassName: 'max-h-[4.9rem] md:max-h-[4.9rem]' },
  { name: 'Fundacao do ABC', logoSrc: fundacaoDoAbc, logoClassName: 'max-h-[4.9rem] md:max-h-[4.9rem]' },
  { name: 'UNINOVE', logoSrc: uninove, logoClassName: 'max-h-[4.5rem] md:max-h-[4.6rem]' },
  { name: 'Prefeitura de Santo Andre - Secretaria de Saude', logoSrc: santoAndreSaude, logoClassName: 'max-h-[4.9rem] md:max-h-[4.9rem]' },
  { name: 'IESP', logoSrc: iesp, logoClassName: 'max-h-[4.9rem] md:max-h-[4.9rem]' },
  { name: 'Secretaria de Saude de Sao Paulo', logoSrc: secretaria, logoClassName: 'max-h-[4.9rem] md:max-h-[4.9rem]' },
  { name: 'AME', logoSrc: ame, logoClassName: 'max-h-[4.9rem] md:max-h-[4.9rem]' },

];

const getInitials = (name: string) => {
  const words = name
    .replace(/-/g, ' ')
    .split(' ')
    .filter(Boolean);

  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return `${words[0][0] ?? ''}${words[1][0] ?? ''}${words[2]?.[0] ?? ''}`.toUpperCase();
};

const Institutions: React.FC = () => {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});
  const [retryLogos, setRetryLogos] = useState<Record<string, boolean>>({});

  const handleLogoError = (name: string, logoSrc: string) => (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (!retryLogos[name]) {
      setRetryLogos((prev) => ({ ...prev, [name]: true }));
      event.currentTarget.src = `${logoSrc}#retry`;
      return;
    }

    setFailedLogos((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  return (
    <section id="instituicoes-parceiras" className="py-20 md:py-24 bg-brand-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_380px_at_10%_0%,rgba(12,74,110,0.13),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(840px_360px_at_95%_88%,rgba(25,146,180,0.14),transparent)]"></div>
      <div className="absolute inset-0 opacity-[0.13] bg-[linear-gradient(to_right,rgba(12,74,110,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,74,110,0.08)_1px,transparent_1px)] bg-[size:56px_56px]"></div>
      <div className="absolute -top-24 right-0 w-72 h-72 bg-brand-light/12 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 left-0 w-72 h-72 bg-brand-dark/6 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center justify-center gap-3 text-brand-dark font-black uppercase text-[10px] md:text-xs tracking-[0.32em] mb-4 md:mb-5">
            <span className="h-px w-10 bg-brand-light/60"></span>
            Credibilidade
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-[2.8rem] font-extrabold text-brand-dark leading-tight">
            Instituições que confiam em nossos servicos
          </h2>
        </div>

        <div className="relative rounded-[1.8rem] md:rounded-[2.2rem] border border-white/70 bg-gradient-to-b from-white/90 via-white/78 to-white/68 backdrop-blur-sm p-3 md:p-4 shadow-[0_34px_90px_-70px_rgba(15,23,42,0.7)]">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-light/70 to-transparent"></div>
          <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-dark/30 to-transparent"></div>
          <div className="absolute inset-0 rounded-[inherit] ring-1 ring-brand-dark/[0.035] pointer-events-none"></div>

          <div className="institutions-marquee" aria-label="Instituicoes parceiras">
            <div className="institutions-marquee__inner">
              {[0, 1].map((trackIndex) => (
                <div key={trackIndex} className="institutions-marquee__track" aria-hidden={trackIndex === 1}>
                  {institutions.map((institution) => (
                    <div
                      key={`${institution.name}-${trackIndex}`}
                      className="group relative bg-white border border-slate-200/90 rounded-2xl h-[138px] md:h-[154px] w-[calc((100vw-5rem)/2)] md:w-[226px] px-2 md:px-4 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.6)] hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-30px_rgba(15,23,42,0.7)] transition-all duration-300 flex flex-col items-center justify-center shrink-0 overflow-hidden"
                    >
                      <div className="absolute inset-[1px] rounded-[0.95rem] border border-white/80 pointer-events-none"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(120px_60px_at_50%_0%,rgba(25,146,180,0.14),transparent)]"></div>
                      {failedLogos[institution.name] ? (
                        <div className="relative z-10 w-full h-full rounded-xl bg-slate-50 text-brand-dark/70 flex flex-col items-center justify-center px-3 py-2 text-center">
                          <span className="font-black text-base md:text-lg tracking-wider">{getInitials(institution.name)}</span>
                          <span className="mt-1 text-[10px] md:text-[11px] font-semibold leading-tight">{institution.name}</span>
                        </div>
                      ) : (
                        <img
                          src={institution.logoSrc}
                          alt={`Logo ${institution.name}`}
                          className={`relative z-10 w-full object-contain contrast-125 saturate-90 ${institution.logoClassName ?? 'max-h-[4.9rem] md:max-h-[4.9rem]'}`}
                          loading="eager"
                          decoding="async"
                          fetchPriority="high"
                          onError={handleLogoError(institution.name, institution.logoSrc)}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Institutions;
