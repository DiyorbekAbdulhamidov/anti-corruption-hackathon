// @gov-uz/cross-audit-sdk (Kutubxona kodi)
import React, { createContext, useContext, useState } from 'react';

// 1. Context yaratamiz
const AuditContext = createContext<any>(null);

// 2. Butun davlat saytini o'rab turuvchi PROVIDER (Qobiq)
export const CrossAuditProvider = ({
  children,
  systemName,
  apiKey
}: {
  children: React.ReactNode,
  systemName: string,
  apiKey: string
}) => {
  const [modalData, setModalData] = useState<any>(null);

  // Bu funksiya davlat dasturchisining "Tasdiqlash" tugmasini to'sib qoladi!
  const verifyTransaction = async (payload: any) => {
    try {
      // Bizning Markaziy Serverga (API Gateway) yashirincha so'rov ketadi
      const response = await fetch('https://api.qalqon.gov.uz/v1/cross-audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}` // Xavfsizlik kaliti
        },
        body: JSON.stringify({ systemName, payload })
      });

      const result = await response.json();

      if (result.status === "BLOCKED") {
        // Jinoyat aniqlansa, qobiq o'zidan-o'zi QIZIL OYNANI (Modalni) ochadi!
        setModalData(result.modalPayload);
        return false; // Tranzaksiyani to'xtatish buyrug'i
      }

      return true; // Toza bo'lsa, davom etishga ruxsat
    } catch (error) {
      console.error("Audit SDK xatosi:", error);
      return false;
    }
  };

  return (
    <AuditContext.Provider value={{ verifyTransaction }}>
      {children}

      {/* Tizimga o'rnatilgan Yashirin Modal (Faqat xavf bo'lsa chiqadi) */}
      {modalData && (
        <div className="fixed inset-0 z-[99999] bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full border-t-4 border-red-600 shadow-2xl">
            <h2 className="text-xl font-bold text-red-700 mb-2">DIQQAT: TRANZAKSIYA BLOKLANDI!</h2>
            <p className="text-sm font-mono bg-gray-100 p-3 rounded mb-4">{modalData.violationReason}</p>
            <button
              onClick={() => setModalData(null)}
              className="w-full bg-gray-800 text-white font-bold py-3 rounded hover:bg-gray-900"
            >
              OYNANI YOPISH
            </button>
          </div>
        </div>
      )}
    </AuditContext.Provider>
  );
};

// 3. Dasturchilar ishlatadigan oddiy Hook
export const useAudit = () => useContext(AuditContext);