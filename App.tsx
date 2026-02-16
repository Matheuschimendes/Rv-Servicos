
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Stats from './components/Stats';
import Services from './components/Services';
import ManagerBenefits from './components/ManagerBenefits';
import ProfessionalBenefits from './components/ProfessionalBenefits';
import About from './components/About';
// import HowItWorks from './components/HowItWorks';
// import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

const App: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section, footer'));
    if (!sections.length) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          sectionObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          itemObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -6% 0px',
      }
    );

    const revealItems: HTMLElement[] = [];

    const isLayoutBlock = (element: HTMLElement) => {
      const className = element.className;
      if (typeof className !== 'string') return false;
      return className.includes('grid') || className.includes('flex') || className.includes('space-y');
    };

    const collectChildren = (root: HTMLElement, depth: number, maxDepth: number, bucket: Set<HTMLElement>) => {
      if (depth >= maxDepth || !isLayoutBlock(root)) return;

      Array.from(root.children).forEach((child) => {
        const childElement = child as HTMLElement;
        if (childElement.tagName === 'IMG') return;
        if (childElement.classList.contains('absolute')) return;
        bucket.add(childElement);
        collectChildren(childElement, depth + 1, maxDepth, bucket);
      });
    };

    sections.forEach((section, sectionIndex) => {
      section.classList.add('scroll-reveal-section');
      section.style.setProperty('--reveal-section-delay', `${Math.min(sectionIndex * 80, 320)}ms`);
      sectionObserver.observe(section);

      const container = section.querySelector<HTMLElement>(':scope > .container') || section.querySelector<HTMLElement>('.container');
      if (!container) return;

      const stagedItems = new Set<HTMLElement>();

      Array.from(container.children).forEach((child) => {
        const element = child as HTMLElement;
        if (element.tagName === 'IMG') return;
        if (element.classList.contains('absolute')) return;
        stagedItems.add(element);
        collectChildren(element, 0, 3, stagedItems);
      });

      Array.from(stagedItems).forEach((item, itemIndex) => {
        item.classList.add('scroll-reveal-item');
        item.style.setProperty('--reveal-item-delay', `${Math.min(itemIndex * 90, 620)}ms`);
        itemObserver.observe(item);
        revealItems.push(item);
      });
    });

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();

      sections.forEach((section) => {
        section.classList.remove('scroll-reveal-section', 'is-visible');
        section.style.removeProperty('--reveal-section-delay');
      });

      revealItems.forEach((item) => {
        item.classList.remove('scroll-reveal-item', 'is-visible');
        item.style.removeProperty('--reveal-item-delay');
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white selection:bg-brand-light selection:text-white">
      <Navbar />
      <main>
        <Hero /> {/* Dobra 1 */}
        {/* <Stats /> */}
        <Services /> {/* Dobra 2 */}

        {/* Dobras 3 e 4  */}
        <ManagerBenefits /> {/* Dobra 3 */}
        <ProfessionalBenefits /> {/* Dobra 4 */}

        <About /> {/* Dobra 5 */}
        {/* <HowItWorks /> */}
        {/* <Testimonials /> */}
        <FormSection /> {/* Dobra 6 */}
        <FAQ />
      </main>
      <Footer /> {/* Dobra 7 */}
      <StickyMobileCTA />
    </div>
  );
};

export default App;
