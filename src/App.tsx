import React, { useRef, useState, useEffect } from 'react';
import { Zap, Download, Infinity, CheckCircle2, Play, Volume2, Star, Shield, BadgeDollarSign, Monitor, Search, ArrowRight, Gift, CheckCircle, X, ChevronDown, Lock, ShieldCheck, ChevronRight } from 'lucide-react';

const categories = [
  { img: "https://primestl.vercel.app/assets/animes-BoD8B-M4.jpg", badge: "GEEK", title: "ANIMES & GEEK" },
  { img: "https://primestl.vercel.app/assets/desenhos-DQg7tFeS.jpg", badge: "NOSTALGIA", title: "DESENHOS CLÁSSICOS" },
  { img: "https://primestl.vercel.app/assets/religiao-z_r5YWmb.jpg", badge: "RELIGIÃO", title: "ARTE SACRA" },
  { img: "https://primestl.vercel.app/assets/mitologia-C9Z-72xN.jpg", badge: "HISTÓRIA", title: "MITOLOGIA" },
  { img: "https://primestl.vercel.app/assets/decoracao-D8z2Zr8k.jpg", badge: "CASA", title: "DECORAÇÃO" },
  { img: "https://primestl.vercel.app/assets/mais-BIKdVYlU.jpg", badge: "ELITE", title: "E MUITO MAIS..." },
];

const secondCategories = [
  { img: "https://primestl.vercel.app/assets/mitologia-C9Z-72xN.jpg", badge: "HISTÓRIA", title: "MITOLOGIA" },
  { img: "https://primestl.vercel.app/assets/decoracao-D8z2Zr8k.jpg", badge: "CASA", title: "DECORAÇÃO" },
  { img: "https://primestl.vercel.app/assets/mais-BIKdVYlU.jpg", badge: "ELITE", title: "E MUITO MAIS..." },
  { img: "https://primestl.vercel.app/assets/animes-BoD8B-M4.jpg", badge: "GEEK", title: "ANIMES & GEEK" },
  { img: "https://primestl.vercel.app/assets/desenhos-DQg7tFeS.jpg", badge: "NOSTALGIA", title: "DESENHOS CLÁSSICOS" },
  { img: "https://primestl.vercel.app/assets/religiao-z_r5YWmb.jpg", badge: "RELIGIÃO", title: "ARTE SACRA" },
];

const testimonials = [
  "https://primestl.vercel.app/assets/dep-01-DWAQBFQX.webp",
  "https://primestl.vercel.app/assets/dep-02-B8hqtlws.webp",
  "https://primestl.vercel.app/assets/dep-03-6h1w8quF.webp",
  "https://primestl.vercel.app/assets/dep-04-B2aEbnW-.webp",
  "https://primestl.vercel.app/assets/dep-05-CFypTejN.webp",
];

const scrollCarouselToIndex = (carousel: HTMLDivElement, index: number) => {
  const items = Array.from(carousel.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement && child.tagName !== 'STYLE'
  );
  const item = items[index];

  if (!item) return;

  carousel.scrollTo({
    left: item.offsetLeft + item.clientWidth / 2 - carousel.clientWidth / 2,
    behavior: 'smooth'
  });
};

const getCenteredCarouselIndex = (carousel: HTMLDivElement) => {
  const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
  const items = Array.from(carousel.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement && child.tagName !== 'STYLE'
  );

  return items.reduce(
    (closest, item, index) => {
      const itemCenter = item.offsetLeft + item.clientWidth / 2;
      const distance = Math.abs(carouselCenter - itemCenter);

      return distance < closest.distance ? { index, distance } : closest;
    },
    { index: 0, distance: Number.POSITIVE_INFINITY }
  ).index;
};

