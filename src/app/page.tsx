"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GovernmentAuditGateway() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNode, setActiveNode] = useState(0);

  // Scroll monitoring
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Smooth scroll uchun global style qo'shamiz
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Simulate active node pinging
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev === 3 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-300 font-sans selection:bg-blue-800 selection:text-white overflow-x-hidden">

      {/* Background Topology Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]">
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-[#070b14] via-blue-500/40 to-[#070b14]"></div>
        <div className="absolute top-0 left-[50%] w-[1px] h-full bg-gradient-to-b from-[#070b14] via-cyan-500/20 to-[#070b14]"></div>
        <div className="absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-[#070b14] via-blue-500/40 to-[#070b14]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#070b14_100%)]"></div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#040811]/95 backdrop-blur-md border-b border-blue-900/30 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6 border-b border-white/5'}`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-md bg-gradient-to-br from-blue-900 to-[#040811] border border-blue-700/40 shadow-inner">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <span className="block font-bold text-lg text-white tracking-tight uppercase">Yagona Komplayens Ekotizimi</span>
              <span className="block text-[9px] text-slate-500 font-mono tracking-[0.2em] uppercase mt-0.5">Davlat Ma'lumotlarini Qayta ishlash Markazi</span>
            </div>
          </div>

          {/* ISHLAYDIGAN TUGMALAR */}
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-semibold tracking-widest uppercase text-slate-400 cursor-pointer">
            <a href="#arxitektura" className="hover:text-blue-400 transition-colors">Arxitektura</a>
            <a href="#metrikalar" className="hover:text-blue-400 transition-colors">Metrikalar</a>
            <a href="#modullar" className="hover:text-blue-400 transition-colors">Vazirliklar Moduli</a>
          </div>

          <div className="flex gap-3">
            <Link href="/dashboard" className="hidden md:flex px-5 py-2 rounded-md bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 text-white font-medium text-[11px] tracking-wider transition-all items-center gap-2">
              Monitoring paneli
            </Link>
            <Link href="/portal" className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium text-[11px] tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all flex items-center gap-2">
              Tizimga kirish <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-36 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 border-b border-white/5">
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/30 border border-blue-800/30 text-blue-400 text-[10px] font-mono tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> G-Cloud infratuzilmasida ishga tushirilgan
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
            Davlat xaridlari va byudjet operatsiyalarini <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">real vaqt rejimida</span> audit qiling.
          </h1>
          <p className="text-[15px] text-slate-400 mb-10 max-w-2xl leading-relaxed text-justify">
            Biz "post-audit" (hodisadan keyingi tekshiruv) amaliyotidan butunlay voz kechamiz. Yagona Komplayens Ekotizimi — bu davlat portallariga integratsiya qilinadigan markaziy <code className="text-blue-300 bg-blue-900/20 px-1 py-0.5 rounded">API Gateway</code>. U tranzaksiyalarni elektron imzolanish bosqichidayoq to'xtatib, barcha davlat bazalari bo'ylab asinxron tekshiruv o'tkazadi va qonunbuzarlikni joyida bloklaydi.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/portal" className="px-7 py-3.5 rounded-md bg-white text-slate-900 font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-2">
              Simulyatorni sinab ko'rish
            </Link>
            <div className="flex items-center gap-2 px-5 py-3.5 rounded-md border border-slate-700/50 bg-[#0a1120] text-slate-400 font-mono text-[11px]">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              RSA-2048 Shifrlash protokoli
            </div>
          </div>
        </div>

        {/* ID QO'SHILDI: arxitektura */}
        <div id="arxitektura" className="flex-1 w-full relative scroll-mt-32">
          <div className="bg-[#0a1120]/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-7 shadow-2xl relative">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asinxron Kross-Chek jarayoni (Log)</span>
              <span className="text-[10px] font-mono text-emerald-400">Response: 12ms</span>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-mono text-slate-300 mt-1">Req</div>
                <div className="w-full">
                  <h4 className="text-white text-[13px] font-medium mb-1">Source: <span className="text-blue-400">UzASBO Gateway</span></h4>
                  <div className="bg-[#050810] border border-slate-800/80 rounded p-3 text-[11px] font-mono text-slate-500 leading-relaxed">
                    <span className="text-fuchsia-400">POST</span> /api/v2/payment/verify<br />
                    "amount": <span className="text-emerald-400">12,500,000,000 UZS</span><br />
                    "receiver_inn": <span className="text-amber-400">"305112233"</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`w-7 h-7 rounded flex items-center justify-center text-[10px] font-mono mt-1 transition-colors duration-300 ${activeNode === 0 ? 'bg-blue-900/50 border border-blue-500 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 'bg-slate-800 border border-slate-700 text-slate-500'}`}>Mid</div>
                <div className="w-full">
                  <h4 className="text-white text-[13px] font-medium mb-1">Cross-Audit Shlyuzi (Promise.all)</h4>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono mt-2">
                    <div className="bg-[#050810] border border-emerald-900/30 text-emerald-500/70 p-2 rounded flex justify-between items-center">
                      <span>Soliq_Qo'mitasi</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div className="bg-[#050810] border border-red-900/40 text-red-400 p-2 rounded flex justify-between items-center">
                      <span>Adliya_Reyestri</span>
                      <span className="animate-pulse">FAIL</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded bg-red-900/20 border border-red-800 flex items-center justify-center text-[10px] font-mono text-red-500 mt-1">Res</div>
                <div className="w-full">
                  <h4 className="text-red-400 text-[13px] font-medium mb-1">Tranzaksiya Bloklandi (Status: 403)</h4>
                  <div className="bg-[#050810] border border-red-900/30 rounded p-3 text-[11px] text-slate-400">
                    <span className="text-red-400 font-mono">Error Code: COMP-08A.</span> Firma ta'sischisi xalqaro qidiruvda bo'lgan shaxslar ro'yxatida aniqlandi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ID QO'SHILDI: metrikalar */}
      <section id="metrikalar" className="bg-[#040811] border-b border-white/5 relative z-10 scroll-mt-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 divide-x divide-slate-800/50">
          <div className="pl-4">
            <div className="text-3xl lg:text-4xl font-light text-white mb-1 tracking-tight">12<span className="text-blue-500 text-xl font-bold ml-1">ms</span></div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-2">O'rtacha kross-chek vaqti</div>
          </div>
          <div className="pl-8">
            <div className="text-3xl lg:text-4xl font-light text-white mb-1 tracking-tight">Redis</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-2">Highload arxitektura keshi</div>
          </div>
          <div className="pl-8">
            <div className="text-3xl lg:text-4xl font-light text-white mb-1 tracking-tight">100<span className="text-blue-500 text-xl font-bold ml-1">%</span></div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-2">Inson omilidan xolislik</div>
          </div>
          <div className="pl-8">
            <div className="text-3xl lg:text-4xl font-light text-white mb-1 tracking-tight">GovNet</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-2">Yopiq hukumat tarmog'i</div>
          </div>
        </div>
      </section>

      {/* ID QO'SHILDI: modullar */}
      <section id="modullar" className="py-24 relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 scroll-mt-32">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3">Idoraviy Izolyatsiyani Yo'q Qilish</h2>
            <p className="text-slate-400 text-sm max-w-2xl">Mavjud ERP va portallar o'zaro ma'lumot almashmaydi. Yagona Komplayens Ekotizimi barcha platformalarni yagona nazorat nuqtasiga birlashtiradi.</p>
          </div>
          <div className="px-4 py-2 border border-blue-900/50 bg-blue-900/10 rounded text-[11px] font-mono text-blue-400">
            Plug-and-play SDK orqali integratsiya
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-[#0a1120] border border-slate-800 hover:border-blue-700/50 p-7 rounded-xl transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="text-slate-500 group-hover:text-blue-400 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Iqtisodiyot / Moliya</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Davlat Xaridlari (UzASBO)</h3>
            <p className="text-sm text-slate-400 mb-6 line-clamp-3">Pudratchining soliq qarzdorligi, ustav fondi hajmi va ta'sischilarining qora ro'yxatga tushmaganligi shartnoma imzolanishidan oldin avtomatik tekshiriladi.</p>
            <div className="text-[10px] font-mono text-slate-500 pt-4 border-t border-slate-800">API Endpoint: /v1/finance/cross-check</div>
          </div>

          <div className="bg-[#0a1120] border border-slate-800 hover:border-teal-700/50 p-7 rounded-xl transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="text-slate-500 group-hover:text-teal-400 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Kadrlar / Mehnat</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">ERP Kadrlar Platformasi</h3>
            <p className="text-sm text-slate-400 mb-6 line-clamp-3">Xodimni ishga qabul qilish buyrug'i shakllanayotganda, nomzodning O'zbekiston hududida ekanligi (DXX Chegara bazasi) va o'lmaganligi (FHDYo) tekshiriladi.</p>
            <div className="text-[10px] font-mono text-slate-500 pt-4 border-t border-slate-800">API Endpoint: /v1/hr/identity-verify</div>
          </div>

          <div className="bg-[#0a1120] border border-slate-800 hover:border-amber-700/50 p-7 rounded-xl transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="text-slate-500 group-hover:text-amber-400 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Ijtimoiy himoya</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Subsidiya va Moddiy yordam</h3>
            <p className="text-sm text-slate-400 mb-6 line-clamp-3">Hokim yordamchilari tomonidan tavsiyanoma berilishidan oldin, fuqaroning nomida qimmatbaho mulk yoki avtotransport mavjudligi (Kadastr/GAI) filtrlanadi.</p>
            <div className="text-[10px] font-mono text-slate-500 pt-4 border-t border-slate-800">API Endpoint: /v1/social/asset-check</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040811] pt-16 pb-12 relative z-10 text-center">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 flex items-center justify-center mb-6">
            <span className="text-blue-400 font-bold text-xl leading-none">W</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-3">Qog'ozdagi qonunlarni raqamli kodga aylantiramiz</h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto mb-10">
            Yagona Komplayens Ekotizimi — inson omilidan xolis bo'lgan, sof algoritmik adolat platformasi.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/portal" className="px-6 py-2.5 bg-white text-slate-900 font-semibold rounded text-[11px] uppercase tracking-widest hover:bg-slate-200 transition-all">Tizimni ishga tushirish</Link>
          </div>
          <p className="mt-16 text-[10px] font-mono text-slate-600 tracking-widest uppercase">
            © 2026 WEBLEADERS JAMOASI · ANTI-CORRUPTION HACKATHON
          </p>
        </div>
      </footer>
    </div>
  );
}