import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center font-sans">
    <Helmet>
      <title>404 - Página no encontrada | 13Energy</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <h1 className="text-[150px] font-black italic font-display text-[#99FF00] leading-none">404</h1>
    <p className="text-white text-2xl font-black uppercase italic mb-8 tracking-tight">Página no encontrada</p>
    <Link to="/" className="bg-[#99FF00] text-black px-10 py-4 rounded-full font-black italic uppercase tracking-widest hover:scale-105 transition-all font-display text-xl">
      Volver al Inicio
    </Link>
  </div>
);

export default NotFound;
