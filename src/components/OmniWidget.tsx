"use client";
import { useState } from "react";

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

  const handleForceSubmit = async () => {
    setIsProcessing(true);
    // Real API so'rov o'rniga simulyatsiya
    setTimeout(() => onSuccess(), 1000); 
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900/70 backdrop-blur-md font-sans p-4">
      <div className="relative w-full max-w-2xl bg-white border border-gray-300 shadow-2xl rounded-md overflow-hidden animate-in fade-in zoom-in duration-200">
        
        <div className="bg-[#f8f9fa] border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">MOLIYAVIY KOMPLAYENS NAZORATI</h2>
              <p className="text-gray-500 text-xs font-mono">OMNI-AUDIT AVTOMATLASHTIRILGAN TIZIMI</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 text-sm text-gray-800">
            <p className="font-bold mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Hurmatli foydalanuvchi, operatsiyada xavf aniqlandi!
            </p>
            <p>
              Siz tasdiqlamoqchi bo'lgan <strong>{data?.amount}</strong> miqdoridagi operatsiya tizimning xavf-xatarlarni boshqarish algoritmlari tomonidan <span className="font-bold text-red-600">"Shubhali holat"</span> sifatida baholandi. Operatsiyani to'xtatish tavsiya etiladi.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded mb-6 font-mono text-sm text-gray-700 shadow-inner">
            <span className="font-bold text-red-600">Aniqlangan holat:</span> {data?.violationReason}
          </div>

          <div className="mb-8">
            {/* IXTIYORIY QILINDI */}
            <label className="block text-sm font-bold text-gray-700 mb-2">Qonuniy asoslovchi hujjat raqami <span className="text-gray-400 font-normal">(Ixtiyoriy)</span>:</label>
            <input 
              type="text" 
              placeholder="Masalan: VMQ-123 qarori yoki maxsus bayonnoma..."
              className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-2.5 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-2 font-medium">
              * Diqqat! Agar hujjat kiritilmasa ham operatsiyani davom ettirishingiz mumkin. Ammo tizim barcha harakatlaringiz va E-imzoingizni "Shubhali tranzaksiya" sifatida Antikorrupsiya jurnaliga yozib qo'yadi.
            </p>
          </div>

          <div className="flex justify-between items-center border-t border-gray-100 pt-4">
            <button onClick={onClose} className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded transition text-sm font-bold">
              BEKOR QILISH
            </button>
            <button 
              onClick={handleForceSubmit}
              disabled={isProcessing} 
              /* TUGMA ENDI BLOKLANMAYDI (DISABLED OLIB TASHLANDI) */
              className="px-6 py-2.5 bg-red-700 hover:bg-red-800 disabled:bg-gray-400 text-white rounded text-sm font-bold transition-all shadow-md flex items-center gap-2"
            >
              {isProcessing ? "Jurnalga yozilmoqda..." : "JAVOBGARLIKNI OLIB TASDIQLASH"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}