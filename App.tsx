
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import ManagerBenefits from './components/ManagerBenefits';
import ProfessionalBenefits from './components/ProfessionalBenefits';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white selection:bg-brand-light selection:text-white">
      <Navbar />
      <main>
        <Hero /> {/* Dobra 1 */}
        <Stats />
        <Services /> {/* Dobra 2 */}

        {/* Dobras 3 e 4  */}
        <ManagerBenefits /> {/* Dobra 3 */}
        <ProfessionalBenefits /> {/* Dobra 4 */}

        <About /> {/* Dobra 5 */}
        {/* <HowItWorks /> */}
        <Testimonials />
        <FAQ />
        <FormSection /> {/* Dobra 6 */}
      </main>
      <Footer /> {/* Dobra 7 */}
      <StickyMobileCTA />
    </div>
  );
};

export default App;
