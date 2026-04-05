import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ProductShowcase from '../components/home/ProductShowcase';
import Comparison from '../components/home/Comparison';
import Community from '../components/home/Community';
import FAQ from '../components/home/FAQ';
import Newsletter from '../components/home/Newsletter';
import Distributors from '../components/home/Distributors';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#99FF00]/50 to-transparent relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#99FF00]/10 blur-[60px] rounded-full"></div>
      </div>
      <ProductShowcase />
      <Comparison />
      <div className="w-full h-px bg-white/5"></div>
      <Community />
      <div className="w-full h-px bg-white/5"></div>
      <FAQ />
      <Newsletter />
      <Distributors />
    </>
  );
};

export default Home;