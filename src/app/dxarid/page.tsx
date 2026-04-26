"use client";
import { useState } from "react";
import SecurityModal from "@/components/SecurityModal";

export default function DxaridPortal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Bu funksiya "Tasdiqlash" tugmasi bosilganda ishlaydi
  const handleApprove = () => {
    // Shartnomani darhol tasdiqlash o'rniga, bizning integratsiya qilingan tizim ishga tushadi!
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-600">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Davlat Xaridlari Portali (DXARID.UZ)</h1>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-md mb-8">
          <h2 className="text-lg font-semibold text-blue-800 mb-4">Tasdiqlash kutilayotgan shartnoma:</h2>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Obyekt:</strong> 15-maktab uchun kompyuter jamlanmalari xaridi</li>
            <li><strong>Yetkazib beruvchi:</strong> "Tezkor-Texnika MCHJ" (STIR: 305112233)</li>
            <li><strong>Summa:</strong> 5 450 000 000 UZS</li>
          </ul>
        </div>

        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition">
            Bekor qilish
          </button>
          <button
            onClick={handleApprove}
            className="px-6 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition"
          >
            Shartnomani Imzolash (ERI orqali)
          </button>
        </div>
      </div>

      {/* BIZNING INTEGRATSIYA QILINGAN XAVFSIZLIK QATLAMIMIZ SHU YERDA CHAQIRILADI */}
      {/* @ts-ignore */}
      {isModalOpen && <SecurityModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}