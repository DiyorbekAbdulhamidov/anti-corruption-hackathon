"use client";
import { useState } from "react";

export default function OmniWidget({ onClose, onSuccess }: { onClose: () => void, onSuccess: () => void }) {
  const [justification, setJustification] = useState("");

  // Amaldor "Baribir o'tkazaman" tugmasini bosganda ishlaydigan mantiq
  const handleForceSubmit = () => {
    const newLog = {
      id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
      time: new Date().toLocaleTimeString('uz-UZ', { hour12: false }),
      module: "UzASBO (G'azna)",
      inn: "305112233",
      entity: "Tezkor-Texnika MCHJ",
      amount: "5.45 mlrd",
      risk: "CRITICAL",
      ip: "195.158.28.11",
      // Agar asos kiritsa "Asos kutilmoqda", kiritmasa to'g'ridan-to'g'ri "Prokuraturaga" ketadi
      status: justification.length > 5 ? "ASOS KUTILMOQDA" : "PROKURATURAGA UZATILDI",
      isNew: true // Ekranda qizil yonib turishi uchun flag
    };

    // localStorage ga yangi jinoyatni yozamiz
    const existingLogs = JSON.parse(localStorage.getItem('omniLogs') || '[]');
    localStorage.setItem('omniLogs', JSON.stringify([newLog, ...existingLogs]));
    
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md font-sans p-4">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-red-500 shadow-[0_0_50px_rgba(220,38,38,0.3)] rounded-xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        <div className="bg-red-600/20 border-b border-red-500/30 px-6 py-4 flex items-center gap-4">
          <div className="flex-shrink-0 animate-pulse">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-red-500 tracking-wider">TIZIM XABARI: YUQORI MOLIYAVIY XAVF</h2>
            <p className="text-red-400/80 text-sm">OMNI-AUDIT xavfsizlik shlyuzi</p>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Siz tasdiqlamoqchi bo'lgan <span className="text-white font-bold bg-slate-800 px-2 py-1 rounded">5 450 000 000 UZS</span> miqdoridagi tranzaksiya tizim tomonidan <span className="text-red-400 font-bold border-b border-red-400">"Shubhali"</span> deb topildi. Firma atigi 3 kun oldin ochilgan va soliq tarixi yo'q!
          </p>

          <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 mb-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>
            <h3 className="text-yellow-500 font-bold mb-3 text-sm uppercase tracking-wider">Qonuniy asosni kiriting</h3>
            <p className="text-slate-400 text-sm mb-4">Ushbu xarid maxsus qaror asosida bo'lsa, asosni ko'rsating. Aks holda tranzaksiyani to'xtating.</p>
            <input 
              type="text" 
              placeholder="VMQ-raqami yoki maxsus ruxsatnoma..."
              className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-yellow-500 transition-all mb-3 font-mono"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center mt-8">
            <button onClick={onClose} className="text-slate-400 hover:text-white px-4 py-2 transition">Bekor qilish</button>
            <button 
              onClick={handleForceSubmit}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-md font-bold transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] flex items-center gap-2"
            >
              ERI orqali javobgarlik bilan imzolash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}