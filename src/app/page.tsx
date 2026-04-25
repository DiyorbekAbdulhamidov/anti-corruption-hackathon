"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-100 overflow-x-hidden">

      {/* Kiber-Orqa fon effektlari */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[80%] h-[20%] bg-emerald-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      {/* Tepa Menyu (Navbar) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A111F]/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600 to-blue-800 border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <span className="font-black text-2xl tracking-widest text-white">QALQON</span>
              <span className="block text-[9px] text-cyan-400 tracking-[0.3em] uppercase mt-0.5">Gov-Tech Ekotizimi</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider text-slate-400">
            <a href="#arxitektura" className="hover:text-cyan-400 transition">ARXITEKTURA</a>
            <a href="#modullar" className="hover:text-cyan-400 transition">MODULLAR</a>
            <a href="#xavfsizlik" className="hover:text-cyan-400 transition">KIBER-HIMOYA</a>
          </div>

          <div className="flex gap-4">
            <Link href="/dashboard" className="hidden md:flex px-5 py-2.5 rounded-md border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-900/20 text-white font-bold text-xs tracking-widest transition-all items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              MARKAZIY BAZA
            </Link>
            <Link href="/portal" className="px-6 py-2.5 rounded-md bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-black text-xs tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
              SIMULYATORNI KORISH
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-800 bg-cyan-900/30 text-cyan-400 text-[10px] font-black tracking-widest uppercase mb-6 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Antikorrupsiya agentligi uchun maxsus
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            Davlat byudjetini <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">algoritmlar</span> bilan himoya qilamiz.
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            QALQON — O'zbekistonning barcha yirik davlat portallariga (UzASBO, ERP) integratsiya qilinuvchi markazlashgan komplayens shlyuzidir. Biz korrupsiyani inson faktoridan xoli ravishda, tranzaksiya jarayonida bloklaymiz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/portal" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-slate-900 hover:bg-cyan-50 font-black text-sm tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-3">
              LIVE DEMO: TIZIMNI SINASH
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 rounded-lg border border-slate-700 hover:bg-slate-800 text-white font-bold text-sm tracking-widest transition-all flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              MONITORING MARKAZI
            </Link>
          </div>
        </div>

        {/* Hero Visual (Terminal/Code Mockup) */}
        <div className="flex-1 w-full max-w-lg relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#0B1120] border border-slate-700 rounded-2xl p-6 shadow-2xl font-mono text-xs">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="space-y-3 text-slate-300">
              <p><span className="text-cyan-400">root@qalqon-nexus</span>:~$ ./intercept --target=UzASBO --crosscheck=Soliq</p>
              <p className="text-slate-500">[11:42:01] Gateway ulanmoqda... OK (12ms)</p>
              <p className="text-slate-500">[11:42:02] Tranzaksiya ushlandi: 5.45 mlrd UZS</p>
              <p className="text-slate-500">[11:42:02] Soliq bazasi tahlil qilinmoqda...</p>
              <p className="text-rose-400 font-bold">» XAVF! Qabul qiluvchi STIR: 305112233 ro'yxatdan o'tganiga 3 kun bo'lgan.</p>
              <p className="text-rose-400 font-bold">» STATUS: BLOKLANDI. E-IMZO TUGMASI O'CHIRILDI.</p>
              <p className="text-emerald-400">» QALQON loglari Antikorrupsiya agentligiga muvaffaqiyatli jo'natildi.</p>
              <p className="animate-pulse">_</p>
            </div>
          </div>
        </div>
      </section>

      {/* Katta Raqamlar (Statistika) */}
      <section className="border-y border-slate-800/60 bg-[#0A111F]/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
          <div className="text-center px-4">
            <p className="text-4xl font-black text-white mb-2 tracking-tight">4<span className="text-cyan-500">.</span></p>
            <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">Davlat Portali Integratsiyasi</p>
          </div>
          <div className="text-center px-4">
            <p className="text-4xl font-black text-white mb-2 tracking-tight">12<span className="text-cyan-500">ms</span></p>
            <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">O'rtacha Kross-chek Tezligi</p>
          </div>
          <div className="text-center px-4">
            <p className="text-4xl font-black text-emerald-400 mb-2 tracking-tight">100<span className="text-emerald-600">%</span></p>
            <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">Inson aralashuvisiz qaror</p>
          </div>
          <div className="text-center px-4">
            <p className="text-4xl font-black text-white mb-2 tracking-tight">JWT</p>
            <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">Kriptografik Token Shifrlash</p>
          </div>
        </div>
      </section>

      {/* Modullar Qismi (Features) */}
      <section id="modullar" className="py-24 relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white mb-4 tracking-wider uppercase">Nazorat Qilinadigan Tizimlar</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Biz alohida dastur yozmaymiz, biz O'zbekistonning eng katta byudjet aylanadigan portallariga himoya shlyuzi bo'lib o'rnatilamiz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0F172A] border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10"><svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg></div>
            <div className="w-12 h-12 bg-blue-900/30 rounded-xl border border-blue-800 flex items-center justify-center text-blue-400 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Davlat Xaridlari</h3>
            <p className="text-sm text-slate-400">UzASBO va Xarid.uz dagi ko'chirmalarni Soliq bazasi bilan tahlil qilib, 'obnal' va fantom firmalarga to'lovni kesadi.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0F172A] border border-slate-800 p-8 rounded-2xl hover:border-teal-500/50 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 bg-teal-900/30 rounded-xl border border-teal-800 flex items-center justify-center text-teal-400 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ta'lim Kadrlar (ERP)</h3>
            <p className="text-sm text-slate-400">Maktab direktorlari tomonidan 'o'lik jon' xodimlarni ishga olishni Migratsiya bazasi orqali bloklaydi.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0F172A] border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 bg-amber-900/30 rounded-xl border border-amber-800 flex items-center justify-center text-amber-400 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ijtimoiy Himoya</h3>
            <p className="text-sm text-slate-400">Hokim yordamchilari boy fuqarolarga qalbaki 'kambag'al' ma'lumotnomasi orqali yer va subsidiya berishini cheklaydi.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0F172A] border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all group relative overflow-hidden">
            <div className="w-12 h-12 bg-cyan-900/30 rounded-xl border border-cyan-800 flex items-center justify-center text-cyan-400 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sog'liqni Saqlash</h3>
            <p className="text-sm text-slate-400">Vafot etgan bemorlar nomiga imtiyozli qimmatbaho dorilarni hisobdan chiqarish jinoyatini FHDYo kross-cheki orqali ushlaydi.</p>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="border-t border-slate-800 bg-[#0A111F] pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h2 className="text-2xl font-black text-white mb-4">QALQON - Davlat Resurslari Kafolati</h2>
          <p className="text-slate-500 max-w-lg mb-8 text-sm">Biz byurokratiyani emas, adolatni raqamlashtiramiz. Tizim qanday ishlashini to'liq formatda sinab ko'rish uchun platformaga o'ting.</p>
          <Link href="/portal" className="px-8 py-4 bg-white text-black font-black rounded-lg hover:bg-cyan-50 shadow-lg transition uppercase tracking-widest text-sm">
            Simulyatorga Kirish
          </Link>
          <p className="mt-16 text-xs font-mono text-slate-600">© 2026 OMNI-AUDIT (Qalqon) Team. Xakaton MVP Versiyasi.</p>
        </div>
      </footer>
    </div>
  );
}