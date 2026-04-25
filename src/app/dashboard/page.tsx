"use client";
import { useState, useEffect } from "react";

export default function CyberSecDashboard() {
  const [logs, setLogs] = useState<any[]>([]);
  const [time, setTime] = useState("");

  // Serverdan jonli (Real-time) API orqali loglarni o'qish
  useEffect(() => {
    setTime(new Date().toLocaleTimeString('uz-UZ', { hour12: false }));
    const timeInterval = setInterval(() => setTime(new Date().toLocaleTimeString('uz-UZ', { hour12: false })), 1000);
    
    const fetchAPI = async () => {
      try {
        const res = await fetch('/api/audit');
        const data = await res.json();
        setLogs(data);
      } catch (err) {}
    };

    fetchAPI();
    const logInterval = setInterval(fetchAPI, 1500); // Har 1.5 soniyada serverni yangilash
    
    return () => { clearInterval(timeInterval); clearInterval(logInterval); };
  }, []);

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-300 font-sans selection:bg-cyan-900 overflow-x-hidden">
      
      {/* Kiber Navigatsiya */}
      <nav className="border-b border-[#1E293B] bg-[#0A111F] px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-900 to-blue-900 border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-widest drop-shadow-md">OMNI-AUDIT <span className="text-cyan-400">NEXUS</span></h1>
            <p className="text-[11px] text-cyan-500/80 tracking-[0.2em] uppercase font-bold mt-1">Davlat Tranzaksiyalarini Nazorat Qilish Markazi</p>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-500 font-bold tracking-widest">SERVER VAQTI (UZT)</span>
            <span className="text-2xl font-mono font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">{time || "00:00:00"}</span>
          </div>
          <div className="h-12 w-px bg-slate-800"></div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-black text-white uppercase">Bosh Nazoratchi</p>
              <p className="text-xs text-rose-500 font-bold">Anti-Korrupsiya</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-rose-500 p-1 flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(244,63,94,0.3)]">
              <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-8 max-w-[1800px] mx-auto space-y-8">
        
        {/* KPI Statistikalar - Murakkab vizual */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-b from-[#0F172A] to-[#0A111F] border border-slate-800 rounded-xl p-6 relative overflow-hidden shadow-lg">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-slate-400 text-xs font-bold tracking-widest mb-2">ANIQLANGAN ANOMALIYALAR</h3>
            <div className="flex items-end gap-3 mt-4">
              <span className="text-5xl font-black text-white">{1492 + logs.filter(l => l.isNew).length}</span>
              <span className="text-sm font-bold text-rose-500 bg-rose-500/10 border border-rose-500/20 px-2 py-1 rounded">↑ Kritik O'sish</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#0F172A] to-[#0A111F] border border-slate-800 rounded-xl p-6 relative overflow-hidden shadow-lg">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-slate-400 text-xs font-bold tracking-widest mb-2">SAQLAB QOLINGAN BYUDJET</h3>
            <div className="flex items-end gap-2 mt-4">
              <span className="text-5xl font-black text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">42.8</span>
              <span className="text-lg text-emerald-500 font-bold mb-1">MLRD UZS</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#0F172A] to-[#0A111F] border border-slate-800 rounded-xl p-6 relative">
            <h3 className="text-slate-400 text-xs font-bold tracking-widest mb-4">TIZIM API SHLYUZLARI</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">UzASBO Gateway</span>
                <span className="font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded font-bold">12ms OK</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Soliq AI Router</span>
                <span className="font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded font-bold">18ms OK</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">FHDYo & Kadastr</span>
                <span className="font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded font-bold">SYNCING...</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#0F172A] to-[#0A111F] border border-rose-900/50 rounded-xl p-6 relative">
             <div className="absolute inset-0 bg-rose-500/5 animate-pulse rounded-xl"></div>
             <h3 className="text-rose-400 text-xs font-bold tracking-widest mb-2">UMUMIY XAVF INDEKSI</h3>
             <div className="flex items-center gap-6 mt-4">
                <div className="text-6xl font-black text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]">92</div>
                <div>
                   <p className="text-white font-bold tracking-wider">QIZIL HUDUD</p>
                   <p className="text-xs text-slate-400 mt-1">Tranzaksiyalarni bloklash tavsiya etiladi</p>
                </div>
             </div>
          </div>
        </div>

        {/* JONLI LOGLAR JADVALI */}
        <div className="bg-[#0A111F] border border-slate-800 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          <div className="p-6 border-b border-slate-800 bg-[#0F172A] flex justify-between items-center">
            <h2 className="text-lg font-black text-white tracking-widest flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping shadow-[0_0_10px_rgba(244,63,94,1)]"></span>
              JONLI KIBER-MONITORING (LIVE LOGS)
            </h2>
            <div className="flex gap-4">
               <span className="flex items-center gap-2 text-xs font-bold text-cyan-400 bg-cyan-900/30 border border-cyan-800 px-3 py-1.5 rounded"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span> SERVER ULANGAN</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-[#0B1120] text-[11px] text-slate-400 font-black tracking-widest uppercase border-b border-slate-800">
                <tr>
                  <th className="px-8 py-5">TRINZAKSIYA ID / VAQT</th>
                  <th className="px-8 py-5">MANBA (DAVLAT PORTALI)</th>
                  <th className="px-8 py-5">STIR / MAQSADLI OBYEKT</th>
                  <th className="px-8 py-5">SUMMA / QIYMAT</th>
                  <th className="px-8 py-5 text-center">RISK DARAJASI</th>
                  <th className="px-8 py-5 text-right">YAKUNIY XULOSA</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                {logs.map((log, index) => (
                  <tr key={index} className={`border-b border-slate-800/50 transition-all duration-500 ${log.isNew ? 'bg-rose-950/40' : 'hover:bg-[#1E293B]/40'}`}>
                    <td className="px-8 py-5">
                      <div className="text-white font-bold flex items-center gap-2">
                        {log.isNew && <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>}
                        {log.id}
                      </div>
                      <div className="text-slate-500 text-xs mt-1">{log.time}</div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="text-cyan-400 font-bold font-sans">{log.module}</div>
                      <div className="text-slate-600 text-xs mt-1">IP: {log.ip}</div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="text-white font-bold">{log.inn}</div>
                      <div className="text-slate-500 text-xs mt-1 font-sans truncate max-w-[200px]">{log.entity}</div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="text-white font-black tracking-wider">{log.amount}</div>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className={`inline-block px-3 py-1 rounded border text-[10px] font-black tracking-widest ${
                        log.risk === 'CRITICAL' ? 'bg-rose-500/10 text-rose-500 border-rose-500/50 shadow-[0_0_10px_rgba(244,63,94,0.2)]' : 
                        log.risk === 'HIGH' ? 'bg-amber-500/10 text-amber-500 border-amber-500/50' : 
                        'bg-blue-500/10 text-blue-400 border-blue-500/50'
                      }`}>
                        {log.risk}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <span className={`inline-flex items-center justify-end w-full gap-2 px-4 py-2 rounded font-sans text-xs font-black tracking-wider uppercase ${
                        log.status === 'BLOKLANDI' ? 'bg-rose-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.5)]' : 
                        log.status === 'PROKURATURA' ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)]' : 
                        'bg-[#1E293B] text-amber-500 border border-slate-700'
                      }`}>
                        {log.status === 'BLOKLANDI' && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>}
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