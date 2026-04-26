"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: "title",
    title: "YAGONA KOMPLAYENS EKOTIZIMI",
    subtitle: "Davlat byudjeti nazorati va raqamli auditning yangi avlodi",
    content: "Qog'ozdagi qonunlarni raqamli kodga aylantiramiz!",
    team: "WebLeaders Jamoasi",
    members: "Diyorbek Abdulhamidov (Full Stack) & Og'abek Husanov (Backend)"
  },
  {
    id: "problem",
    title: "MUAMMO: REAKTIV NAZORAT",
    subtitle: "Mablag'lar o'g'irlab bo'lingach tekshiruv boshlanadi",
    points: [
      { t: "Idoraviy izolyatsiya", d: "Moliya tizimi (UzASBO) Soliq yoki MIB bazasini real vaqtda ko'rmaydi." },
      { t: "Inson omili", d: "Tranzaksiyalarni tasdiqlashda 'shaxsiy manfaat' va subyektiv yondashuv saqlanib qolmoqda." },
      { t: "Kechikkan reaksiya", d: "Audit pul o'zlashtirilgandan oylab keyin o'tkaziladi. Pul allaqachon yo'q bo'ladi." }
    ]
  },
  {
    id: "solution",
    title: "YECHIM: PROAKTIV SHLYUZ",
    subtitle: "Xavfni tranzaksiya soniyasidayoq bloklash",
    content: "Biz yangi sayt yaratmadik, biz mavjud barcha davlat portallari (UzASBO, ERP) uchun markaziy 'API Gateway' va 'SDK' qurdik.",
    process: ["Interseptsiya (Tutib qolish)", "Asinxron Kross-Audit", "Algoritmik Bloklash"]
  },
  {
    id: "tech",
    title: "TEXNIK MUKAMMALLIK",
    subtitle: "Highload va 12ms tezlik",
    stats: [
      { l: "Tezlik", v: "12ms", d: "Promise.all orqali parallel kross-chek" },
      { l: "Caching", v: "Redis", d: "Davlat bazalariga yuklamani nolga tushirish" },
      { l: "Security", v: "JWT/RSA", d: "Aylanib o'tib bo'lmaydigan shifrlash" }
    ]
  },
  {
    id: "security",
    title: "MA'LUMOTLAR SUVERENITETI",
    subtitle: "Xavfsizlik - bizning ustuvor vazifamiz",
    points: [
      { t: "G-Cloud Infratuzilmasi", d: "Loyiha faqat UZINFOCOM davlat bulutli serverlarida joylashadi." },
      { t: "GovNet Tarmog'i", d: "Ma'lumotlar almashinuvi yopiq hukumat tarmog'i ichida amalga oshiriladi." },
      { t: "Docker Isolation", d: "Har bir modul izolyatsiya qilingan konteynerlarda ishlaydi." }
    ]
  },
  {
    id: "impact",
    title: "IQTISODIY SAMARA",
    subtitle: "Trillionlab byudjet pullarini saqlab qolish",
    content: "Tizim inson omilini nolga tushiradi. Algoritm adolatli, u charchamaydi va u bilan 'kelishib' bo'lmaydi. Har bir bloklangan shubhali tranzaksiya — bu saqlab qolingan davlat mulkidir."
  }
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => { if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1); };
  const prevSlide = () => { if (currentSlide > 0) setCurrentSlide(currentSlide - 1); };

  // PDF skachat qilish (Print rejimida PDF tanlanadi)
  const downloadPDF = () => { window.print(); };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans overflow-hidden">

      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_transparent_70%)]"></div>
        <div className="absolute top-0 left-[50%] w-px h-full bg-blue-500/20"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full p-6 flex justify-between items-center z-50 print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">W</div>
          <span className="font-bold tracking-widest text-xs">WEBLEADERS / 2026</span>
        </div>
        <button
          onClick={downloadPDF}
          className="px-6 py-2 bg-white text-black font-bold text-[10px] rounded hover:bg-blue-50 transition-all uppercase tracking-widest"
        >
          PDF Yuklab olish
        </button>
      </header>

      {/* Main Slide Content */}
      <main className="relative z-10 h-screen flex items-center justify-center p-12 lg:p-24">
        <div className="w-full max-w-[1200px] animate-in fade-in slide-in-from-bottom-8 duration-700">

          {/* Slide Indicator */}
          <div className="mb-8 flex gap-2 print:hidden">
            {slides.map((_, i) => (
              <div key={i} className={`h-1 transition-all duration-500 ${i === currentSlide ? 'w-12 bg-blue-500' : 'w-4 bg-slate-800'}`}></div>
            ))}
          </div>

          {/* Dinamik Slaydlar Renderi */}
          <div className="print:block">
            <h2 className="text-blue-500 font-mono text-sm tracking-[0.3em] mb-4 uppercase">{slides[currentSlide].subtitle}</h2>
            <h1 className="text-5xl lg:text-7xl font-black mb-12 tracking-tight leading-none uppercase">
              {slides[currentSlide].title.split(':').map((part, i) => (
                <span key={i} className={i === 1 ? 'text-slate-500' : ''}>{part}</span>
              ))}
            </h1>

            {/* Slayd Turlari bo'yicha content */}
            {slides[currentSlide].id === 'title' && (
              <div className="space-y-12">
                <p className="text-2xl text-slate-400 max-w-3xl italic">"{slides[currentSlide].content}"</p>
                <div className="pt-12 border-t border-slate-800">
                  <p className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-widest">{slides[currentSlide].team}</p>
                  <p className="text-slate-500 text-lg">{slides[currentSlide].members}</p>
                </div>
              </div>
            )}

            {slides[currentSlide].points && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {slides[currentSlide].points.map((p, i) => (
                  <div key={i} className="p-8 bg-slate-900/50 border border-slate-800 rounded-xl">
                    <h3 className="text-white font-bold mb-4 text-xl">{p.t}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>
            )}

            {slides[currentSlide].stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {slides[currentSlide].stats.map((s, i) => (
                  <div key={i} className="group p-8 border-l-2 border-blue-600 bg-blue-900/5 transition-all">
                    <div className="text-5xl font-black text-white mb-2">{s.v}</div>
                    <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">{s.l}</div>
                    <p className="text-slate-500 text-sm italic">{s.d}</p>
                  </div>
                ))}
              </div>
            )}

            {slides[currentSlide].process && (
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {slides[currentSlide].process.map((step, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="bg-blue-600 px-6 py-4 rounded font-bold">{step}</div>
                    {i < 2 && <div className="hidden md:block w-12 h-px bg-slate-700"></div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Controls */}
      <footer className="fixed bottom-0 w-full p-12 flex justify-between items-center z-50 print:hidden">
        <div className="flex gap-4">
          <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition-all">←</button>
          <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-all">→</button>
        </div>
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          Slayd {currentSlide + 1} / {slides.length}
        </div>
      </footer>

      {/* PDF uchun maxsus stil */}
      <style jsx global>{`
        @media print {
          body { background: white !important; color: black !important; }
          .min-h-screen { background: white !important; height: auto !important; }
          main { padding: 40px !important; display: block !important; }
          h1, h2, h3, p { color: black !important; }
          .bg-slate-900/50, .bg-blue-900/5 { background: #f8fafc !important; border: 1px solid #e2e8f0 !important; }
          .bg-blue-600 { background: #2563eb !important; color: white !important; }
          .animate-in { animation: none !important; }
        }
      `}</style>
    </div>
  );
}