"use client";
import { useState } from "react";
import OmniWidget from "@/components/OmniWidget";

const auditDataStore = {
  uzasbo: { amount: "5 450 000 000 UZS", violationReason: "Qabul qiluvchi yuridik shaxs (STIR: 305112233) ro'yxatdan o'tganiga 3 kun bo'lgan. Ochiq ma'lumotlarga ko'ra soliq aylanmasi mavjud emas (Fantom yoki Obnal firma xavfi)." },
  maktab: { amount: "1.0 Stavka (Mehnat shartnomasi)", violationReason: "Nomzod (JSHSHIR: 31505920044112) Chegara qorovul qo'shinlari bazasiga ko'ra hozirda O'zbekiston Respublikasidan tashqarida (Rossiya). O'lik jonni ishga olish ehtimoli." },
  mahalla: { amount: "10 Sotix ekin yeri", violationReason: "Ariza beruvchi (STIR: 312049811) Kadastr bazasiga ko'ra 2 ta ko'chmas mulk va 1 ta 'Tracker-2' avtomobiliga ega. 'Temir daftar' mezoniga zid hujjatlashtirish." },
  uzmed: { amount: "145 000 000 UZS (Dori)", violationReason: "Ro'yxatdagi bemorlar (Extract ID: 9021) bo'yicha FHDYo kross-cheki: 3 nafar bemor vafot etganligi aniqlandi. Vafot etganlar nomiga byudjet dorisini hisobdan chiqarish xavfi." }
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

  // 1. UZASBO (MOLIYA) - Katta Jadvallar, To'q qora menyu, Status Stepper
  const renderUzASBO = () => (
    <div className="flex h-screen bg-[#F3F4F6] w-full text-slate-800 font-sans text-sm">
      <aside className="w-64 bg-[#111827] text-slate-300 flex flex-col shadow-2xl z-20">
        <div className="h-16 flex items-center px-6 border-b border-slate-700/50 bg-[#1F2937]">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white mr-3">UZ</div>
          <span className="font-bold text-lg tracking-widest text-white">UzASBO</span>
        </div>
        <div className="p-4">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">Asosiy Menyu</div>
          <nav className="space-y-1">
            <div className="bg-blue-600 text-white px-3 py-2.5 rounded-md font-medium flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> To'lov topshiriqnomasi
            </div>
            <div className="px-3 py-2.5 rounded-md hover:bg-slate-800 flex items-center gap-3 cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> Shartnomalar</div>
            <div className="px-3 py-2.5 rounded-md hover:bg-slate-800 flex items-center gap-3 cursor-pointer"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> G'aznachilik hisoboti</div>
          </nav>
        </div>
      </aside>
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10">
          <div className="flex flex-col"><span className="font-bold text-gray-800">Iqtisodiyot va Moliya Vazirligi</span><span className="text-[10px] text-gray-500 uppercase">Byudjet Boshqaruvi Tizimi</span></div>
          <div className="flex items-center gap-4">
            <span className="bg-slate-100 px-3 py-1 rounded text-xs font-mono font-bold text-slate-600 border border-slate-200">ID: 990141</span>
            <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold border border-blue-200">TT</div>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-8">
          <div className="flex justify-between items-end mb-6">
            <div><h2 className="text-2xl font-black text-slate-800">To'lov topshiriqnomasi № 409241</h2><p className="text-slate-500 text-sm mt-1">Sana: 25 Aprel 2026 yil</p></div>
            
            {/* Stepper (Hujjat holati) */}
            <div className="flex items-center gap-2 text-xs font-bold">
              <div className="flex items-center gap-1 text-green-600"><span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">✓</span> Yaratildi</div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div className="flex items-center gap-1 text-green-600"><span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">✓</span> 1-Imzo (Buxgalter)</div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div className="flex items-center gap-1 text-blue-600"><span className="w-5 h-5 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center animate-pulse">2</span> 2-Imzo kutilmoqda</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 grid grid-cols-2 gap-8 border-b border-gray-100">
              <div className="space-y-4">
                <div><p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">To'lovchi tashkilot</p><p className="font-bold text-base">Qibray tumani xalq ta'limi bo'limi (STIR: 201122334)</p><p className="text-sm font-mono text-gray-500">G'azna h/r: 1000 2286 0112 3445</p></div>
                <div><p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Xarajat moddasi (KOS)</p><p className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded text-sm border border-gray-200">42 22 10 - Asosiy vositalar xaridi</p></div>
              </div>
              <div className="space-y-4">
                <div><p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Qabul qiluvchi</p><p className="font-bold text-base text-blue-700">Tezkor-Texnika MCHJ (STIR: 305112233)</p><p className="text-sm font-mono text-gray-500">Bank: Ipak Yo'li, MFO: 00441</p></div>
                <div><p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Hujjat asosi</p><p className="font-semibold text-sm">Shartnoma №12 (To'g'ridan-to'g'ri elektron do'kon)</p></div>
              </div>
            </div>
            
            <div className="p-6 bg-slate-50 flex justify-between items-center rounded-b-lg">
               <div><p className="text-sm text-slate-500 font-bold uppercase tracking-wider">O'tkazilayotgan Summa</p><p className="text-3xl font-black text-slate-800">5 450 000 000,00 <span className="text-lg text-slate-500">UZS</span></p></div>
               {isSuccess ? <div className="px-6 py-3 bg-green-100 text-green-800 font-bold rounded flex items-center gap-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> G'aznachilikka yuborildi</div> : 
               <button onClick={handleAction} className="px-8 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded shadow-md transition-all flex items-center gap-2">E-IMZO BILAN TASDIQLASH</button>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // 2. ERP.MAKTAB (TA'LIM) - Tepa menyu, Oq-Yashil dizayn, Profil kartasi
  const renderMaktab = () => (
    <div className="h-screen bg-[#F8FAFC] w-full flex flex-col font-sans text-slate-800">
      <header className="h-16 bg-[#0F766E] flex items-center px-8 shadow-md text-white justify-between z-10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg> <h1 className="font-bold text-xl tracking-wide">ERP.Maktab</h1></div>
          <nav className="hidden md:flex gap-1 text-sm font-medium">
            <span className="px-3 py-1.5 bg-white/20 rounded">Kadrlar</span>
            <span className="px-3 py-1.5 hover:bg-white/10 rounded cursor-pointer">O'quvchilar</span>
            <span className="px-3 py-1.5 hover:bg-white/10 rounded cursor-pointer">Jurnal</span>
          </nav>
        </div>
        <div className="flex items-center gap-3"><span className="text-sm bg-teal-800 px-3 py-1 rounded-full border border-teal-600">15-Maktab Direktori</span><div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">👤</div></div>
      </header>
      
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 text-sm text-teal-700 font-bold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg> Ortga qaytish
          </div>
          
          <h2 className="text-2xl font-black text-slate-800 mb-6">Buyruq loyihasi: Xodimni ishga qabul qilish</h2>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Profil Kartasi */}
            <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full border-4 border-white shadow-md flex items-center justify-center text-3xl mb-4">👨‍🏫</div>
              <h3 className="font-bold text-lg">Eshmatov Toshmat</h3>
              <p className="text-xs text-slate-500 font-mono mt-1">JSHSHIR: 31505920044112</p>
              <div className="w-full h-px bg-slate-100 my-4"></div>
              <div className="w-full text-left space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Ma'lumoti:</span><span className="font-semibold">Oliy (Bakalavr)</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Mutaxassisligi:</span><span className="font-semibold">Kimyo fani</span></div>
              </div>
            </div>
            
            {/* Shartnoma detallari */}
            <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-6 border-b border-slate-100 bg-teal-50/30">
                 <h3 className="font-bold text-teal-800 uppercase tracking-wider text-xs mb-4">Shartnoma Shartlari</h3>
                 <div className="grid grid-cols-2 gap-6">
                    <div><p className="text-xs text-slate-500 mb-1">Lavozim</p><p className="font-bold text-base">Kimyo xonasi laboranti</p></div>
                    <div><p className="text-xs text-slate-500 mb-1">Bandlik turi</p><p className="font-bold text-base">Asosiy ish joyi</p></div>
                    <div><p className="text-xs text-slate-500 mb-1">Stavka</p><p className="font-black text-lg text-teal-600">1.0 (To'liq)</p></div>
                    <div><p className="text-xs text-slate-500 mb-1">Ish boshlash sanasi</p><p className="font-bold text-base">26.04.2026</p></div>
                 </div>
              </div>
              <div className="p-6 flex-1 flex items-end justify-between bg-slate-50">
                 <div className="text-xs text-slate-500">Hujjat tayyorladi: Kadrlar bo'limi inspektori M.Aliyeva</div>
                 {isSuccess ? <span className="bg-green-100 text-green-700 px-6 py-2.5 rounded font-bold">Buyruq tasdiqlandi</span> : 
                 <button onClick={handleAction} className="px-8 py-2.5 bg-[#0F766E] hover:bg-[#0D655E] text-white font-bold rounded shadow transition-all">BUYRUQNI IMZOLASH</button>}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // 3. ONLINE-MAHALLA (SOSIYAL) - Qog'oz ariza formati, Sariq accentlar
  const renderMahalla = () => (
    <div className="flex h-screen bg-[#F9FAFB] w-full text-slate-800">
      <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 shadow-sm z-10 justify-between">
        <div className="flex flex-col gap-6">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center font-black text-xl shadow-inner">M</div>
          <div className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center cursor-pointer text-xl">🏠</div>
          <div className="w-10 h-10 bg-amber-50 border border-amber-200 text-amber-600 rounded-lg flex items-center justify-center cursor-pointer text-xl shadow-sm">📄</div>
        </div>
        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">⚙️</div>
      </aside>
      
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 justify-between">
          <span className="font-black text-slate-700 tracking-wide">Online-Mahalla</span>
          <div className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> <span className="text-sm font-bold text-slate-600">Hokim Yordamchisi Kabineti</span></div>
        </header>
        
        <div className="p-8 overflow-auto flex justify-center w-full">
          {/* Qog'oz formati A4 */}
          <div className="bg-white p-10 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-slate-200 max-w-3xl w-full">
            <div className="border-b-2 border-slate-800 pb-4 mb-8 text-center">
              <h2 className="text-xl font-black uppercase tracking-widest text-slate-800">Tavsiyanoma</h2>
              <p className="text-xs font-bold text-slate-500 mt-1 uppercase">ID: 9901-T | Ijtimoiy Himoya Yagona Reyestri</p>
            </div>
            
            <div className="space-y-6 text-sm">
              <div className="flex justify-between border-b border-dashed border-slate-300 pb-2">
                <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Ariza beruvchi fuqaro:</span>
                <span className="font-bold text-base">Qodirov Alisher (STIR: 312049811)</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-slate-300 pb-2">
                <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Ijtimoiy holati:</span>
                <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-black">"Temir daftar"ga kiritilgan, Ishsiz</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-slate-300 pb-2 items-center bg-amber-50 p-3 rounded">
                <span className="text-amber-800 font-bold uppercase text-xs tracking-wider">Tavsiya etilayotgan yordam turi:</span>
                <span className="font-black text-lg text-amber-900 border-b-2 border-amber-900">Dehqonchilik uchun 10 sotix yer</span>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-slate-200">
              <p className="text-[10px] text-slate-400 text-justify mb-6">
                * Ushbu tavsiyanomani elektron imzolash orqali Hokim yordamchisi yuqorida ko'rsatilgan fuqaroning haqiqatan ham ijtimoiy himoyaga muhtojligini va yordam o'z egasiga yetib borishini qonuniy tasdiqlaydi.
              </p>
              <div className="flex justify-center">
                {isSuccess ? <div className="text-green-700 font-black text-lg border-2 border-green-500 px-6 py-2 rounded-full uppercase tracking-widest bg-green-50">Tasdiqlandi</div> : 
                <button onClick={handleAction} className="px-12 py-4 bg-[#D97706] text-white font-black rounded hover:bg-[#B45309] shadow-lg transition-transform hover:scale-105 uppercase tracking-widest">Tavsiyanomani Tasdiqlash</button>}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // 4. UZMED (TIBBIYOT) - Cyan ranglar, Data Table, Medical Feel
  const renderUzMed = () => (
    <div className="flex h-screen bg-[#F0FDFA] w-full text-slate-800 font-sans">
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white flex items-center px-8 justify-between shadow-sm z-10 border-b border-cyan-100">
          <div className="flex items-center gap-3 text-[#0891B2]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            <span className="font-black text-xl tracking-wider">UzMED <span className="font-light">ERP</span></span>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full text-xs font-bold">1-Respublika Onkologiya Markazi</span>
          </div>
        </header>
        
        <div className="p-8 overflow-auto max-w-6xl mx-auto w-full">
          <h2 className="text-2xl font-bold text-slate-700 mb-6 border-l-4 border-cyan-500 pl-3">Imtiyozli dorilarni hisobdan chiqarish akti</h2>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
               <p className="text-xs text-slate-500 font-bold uppercase mb-1">Dori vositasi</p>
               <p className="font-bold text-lg text-cyan-900">Insulin 'Lantus'</p>
               <p className="text-xs text-slate-400 mt-2">Partiya: #Med-992</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
               <p className="text-xs text-slate-500 font-bold uppercase mb-1">Soni (Qadoq)</p>
               <p className="font-bold text-2xl text-slate-800">120 dona</p>
            </div>
            <div className="bg-cyan-600 p-5 rounded-xl shadow-sm text-white">
               <p className="text-xs text-cyan-200 font-bold uppercase mb-1">Umumiy Qiymati</p>
               <p className="font-black text-2xl tracking-wider">145.0 MLN UZS</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
              <span className="font-bold text-sm">Biriktirilgan bemorlar ro'yxati (Extract ID: 9021)</span>
              <span className="text-xs bg-slate-200 px-2 py-1 rounded">Jami: 12 kishi</span>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-white text-xs uppercase text-slate-400">
                <tr><th className="p-4 border-b">Bemor F.I.SH</th><th className="p-4 border-b">JSHSHIR</th><th className="p-4 border-b">Tashxis</th><th className="p-4 border-b">Soni</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-cyan-50/50"><td className="p-4 font-bold">Abdullayev Karim</td><td className="p-4 font-mono">2120...</td><td className="p-4"><span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-xs border border-red-100">C50.9</span></td><td className="p-4 font-bold">10</td></tr>
                <tr className="hover:bg-cyan-50/50"><td className="p-4 font-bold">Karimova Salima</td><td className="p-4 font-mono">4150...</td><td className="p-4"><span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-xs border border-red-100">C34.1</span></td><td className="p-4 font-bold">10</td></tr>
                <tr><td colSpan={4} className="p-4 text-center text-slate-400 italic bg-slate-50/50">... yana 10 ta yozuv yashiringan</td></tr>
              </tbody>
            </table>
            <div className="p-5 bg-white border-t border-slate-200 flex justify-end">
              {isSuccess ? <span className="text-cyan-700 font-bold bg-cyan-50 px-6 py-2 rounded">Akt saqlandi va dori hisobdan chiqarildi</span> : 
              <button onClick={handleAction} className="px-8 py-2.5 bg-[#0891B2] hover:bg-[#164E63] text-white font-bold rounded shadow transition flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> AKTNI TASDIQLASH VA YOPISH
              </button>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  return (
    <div className="relative">
      {/* Sahnadagi Xufyona Kontroller (Faqat demo payti ko'rsatish uchun pastda yashiringan) */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#0F172A]/95 backdrop-blur-md px-4 py-2 rounded-xl flex gap-3 items-center z-50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-slate-700">
        <div className="flex bg-slate-800 p-1 rounded-lg">
          <button onClick={() => {setActivePortal("uzasbo"); setIsSuccess(false);}} className={`text-[11px] font-bold px-3 py-1.5 rounded-md transition ${activePortal === 'uzasbo' ? 'bg-[#2563EB] text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>UzASBO</button>
          <button onClick={() => {setActivePortal("maktab"); setIsSuccess(false);}} className={`text-[11px] font-bold px-3 py-1.5 rounded-md transition ${activePortal === 'maktab' ? 'bg-[#0F766E] text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>Maktab</button>
          <button onClick={() => {setActivePortal("mahalla"); setIsSuccess(false);}} className={`text-[11px] font-bold px-3 py-1.5 rounded-md transition ${activePortal === 'mahalla' ? 'bg-[#D97706] text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>Mahalla</button>
          <button onClick={() => {setActivePortal("uzmed"); setIsSuccess(false);}} className={`text-[11px] font-bold px-3 py-1.5 rounded-md transition ${activePortal === 'uzmed' ? 'bg-[#0891B2] text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}>UzMED</button>
        </div>
        
        <div className="w-px h-6 bg-slate-700"></div>
        
        <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700/50">
           <button onClick={() => setIsSafeTransaction(true)} className={`text-[10px] font-black px-3 py-1.5 rounded-md transition ${isSafeTransaction ? 'bg-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'text-slate-500 hover:text-slate-300'}`}>TOZA</button>
           <button onClick={() => setIsSafeTransaction(false)} className={`text-[10px] font-black px-3 py-1.5 rounded-md transition ${!isSafeTransaction ? 'bg-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]' : 'text-slate-500 hover:text-slate-300'}`}>XAVFLI</button>
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