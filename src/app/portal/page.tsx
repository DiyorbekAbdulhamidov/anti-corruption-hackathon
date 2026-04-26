"use client";
import { useState } from "react";
import OmniWidget from "@/components/OmniWidget";

const auditDataStore = {
  uzasbo: { amount: "5 450 000 000 UZS", violationReason: "Qabul qiluvchi yuridik shaxs (STIR: 305112233) 2026-yil 22-Aprelda ro'yxatdan o'tgan. Ochiq tahlillarga ko'ra soliq aylanmasi nolga teng, ustav fondi minimal. Xavf: Tranzaksiya byudjet mablag'larini obnal firmasiga yo'naltirish alomatlarini (Red Flag) bermoqda." },
  maktab: { amount: "1.0 Stavka (Kimyo laboranti)", violationReason: "Nomzod Eshmatov Toshmat (JSHSHIR: 31505920044112) bo'yicha DXX Chegara qo'shinlari ma'lumotlar bazasining kross-cheki: Fuqaro joriy yilda O'zbekiston chegarasini kesib o'tmagan va ayni vaqtda xorijda. Xavf: Korrupsion 'o'lik jon' shtatini yaratish." },
  mahalla: { amount: "10 Sotix ekin yeri / Moddiy yordam", violationReason: "Ariza beruvchi Qodirov Alisher (STIR: 312049811) Davlat Kadastr Palatasi bazasiga ko'ra o'z nomida 2 ta ko'chmas mulkka va IIV YHXX bazasiga ko'ra 2024 yilda ishlab chiqarilgan 'Tracker-2' avtomobiliga ega. Xavf: Ijtimoiy himoya shartlarini soxtalashtirish." },
  uzmed: { amount: "145 000 000 UZS (Imtiyozli Dori)", violationReason: "Hisobdan chiqarish bayonnomasiga kiritilgan bemorlar bo'yicha Adliya vazirligi FHDYo bazasi kross-cheki (Extract ID: 9021): 12 nafar bemordan 3 nafari (Karimova S., Aliyev B., Toshmatov Q.) oldingi oylarda vafot etganligi tasdiqlandi. Xavf: Dorilarni noqonuniy sotuvga chiqarish maqsadi." }
};

