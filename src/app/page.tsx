"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OfficialLandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020813] text-slate-300 font-sans selection:bg-blue-900 selection:text-white overflow-x-hidden">

      {/* Tizimning orqa fonidagi murakkab kiber-chizmalar */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      </div>

      {/* Rasmiy Davlat Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050f24]/95 backdrop-blur-xl border-b border-blue-900/50 shadow-2xl py-3' : 'bg-transparent py-5 border-b border-slate-800/50'}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded bg-blue-950 border border-blue-700/50 shadow-[0_0_15px_rgba(29,78,216,0.5)]">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <div>
              <span className="block font-black text-lg tracking-wide text-white uppercase">Yagona Kross-Audit Tizimi</span>
              <span className="block text-[10px] text-blue-400 font-mono tracking-widest uppercase">Korrupsiyaga qarshi kurashish agentligi</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase text-slate-400">
            <a href="#muammo" className="hover:text-blue-400 transition-colors">Tizim Maqsadi</a>
            <a href="#algoritm" className="hover:text-blue-400 transition-colors">Ishlash Algoritmi</a>
            <a href="#integratsiya" className="hover:text-blue-400 transition-colors">Integratsiya Modullari</a>
          </div>

          <div className="flex gap-4">
            <Link href="/dashboard" className="hidden md:flex px-6 py-2.5 rounded border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white font-bold text-xs tracking-wider transition-all items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> MONITORING
            </Link>
            <Link href="/portal" className="px-6 py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2">
              SIMULYATOR <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Asosiy Hero (Tushuntirish) Section */}
      <section className="relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 border-b border-slate-800/50">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-blue-800/50 bg-blue-900/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-6 font-mono">
            Loyihaning MVP Holati: Ishga Tayyor
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Davlat portallaridagi <br /> korrupsion jinoyatlarni <span className="text-blue-500">API darajasida</span> bloklaymiz.
          </h1>
          <p className="text-base text-slate-400 mb-8 max-w-2xl leading-relaxed text-justify">
            O'zbekiston elektron hukumati yuzlab raqamli portallarga ega bo'lsada, oxirgi tasdiqlash jarayoni (inson omili) haligacha zaif nuqta bo'lib qolmoqda. Bizning <strong>Yagona Kross-Audit Tizimi</strong> UzASBO, ERP.Maktab va boshqa portallarga tashqi API shlyuz sifatida ulanib, amaldor E-imzo chekadigan soniyada ma'lumotlarni Soliq, FHDYo va Kadastr bazalari orqali avtomatik tekshirib, talon-torojlikning oldini oladi.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/portal" className="px-8 py-4 rounded bg-white text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-blue-50 transition-all flex items-center gap-2">
              Tizim ishini ko'rish
            </Link>
            <div className="flex items-center gap-3 px-6 py-3 rounded border border-slate-800 bg-slate-900/50 text-slate-300 font-mono text-xs">
              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              JWT Shifrlangan Integratsiya
            </div>
          </div>
        </div>

        {/* Murakkab Arxitektura Vizuali */}
        <div className="flex-1 w-full relative">
          <div className="bg-[#050f24] border border-blue-900/50 rounded-lg p-6 shadow-[0_0_40px_rgba(29,78,216,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>

            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kross-Chek Algoritmi</span>
              <span className="flex gap-1"><span className="w-2 h-2 rounded-full bg-slate-600"></span><span className="w-2 h-2 rounded-full bg-slate-600"></span><span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span></span>
            </div>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded border border-slate-700 bg-slate-800 flex items-center justify-center text-xs font-bold text-white mt-1">1</div>
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">So'rov: UzASBO</h4>
                  <div className="bg-slate-900 border border-slate-800 rounded p-3 text-xs font-mono text-slate-400">
                    <span className="text-pink-500">POST</span> /api/v1/transaction<br />
                    "amount": 5450000000,<br />
                    "target_inn": <span className="text-blue-400">"305112233"</span>
                  </div>
                </div>
              </div>
              {/* Arrow */}
              <div className="ml-4 w-0.5 h-6 bg-gradient-to-b from-slate-700 to-blue-500"></div>
              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded border border-blue-700 bg-blue-900/50 flex items-center justify-center text-xs font-bold text-blue-400 mt-1 shadow-[0_0_10px_rgba(29,78,216,0.5)]">2</div>
                <div className="w-full">
                  <h4 className="text-white text-sm font-bold mb-1">API Shlyuz (Bizning Tizim)</h4>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono mt-2">
                    <div className="bg-emerald-950/30 border border-emerald-900/50 text-emerald-400 p-2 rounded flex justify-between"><span>Soliq.uz</span><span>OK</span></div>
                    <div className="bg-red-950/30 border border-red-900/50 text-red-400 p-2 rounded flex justify-between animate-pulse"><span>Statistika.uz</span><span>XAVF</span></div>
                  </div>
                </div>
              </div>
              {/* Arrow */}
              <div className="ml-4 w-0.5 h-6 bg-gradient-to-b from-blue-500 to-red-500"></div>
              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded border border-red-700 bg-red-900/50 flex items-center justify-center text-xs font-bold text-red-400 mt-1">3</div>
                <div className="w-full">
                  <h4 className="text-red-400 text-sm font-bold mb-1">Natija: Tranzaksiya Bloklandi</h4>
                  <div className="bg-red-950/20 border border-red-900/30 rounded p-3 text-xs text-slate-300">
                    Firma 3 kun oldin ochilgan. Soliq aylanmasi nolga teng. Komplayens nazorati oynasi chaqirildi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ma'lumotlar paneli */}
      <section className="bg-[#030a18] border-b border-slate-800/50 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-black text-white mb-1">0.012<span className="text-blue-500 text-xl">s</span></div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Tekshiruv tezligi</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-1">4<span className="text-blue-500 text-xl">+</span></div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Davlat tizimiga integratsiya</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-1">100<span className="text-blue-500 text-xl">%</span></div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Avtomatlashtirilgan qaror</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400 mb-1">JWT</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Aylanib o'tish imkonsizligi</div>
          </div>
        </div>
      </section>

      {/* Integratsiya Modullari (Muammo va Yechim) */}
      <section id="integratsiya" className="py-24 relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 border-l-4 border-blue-600 pl-6">
          <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-2">Nazorat qilinadigan davlat ekotizimlari</h2>
          <p className="text-slate-400 text-sm max-w-3xl">Tizim yagona dastur emas, u barcha platformalar kodiga o'rnatiladigan markaziy 'Microservice' (Mikroxizmat) hisoblanadi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Moliya */}
          <div className="bg-[#050f24] border border-slate-800 p-8 rounded-lg relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-blue-900/40 rounded border border-blue-800 flex items-center justify-center text-blue-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">MOLIYA VAZIRLIGI</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">UzASBO va Davlat Xaridlari</h3>
            <div className="text-sm text-slate-400 space-y-3 mt-4">
              <p><span className="text-red-400 font-bold">Mavjud Muammo:</span> Byudjet pullari osonlik bilan "1 kunlik" obnal firmalarga o'tkazilmoqda.</p>
              <p><span className="text-emerald-400 font-bold">Bizning Yechim:</span> G'aznachilikka yuborish tugmasi bosilganda, Soliq qo'mitasi bazasidan firmaning yoshi va aylanmasi tahlil qilinib, shubhali operatsiyalar joyida bloklanadi.</p>
            </div>
          </div>

          {/* Ta'lim */}
          <div className="bg-[#050f24] border border-slate-800 p-8 rounded-lg relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-teal-900/40 rounded border border-teal-800 flex items-center justify-center text-teal-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /></svg></div>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">XALQ TA'LIMI VAZIRLIGI</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Maktab ERP Kadrlar Tizimi</h3>
            <div className="text-sm text-slate-400 space-y-3 mt-4">
              <p><span className="text-red-400 font-bold">Mavjud Muammo:</span> Maktablarda xorijda yurgan qarindoshlarni (o'lik jonlar) ishga rasmiylashtirish.</p>
              <p><span className="text-emerald-400 font-bold">Bizning Yechim:</span> Buyruq tasdiqlanayotganda, nomzodning JSHSHIR kodi DXX Chegara bazasi orqali tekshiriladi. Xorijda bo'lsa, tizim ishga olishni rad etadi.</p>
            </div>
          </div>

          {/* Mahallabay */}
          <div className="bg-[#050f24] border border-slate-800 p-8 rounded-lg relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-amber-900/40 rounded border border-amber-800 flex items-center justify-center text-amber-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></div>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">IJTIMOIY HIMOYA</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Online-Mahalla Platformasi</h3>
            <div className="text-sm text-slate-400 space-y-3 mt-4">
              <p><span className="text-red-400 font-bold">Mavjud Muammo:</span> Hokim yordamchilari uyi va mashinasi bor boy fuqarolarga qalbaki tavsiyanoma asosida yer/subsidiya ajratmoqda.</p>
              <p><span className="text-emerald-400 font-bold">Bizning Yechim:</span> Tavsiyanoma bosilganda, Kadastr va YHXX bazasidan mulkdorlik tekshiriladi va qonunbuzarlik prokuraturaga uzatiladi.</p>
            </div>
          </div>

          {/* Tibbiyot */}
          <div className="bg-[#050f24] border border-slate-800 p-8 rounded-lg relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-cyan-900/40 rounded border border-cyan-800 flex items-center justify-center text-cyan-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg></div>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">SOG'LIQNI SAQLASH VAZIRLIGI</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">UzMED Elektron Poliklinika</h3>
            <div className="text-sm text-slate-400 space-y-3 mt-4">
              <p><span className="text-red-400 font-bold">Mavjud Muammo:</span> Vafot etgan bemorlar nomiga davlatning o'ta qimmat dorilari "berildi" deb soxta akt tuzilmoqda.</p>
              <p><span className="text-emerald-400 font-bold">Bizning Yechim:</span> Bemorlar ro'yxati FHDYo o'lim dalolatnomalari kross-cheki orqali filtrlanadi. O'lik jonga dori yozish texnik jihatdan imkonsiz bo'ladi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#020813] pt-16 pb-12 relative z-10 text-center">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-widest">O'zbekiston Elektron Hukumati <span className="text-blue-500">Kross-Audit Tizimi</span></h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mb-10">Biz shunchaki dastur yaratmadik. Biz huquqni qo'llash amaliyotini raqamlashtirdik. Qog'ozdagi byurokratiyani avtomatlashgan qat'iy mantiq bilan almashtirdik.</p>
          <div className="flex justify-center gap-4">
            <Link href="/portal" className="px-8 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 shadow-lg text-xs uppercase tracking-widest transition-all">Simulyatorga Kirish</Link>
            <Link href="/dashboard" className="px-8 py-3 border border-slate-700 text-slate-300 font-bold rounded hover:bg-slate-900 text-xs uppercase tracking-widest transition-all">Monitoring Markazi</Link>
          </div>
          <p className="mt-16 text-[10px] font-mono text-slate-600 tracking-widest uppercase">© 2026 Webleaders.uz / KRYAT Loyihasi / Xakaton MVP Final</p>
        </div>
      </footer>
    </div>
  );
}