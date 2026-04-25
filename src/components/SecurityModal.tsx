"use client";
import { useState } from "react";

export default function SecurityModal({ onClose }: { onClose: () => void }) {
  const [justification, setJustification] = useState("");

  return (
    // Orqa fonni qoraytirib, blur qiluvchi himoya qatlami (Boshqa joyga bosib yopolmaydi)
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md font-sans">
      
      {/* Asosiy Dark Mode oyna - Qizil neon soya bilan */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-red-500/50 shadow-[0_0_50px_rgba(220,38,38,0.2)] rounded-xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Yuqori qizil chiziq va Sarlavha */}
        <div className="bg-red-600/20 border-b border-red-500/30 px-6 py-4 flex items-center gap-4">
          <div className="flex-shrink-0 animate-pulse">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-red-500 tracking-wider">TIZIM XABARI: YUQORI MOLIYAVIY XAVF</h2>
            <p className="text-red-400/80 text-sm">Antikorrupsiya agentligi nazorati ostida</p>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-300 mb-6 leading-relaxed">
            Siz tasdiqlamoqchi bo'lgan <span className="text-white font-bold bg-gray-800 px-2 py-1 rounded">5 450 000 000 UZS</span> miqdoridagi tranzaksiya tizim tomonidan <span className="text-red-400 font-bold border-b border-red-400">"Shubhali"</span> deb topildi. Baza ma'lumotlariga ko'ra, qabul qiluvchi firma:
          </p>

          {/* Ochiq ma'lumotlardan olingan FAKTLAR */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Ro'yxatdan o'tgan sana</p>
              <p className="text-white font-mono text-lg">22-Aprel, 2026</p>
              <p className="text-red-500 text-sm mt-1 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span> 3 kun oldin ochilgan
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Soliq tarixi va Aylanma</p>
              <p className="text-white font-mono text-lg">0.00 UZS</p>
              <p className="text-red-500 text-sm mt-1 font-semibold">Tarix mavjud emas</p>
            </div>
          </div>

          {/* Asos ko'rsatish bloki (Tuhmatdan qochish uchun) */}
          <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 mb-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>
            <h3 className="text-yellow-500 font-bold mb-3 text-sm uppercase tracking-wider">Qonuniy asosni kiriting</h3>
            <p className="text-slate-400 text-sm mb-4">
              Agar ushbu xarid maxsus qaror yoki qonuniy istisno asosida amalga oshirilayotgan bo'lsa, asosni ko'rsating. Aks holda, tranzaksiyani to'xtating.
            </p>
            
            <input 
              type="text" 
              placeholder="VMQ-raqami, Prezident qarori yoki boshqa hujjat raqami..."
              className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all mb-3 font-mono"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
            />
            
            <div className="flex items-center gap-3">
              <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded text-sm border border-slate-700 transition flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                PDF Fayl yuklash
              </button>
              <span className="text-slate-500 text-xs">Faqat .pdf, .jpg formatlarida</span>
            </div>
          </div>

          {/* Harakatlar paneli */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white px-4 py-2 transition"
            >
              Yopish va Bekor qilish
            </button>
            <button 
              className={`px-6 py-3 rounded-md font-bold transition-all shadow-lg flex items-center gap-2
                ${justification.length > 5 
                  ? 'bg-yellow-600 hover:bg-yellow-500 text-white shadow-yellow-600/20' 
                  : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/30'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              ERI orqali javobgarlik bilan imzolash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}