export default function EnterpriseGovPortalSimulator() {
  const [activePortal, setActivePortal] = useState<"uzasbo" | "maktab" | "mahalla" | "uzmed">("uzasbo");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSafeTransaction, setIsSafeTransaction] = useState(false);

  const handleAction = () => {
    if (isSafeTransaction) setIsSuccess(true);
    else setIsModalOpen(true);
  };

  // 1. UZASBO (MOLIYA)
  const renderUzASBO = () => (
    <div className="flex h-screen bg-[#f4f6f9] w-full text-slate-800 font-sans text-sm selection:bg-blue-200">
      <aside className="w-64 bg-[#1a2235] text-slate-300 flex flex-col shadow-2xl z-20">
        <div className="h-16 flex items-center px-6 bg-[#151b2a] border-b border-slate-700">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center font-bold text-white mr-3 shadow-inner">UZ</div>
          <span className="font-bold text-lg tracking-widest text-white uppercase font-mono text-[15px]">UzASBO <span className="text-blue-500 font-light text-[10px]">v4.2</span></span>
        </div>
        <div className="p-4">
          <div className="text-[9px] uppercase font-bold tracking-widest text-slate-500 mb-3 ml-2">Moliya Operatsiyalari</div>
          <nav className="space-y-1">
            <div className="bg-blue-600 text-white px-3 py-2.5 rounded shadow-md font-medium flex items-center gap-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> To'lov topshiriqnomasi
            </div>
            <div className="px-3 py-2.5 rounded hover:bg-slate-800 flex items-center gap-3 cursor-pointer text-slate-400 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> Elektron Shartnomalar</div>
            <div className="px-3 py-2.5 rounded hover:bg-slate-800 flex items-center gap-3 cursor-pointer text-slate-400 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> G'aznachilik hisoboti</div>
          </nav>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10">
          <div className="flex flex-col"><span className="font-bold text-slate-800 tracking-tight">O'zbekiston Respublikasi Iqtisodiyot va Moliya Vazirligi</span><span className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mt-0.5">Davlat Byudjeti Boshqaruvi Axborot Tizimi</span></div>
          <div className="flex items-center gap-4">
            <span className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-slate-500 border border-slate-200 shadow-sm">ID: 990141 (Bosh Buxgalter)</span>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">To'lov topshiriqnomasi <span className="text-blue-600">№ 409241</span></h2>
                <p className="text-slate-500 text-[11px] font-mono mt-2 bg-white inline-block px-2 py-0.5 border border-slate-200 rounded">Sana: 25.04.2026 / Vaqt: 14:32:05</p>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                <div className="flex items-center gap-1.5 text-emerald-600"><span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">✓</span> Kiritildi</div>
                <div className="w-6 h-[2px] bg-slate-200"></div>
                <div className="flex items-center gap-1.5 text-blue-600"><span className="w-4 h-4 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center animate-pulse">2</span> Buxgalter (E-imzo kutilmoqda)</div>
              </div>
            </div>

            <div className="bg-white border border-slate-300 rounded shadow-md overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-600 uppercase">Rekvizitlar va Asos</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono border border-blue-200">KOS: 42 22 10 (Asosiy vositalar xaridi)</span>
              </div>
              <div className="p-8 grid grid-cols-2 gap-10 border-b border-slate-100 relative">
                <div className="absolute left-1/2 top-8 bottom-8 w-px bg-slate-200"></div>

                <div className="space-y-6">
                  <div><p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1.5">To'lovchi tashkilot (Buyurtmachi)</p><p className="font-bold text-sm text-slate-800">Qibray tumani xalq ta'limi bo'limi</p><div className="flex gap-4 mt-2 text-[11px] font-mono"><span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">STIR: 201122334</span><span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-slate-500">H/r: 10002286...</span></div></div>
                  <div><p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1.5">Tranzaksiya maqsadi</p><p className="text-sm text-slate-700 italic border-l-2 border-slate-300 pl-3">Tuman maktablari uchun 25 ta interaktiv doska va kompyuter jamlanmalari xaridi.</p></div>
                </div>

                <div className="space-y-6">
                  <div><p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1.5">Qabul qiluvchi (Pudratchi)</p><p className="font-bold text-sm text-blue-800">Tezkor-Texnika MCHJ</p><div className="flex gap-4 mt-2 text-[11px] font-mono"><span className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">STIR: 305112233</span><span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-slate-500">MFO: 00441</span></div></div>
                  <div><p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1.5">Hujjat asosi (Shartnoma)</p><p className="text-sm font-semibold text-slate-700">№ 12-B/26 (To'g'ridan-to'g'ri elektron do'kon savdosi)</p></div>
                </div>
              </div>

              <div className="p-8 bg-slate-50/50 flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">O'tkazilayotgan Summa</p>
                  <p className="text-4xl font-black text-slate-800 tracking-tight">5 450 000 000,00 <span className="text-xl text-slate-400 font-light">UZS</span></p>
                </div>
                {isSuccess ? <div className="px-8 py-4 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold rounded shadow-inner flex items-center gap-3"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> <span>E-Imzo qabul qilindi. <br /><span className="text-xs font-normal opacity-80">G'aznachilikka yuborildi.</span></span></div> :
                  <button onClick={handleAction} className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-[0_5px_15px_rgba(37,99,235,0.3)] transition-all flex items-center gap-3 hover:-translate-y-0.5">
                    <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                    E-IMZO BILAN TASDIQLASH
                  </button>}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // 2. ERP.MAKTAB (TA'LIM)
  const renderMaktab = () => (
    <div className="h-screen bg-[#F0F2F5] w-full flex flex-col font-sans text-slate-800 selection:bg-teal-200">
      <header className="h-16 bg-[#00665E] flex items-center px-8 shadow text-white justify-between z-10 border-b-4 border-[#004d47]">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded"><svg className="w-6 h-6 text-[#00665E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg></div>
            <h1 className="font-bold text-xl tracking-tight">ERP.Maktab</h1>
          </div>
          <nav className="hidden md:flex gap-2 text-sm font-semibold">
            <span className="px-4 py-2 bg-[#004d47] rounded shadow-inner">Kadrlar va Ish haqi</span>
            <span className="px-4 py-2 hover:bg-[#005952] rounded transition-colors cursor-pointer text-teal-100">O'quvchilar harakati</span>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono tracking-widest bg-teal-800/50 px-3 py-1.5 rounded border border-teal-600/50 shadow-sm">15-Maktab Direktori (ID: M-440)</span>
        </div>
      </header>

      <main className="flex-1 p-8 overflow-auto flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-widest mb-6 cursor-pointer hover:text-teal-900 transition-colors w-max">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> Hujjatlar ro'yxatiga qaytish
          </div>

          <div className="bg-white border border-slate-300 rounded shadow-sm overflow-hidden flex flex-col">
            <div className="p-8 border-b border-slate-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight">Buyruq loyihasi: Ishga qabul qilish</h2>
                  <p className="text-sm text-slate-500 mt-1">Yaratilgan sana: 26.04.2026 | Bajaruvchi: Kadrlar bo'limi</p>
                </div>
                <div className="bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-widest">Qoralama (Imzosiz)</div>
              </div>

              <div className="bg-slate-50 p-6 rounded border border-slate-200 flex gap-8 items-center">
                <div className="w-24 h-32 bg-slate-200 rounded border border-slate-300 flex items-center justify-center text-4xl shadow-inner">👤</div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-slate-800 mb-1">Eshmatov Toshmat Valiyevich</h3>
                  <p className="text-xs font-mono text-slate-500 bg-white inline-block px-2 py-1 border border-slate-200 rounded mb-4">JSHSHIR: 31505920044112</p>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div><span className="text-slate-500 w-24 inline-block">Ma'lumoti:</span><span className="font-semibold text-slate-800">Oliy (Bakalavr)</span></div>
                    <div><span className="text-slate-500 w-24 inline-block">Diplom:</span><span className="font-semibold text-slate-800">№ B-440192 (O'zMU)</span></div>
                    <div><span className="text-slate-500 w-24 inline-block">Mutaxassisligi:</span><span className="font-semibold text-slate-800">Kimyo fani o'qituvchisi</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 flex-1 bg-white">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Shartnoma parametrlari</h3>
              <div className="grid grid-cols-4 gap-6">
                <div><p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Lavozimi</p><p className="font-bold text-[15px] text-slate-800">Kimyo xonasi laboranti</p></div>
                <div><p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Bandlik turi</p><p className="font-bold text-[15px] text-slate-800">Asosiy ish joyi</p></div>
                <div><p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Moshia miqdori</p><p className="font-black text-xl text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 w-max">1.0 Stavka</p></div>
                <div><p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Sinov muddati</p><p className="font-bold text-[15px] text-slate-800">Belgilanmagan</p></div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
              <div className="text-xs text-slate-500 font-mono">* "Elektron hukumat" tizimi orqali E-imzo E-IMZO.UZ moduli yordamida qo'yiladi.</div>
              {isSuccess ? <span className="bg-emerald-100 border border-emerald-300 text-emerald-800 px-8 py-3 rounded font-bold shadow-inner">Buyruq tasdiqlandi va reyestrga kiritildi</span> :
                <button onClick={handleAction} className="px-10 py-3 bg-[#00665E] hover:bg-[#004d47] text-white font-bold rounded shadow transition-all flex items-center gap-2">DIREKTOR IMZOSI BILAN TASDIQLASH</button>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // 3. ONLINE-MAHALLA (SOSIYAL)
  const renderMahalla = () => (
    <div className="flex h-screen bg-[#e5e7eb] w-full text-slate-800 font-serif">
      <main className="flex-1 flex flex-col items-center py-10 overflow-auto">

        {/* Rasmiy Blank / Qog'oz Formati */}
        <div className="bg-white p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-3xl w-full border border-slate-300 min-h-[800px] flex flex-col relative">

          {/* Suv belgisi */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <svg className="w-96 h-96" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="black" strokeWidth="2" fill="none" /><path d="M50 20 L50 80 M20 50 L80 50" stroke="black" strokeWidth="2" /></svg>
          </div>

          <div className="border-b-4 border-double border-slate-800 pb-6 mb-10 text-center relative z-10">
            <h1 className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-2">O'zbekiston Respublikasi Ijtimoiy Himoya Milliy Agentligi</h1>
            <h2 className="text-3xl font-black uppercase tracking-widest text-slate-900">Mahalla Tavsiyanomasi</h2>
            <p className="text-[11px] font-mono font-bold text-slate-500 mt-2 uppercase border border-slate-300 bg-slate-50 inline-block px-3 py-1">Hujjat ID: 9901-T | "Temir Daftar" Reyestri</p>
          </div>

          <div className="space-y-6 text-[15px] leading-relaxed relative z-10 flex-1">
            <p className="text-justify indent-8">
              Ushbu tavsiyanoma Toshkent viloyati, Qibray tumani, "Navbahor" MFY hokim yordamchisi tomonidan fuqaro <strong>Qodirov Alisher Botirovich</strong> (STIR: <span className="font-mono bg-slate-100 px-1 border border-slate-300">312049811</span>) ning oilaviy va moddiy holatini o'rganish natijalariga asosan berilmoqda.
            </p>
            <p className="text-justify indent-8">
              O'rganish xulosasiga ko'ra, yuqorida ko'rsatilgan fuqaro ishsiz, daromad manbaiga ega emas hamda "Temir daftar" ro'yxatida turadi. Oilani kambag'allikdan chiqarish va bandligini ta'minlash maqsadida davlat tomonidan ajratiladigan yordamga muhtoj deb topildi.
            </p>

            <div className="my-8 bg-slate-50 border border-slate-300 p-6">
              <span className="block text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Tavsiya etilayotgan yordam turi va miqdori:</span>
              <span className="block text-center font-black text-xl text-slate-900 border-b-2 border-slate-800 pb-2">Dehqonchilik qilish uchun 10 sotix ekin yeri ajratish</span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-300 relative z-10">
            <div className="flex justify-between items-end mb-10">
              <div>
                <p className="font-bold text-sm">Hokim Yordamchisi:</p>
                <p className="text-sm italic text-slate-600 mt-1">S.S. Xudoyberdiyev</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm">Sana:</p>
                <p className="text-sm font-mono text-slate-600 mt-1">26.04.2026</p>
              </div>
            </div>

            <div className="flex justify-center bg-slate-100 p-6 border border-slate-200">
              {isSuccess ? <div className="text-emerald-800 font-black text-lg border-2 border-emerald-600 px-8 py-3 uppercase tracking-widest bg-emerald-50 relative overflow-hidden"><span className="relative z-10">ELEKTRON IMZOLANDI</span></div> :
                <button onClick={handleAction} className="px-10 py-4 bg-slate-800 text-white font-black hover:bg-slate-900 shadow-xl transition-all uppercase tracking-widest flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg> TAVSIYANOMANI E-IMZO BILAN TASDIQLASH
                </button>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // 4. UZMED (TIBBIYOT)
  const renderUzMed = () => (
    <div className="flex h-screen bg-[#F8FAFC] w-full text-slate-800 font-sans selection:bg-cyan-200">
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white flex items-center px-8 justify-between shadow-sm z-10 border-b border-slate-200">
          <div className="flex items-center gap-3 text-[#0e7490]">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            <span className="font-black text-xl tracking-wider">UzMED <span className="font-normal text-slate-400">| Statsionar ERP</span></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-cyan-800 bg-cyan-50 px-3 py-1.5 rounded text-xs font-bold border border-cyan-200">1-Respublika Onkologiya Markazi</span>
          </div>
        </header>

        <div className="p-8 overflow-auto w-full flex justify-center">
          <div className="max-w-5xl w-full">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Imtiyozli dori vositalarini hisobdan chiqarish AKTI</h2>
              <span className="bg-white border border-slate-300 px-3 py-1 rounded text-xs font-mono text-slate-500 shadow-sm">Extract ID: 9021-M</span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Dori vositasi</p>
                <p className="font-bold text-base text-slate-800">Insulin 'Lantus'</p>
              </div>
              <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Partiya / Seriya</p>
                <p className="font-bold text-base text-slate-800 font-mono">#MED-992-K</p>
              </div>
              <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Soni (Qadoq)</p>
                <p className="font-bold text-base text-slate-800">120 dona</p>
              </div>
              <div className="bg-[#0e7490] p-4 border border-[#0891b2] rounded-lg shadow-sm text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0891b2] to-transparent"></div>
                <p className="text-[10px] text-cyan-200 font-bold uppercase mb-1 relative z-10">Umumiy Qiymati</p>
                <p className="font-black text-lg tracking-wider relative z-10">145,000,000 UZS</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-300 overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                <span className="font-bold text-sm text-slate-700 uppercase tracking-wider">Biriktirilgan bemorlar ro'yxati</span>
                <span className="text-xs bg-white border border-slate-300 px-2 py-1 rounded font-bold shadow-sm">Jami tasdiqlangan: 12 bemor</span>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100/50 text-[10px] uppercase text-slate-500 border-b border-slate-200">
                  <tr><th className="p-3 font-bold pl-6">Bemor F.I.SH</th><th className="p-3 font-bold">JSHSHIR (ID)</th><th className="p-3 font-bold">Kasallik KODI (MKB-10)</th><th className="p-3 font-bold">Ajratilgan dori soni</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50"><td className="p-3 pl-6 font-semibold">Abdullayev Karim To'rayevich</td><td className="p-3 font-mono text-slate-500">2120...</td><td className="p-3"><span className="bg-slate-100 px-2 py-0.5 rounded text-xs border border-slate-200 font-mono">C50.9</span></td><td className="p-3 font-bold text-center w-32">10</td></tr>
                  <tr className="hover:bg-slate-50"><td className="p-3 pl-6 font-semibold">Karimova Salima Odilovna</td><td className="p-3 font-mono text-slate-500">4150...</td><td className="p-3"><span className="bg-slate-100 px-2 py-0.5 rounded text-xs border border-slate-200 font-mono">C34.1</span></td><td className="p-3 font-bold text-center w-32">10</td></tr>
                  <tr className="hover:bg-slate-50"><td className="p-3 pl-6 font-semibold">Toshmatov Qodir Erkali og'li</td><td className="p-3 font-mono text-slate-500">3240...</td><td className="p-3"><span className="bg-slate-100 px-2 py-0.5 rounded text-xs border border-slate-200 font-mono">E10.9</span></td><td className="p-3 font-bold text-center w-32">10</td></tr>
                  <tr><td colSpan={4} className="p-3 pl-6 text-slate-400 text-xs italic bg-slate-50/50">... ro'yxatda yana 9 ta bemor bor (Yashirilgan)</td></tr>
                </tbody>
              </table>
              <div className="p-5 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
                <div className="text-xs text-slate-500">* Bosh shifokor E-imzosi bilan tasdiqlangandan so'ng, dori vositalari avtomatik hisobdan yechiladi.</div>
                {isSuccess ? <span className="text-cyan-800 font-bold bg-cyan-100 border border-cyan-300 px-6 py-2.5 rounded shadow-inner uppercase tracking-wider text-xs">Akt yopildi (Tasdiqlandi)</span> :
                  <button onClick={handleAction} className="px-8 py-2.5 bg-[#0e7490] hover:bg-[#164e63] text-white font-bold rounded shadow-[0_5px_15px_rgba(14,116,144,0.3)] transition flex items-center gap-2">
                    AKTNI E-IMZO BILAN TASDIQLASH
                  </button>}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  return (
    <div className="relative">
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#0F172A]/95 backdrop-blur-md px-4 py-2 rounded-xl flex gap-3 items-center z-50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-slate-700">
        <div className="flex bg-slate-800 p-1 rounded-lg">
          <button onClick={() => { setActivePortal("uzasbo"); setIsSuccess(false); }} className={`text-[11px] font-bold px-3 py-1.5 rounded-md transition ${activePortal === 'uzasbo' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>UzASBO</button>
          <button onClick={() => { setActivePortal("maktab"); setIsSuccess(false); }} className={`text-[11px] font-bold px-3 py-1.5 rounded-md transition ${activePortal === 'maktab' ? 'bg-[#00665E] text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>Maktab ERP</button>
          <button onClick={() => { setActivePortal("mahalla"); setIsSuccess(false); }} className={`text-[11px] font-bold px-3 py-1.5 rounded-md transition ${activePortal === 'mahalla' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>Mahalla</button>
          <button onClick={() => { setActivePortal("uzmed"); setIsSuccess(false); }} className={`text-[11px] font-bold px-3 py-1.5 rounded-md transition ${activePortal === 'uzmed' ? 'bg-[#0e7490] text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>UzMED</button>
        </div>

        <div className="w-px h-6 bg-slate-700"></div>

        <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700/50">
          <button onClick={() => setIsSafeTransaction(true)} className={`text-[10px] font-black px-3 py-1.5 rounded-md transition ${isSafeTransaction ? 'bg-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'text-slate-500 hover:text-slate-300'}`}>TOZA TR</button>
          <button onClick={() => setIsSafeTransaction(false)} className={`text-[10px] font-black px-3 py-1.5 rounded-md transition ${!isSafeTransaction ? 'bg-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]' : 'text-slate-500 hover:text-slate-300'}`}>XAVFLI TR</button>
        </div>
      </div>

      {activePortal === "uzasbo" && renderUzASBO()}
      {activePortal === "maktab" && renderMaktab()}
      {activePortal === "mahalla" && renderMahalla()}
      {activePortal === "uzmed" && renderUzMed()}

      {isModalOpen && (
        <OmniWidget
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => { setIsModalOpen(false); setIsSuccess(true); }}
          data={auditDataStore[activePortal] || {}}
        />
      )}
    </div>
  );
}