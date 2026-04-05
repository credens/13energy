import { ShieldCheck, Zap, Ban, TestTube2 } from 'lucide-react';

const TrustBar = () => {
  const badges = [
    { icon: <Zap size={16} />, text: '400MG CAFEÍNA ANHÍDRA' },
    { icon: <Ban size={16} />, text: '0% AZÚCAR AÑADIDA' },
    { icon: <ShieldCheck size={16} />, text: 'PRODUCTO SIN T.A.C.C.' },
    { icon: <TestTube2 size={16} />, text: 'FÓRMULA LAB TESTED' },
  ];

  return (
    <div className="bg-[#0D0D0D] border-y border-white/5 py-6 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <div className="text-[#99FF00] group-hover:scale-125 transition-transform duration-300">
                {b.icon}
              </div>
              <span className="text-white font-black italic font-display text-sm md:text-lg tracking-widest uppercase">
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;