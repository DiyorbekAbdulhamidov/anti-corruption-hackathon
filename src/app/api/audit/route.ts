import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { role, action, target_id } = body;

    // 1-SENARIY: Hokim yordamchisi yer ajratmoqchi
    if (role === 'hokim_yordamchisi' && action === 'yer_ajratish') {
      return NextResponse.json({
        status: 'DANGER',
        code: 'LAND_FRAUD_DETECTED',
        message: 'Tavsiya etilayotgan fuqaro nomida 1 ta avtomobil va ko\'chmas mulk aniqlandi. Ijtimoiy himoya mezonlariga to\'g\'ri kelmaydi!',
        require_document: false, // Bunga umuman ruxsat yo'q
      });
    }

    // 2-SENARIY: Maktab direktori xodim ishga olmoqchi
    if (role === 'maktab_direktori' && action === 'kadr_qabul') {
      return NextResponse.json({
        status: 'DANGER',
        code: 'FANTOM_EMPLOYEE',
        message: 'Fuqaro ayni paytda davlat chegarasidan tashqarida (migratsiyada) ekanligi aniqlandi. O\'lik jonlarni ishga olish taqiqlanadi!',
        require_document: true,
      });
    }

    // 3-SENARIY: UzASBO - Buxgalteriya tranzaksiyasi
    if (role === 'tashkilot_rahbari' && action === 'g'aznachilik_tolov') {
      return NextResponse.json({
        status: 'WARNING',
        code: 'NEW_COMPANY_RISK',
        message: 'Qabul qiluvchi MCHJ 3 kun oldin ochilgan. Soliq tarixi mavjud emas. Yuqori moliyaviy xavf!',
        require_document: true,
      });
    }

    // Default holat (Xavfsiz)
    return NextResponse.json({ status: 'SAFE', message: 'Tranzaksiya xavfsiz' });

  } catch (error) {
    return NextResponse.json({ error: 'Server xatosi' }, { status: 500 });
  }
}