export default function App() {
  const [activePlatformImage, setActivePlatformImage] = useState(0);
  const platformImages = [
    "https://primestl.vercel.app/assets/platform-01-Bn1MkiES.png",
    "https://primestl.vercel.app/assets/platform-02-DM2rPqeV.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlatformImage((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [activeCategory, setActiveCategory] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [activeSecondCategory, setActiveSecondCategory] = useState(0);
  const secondCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxIndex = categories.length - 1;
        
        let nextIndex = activeCategory + 1;
        if (nextIndex > maxIndex) {
          nextIndex = 0;
        }

        scrollCarouselToIndex(carouselRef.current, nextIndex);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeCategory]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondCarouselRef.current) {
        const maxIndex = secondCategories.length - 1;
        
        let nextIndex = activeSecondCategory + 1;
        if (nextIndex > maxIndex) {
          nextIndex = 0;
        }

        scrollCarouselToIndex(secondCarouselRef.current, nextIndex);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeSecondCategory]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const newIndex = getCenteredCarouselIndex(carouselRef.current);
      if (newIndex !== activeCategory && newIndex >= 0 && newIndex < categories.length) {
        setActiveCategory(newIndex);
      }
    }
  };

  const handleSecondScroll = () => {
    if (secondCarouselRef.current) {
      const newIndex = getCenteredCarouselIndex(secondCarouselRef.current);
      if (newIndex !== activeSecondCategory && newIndex >= 0 && newIndex < secondCategories.length) {
        setActiveSecondCategory(newIndex);
      }
    }
  };

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialCarouselRef = useRef<HTMLDivElement>(null);
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    { q: "COMO VOU RECEBER O ACESSO AOS ARQUIVOS?", a: "O acesso é enviado imediatamente para o seu e-mail assim que o pagamento for confirmado. Você receberá login e senha para acessar nossa plataforma exclusiva." },
    { q: "O ACESSO É REALMENTE VITALÍCIO?", a: "Sim! Ao adquirir o Pacote Premium, você paga apenas uma vez e tem acesso para sempre, incluindo todas as futuras atualizações sem custo adicional." },
    { q: "OS ARQUIVOS SERVEM PARA QUALQUER IMPRESSORA?", a: "Sim, os arquivos STL são universais e compatíveis com qualquer impressora 3D do mercado, seja de Filamento (FDM) ou Resina." },
    { q: "PRECISO SER UM EXPERT PARA CONSEGUIR IMPRIMIR?", a: "Nenhum conhecimento prévio avançado é necessário. Todos os arquivos já estão prontos e otimizados para ir direto para o fatiador e para a impressora." },
    { q: "E SE EU NÃO GOSTAR DO CONTEÚDO?", a: "Você está coberto pela nossa garantia blindada de 14 dias. Se não gostar, basta um e-mail e devolvemos 100% do seu dinheiro, sem burocracia." },
    { q: "COMO FUNCIONAM AS ATUALIZAÇÕES?", a: "A biblioteca é atualizada constantemente com novos modelos. Membros do pacote Premium recebem todos os arquivos novos de forma gratuita na plataforma." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonialCarouselRef.current) {
        const maxIndex = testimonials.length - 1;
        
        let nextIndex = activeTestimonial + 1;
        if (nextIndex > maxIndex) {
          nextIndex = 0;
        }

        scrollCarouselToIndex(testimonialCarouselRef.current, nextIndex);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [activeTestimonial]);

  const handleTestimonialScroll = () => {
    if (testimonialCarouselRef.current) {
      const newIndex = getCenteredCarouselIndex(testimonialCarouselRef.current);
      if (newIndex !== activeTestimonial && newIndex >= 0 && newIndex < testimonials.length) {
        setActiveTestimonial(newIndex);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white font-['Inter'] relative selection:bg-[#C8FF00] selection:text-black">
      {/* BACKGROUND GRID */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <main className="relative z-10 pt-16 flex flex-col items-center mx-auto">
        
        {/* HERO CONTENT */}
        <div className="px-4 flex flex-col items-center max-w-4xl mx-auto w-full">
          {/* LOGO TITLE */}
          <h1 className="text-[14vw] sm:text-7xl md:text-8xl lg:text-9xl font-black font-['Montserrat'] italic tracking-tighter text-[#C8FF00] mb-6 leading-none text-center block w-full" style={{ textShadow: '0 4px 20px rgba(200, 255, 0, 0.15)' }}>
            PRIME STL
          </h1>
          
          {/* SMALL DOT */}
          <div className="w-5 h-5 rounded-full bg-[#C8FF00] mb-8 shadow-[0_0_15px_#C8FF00]"></div>
          
          {/* MAIN HEADINGS */}
          <div className="flex flex-col items-center text-center font-black font-['Montserrat'] italic tracking-tight uppercase leading-[0.9] w-full">
            <h2 className="text-[9vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white">ARQUIVOS STL</h2>
            <h2 className="text-[9vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white">PRONTOS PARA</h2>
            <h2 className="text-[9vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-[#C8FF00]">LUCRAR COM</h2>
            <h2 className="text-[9vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-[#C8FF00] mb-8">IMPRESSÃO 3D</h2>
          </div>

          {/* SUBHEADING */}
          <h3 className="text-sm sm:text-base md:text-xl font-bold font-['Montserrat'] italic text-gray-300 max-w-2xl text-center leading-snug mb-12">
            PACK PROFISSIONAL COM MODELOS QUE JÁ VENDEM NA SHOPEE, INSTAGRAM E MARKETPLACES.
          </h3>

          {/* VIDEO PLAYER PLACEHOLDER */}
          <div className="w-full max-w-[400px] sm:max-w-xl md:max-w-2xl aspect-[9/16] sm:aspect-[4/5] md:aspect-video bg-zinc-900 rounded-3xl border border-zinc-800 relative overflow-hidden mb-10 group shadow-2xl shadow-black/50">
            <video 
              src="/promo-video.mp4" 
              controls 
              className="w-full h-full object-cover"
            />
          </div>

          {/* CTA BUTTON */}
          <a href="#pricing" className="w-full sm:max-w-[90%] md:max-w-[80%] bg-[#C8FF00] hover:bg-[#b0e600] text-black py-5 sm:py-6 rounded-2xl font-black font-['Inter'] text-sm sm:text-lg md:text-xl uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(200,255,0,0.2)] hover:shadow-[0_0_60px_rgba(200,255,0,0.4)] flex justify-center items-center text-center px-4">
            QUERO ACESSAR A BIBLIOTECA AGORA
          </a>

          {/* GUARANTEES / TRUST BADGES */}
          <div className="mt-8 flex flex-col items-center mb-24">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase mb-6 text-center">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#C8FF00]" />
              A MAIOR BIBLIOTECA PROFISSIONAL DE ARQUIVOS STL DO BRASIL
            </div>

            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-3 text-[9px] sm:text-[10px] font-bold text-gray-300 tracking-widest uppercase">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 text-[#C8FF00]" />
                DOWNLOAD DIGITAL
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Infinity className="w-3 h-3 sm:w-4 sm:h-4 text-[#C8FF00]" />
                ACESSO VITALÍCIO
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#C8FF00]" />
                ARQUIVOS STL OTIMIZADOS
              </div>
            </div>
          </div>
        </div>

        {/* CAROUSEL SECTION */}
        <div className="w-full bg-[#050505] py-24 relative">
          <h3 className="text-center text-[10px] sm:text-xs font-bold text-gray-500 tracking-[0.3em] uppercase mb-12">
            EXPLORE AS CATEGORIAS PREMIUM
          </h3>

          <div 
            ref={carouselRef}
            className="hide-scrollbar flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory pb-8 w-full px-[max(1rem,7.5vw)] md:px-[max(1rem,calc(50vw-200px))]"
            onScroll={handleScroll}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {categories.map((cat, idx) => (
              <div key={idx} className="min-w-[280px] md:min-w-[400px] w-[85vw] md:w-[400px] aspect-[4/5] flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden relative group cursor-pointer border border-zinc-800/80 hover:border-[#C8FF00]/50 transition-colors duration-500">
                <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-95 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-10 left-8 right-8 text-left">
                  <span className="inline-block bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/20 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-3 backdrop-blur-sm shadow-[0_0_15px_rgba(200,255,0,0.1)] transition-transform group-hover:-translate-y-1">
                    {cat.badge}
                  </span>
                  <h4 className="text-2xl sm:text-3xl md:text-3xl text-white font-black italic font-['Montserrat'] uppercase tracking-tight transition-transform group-hover:-translate-y-1" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
                    {cat.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Dots & Counter */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center gap-2">
              {categories.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 rounded-full transition-all duration-300 ${activeCategory === idx ? 'w-8 bg-[#C8FF00] shadow-[0_0_10px_#C8FF00]' : 'w-1.5 bg-zinc-700'}`}
                />
              ))}
            </div>
            <div className="text-zinc-600 font-bold text-xs ml-6 tracking-widest">
              <span className="text-white">{activeCategory + 1}</span> / {categories.length}
            </div>
          </div>
        </div>

        {/* PRINTERS AND SLICERS FOOTER-LIKE BAR */}
        <div className="w-full py-16 bg-[#030303] border-y border-zinc-900 border-opacity-50 px-4">
          <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[10px] sm:text-[11px]">
              <span className="text-zinc-600 font-bold tracking-[0.2em] uppercase">IMPRESSORAS:</span>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-zinc-400 font-bold tracking-widest uppercase">
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default"><div className="w-1 h-1 rounded-full bg-[#C8FF00]"></div> BAMBU LAB</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default"><div className="w-1 h-1 rounded-full bg-[#C8FF00]"></div> CREALITY</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default"><div className="w-1 h-1 rounded-full bg-[#C8FF00]"></div> ANYCUBIC</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default"><div className="w-1 h-1 rounded-full bg-[#C8FF00]"></div> PRUSA</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default"><div className="w-1 h-1 rounded-full bg-[#C8FF00]"></div> ELEGOO</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[10px] sm:text-[11px]">
              <span className="text-zinc-600 font-bold tracking-[0.2em] uppercase">SLICERS:</span>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-zinc-400 font-bold tracking-widest uppercase">
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default"><div className="w-1 h-1 rounded-full bg-[#C8FF00]"></div> BAMBU STUDIO</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default"><div className="w-1 h-1 rounded-full bg-[#C8FF00]"></div> CURA</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default"><div className="w-1 h-1 rounded-full bg-[#C8FF00]"></div> PRUSASLICER</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default"><div className="w-1 h-1 rounded-full bg-[#C8FF00]"></div> LYCHEE</span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="w-full bg-[#070707] py-24 px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Stars Badge */}
            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-zinc-800 rounded-full px-4 py-2 mb-12">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-[#C8FF00] text-[#C8FF00]" />
                ))}
              </div>
              <span className="text-zinc-300 text-xs font-bold ml-1 text-center">4.9/5 estrelas (2.4k+ Makers)</span>
            </div>

            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-['Montserrat'] italic uppercase tracking-tight text-center mb-16 max-w-4xl leading-[1.1]">
              POR QUE O <span className="text-[#C8FF00]">PRIME STL</span> É<br className="hidden md:block"/> DIFERENTE DE TUDO?
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Card 1 */}
              <div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-[2rem] p-10 flex flex-col items-center text-center hover:border-zinc-700 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#C8FF00]/10 flex items-center justify-center mb-6 border border-[#C8FF00]/10 text-[#C8FF00]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-black font-['Montserrat'] italic uppercase tracking-tight mb-4">
                  100.000+ ARQUIVOS STL PREMIUM
                </h3>
                <p className="text-zinc-400 font-medium text-sm md:text-base leading-relaxed">
                  A maior biblioteca profissional de arquivos STL para impressão 3D do Brasil.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-[2rem] p-10 flex flex-col items-center text-center hover:border-zinc-700 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#C8FF00]/10 flex items-center justify-center mb-6 border border-[#C8FF00]/10 text-[#C8FF00]">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-black font-['Montserrat'] italic uppercase tracking-tight mb-4">
                  QUALIDADE GARANTIDA
                </h3>
                <p className="text-zinc-400 font-medium text-sm md:text-base leading-relaxed">
                  Modelos STL testados, otimizados e organizados por nichos específicos.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-[2rem] p-10 flex flex-col items-center text-center hover:border-zinc-700 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#C8FF00]/10 flex items-center justify-center mb-6 border border-[#C8FF00]/10 text-[#C8FF00]">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-black font-['Montserrat'] italic uppercase tracking-tight mb-4">
                  ORGANIZAÇÃO PREMIUM
                </h3>
                <p className="text-zinc-400 font-medium text-sm md:text-base leading-relaxed">
                  Biblioteca STL otimizada para makers. Ache qualquer miniatura 3D em segundos.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#0a0a0a] border border-zinc-800/60 rounded-[2rem] p-10 flex flex-col items-center text-center hover:border-zinc-700 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#C8FF00]/10 flex items-center justify-center mb-6 border border-[#C8FF00]/10 text-[#C8FF00]">
                  <BadgeDollarSign className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-black font-['Montserrat'] italic uppercase tracking-tight mb-4">
                  LUCRO REAL
                </h3>
                <p className="text-zinc-400 font-medium text-sm md:text-base leading-relaxed">
                  Arquivos STL validados que já geram vendas na Shopee, OLX, Instagram e marketplaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IDEAL FOR SECTION */}
        <div className="w-full bg-[#050505] py-24 px-4 border-t border-zinc-900 border-opacity-50">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-['Montserrat'] italic uppercase tracking-tight text-center mb-16 leading-[1.1]">
              <span className="text-white">ESTE PACK É</span><br />
              <span className="text-[#C8FF00]">IDEAL PARA:</span>
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-16">
              {[
                "MAKERS",
                "DONOS DE IMPRESSORA 3D",
                "HOBBYISTAS",
                "QUEM VENDE NA SHOPEE",
                "MAKERS INICIANTES",
                "COLECIONADORES",
                "LOJAS GEEK",
                "IMPRESSÃO SOB DEMANDA"
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-5 flex items-center gap-4 hover:border-zinc-700 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#C8FF00] border-black bg-transparent" />
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            {/* Footer Text */}
            <div className="w-full flex items-center justify-center relative">
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
              <p className="text-zinc-500 italic font-medium text-sm sm:text-base text-center max-w-2xl px-6 bg-[#050505] relative z-10 font-['Inter']">
                "Seja para hobby, coleção ou lucro, o Prime STL entrega um acervo profissional pronto para imprimir."
              </p>
            </div>
          </div>
        </div>

        {/* PLATFORM MOCKUP SECTION */}
        <div className="w-full bg-[#070707] py-24 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            {/* Header Badge */}
            <div className="flex items-center gap-2 border border-[#C8FF00]/20 bg-[#C8FF00]/5 text-[#C8FF00] rounded-full px-4 py-2 mb-8 shadow-[0_0_15px_rgba(200,255,0,0.05)]">
              <Monitor className="w-4 h-4" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">EXPERIÊNCIA DO USUÁRIO</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-['Montserrat'] italic uppercase tracking-tight text-center mb-6 leading-none">
              <span className="text-white">VEJA A </span><span className="text-[#C8FF00]">PLATAFORMA</span><br />
              <span className="text-white">POR DENTRO</span>
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-400 font-medium text-base md:text-lg text-center max-w-2xl mb-16 leading-relaxed">
              Uma interface intuitiva, rápida e organizada para você encontrar o que precisa em segundos. O Netflix dos arquivos STL.
            </p>

            {/* Mockup Container */}
            <div className="relative w-full max-w-5xl">
              
              {/* Macbook Frame Mockup */}
              <div className="w-full bg-zinc-900 rounded-t-3xl sm:rounded-t-[2.5rem] border-t border-x border-zinc-800/80 p-2 sm:p-4 pb-0 shadow-2xl relative z-10">
                {/* Macbook Header Bar */}
                <div className="flex items-center justify-between px-4 py-2 mb-2 sm:mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  {/* Fake webcam / notch */}
                  <div className="w-16 h-4 bg-black rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 hidden sm:block"></div>
                </div>

                {/* Screen Content Wrapper */}
                <div className="relative w-full aspect-[16/10] bg-black rounded-t-xl sm:rounded-t-2xl overflow-hidden border-t border-x border-zinc-800">
                  {platformImages.map((imgSrc, idx) => (
                    <img 
                      key={idx}
                      src={imgSrc} 
                      alt={`Plataforma preview ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${activePlatformImage === idx ? 'opacity-100 ring-1 ring-white/10' : 'opacity-0'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Macbook Base */}
              <div className="w-[105%] h-4 sm:h-8 bg-zinc-800 rounded-b-[3rem] -ml-[2.5%] relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-zinc-700/50 flex justify-center">
                <div className="w-32 h-2 sm:h-3 bg-zinc-900 mt-0 rounded-b-xl"></div>
              </div>

              {/* Floating Feature Popups */}
              <div className="absolute top-[30%] sm:top-[25%] -left-4 sm:-left-12 lg:-left-24 z-30 animate-[float_4s_ease-in-out_infinite_reverse]">
                <div className="bg-[#111] border border-zinc-800 rounded-2xl p-4 flex items-center gap-4 shadow-2xl backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-[#C8FF00] flex items-center justify-center text-black flex-shrink-0">
                    <Search className="w-6 h-6" />
                  </div>
                  <div className="hidden sm:block">
                    <h4 className="text-white font-black font-['Montserrat'] uppercase italic text-sm tracking-tight leading-none mb-1">BUSCA INTELIGENTE</h4>
                    <p className="text-zinc-500 text-xs font-medium">Ache por nicho ou nome</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[20%] sm:bottom-[30%] -right-4 sm:-right-12 lg:-right-24 z-30 animate-[float_5s_ease-in-out_infinite]">
                <div className="bg-[#111] border border-zinc-800 rounded-2xl p-4 flex items-center gap-4 shadow-2xl backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-[#C8FF00] flex items-center justify-center text-black flex-shrink-0">
                    <Zap className="w-6 h-6 fill-black" />
                  </div>
                  <div className="hidden sm:block">
                    <h4 className="text-white font-black font-['Montserrat'] uppercase italic text-sm tracking-tight leading-none mb-1">DOWNLOAD 1-CLICK</h4>
                    <p className="text-zinc-500 text-xs font-medium">Sem protetores de link</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination dots for the mockup */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <div className={`h-1.5 rounded-full transition-all duration-300 ${activePlatformImage === 0 ? 'w-8 bg-[#C8FF00]' : 'w-2 bg-zinc-700'}`}></div>
              <div className={`h-1.5 rounded-full transition-all duration-300 ${activePlatformImage === 1 ? 'w-8 bg-[#C8FF00]' : 'w-2 bg-zinc-700'}`}></div>
            </div>
            
          </div>
        </div>

        {/* SECOND CAROUSEL SECTION */}
        <div className="w-full bg-[#050505] py-24 relative overflow-hidden border-t border-zinc-900 border-opacity-50">
          <div className="flex flex-col items-center text-center px-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-['Montserrat'] italic uppercase tracking-tight text-white leading-[1.1] mb-4">
              TUDO O QUE VOCÊ VAI<br />
              <span className="text-[#C8FF00]">RECEBER HOJE:</span>
            </h2>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-500 tracking-[0.3em] uppercase max-w-2xl px-4 text-center">
              ANIMES, DESENHOS, RELIGIÃO, MITOLOGIA, DECORAÇÃO E +100.000 MODELOS
            </h3>
          </div>

          <div 
            ref={secondCarouselRef}
            className="hide-scrollbar flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory pb-8 w-full px-[max(1rem,7.5vw)] md:px-[max(1rem,calc(50vw-200px))]"
            onScroll={handleSecondScroll}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {secondCategories.map((cat, idx) => (
              <div key={idx} className="min-w-[280px] md:min-w-[400px] w-[85vw] md:w-[400px] aspect-[4/5] flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden relative group cursor-pointer border border-zinc-800/80 hover:border-[#C8FF00]/50 transition-colors duration-500">
                <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-95 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-10 left-8 right-8 text-left">
                  <span className="inline-block bg-[#C8FF00]/10 text-[#C8FF00] border border-[#C8FF00]/20 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-3 backdrop-blur-sm shadow-[0_0_15px_rgba(200,255,0,0.1)] transition-transform group-hover:-translate-y-1">
                    {cat.badge}
                  </span>
                  <h4 className="text-2xl sm:text-3xl md:text-3xl text-white font-black italic font-['Montserrat'] uppercase tracking-tight transition-transform group-hover:-translate-y-1" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
                    {cat.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Dots & Counter */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center gap-2">
              {secondCategories.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1 rounded-full transition-all duration-300 ${activeSecondCategory === idx ? 'w-8 bg-[#C8FF00] shadow-[0_0_10px_#C8FF00]' : 'w-1.5 bg-zinc-700'}`}
                />
              ))}
            </div>
            <div className="text-zinc-600 font-bold text-xs ml-6 tracking-widest">
              <span className="text-white">{activeSecondCategory + 1}</span> / {secondCategories.length}
            </div>
          </div>
        </div>

        {/* PROFESSIONAL TOOLS SECTION */}
        <div className="w-full bg-[#070707] py-24 px-4 overflow-hidden border-t border-zinc-900 border-opacity-50">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            {/* Header Badge */}
            <div className="flex items-center gap-2 border border-[#C8FF00]/20 bg-[#C8FF00]/10 text-[#C8FF00] rounded-full px-4 py-2 mb-8 shadow-[0_0_15px_rgba(200,255,0,0.05)]">
              <Zap className="w-3.5 h-3.5 fill-[#C8FF00] text-[#C8FF00]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">ECOSSISTEMA PROFISSIONAL</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-['Montserrat'] italic uppercase tracking-tight text-center mb-6 leading-[1.05] max-w-4xl">
              <span className="text-white">🔥 FERRAMENTAS EXCLUSIVAS <br className="hidden md:block" /> PARA </span>
              <span className="text-[#C8FF00]">MAKERS PROFISSIONAIS</span>
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-400 font-medium text-base md:text-lg text-center max-w-3xl mb-16 leading-relaxed">
              Além de mais de 100 mil arquivos STL premium, você recebe ferramentas criadas para ajudar makers a calcular lucro, organizar custos e vender mais.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mb-24">
              
              {/* Card 1 */}
              <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-[2rem] overflow-hidden flex flex-col group transition-colors hover:border-zinc-700/80">
                <div className="p-8 sm:p-10 pb-0 flex-grow flex flex-col items-start">
                  <div className="bg-[#C8FF00] text-black text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 z-10 shadow-[0_0_15px_rgba(200,255,0,0.2)] inline-flex items-center gap-1.5">
                    🔥 FERRAMENTA EXCLUSIVA
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-['Montserrat'] italic uppercase tracking-tight text-white mb-4 leading-[1.15]">
                    📈 CALCULADORA DE<br/> LUCRO MAKER
                  </h3>
                  <p className="text-zinc-400 font-medium text-sm sm:text-base leading-relaxed max-w-xs mb-8">
                    Calcule automaticamente custo de produção, margem e preço ideal de venda.
                  </p>
                </div>
                <div className="px-6 pb-6 pt-0 mt-auto">
                  <div className="rounded-xl overflow-hidden border border-zinc-800/50 shadow-2xl relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none opacity-80"></div>
                    <img src="https://primestl.vercel.app/assets/tool-calculadora-k50AV5Xp.png" alt="Calculadora STL" className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-zinc-950/50 border border-zinc-800/80 rounded-[2rem] overflow-hidden flex flex-col group transition-colors hover:border-zinc-700/80">
                <div className="p-8 sm:p-10 pb-0 flex-grow flex flex-col items-start">
                  <div className="bg-[#C8FF00] text-black text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 z-10 shadow-[0_0_15px_rgba(200,255,0,0.2)] inline-flex items-center gap-1.5">
                    🚀 BÔNUS INCLUSO
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-['Montserrat'] italic uppercase tracking-tight text-white mb-4 leading-[1.15]">
                    💰 PLANILHA PROFISSIONAL<br/> PARA MAKERS
                  </h3>
                  <p className="text-zinc-400 font-medium text-sm sm:text-base leading-relaxed max-w-xs mb-8">
                    Organize vendas, custos, lucro e pedidos da Shopee em um só lugar.
                  </p>
                </div>
                <div className="px-6 pb-6 pt-0 mt-auto">
                  <div className="rounded-xl overflow-hidden border border-zinc-800/50 shadow-2xl relative">
                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none opacity-80"></div>
                    <img src="https://primestl.vercel.app/assets/tool-planilha-C9HZCC89.png" alt="Planilha de Lucro" className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Text & CTA */}
            <div className="flex flex-col items-center w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black font-['Montserrat'] italic text-zinc-400 text-center mb-8 tracking-tight">
                <span className="text-zinc-500">"TORNE SUA IMPRESSÃO 3D UM</span> <span className="text-white relative inline-block">NEGÓCIO PROFISSIONAL.<div className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-[3px] bg-[#C8FF00]/50 rounded-full"></div></span><span className="text-zinc-500">"</span>
              </h3>

              <a href="#pricing" className="w-full sm:max-w-md bg-[#C8FF00] hover:bg-[#b0e600] text-black py-4 sm:py-5 rounded-xl font-bold font-['Inter'] text-sm sm:text-base md:text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(200,255,0,0.2)] hover:shadow-[0_0_60px_rgba(200,255,0,0.4)] flex justify-center items-center gap-2 sm:gap-3 text-center px-4">
                🔥 QUERO ACESSO COMPLETO <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* BONUS SECTION */}
        <div className="w-full bg-[#050505] py-24 px-4 overflow-hidden border-t border-zinc-900 border-opacity-50">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            {/* Header Badge */}
            <div className="flex items-center gap-2 border border-[#C8FF00]/20 bg-[#C8FF00]/10 text-[#C8FF00] rounded-full px-4 py-2 mb-8 shadow-[0_0_15px_rgba(200,255,0,0.05)]">
              <Star className="w-3.5 h-3.5 fill-[#C8FF00] text-[#C8FF00]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">PRESENTES EXCLUSIVOS</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-['Montserrat'] italic uppercase tracking-tight text-center mb-6 leading-[1.05] max-w-4xl">
              <span className="text-white">🎁 <span className="text-[#C8FF00]">BÔNUS</span> QUE VOCÊ<br className="hidden md:block" /> LEVA DE GRAÇA HOJE</span>
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-400 font-medium text-base md:text-lg text-center max-w-2xl mb-16 leading-relaxed">
              Se você fosse comprar separadamente, pagaria mais de <span className="text-white font-bold">R$ 584,00</span>.<br/>Entrando agora, o custo é <span className="text-[#C8FF00] font-bold">ZERO</span>.
            </p>

            {/* Bonus Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-16">
              {[
                { 
                  num: "01", 
                  title: "PACK MARVEL & DC", 
                  desc: "Heróis em alta escala com detalhes ultra realistas para colecionadores.",
                  img: "https://primestl.vercel.app/assets/bonus-marvel-CbFJMGOs.jpg",
                  price: "147"
                },
                { 
                  num: "02", 
                  title: "COFRE DE ARTICULADOS", 
                  desc: "O segredo para vendas rápidas em feiras e eventos. Sucesso garantido.",
                  img: "https://primestl.vercel.app/assets/bonus-flexiveis-DQ0aiJtm.jpg",
                  price: "97"
                },
                { 
                  num: "03", 
                  title: "UTENSÍLIOS DOMÉSTICOS", 
                  desc: "Peças funcionais e inteligentes que resolvem problemas do dia a dia.",
                  img: "https://primestl.vercel.app/assets/bonus-utensilios-Cszzeqfz.jpg",
                  price: "89"
                },
                { 
                  num: "04", 
                  title: "COLEÇÃO AUTOMOTIVA", 
                  desc: "Veículos detalhados e icônicos para um público de alto poder aquisitivo.",
                  img: "https://primestl.vercel.app/assets/bonus-veiculos-B9q5HYgH.jpg",
                  price: "127"
                },
                { 
                  num: "05", 
                  title: "ESPECIAL CHAVEIROS", 
                  desc: "Os campeões de lucro com baixíssimo consumo de material e alta saída.",
                  img: "https://primestl.vercel.app/assets/bonus-chaveiros-fJXOlQM9.jpg",
                  price: "57"
                },
                { 
                  num: "06", 
                  title: "MUNDO MINECRAFT", 
                  desc: "A febre que nunca passa. O nicho mais lucrativo para o público infantil.",
                  img: "https://primestl.vercel.app/assets/bonus-minecraft-BJCvbHUw.png",
                  price: "67"
                }
              ].map((bonus, idx) => (
                <div key={idx} className="bg-zinc-950/40 border border-zinc-800/60 rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/40">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <div className="absolute top-4 left-4 bg-[#C8FF00] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full z-10 shadow-[0_0_15px_rgba(200,255,0,0.2)]">
                      BÔNUS {bonus.num}
                    </div>
                    <img src={bonus.img} alt={bonus.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 flex flex-col items-end">
                      <span className="text-zinc-400 text-[10px] line-through font-bold">R$ {bonus.price}</span>
                      <span className="bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-[#C8FF00] text-xs font-black px-2 py-0.5 rounded shadow-[0_0_10px_rgba(200,255,0,0.1)]">GRÁTIS</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-black font-['Montserrat'] italic uppercase tracking-tight text-white mb-3 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#C8FF00] mt-0.5 flex-shrink-0" /> {bonus.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {bonus.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Economy Banner */}
            <div className="w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden group">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#C8FF00]/50 to-transparent"></div>
              <h4 className="text-zinc-500 font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-4">ECONOMIA TOTAL GARANTIDA</h4>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black font-['Montserrat'] italic uppercase text-white mb-3">
                VOCÊ ESTÁ ECONOMIZANDO <span className="text-[#C8FF00]">R$ 584,00</span> SÓ EM BÔNUS
              </p>
              <p className="text-zinc-400 text-sm">
                Tudo isso será liberado instantaneamente na plataforma stl
              </p>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS SECTION */}
        <div className="w-full bg-[#070707] py-24 relative overflow-hidden border-t border-zinc-900 border-opacity-50">
          <div className="flex flex-col items-center text-center px-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-['Montserrat'] italic uppercase tracking-tight text-white leading-[1.1] mb-6">
              QUEM USA,<br />
              <span className="text-[#C8FF00]">RECOMENDA</span>
            </h2>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-500 tracking-[0.2em] uppercase max-w-2xl px-4 text-center">
              RESULTADOS REAIS DE QUEM JÁ ESTÁ LUCRANDO COM O PRIME STL
            </h3>
          </div>

          <div 
            ref={testimonialCarouselRef}
            className="hide-scrollbar flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory pb-8 w-full px-[max(1rem,12.5vw)] md:px-[max(1rem,calc(50vw-160px))]"
            onScroll={handleTestimonialScroll}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none'
            }}
          >
            {testimonials.map((imgSrc, idx) => (
              <div key={idx} className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] w-[75vw] sm:w-[280px] md:w-[320px] aspect-[9/19] flex-shrink-0 snap-center rounded-[2rem] overflow-hidden relative group border-[6px] border-zinc-900 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <img src={imgSrc} alt={`Depoimento ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none z-10"></div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'w-8 bg-[#C8FF00] shadow-[0_0_10px_#C8FF00]' : 'w-2 bg-zinc-700'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* PRICING SECTION */}
        <div id="pricing" className="w-full bg-[#050505] py-24 relative overflow-hidden border-t border-zinc-900 border-opacity-50">
          <div className="flex flex-col items-center text-center px-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-['Montserrat'] italic uppercase tracking-tight text-white leading-[1.1] mb-6">
              QUAL NÍVEL VOCÊ QUER<br />
              <span className="text-[#C8FF00]">ALCANÇAR HOJE?</span>
            </h2>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-500 tracking-[0.2em] uppercase max-w-2xl px-4 text-center">
              ACESSO IMEDIATO APÓS A CONFIRMAÇÃO DO PAGAMENTO
            </h3>
          </div>

          <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            {/* Basic Plan */}
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-[2rem] p-8 md:p-10 flex flex-col pt-12 relative group transition-colors hover:border-zinc-700">
              <h3 className="text-2xl font-black font-['Montserrat'] italic uppercase tracking-tight text-white mb-8 text-center">
                PACOTE BÁSICO
              </h3>

              <div className="flex-grow space-y-4 mb-12 text-sm text-zinc-300 font-medium">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" />
                  <span>Biblioteca Essencial (Curadoria Básica)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" />
                  <span>Acesso por 1 Ano</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" />
                  <span>Download Digital Imediato</span>
                </div>
                <div className="flex items-start gap-3 opacity-40">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="line-through decoration-zinc-600">Licença Comercial Vitalícia</span>
                </div>
              </div>

              <div className="text-center mt-auto">
                <div className="text-red-500 font-bold italic line-through mb-1 text-sm">De R$ 189,90</div>
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">POR APENAS:</div>
                <div className="text-5xl font-black font-['Montserrat'] italic text-white mb-6">
                  R$19,90
                </div>
                <a href="https://pay.wiapy.com/jN6XSncytm" target="_blank" rel="noopener noreferrer" className="w-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors duration-3000 font-bold text-sm px-6 py-4 rounded-full flex items-center justify-center gap-2">
                  ESCOLHER O BÁSICO <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-[#050510] border border-[#C8FF00] rounded-[2rem] p-8 md:p-10 flex flex-col relative shadow-[0_0_50px_rgba(200,255,0,0.05)] transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8FF00] text-black text-[10px] sm:text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-[0_0_20px_rgba(200,255,0,0.3)] flex items-center gap-1.5 whitespace-nowrap">
                <Zap className="w-3.5 h-3.5 fill-black" /> MAIS VENDIDO
              </div>
              
              <h3 className="text-3xl font-black font-['Montserrat'] italic uppercase tracking-tight text-white mt-4 mb-2 text-center flex flex-col items-center">
                PACOTE <span className="text-[#C8FF00]">PREMIUM</span>
              </h3>
              <div className="flex justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8FF00] text-[#C8FF00]" />
                ))}
              </div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center mb-10">4,98 (5.286 AVALIAÇÕES)</p>

              <div className="flex-grow space-y-4 mb-10 text-sm text-white font-medium">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] fill-[#C8FF00]/10 mt-0.5 flex-shrink-0" />
                  <span>Acesso Vitalício (Pague uma vez)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] fill-[#C8FF00]/10 mt-0.5 flex-shrink-0" />
                  <span>+100.000 Arquivos STL de Elite</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] fill-[#C8FF00]/10 mt-0.5 flex-shrink-0" />
                  <span>Licença Comercial Inclusa</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] fill-[#C8FF00]/10 mt-0.5 flex-shrink-0" />
                  <span>Pack Marvel & DC Premium</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] fill-[#C8FF00]/10 mt-0.5 flex-shrink-0" />
                  <span>Cofre de Articulados 3D</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] fill-[#C8FF00]/10 mt-0.5 flex-shrink-0" />
                  <span>Utensílios Domésticos STL</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] fill-[#C8FF00]/10 mt-0.5 flex-shrink-0" />
                  <span>Coleção Automotiva Detalhada</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] fill-[#C8FF00]/10 mt-0.5 flex-shrink-0" />
                  <span>Especial Chaveiros Lucrativos</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] fill-[#C8FF00]/10 mt-0.5 flex-shrink-0" />
                  <span>Mundo Minecraft STL</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C8FF00] fill-[#C8FF00]/10 mt-0.5 flex-shrink-0" />
                  <span>Suporte VIP Prioritário</span>
                </div>
              </div>

              <div className="text-center mt-auto">
                <div className="text-red-500 font-bold italic line-through mb-1 text-sm">De R$ 489,90</div>
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">POR APENAS:</div>
                <div className="text-6xl sm:text-7xl font-black font-['Montserrat'] italic text-[#C8FF00] mb-8 drop-shadow-[0_0_20px_rgba(200,255,0,0.4)]">
                  R$47,90
                </div>
                <a href="https://pay.wiapy.com/9smInoNIc" target="_blank" rel="noopener noreferrer" className="w-full bg-[#C8FF00] hover:bg-[#b3e600] text-black transition-all duration-300 font-black text-sm px-6 py-6 rounded-3xl flex items-center justify-between shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:shadow-[0_0_40px_rgba(200,255,0,0.5)] hover:-translate-y-1 mb-8 group">
                  <div className="text-left leading-tight">
                    <span className="block text-lg italic uppercase">QUERO ESSA<br/>SUPER<br/>OFERTA!</span>
                    <span className="block text-[9px] sm:text-[10px] mt-2 opacity-80 uppercase tracking-wider font-bold">ACESSO IMEDIATO E<br/>VITALÍCIO</span>
                  </div>
                  <div className="bg-black text-[#C8FF00] p-3 rounded-full group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-4 text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-6 border-b border-zinc-800 pb-6">
                  <div className="flex items-center justify-center gap-1.5"><Zap className="w-3 h-3 text-[#C8FF00]" /> ACESSO IMEDIATO</div>
                  <div className="flex items-center justify-center gap-1.5"><Download className="w-3 h-3 text-[#C8FF00]" /> DOWNLOAD DIGITAL</div>
                  <div className="col-span-2 flex items-center justify-center gap-1.5"><Infinity className="w-3 h-3 text-[#C8FF00]" /> ACESSO VITALÍCIO</div>
                </div>

                <div className="flex justify-between items-center px-2">
                  <div className="flex flex-col items-center gap-1">
                    <Lock className="w-5 h-5 text-zinc-600" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-zinc-500 uppercase text-center leading-tight">COMPRA<br/>SEGURA</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="w-5 h-5 text-[#C8FF00]/70" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-zinc-500 uppercase text-center leading-tight">SATISFAÇÃO<br/>GARANTIDA</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <CheckCircle className="w-5 h-5 text-zinc-600" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-zinc-500 uppercase text-center leading-tight">PRIVACIDADE<br/>PROTEGIDA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GUARANTEE SECTION */}
        <div className="w-full bg-[#030303] py-24 relative overflow-hidden border-t border-zinc-900 border-opacity-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-zinc-950/40 border border-zinc-800/60 rounded-[2rem] p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#C8FF00] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>
              
              <div className="w-20 h-20 bg-[#C8FF00] rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(200,255,0,0.3)]">
                <ShieldCheck className="w-10 h-10 text-black" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black font-['Montserrat'] italic uppercase tracking-tight text-white leading-[1.1] mb-6">
                GARANTIA BLINDADA DE <span className="text-[#C8FF00]">14 DIAS</span>
              </h2>
              
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
                O seu risco é <span className="text-white font-bold">ZERO</span>. Se por qualquer motivo você não ficar satisfeito com a qualidade dos nossos arquivos, basta nos enviar um único e-mail e devolveremos 100% do seu investimento. Sem perguntas, sem letras miúdas.
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> SATISFAÇÃO GARANTIDA
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> REEMBOLSO FACILITADO
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div> COMPRA 100% SEGURA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="w-full bg-[#050505] py-24 relative overflow-hidden border-t border-zinc-900 border-opacity-50">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-['Montserrat'] italic uppercase tracking-tight text-white leading-[1.1] text-center mb-6">
              DÚVIDAS<br />
              <span className="text-[#C8FF00]">FREQUENTES</span>
            </h2>
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-500 tracking-[0.2em] uppercase text-center mb-16">
              TUDO O QUE VOCÊ PRECISA SABER ANTES DE ENTRAR PARA A ELITE
            </h3>
            
            <div className="w-full max-w-3xl space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border ${openFaqIndex === index ? 'border-zinc-700 bg-zinc-900/30' : 'border-zinc-800/80 bg-zinc-950'} rounded-2xl overflow-hidden transition-all duration-300 w-full`}
                >
                  <button 
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between focus:outline-none group text-left"
                  >
                    <span className="font-bold text-sm sm:text-base text-zinc-100 pr-8 italic uppercase tracking-tight group-hover:text-white transition-colors">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-[#C8FF00]' : ''}`} />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="px-6 pb-6 pt-2 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 mt-2">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="w-full bg-[#030303] py-16 border-t border-zinc-900/50 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-600 uppercase mb-4">
              © 2026 PRIME STL — O MAIOR ACERVO PROFISSIONAL DO BRASIL
            </p>
            <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.1em] text-zinc-700 uppercase">
              ARQUIVOS STL ORGANIZADOS POR NICHO • BIBLIOTECA OTIMIZADA PARA MAKERS
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}
