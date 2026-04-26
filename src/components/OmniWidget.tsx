"use client";
import { useState, useEffect } from "react";

export default function OmniWidget({
  onClose,
  onSuccess,
  data = { amount: "Noma'lum qiymat", violationReason: "Baza bilan aloqa yo'q" }
}: {
  onClose: () => void,
  onSuccess: () => void,
  data?: any
}) {
  const [justification, setJustification] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [sessionHash, setSessionHash] = useState("");

  // Haqiqiylikni oshirish uchun fake E-imzo xeshi generatsiya qilamiz
  useEffect(() => {
    setSessionHash("TRX-" + Math.random().toString(36).substring(2, 12).toUpperCase() + "-GOV");
  }, []);

  const handleForceSubmit = async () => {
    setIsProcessing(true);
    // Real API so'rov o'rniga simulyatsiya
    setTimeout(() => onSuccess(), 1500);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]/85 backdrop-blur-md font-sans p-4 selection:bg-red-500 selection:text-white">
      <div className="relative w-full max-w-3xl bg-[#0a0f1c] border border-red-900/50 shadow-[0_0_50px_rgba(220,38,38,0.15)] rounded-lg overflow-hidden animate-in fade-in zoom-in duration-300">

        {/* Qizil Rasmiy Header */}
        <div className="bg-gradient-to-r from-red-950 to-[#0a0f1c] border-b border-red-900/50 px-6 py-5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 bg-red-900/40 rounded border border-red-500/50 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-widest">Qat'iy Ogohlantirish!</h2>
              <p className="text-red-400 text-[10px] font-mono tracking-widest uppercase mt-1">Yagona Kross-Audit Tizimi • Xavfsizlik protokoli</p>
            </div>
          </div>
          <div className="hidden md:block text-right relative z-10">
            <div className="text-[10px] text-slate-500 font-mono">Tizim vaqti:</div>
            <div className="text-xs text-red-400 font-mono font-bold">{new Date().toLocaleString('uz-UZ')}</div>
          </div>
        </div>

        <div className="p-8">
          {/* Vahimali Xabar */}
          <div className="mb-6 flex gap-4 items-start">
            <div className="mt-1">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
              </span>
            </div>
            <div>
              <p className="text-white font-bold text-lg mb-2">Tranzaksiya Kross-Chek blokirovkasiga tushdi!</p>
              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                Siz tasdiqlamoqchi bo'lgan <strong className="text-white border-b border-dashed border-slate-500">{data?.amount}</strong> qiymatidagi operatsiya tizim algoritmlari tomonidan <span className="text-red-400 font-bold">Korrupsion Xavf (Red Flag)</span> sifatida aniqlandi. Operatsiyani davom ettirish Jinoyat Kodeksining tegishli moddalari (Talon-toroj qilish) bilan javobgarlikka tortilishga sabab bo'lishi mumkin.
              </p>
            </div>
          </div>

          {/* Terminal uslubidagi xato logi */}
          <div className="bg-[#050810] border border-red-900/30 rounded-md mb-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
            <div className="px-4 py-2 bg-[#0a0f1c] border-b border-red-900/30 flex justify-between items-center">
              <span className="text-[10px] text-slate-500 font-mono uppercase">Avtomatlashtirilgan Tahlil Natijasi</span>
              <span className="text-[10px] text-red-500 font-mono border border-red-900/50 bg-red-950/30 px-2 py-0.5 rounded">STATUS: BLOCKED</span>
            </div>
            <div className="p-4 font-mono text-[13px] text-slate-300 leading-relaxed">
              <span className="text-red-500 font-bold">[!] Aniqlangan holat:</span> <br />
              <span className="text-amber-400">{data?.violationReason}</span>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">
              Istisno holat uchun maxsus hujjat raqami <span className="text-slate-500 font-normal normal-case tracking-normal">(Ixtiyoriy)</span>:
            </label>
            <input
              type="text"
              placeholder="Masalan: Vazirlar Mahkamasining maxsus bayonnomasi..."
              className="w-full bg-[#050810] border border-slate-700 text-white px-5 py-3.5 rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-all font-mono placeholder-slate-600 shadow-inner"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
            />

            {/* Raqamli Iz (Digital Footprint) */}
            <div className="mt-4 p-3 bg-red-950/20 border border-red-900/20 rounded text-xs text-red-300/80 font-mono leading-relaxed flex gap-3">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
              <p>
                Agar kiritmasangiz ham tizim operatsiyani o'tkazadi. <strong>Lekin e'tibor bering:</strong> Ushbu harakatingiz, sizning shaxsiy E-imzoingiz va IP manzilingiz (<span className="text-white opacity-70">192.168.1.104</span>) <strong>"Shubhali tranzaksiyalar yagona reyestri"</strong>ga o'zgartirib bo'lmaydigan (immutable) xesh (<span className="text-white opacity-70">{sessionHash}</span>) ko'rinishida yozib qo'yiladi.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-slate-800 pt-6 gap-4">
            <button onClick={onClose} className="w-full sm:w-auto text-slate-400 hover:text-white hover:bg-slate-800 px-6 py-3 rounded-md transition text-xs font-bold uppercase tracking-widest border border-transparent hover:border-slate-700">
              Operatsiyani Bekor Qilish
            </button>
            <button
              onClick={handleForceSubmit}
              disabled={isProcessing}
              className="w-full sm:w-auto px-8 py-3 bg-red-700 hover:bg-red-600 disabled:bg-slate-700 text-white rounded-md text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] disabled:shadow-none flex items-center justify-center gap-3 border border-red-600 disabled:border-slate-600"
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Reyestrga yozilmoqda...
                </>
              ) : (
                "Javobgarlikni olib, tasdiqlash"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}