
import React, { useEffect, useRef, useState } from 'react';
import sitePreview from '../assets/images/site-preview.png';


type StatCardProps = {
  target: number;
  label: string;
  image: string;
  suffix?: string;
  formatter?: (value: number) => string;
  inView: boolean;
};

const useCountUp = (target: number, durationMs: number, start: boolean) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const tick = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const nextValue = Math.round(target * progress);
      setValue(nextValue);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [durationMs, start, target]);

  return value;
};

const StatCard: React.FC<StatCardProps> = ({ target, label, image, suffix, formatter, inView }) => {
  const value = useCountUp(target, 1400, inView);
  const displayValue = formatter ? formatter(value) : value.toString();
  const onImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    img.onerror = null;
    img.src = sitePreview;
  };

  return (
    <div className="group bg-white p-3 md:p-4 rounded-card border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-lg">
      <img
        src={image}
        alt={`Imagem do indicador ${label}`}
        className="w-full h-24 md:h-28 object-cover rounded-2xl mb-5"
        loading="lazy"
        onError={onImageError}
      />
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-5xl font-display font-extrabold text-brand-dark mb-2 md:mb-3 tracking-tighter">
          {displayValue}
          <span className="text-brand-light">{suffix}</span>
        </div>
        <div className="text-slate-400 font-semibold uppercase text-[10px] md:text-xs tracking-[0.2em] text-center">{label}</div>
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const formatCompact = (value: number) => {
    if (value >= 1000) {
      const compact = value >= 10000 ? value / 1000 : Math.round((value / 1000) * 10) / 10;
      return `${compact}k`;
    }
    return `${value}`;
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-brand-surface -mt-12 md:-mt-24 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <StatCard target={5} label="Estados Atendidos" image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80" inView={inView} />
          <StatCard target={3100} label="Médicos Ativos" image="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80" suffix="+" formatter={formatCompact} inView={inView} />
          <div className="col-span-2 md:col-span-1">
            <StatCard target={10000} label="Plantões Mensais" image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80" suffix="+" formatter={formatCompact} inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
