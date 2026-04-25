import { NextResponse } from 'next/server';

// Xotiradagi vaqtinchalik baza (Live Demo uchun)
let globalAuditLogs = [
  { id: "REQ-9941", time: "11:40:12", module: "Online-Mahalla", inn: "312049811", entity: "Jismoniy shaxs", amount: "Yer ajratish", risk: "HIGH", ip: "213.230.76.43", status: "PROKURATURA", isNew: false },
  { id: "REQ-9940", time: "11:35:50", module: "ERP Maktab", inn: "315059200", entity: "Jismoniy shaxs", amount: "1.0 stavka", risk: "MEDIUM", ip: "84.54.70.19", status: "ASOS KUTILMOQDA", isNew: false }
];

export async function GET() {
  return NextResponse.json(globalAuditLogs);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.action === 'VERIFY_TRANSACTION') {
      const { inn } = body;
      if (inn === '305112233') {
        return NextResponse.json({
          status: 'DANGER',
          riskLevel: 'CRITICAL',
          message: 'Firma 3 kun oldin ochilgan. Soliq tarixi mavjud emas.',
        });
      }
      return NextResponse.json({ status: 'SAFE' });
    }

    if (body.action === 'FORCE_SUBMIT') {
      const { data } = body;
      const newLog = {
        id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
        time: new Date().toLocaleTimeString('uz-UZ', { hour12: false }),
        ...data,
        isNew: true
      };
      
      globalAuditLogs.unshift(newLog); // Eng tepaga qo'shish

      return NextResponse.json({ 
        success: true, 
        message: "Tranzaksiya server tomonidan bloklandi va logga yozildi",
        security_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.audit_${Date.now()}`
      });
    }

    return NextResponse.json({ error: 'Ruxsatsiz so\'rov' }, { status: 403 });
  } catch (error) {
    return NextResponse.json({ error: 'Server halokati' }, { status: 500 });
  }
}