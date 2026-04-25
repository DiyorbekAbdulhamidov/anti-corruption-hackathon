"use client";
import { useState, useEffect } from "react";

export default function AdvancedDashboard() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString('uz-UZ', { hour12: false }));
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString('uz-UZ', { hour12: false })), 1000);
    return () => clearInterval(timer);
  }, []);

  const logs = [
    { id: "REQ-9942", time: "11:42:05", module: "UzASBO (G'azna)", inn: "305112233", entity: "Tezkor-Texnika MCHJ", amount: "5.45 mlrd", risk: "CRITICAL", ip: "195.158.28.11", status: "BLOKLANDI" },
    { id: "REQ-9941", time: "11:40:12", module: "Online-Mahalla", inn: "312049811", entity: "Jismoniy shaxs", amount: "Yer ajratish", risk: "HIGH", ip: "213.230.76.43", status: "PROKURATURA" },
    { id: "REQ-9940", time: "11:35:50", module: "ERP Maktab", inn: "315059200", entity: "Jismoniy shaxs", amount: "1.0 stavka", risk: "MEDIUM", ip: "84.54.70.19", status: "ASOS KUTILMOQDA" },
    { id: "REQ-9939", time: "11:22:15", module: "UzMED", inn: "201445566", entity: "1-Poliklinika", amount: "120 mln", risk: "CRITICAL", ip: "185.8.212.1", status: "BLOKLANDI" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans selection:bg-cyan-900">
      
      {/* Top Navigation Bar */}
      <nav className="border-b border-slate-800/60 bg-[#0F172A]/80 backdrop-blur-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-cyan-500 animate-pulse absolute -top-1 -right-1 blur-sm"></div>
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-900 to-blue-900 border border-cyan-700 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">OMNI-AUDIT <span className="text-cyan-500">NEXUS</span></h1>
            <p className="text-[10px] text-cyan-400/70 tracking-widest uppercase">Davlat xavfsizlik va nazorat shlyuzi</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end">
            <span className="text-xs text-slate-500">SERVER VAQTI (UZT)</span>
            <span className="text-lg font-mono font-bold text-cyan-400">{currentTime || "00:00:00"}</span>
          </div>
          <div className="h-10 w-px bg-slate-800"></div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-white">Bosh Nazoratchi</p>
              <p className="text-xs text-slate-400">Antikorrupsiya Agentligi</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 p-1">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="w-full h-full rounded-full" />
            </div>
          </div>
        </div>
      </nav>

      <div className="p-6 max-w-[1600px] mx-auto space-y-6">
        
        {/* KPI Row (Key Performance Indicators) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#1E293B]/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg></div>
            <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-1">ANIQLANGAN ANOMALIYALAR</h3>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-white">1,492</span>
              <span className="text-xs font-bold text-rose-500 mb-1 flex items-center bg-rose-500/10 px-1.5 py-0.5 rounded">↑ 12%</span>
            </div>
          </div>

          <div className="bg-[#1E293B]/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><svg className="w-16 h-16 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg></div>
            <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-1">SAQLAB QOLINGAN BYUDJET</h3>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-emerald-400">42.8</span>
              <span className="text-sm text-emerald-500 font-bold mb-1">MLRD UZS</span>
            </div>
          </div>

          <div className="bg-[#1E293B]/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden group">
            <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-2">TIZIM API SALOMATLIGI</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> UzASBO Gateway</span>
                <span className="font-mono text-emerald-400">12ms</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Soliq AI Router</span>
                <span className="font-mono text-emerald-400">18ms</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Kadastr Node</span>
                <span className="font-mono text-amber-400">145ms</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1E293B]/50 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
            <h3 className="text-slate-400 text-xs font-semibold tracking-wider mb-2">UMUMIY XAVF INDEKSI</h3>
            <div className="flex items-center gap-4 mt-2">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-700" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" strokeDasharray="75, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-xl font-bold text-white">75</span>
              </div>
              <div>
                <p className="text-rose-400 font-bold text-sm">KRITIK HOLAT</p>
                <p className="text-xs text-slate-500 mt-1">Tranzaksiyalar hajmi yuqori</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Live Graph & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Simulated Activity Chart */}
          <div className="lg:col-span-2 bg-[#1E293B]/40 border border-slate-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm font-bold text-white tracking-wider flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>
                TRANZAKSIYALAR DINAMIKASI (So'nggi 12 soat)
              </h2>
              <div className="flex gap-2 text-xs font-mono">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-cyan-500"></span> Ruxsat etilgan</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-rose-500"></span> Bloklangan</span>
              </div>
            </div>
            
            {/* CSS Bar Chart Simulation */}
            <div className="h-48 flex items-end justify-between gap-1 mt-4">
              {[40, 60, 45, 90, 65, 85, 120, 70, 50, 80, 110, 95, 60, 75, 45, 80, 50, 90, 100, 60, 85, 40, 70, 90].map((val, i) => (
                <div key={i} className="w-full relative group">
                  {/* Bloklangan qism (Qizil) */}
                  <div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-rose-900 to-rose-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all cursor-crosshair"
                    style={{ height: `${val * 0.3}%` }}
                  ></div>
                  {/* Ruxsat etilgan qism (Ko'k) */}
                  <div 
                    className="w-full bg-gradient-to-t from-cyan-900 to-cyan-500 rounded-t-sm opacity-60 group-hover:opacity-100 transition-all cursor-crosshair"
                    style={{ height: `${val}%`, marginBottom: `${val * 0.3}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>Hozir</span>
            </div>
          </div>

          {/* Target Modules Breakdown */}
          <div className="bg-[#1E293B]/40 border border-slate-800 rounded-xl p-6">
             <h2 className="text-sm font-bold text-white tracking-wider mb-6 border-b border-slate-800 pb-2">HIZMATLAR KESIMIDA XAVF</h2>
             <div className="space-y-5">
                {[
                  { name: "UzASBO (Davlat Xaridlari)", percent: 68, color: "bg-rose-500" },
                  { name: "Yer Ajratish Portali", percent: 45, color: "bg-amber-500" },
                  { name: "ERP Maktab (Kadrlar)", percent: 22, color: "bg-cyan-500" },
                  { name: "UzMED (Sog'liqni saqlash)", percent: 14, color: "bg-indigo-500" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="font-mono text-white">{item.percent}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div className={`${item.color} h-1.5 rounded-full`} style={{ width: `${item.percent}%` }}></div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Detailed Logs Table */}
        <div className="bg-[#1E293B]/60 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-5 border-b border-slate-800/80 bg-slate-900/50 flex justify-between items-center">
            <h2 className="text-sm font-bold text-white tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              JONLI XAVFSIZLIK JURNALI (LIVE LOGS)
            </h2>
            <button className="text-xs font-mono text-cyan-400 border border-cyan-800 bg-cyan-900/20 px-3 py-1 rounded hover:bg-cyan-900/40 transition">
              BARCHA LOGLARNI YUKLASH (CSV)
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-900/80 text-xs text-slate-400 font-semibold tracking-wider">
                <tr>
                  <th className="px-6 py-4">ID / VAQT</th>
                  <th className="px-6 py-4">MANBA MODULE / IP MANZIL</th>
                  <th className="px-6 py-4">STIR VA OBYEKT</th>
                  <th className="px-6 py-4">SUMMA / DETAL</th>
                  <th className="px-6 py-4">RISK DARAJASI</th>
                  <th className="px-6 py-4 text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
                {logs.map((log, index) => (
                  <tr key={index} className="hover:bg-slate-800/40 transition-colors cursor-pointer group">
                    <td className="px-6 py-4">
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">{log.id}</div>
                      <div className="text-slate-500">{log.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-300 font-sans font-medium">{log.module}</div>
                      <div className="text-slate-500 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                        {log.ip}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-cyan-400">{log.inn}</div>
                      <div className="text-slate-400 font-sans text-[11px] truncate w-40">{log.entity}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white font-bold">{log.amount}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-md font-bold text-[10px] tracking-widest ${
                        log.risk === 'CRITICAL' ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 
                        log.risk === 'HIGH' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 
                        'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {log.risk}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-bold ${
                        log.status === 'BLOKLANDI' ? 'bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.4)]' : 
                        log.status === 'PROKURATURA' ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(147,51,234,0.4)]' : 
                        'bg-slate-700 text-slate-300'
                      }`}>
                        {log.status === 'BLOKLANDI' && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>}
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}