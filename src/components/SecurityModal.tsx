"use client";
import { useState, useEffect } from "react";

export default function SecurityModal({
  onClose,
  onSuccess,
  data = { amount: "5 450 000 000 UZS", violationReason: "Qabul qiluvchi firma 3 kun oldin ochilgan va soliq aylanmasi nolga teng." }
}: {
  onClose: () => void;
  onSuccess: () => void;
  data?: any;
}) {
  const [justification, setJustification] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [sessionHash, setSessionHash] = useState("");

  // Kiberxavfsizlik xeshi generatsiyasi
  useEffect(() => {
    setSessionHash("TRX-AUDIT-" + Math.random().toString(36).substring(2, 12).toUpperCase());
  }, []);

  const handleForceSubmit = () => {
    setIsProcessing(true);
    // Real API so'rov o'rniga simulyatsiya
    setTimeout(() => onSuccess(), 1500);
  };

  return (
    // Orqa fonni qoraytirib, blur qiluvchi himoya qatlami
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]/90 backdrop-blur-md font-sans p-4">

      {/* Asosiy Dark Mode oyna - Qizil neon soya bilan */}
      <div className="relative w-full max-w-3xl bg-[#0a0f1c] border border-red-900/60 shadow-[0_0_60px_rgba(220,38,38,0.15)] rounded-xl overflow-hidden animate-in fade-in zoom-in duration-300">

        {/* Yuqori qizil chiziq va Sarlavha */}
        <div className="bg-gradient-to-r from-red-950 to-[#0a0f1c] border-b border-red-900/50 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 relative">
              <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></span>
              <div className="w-12 h-12 bg-red-900/40 rounded border border-red-500/50 flex items-center justify-center text-red-500 relative z-10 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-widest uppercase">Tizim Xabari: Tranzaksiya Bloklandi</h2>
              <p className="text-red-400 text-xs font-mono mt-1">Yagona Kross-Audit Tizimi • Qizil Xavf (Red Flag)</p>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-[10px] text-slate-500 font-mono">Tizim vaqti:</div>
            <div className="text-xs text-red-400 font-mono font-bold">{new Date().toLocaleString('uz-UZ')}</div>
          </div>
        </div>

        <div className="p-8">
          <p className="text-slate-300 mb-6 leading-relaxed text-justify text-[15px]">
            Siz tasdiqlamoqchi bo'lgan <span className="text-white font-bold bg-slate-800 px-2 py-1 rounded border border-slate-700">{data?.amount}</span> qiymatidagi operatsiya Kross-Audit shlyuzi tomonidan ushlab qolindi va <span className="text-red-400 font-bold border-b border-red-400/50 pb-0.5">"Shubhali Korrupsion Holat"</span> sifatida malakalandi.
          </p>

          {/* Ochiq ma'lumotlardan olingan FAKTLAR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#050810] border border-red-900/30 p-5 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Adliya vazirligi reyestri</p>
              <p className="text-white font-mono text-lg mb-1">22-Aprel, 2026</p>
              <p className="text-amber-500 text-xs font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Yaratilganiga atigi 3 kun bo'lgan
              </p>
            </div>
            <div className="bg-[#050810] border border-red-900/30 p-5 rounded-lg relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Davlat Soliq Qo'mitasi bazasi</p>
              <p className="text-white font-mono text-lg mb-1">0.00 UZS</p>
              <p className="text-red-500 text-xs font-bold flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Soliq aylanmasi mavjud emas
              </p>
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-900/20 p-4 rounded mb-6 font-mono text-xs text-red-300 leading-relaxed">
            <span className="font-bold text-red-500">[!] Algoritm xulosasi:</span> {data?.violationReason}
          </div>

          {/* Asos ko'rsatish bloki */}
          <div className="bg-[#050810] p-6 rounded-lg border border-slate-800 mb-6 relative">
            <h3 className="text-yellow-500 font-bold mb-2 text-xs uppercase tracking-widest flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Qonuniy asosni kiriting (Istisno holatlar uchun)
            </h3>
            <p className="text-slate-500 text-xs mb-4">
              Agar ushbu operatsiya maxsus qaror asosida amalga oshirilayotgan bo'lsa, asosni ko'rsating.
            </p>

            <input
              type="text"
              placeholder="VMQ-raqami, maxsus bayonnoma yoki buyruq..."
              className="w-full bg-[#0a0f1c] border border-slate-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all mb-4 font-mono text-sm shadow-inner placeholder-slate-600"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2.5 rounded text-xs font-bold border border-slate-700 transition flex items-center gap-2 uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  Hujjat yuklash
                </button>
                <span className="text-slate-600 text-[10px] font-mono">.PDF / .JPG</span>
              </div>

              <div className="text-[10px] text-slate-500 font-mono text-right">
                Sessiya Xeshi: <span className="text-slate-400">{sessionHash}</span>
              </div>
            </div>
          </div>

          {/* Harakatlar paneli */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 border-t border-slate-800 pt-6">
            <button
              onClick={onClose}
              className="w-full sm:w-auto text-slate-400 hover:text-white px-4 py-2.5 transition font-bold uppercase tracking-widest text-xs border border-transparent hover:border-slate-700 rounded"
            >
              Bekor qilish va Yopish
            </button>
            <button
              onClick={handleForceSubmit}
              disabled={isProcessing}
              className={`w-full sm:w-auto px-6 py-3 rounded-md font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 border
                ${justification.length > 5
                  ? 'bg-yellow-600 hover:bg-yellow-500 text-white shadow-[0_0_20px_rgba(202,138,4,0.3)] border-yellow-500'
                  : 'bg-red-700 hover:bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] border-red-600'}
                disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  REYESTRGA YOZILMOQDA...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  {justification.length > 5 ? 'ASOS BILAN IMZOLASH' : 'JAVOBGARLIK BILAN IMZOLASH'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}