"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    id: "title",
    title: "YAGONA KOMPLAYENS EKOTIZIMI",
    subtitle: "DAVLAT BYUDJETI NAZORATINING PROAKTIV RAQAMLI SHLYUZI",
    content: "Reaktiv post-auditdan — real vaqt rejimidagi 'Zero-Trust' (Hech kimga ishonma) algoritmik adolatiga o'tish.",
    team: "WebLeaders Jamoasi",
    members: "Diyorbek Abdulhamidov (Frontend / Arxitektura) • Og'abek Husanov (Backend / API Gateway)"
  },
  {
    id: "problem",
    title: "MUAMMO: REAKTIV NAZORAT VA SILOS EFFEKTI",
    subtitle: "Milliardlab mablag'lar o'zlashtirilgandan keyingina aniqlanmoqda",
    points: [
      { t: "Idoraviy Izolyatsiya (Silos)", d: "Moliya tizimlari (UzASBO) va Kadrlar portallari boshqa davlat bazalaridan (Soliq, FHDYo, MIB, Kadastr, DXX) uzilgan holda ishlaydi. Avtomatlashgan ma'lumot almashinuvi yo'q." },
      { t: "Inson Omiliga Asoslanganlik", d: "Tranzaksiyalarni faqat hujjatga qarab vizual tekshirish va E-imzo bosish jarayoni amaldorlarga korrupsion kelishuvlar uchun ochiq 'darvoza' bo'lib xizmat qilmoqda." },
      { t: "Fantom Firmalar & O'lik Jonlar", d: "Hozirgi zaiflik sababli byudjet pullari kecha ochilgan '1 kunlik' obnal firmalarga yuvilmoqda yoki chet elda yurgan shaxslar (o'lik jonlar) nomiga ish haqi yozilmoqda." }
    ]
  },
  {
    id: "architecture",
    title: "TEXNIK YECHIM: PROAKTIV API GATEWAY",
    subtitle: "Jinoyatni u sodir bo'layotgan millisoniyada havoda to'xtatish",
    content: "Biz navbatdagi qanaqadir hisobot saytini yaratmadik. YKAT — bu mavjud davlat portallariga (UzASBO, ERP) 'Plug-and-Play' usulida o'rnatiladigan markaziy 'Middleware' qatlami.",
    process: [
      { step: "1. INTERSEPTSIYA", desc: "Amaldor hujjatni tasdiqlab, E-imzo bosgan soniyada API Gateway tranzaksiyani oraliq muhitda tutib qoladi." },
      { step: "2. KROSS-AUDIT", desc: "Asinxron Promise.all orqali Soliq, Kadastr va FHDYo bazalariga bir vaqtning o'zida parallel so'rov ketadi." },
      { step: "3. ALGORITMIK HUKM", desc: "Korrupsion xavf (Red Flag) aniqlansa, operatsiya bloklanadi va Antikorrupsiya reyestriga Immutable Xesh yoziladi." }
    ]
  },
  {
    id: "modules",
    title: "INTEGRATSIYA VA NAZORAT MODULLARI",
    subtitle: "Amaliyotdagi aniq yechimlar va xavf blokatorlari",
    grid: [
      { title: "Moliya / Xaridlar (UzASBO)", desc: "Pudratchining soliq aylanmasi, ustav fondi va ro'yxatdan o'tgan sanasi kross-chek qilinadi. 'Fantom' va soliqdan qarzi bor firmalarga tranzaksiya bloklanadi.", icon: "💰" },
      { title: "Ta'lim (Maktab ERP)", desc: "Xodimni ishga olish buyrug'ida nomzodning JSHSHIR'i DXX Chegara va FHDYo orqali tekshiriladi. Xorijda yurgan 'o'lik jonlar' shtati bekor qilinadi.", icon: "👨‍🏫" },
      { title: "Ijtimoiy Himoya", desc: "Moddiy yordam ajratishda Kadastr va YHXX bazasi avtomatik tekshiriladi. Uyi va qimmatbaho mashinasi bor fuqarolarga subsidiya ajratish to'xtatiladi.", icon: "🏠" },
      { title: "Tibbiyot (UzMED)", desc: "Qimmatbaho byudjet dorilari hisobdan chiqarilayotganda, bemorlar ro'yxati (Extract ID) FHDYo o'lim dalolatnomalari bazasi bilan solishtiriladi.", icon: "🏥" }
    ]
  },
  {
    id: "tech_specs",
    title: "TEXNIK PARAMETRLAR VA XAVFSIZLIK",
    subtitle: "Highload, Ma'lumotlar Suvereniteti va Supratezlik",
    stats: [
      { l: "Tezlik Limitlari", v: "12 ms", d: "Asinxron Node.js + Parallelizatsiya. Asosiy davlat portali operatsiyalari umuman qotib qolmaydi." },
      { l: "Highload Kesh", v: "Redis", d: "Davlat bazalariga tushadigan ortiqcha yuklamani va DDOS effektini oldini oluvchi Data Caching." },
      { l: "Infratuzilma", v: "G-Cloud", d: "Loyihamiz UZINFOCOM yopiq serverlari va mutlaq izolyatsiyalangan Docker konteynerlarida yashaydi." },
      { l: "Kiberxavfsizlik", v: "GovNet", d: "Ochiq internetga chiqmaydigan, yopiq va shifrlangan hukumat tarmog'idagi ma'lumotlar almashinuvi." }
    ]
  }
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => { if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1); };
  const prevSlide = () => { if (currentSlide > 0) setCurrentSlide(currentSlide - 1); };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white relative print:bg-[#020617]">

      {/* GLOBAL CSS FOR EXACT PRINTING */}
      <style jsx global>{`
        @media print {
          @page {
            size: 1920px 1080px; /* Landscape format */
            margin: 0;
          }
          html, body {
            width: 1920px !important;
            height: 1080px !important;
            background-color: #020617 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-slide {
            page-break-after: always !important;
            break-inside: avoid !important;
            width: 1920px !important;
            height: 1080px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            position: relative !important;
            overflow: hidden !important;
          }
        }
      `}</style>

      {/* Background Decor (Ekranda va PDFda ko'rinadi) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0f172a_0%,_#020617_80%)]"></div>
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      </div>

      {/* Header (Faqat ekranda ko'rinadi) */}
      <header className="fixed top-0 w-full p-6 lg:px-12 flex justify-between items-center z-50 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md print:hidden">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-900 rounded border border-blue-500/50 flex items-center justify-center font-black shadow-[0_0_15px_rgba(37,99,235,0.3)]">W</div>
          <div>
            <span className="block font-black tracking-widest text-[11px] uppercase">WebLeaders</span>
            <span className="block font-mono text-[9px] text-blue-400">Anti-Corruption Hackathon</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={() => window.print()} className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-lg transition-all flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
            PDF qilib saqlash
          </button>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="font-mono text-[10px] text-slate-400 uppercase hidden md:block">Live Mode</span>
        </div>
      </header>

      {/* ASOSIY QISM: Map orqali hamma slaydlarni chizamiz */}
      <main className="relative z-10 print:block">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`
              print-slide px-8 lg:px-24 py-12
              ${index === currentSlide ? 'flex h-screen flex-col justify-center animate-in fade-in slide-in-from-right-8 duration-500 fill-mode-forwards' : 'hidden print:flex'}
            `}
          >
            <div className="w-full max-w-[1400px] mx-auto z-20">
              <h2 className="text-blue-500 font-mono text-sm md:text-base tracking-[0.2em] mb-4 uppercase border-l-2 border-blue-500 pl-3 drop-shadow-md">
                {slide.subtitle}
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-12 tracking-tight leading-[1.1] uppercase drop-shadow-lg">
                {slide.title.split(':').map((part, i) => (
                  <span key={i} className={i === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block mt-2' : ''}>{part}{i === 0 && slide.title.includes(':') ? ':' : ''}</span>
                ))}
              </h1>

              {/* Title Slide */}
              {slide.id === 'title' && (
                <div className="space-y-12">
                  <p className="text-2xl md:text-4xl text-slate-300 max-w-5xl font-light border-l-4 border-slate-700 pl-6 leading-relaxed">
                    "{slide.content}"
                  </p>
                  <div className="pt-16 flex gap-16">
                    <div>
                      <p className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-widest bg-blue-900/20 inline-block px-3 py-1 rounded border border-blue-800/30">Jamoa Nomi</p>
                      <p className="text-white text-3xl font-bold">{slide.team}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-widest bg-emerald-900/20 inline-block px-3 py-1 rounded border border-emerald-800/30">Dasturchilar</p>
                      <p className="text-slate-300 text-2xl font-mono">{slide.members}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Problem Slide */}
              {slide.points && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {slide.points.map((p, i) => (
                    <div key={i} className="p-10 bg-[#0a0f1c]/90 border border-red-900/40 rounded-xl shadow-[0_10px_30px_rgba(220,38,38,0.1)] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-red-600"></div>
                      <div className="w-12 h-12 bg-red-950/50 rounded flex items-center justify-center text-red-500 mb-6 font-mono text-lg border border-red-900">0{i + 1}</div>
                      <h3 className="text-white font-bold mb-4 text-2xl">{p.t}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed text-justify">{p.d}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Specs Slide */}
              {slide.stats && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {slide.stats.map((s, i) => (
                    <div key={i} className="p-10 border border-blue-900/40 bg-[#0a0f1c]/90 rounded-xl relative overflow-hidden shadow-[0_10px_30px_rgba(37,99,235,0.1)]">
                      <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
                      <div className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">{s.v}</div>
                      <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-5 bg-blue-900/30 inline-block px-3 py-1.5 rounded border border-blue-800/50">{s.l}</div>
                      <p className="text-slate-300 text-base leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Architecture Process Slide */}
              {slide.process && (
                <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center mt-12">
                  {slide.process.map((step, i) => (
                    <div key={i} className="flex-1 flex flex-col lg:flex-row items-center gap-6">
                      <div className="w-full bg-[#0a0f1c]/90 border border-cyan-900/60 p-8 rounded-xl shadow-[0_10px_30px_rgba(6,182,212,0.1)]">
                        <div className="text-cyan-400 font-black text-lg uppercase tracking-widest mb-4">{step.step}</div>
                        <div className="text-slate-200 text-lg leading-relaxed">{step.desc}</div>
                      </div>
                      {i < 2 && (
                        <div className="hidden lg:flex text-cyan-600 items-center justify-center">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Modules Grid Slide */}
              {slide.grid && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {slide.grid.map((g, i) => (
                    <div key={i} className="p-8 bg-[#0a0f1c]/90 border border-slate-700 rounded-xl flex gap-6 items-start shadow-xl">
                      <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-3xl border border-slate-600 flex-shrink-0 shadow-inner">
                        {g.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-3 uppercase tracking-wide text-xl">{g.title}</h3>
                        <p className="text-slate-300 text-lg leading-relaxed">{g.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </main>

      {/* Controls Footer (Faqat ekranda) */}
      <footer className="fixed bottom-0 w-full p-6 lg:px-12 flex justify-between items-center z-50 bg-gradient-to-t from-[#020617] to-transparent print:hidden">
        <div className="flex items-center gap-3 w-1/3">
          <div className="text-[10px] font-mono text-slate-500">0{currentSlide + 1}</div>
          <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden flex gap-1">
            {slides.map((_, i) => (
              <div key={i} className={`h-full flex-1 rounded-full transition-all duration-300 ${i <= currentSlide ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'bg-transparent'}`}></div>
            ))}
          </div>
          <div className="text-[10px] font-mono text-slate-500">0{slides.length}</div>
        </div>

        <div className="flex gap-4">
          <button onClick={prevSlide} disabled={currentSlide === 0} className="w-14 h-14 rounded-lg bg-[#0a0f1c] border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-all disabled:opacity-30 group shadow-lg">
            <svg className="w-6 h-6 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all disabled:opacity-30 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </footer>
    </div>
  );
}