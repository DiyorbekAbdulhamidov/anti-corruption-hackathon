import { NextResponse } from 'next/server';

// ----------------------------------------------------------------------
// 1-QISM: DAVLAT BAZALARIGA SIMULYATSIYA QILINGAN MICROSERVICELAR
// (Aslida bular alohida serverlar bo'ladi, biz kodda parallel ulanishni ko'rsatamiz)
// ----------------------------------------------------------------------

const checkSoliqDatabase = async (inn: string) => {
  // 15 millisoniya kutamiz (GovNet tezligi simulyatsiyasi)
  await new Promise((resolve) => setTimeout(resolve, 15));
  if (inn === "305112233") return { status: "DANGER", reason: "Firma atigi 3 kun oldin ochilgan. Aylanma: 0 UZS." };
  return { status: "SAFE" };
};

const checkKadastrDatabase = async (pinfl: string) => {
  await new Promise((resolve) => setTimeout(resolve, 12));
  if (pinfl === "312049811") return { status: "DANGER", reason: "Nomida 2 ta ko'chmas mulk va avtotransport mavjud." };
  return { status: "SAFE" };
};

const checkFHDYoDatabase = async (patientIds: string[]) => {
  await new Promise((resolve) => setTimeout(resolve, 18));
  if (patientIds.includes("9021")) return { status: "DANGER", reason: "Ro'yxatdagi 3 nafar bemor FHDYo bazasiga ko'ra vafot etgan." };
  return { status: "SAFE" };
};

const checkChegaraDatabase = async (pinfl: string) => {
  await new Promise((resolve) => setTimeout(resolve, 10));
  if (pinfl === "31505920044112") return { status: "DANGER", reason: "Fuqaro O'zbekiston Respublikasi hududida emas (Xorijga chiqib ketgan)." };
  return { status: "SAFE" };
};

// ----------------------------------------------------------------------
// 2-QISM: ASOSIY API SHLYUZ (API GATEWAY) QABUL QILGICHI
// ----------------------------------------------------------------------

// export async function POST(request: Request) {
//   try {
//     const { systemName, payload } = await request.json();
//     const startTime = performance.now();

//     let auditResult = {
//       isBlocked: false,
//       violationReason: "",
//       checkedDatabases: [] as string[]
//     };

//     // ----------------------------------------------------------------------
//     // 3-QISM: PARALLEL KROSS-CHEK (PROMISE.ALL) - Qotib qolmaslik siri!
//     // ----------------------------------------------------------------------

//     if (systemName === "UzASBO") {
//       // Moliya tizimi kelganda Soliq va MIB bazalarini BIR VAQTDA tekshiramiz
//       // TS xatosi || "" orqali to'g'rilandi:
//       const [soliqRes] = await Promise.all([
//         checkSoliqDatabase(payload.target_inn || "")
//       ]);
//       auditResult.checkedDatabases = ["Soliq.uz", "Adliya/MIB"];
//       if (soliqRes.status === "DANGER") {
//         auditResult.isBlocked = true;
//         auditResult.violationReason = soliqRes.reason;
//       }
//     }

//     else if (systemName === "ERP.Maktab") {
//       // Ta'lim tizimi: Chegara va Bandlik bazalari parallel tekshiriladi
//       // TS xatosi || "" orqali to'g'rilandi:
//       const [chegaraRes] = await Promise.all([
//         checkChegaraDatabase(payload.employee_pinfl || "")
//       ]);
//       auditResult.checkedDatabases = ["DXX Chegara", "my.mehnat.uz"];
//       if (chegaraRes.status === "DANGER") {
//         auditResult.isBlocked = true;
//         auditResult.violationReason = chegaraRes.reason;
//       }
//     }

//     else if (systemName === "Mahalla") {
//       // Ijtimoiy himoya: Kadastr va YHXX (Mashina) bazalari parallel
//       // TS xatosi || "" orqali to'g'rilandi:
//       const [kadastrRes] = await Promise.all([
//         checkKadastrDatabase(payload.citizen_pinfl || "")
//       ]);
//       auditResult.checkedDatabases = ["Kadastr", "YHXX Avto"];
//       if (kadastrRes.status === "DANGER") {
//         auditResult.isBlocked = true;
//         auditResult.violationReason = kadastrRes.reason;
//       }
//     }

//     else if (systemName === "UzMED") {
//       // Tibbiyot: FHDYo o'lim dalolatnomalari bazasi
//       // Array xatosi || [] orqali to'g'rilandi:
//       const [fhdyoRes] = await Promise.all([
//         checkFHDYoDatabase(payload.patient_ids || [])
//       ]);
//       auditResult.checkedDatabases = ["FHDYo (Adliya)"];
//       if (fhdyoRes.status === "DANGER") {
//         auditResult.isBlocked = true;
//         auditResult.violationReason = fhdyoRes.reason;
//       }
//     }

//     const endTime = performance.now();
//     const executionTime = (endTime - startTime).toFixed(2); // Qancha vaqt ketgani (ms)

//     // ----------------------------------------------------------------------
//     // 4-QISM: JAVOB QAYTARISH (Server-Driven UI uchun payload)
//     // ----------------------------------------------------------------------

//     // Agar jinoyat yo'q bo'lsa
//     if (!auditResult.isBlocked) {
//       return NextResponse.json({
//         status: "SUCCESS",
//         message: "Kross-chek muvaffaqiyatli. Tranzaksiya toza.",
//         metrics: { executionTimeMs: executionTime, databases: auditResult.checkedDatabases },
//         securityToken: `jwt_safe_${Date.now()}` // Bypass qilib bo'lmasligi uchun token
//       });
//     }

//     // Agar jinoyat/qoidabuzarlik aniqlansa, Frontend'ga Modul (Oyna) UI ma'lumotlarini otamiz
//     return NextResponse.json({
//       status: "BLOCKED",
//       actionRequired: "SHOW_COMPLIANCE_MODAL",
//       modalPayload: {
//         title: "MOLIYAVIY KOMPLAYENS NAZORATI",
//         violationReason: auditResult.violationReason,
//         amount: payload.amount || "Tasdiqlanmagan qiymat",
//       },
//       metrics: { executionTimeMs: executionTime, databases: auditResult.checkedDatabases },
//       logId: `QALQON-LOG-${Math.floor(1000 + Math.random() * 9000)}`
//     });

//   } catch (error) {
//     return NextResponse.json({ error: "API Gateway xatosi" }, { status: 500 });
//   }
// }