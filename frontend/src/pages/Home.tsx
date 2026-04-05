import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import UsageGuide from '../components/home/UsageGuide';
import ProductShowcase from '../components/home/ProductShowcase';
import Comparison from '../components/home/Comparison';
import Community from '../components/home/Community';
import FAQ from '../components/home/FAQ';
import Newsletter from '../components/home/Newsletter';
import Distributors from '../components/home/Distributors';

// Componente de Separador Neón reutilizable
const NeonSeparator = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#99FF00]/30 to-transparent relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#99FF00]/5 blur-[60px] rounded-full pointer-events-none"></div>
  </div>
);

const Home = () => {
  return (
    <main className="overflow-hidden">
      {/* Sección de Impacto Inicial */}
      <Hero />
      
      {/* Pilares de marca */}
      <Features />
      
      <NeonSeparator />
      
      {/* Guía de Uso */}
      <UsageGuide />
      
      <NeonSeparator />

      {/* Catálogo de Productos */}
      <ProductShowcase />
      
      <NeonSeparator />

      {/* Comparativa Técnica */}
      <Comparison />
      
      <NeonSeparator />

      {/* Team 13 */}
      <Community />
      
      <NeonSeparator />

      {/* FAQs */}
      <FAQ />
      
      {/* Newsletter */}
      <Newsletter />
      
      {/* B2B Distribuidores */}
      <Distributors />
    </main>
  );
};

export default Home;