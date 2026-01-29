export const scenarios = [
    // Positive Functionality Tests
    { id: 'Pos_Fun_0001', input: 'mama bath kanavaa', expected: 'මම බත් කනවා' },
    { id: 'Pos_Fun_0002', input: 'mama kaeema kaeeva saha vathura bivvaa namuth  thaama badee amaruva thiyenavaa ', expected: 'මම කෑම කෑව සහ වතුර බිව්වා නමුත්  තාම බඩේ අමරුව තියෙනවා' },
    { id: 'Pos_Fun_0003', input: 'adha godaak vaessa unath api ada anivaaryayenma panthi yanna epaeyi', expected: 'අද ගොඩාක් වැස්ස උනත් අපි අඩ අනිවාර්යයෙන්ම පන්ති යන්න එපැයි' },
    { id: 'Pos_Fun_0004', input: 'mata help ekak oone', expected: 'මට help එකක් ඕනෙ' },
    { id: 'Pos_Fun_0005', input: 'mama heta  ennam', expected: 'මම  හෙට එන්නම්' },
    { id: 'Pos_Fun_0006', input: 'karuNaakara hemin yanna', expected: 'කරුණාකර හෙමින් යන්න' },
    { id: 'Pos_Fun_0007', input: 'dhaenma methanata enna.', expected: 'දැන්ම මෙතනට එන්න.' },
    { id: 'Pos_Fun_0008', input: 'kohomadha oyaata?', expected: 'කොහොමද ඔයාට?' },
    { id: 'Pos_Fun_0009', input: 'chuuti puthaa', expected: 'චූටි පුතා' },
    { id: 'Pos_Fun_0010', input: 'suba udhaeesanak', expected: 'සුබ උදෑසනක්' },
    { id: 'Pos_Fun_0011', input: 'kanagaatu venna epaa.', expected: 'කනගාටු වෙන්න එපා.' },
    { id: 'Pos_Fun_0012', input: 'machan  mokadha venne?', expected: 'මචන්  මොකද වෙන්නෙ?' },
    { id: 'Pos_Fun_0013', input: 'nangi mal kadanavaa', expected: 'නන්ගි මල් කඩනවා' },
    { id: 'Pos_Fun_0014', input: 'kaeema kaeevaa', expected: 'කෑම කෑවා' },
    { id: 'Pos_Fun_0015', input: 'thava thava dhenna', expected: 'තව තව දෙන්න' },
    { id: 'Pos_Fun_0016', input: 'mama heta udheeta ennam', expected: 'මම හෙට උදේට එන්නම්' },
    { id: 'Pos_Fun_0017', input: 'adha udhaeesana godaak vaessa nisaa mama paasala yanna godhak parakku vunaa. emanisaa bus ekee yanavaata vadaa thriiviil ekaka yanna hithuvaa. namuth paare vaahana thadhabadhaya godaak thibunaa. me nisaa mata panthiya aaramba venna kalin methanata enna baeri vunaa. eth mama hithanava heta idhan vath veelaasanin enna puluvan vei kiyala.', expected: 'අද උදෑසන ගොඩාක් වැස්ස නිසා මම පාසල යන්න ගොදක් පරක්කු වුනා. එමනිසා bus එකේ යනවාට වඩා ත්‍රීවීල් එකක යන්න හිතුවා. නමුත් පාරෙ වාහන තදබදය ගොඩාක් තිබුනා. මෙ නිසා මට පන්තිය ආරම්බ වෙන්න කලින් මෙතනට එන්න බැරි වුනා. එත් මම හිතනව හෙට ඉදන් වත් වේලාසනින් එන්න පුලුවන් වේ කියල.' },
    { id: 'Pos_Fun_0018', input: 'api okkoma yamu?', expected: 'අපි ඔක්කොම යමු?' },
    { id: 'Pos_Fun_0019', input: 'mama enne naehae', expected: 'මම එන්නෙ නැහැ' },
    { id: 'Pos_Fun_0020', input: 'galle yanavaa', expected: 'galle යනවා' },
    { id: 'Pos_Fun_0021', input: 'mama ASAP ennam', expected: 'මම ASAP එන්නම්' },
    { id: 'Pos_Fun_0022', input: '8.30 AM ta enna', expected: '8.30 AM ට එන්න' },
    { id: 'Pos_Fun_0023', input: 'Rs 5000 k dhenna', expected: 'Rs 5000 ක් දෙන්න' },
    { id: 'Pos_Fun_0024', input: 'dhesaembar 25 nivaadu', expected: 'දෙසැම්බර් 25 නිවාඩු ' },
    { id: 'Pos_Fun_0025', input: 'vathura 5L oonee', expected: 'වතුර 5L ඕනේ' },

    // Negative Functionality Tests
    { id: 'Neg_Fun_0001', input: '', expected: '' },
    { id: 'Neg_Fun_0002', input: '776785258', expected: '776785258' },
    { id: 'Neg_Fun_0003', input: '#%$^*@', expected: '#%$^*@' },
    { id: 'Neg_Fun_0004', input: 'Hello Dear', expected: 'Hello Dear' },
    { id: 'Neg_Fun_0005', input: 'mama 123 karanavaa', expected: 'මම 123 කරනවා' },
    { id: 'Neg_Fun_0006', input: 'mama  yanavaa', expected: 'මම  යනවා' },
    { id: 'Neg_Fun_0007', input: 'zzz ccc xxx', expected: 'zzz ccc xxx' },
    { id: 'Neg_Fun_0008', input: 'm@m@ giy@@', expected: 'm@m@ ගිය්@@' },
    { id: 'Neg_Fun_0009', input: 'machan thx bn', expected: 'මචන් තx බ්න්' },
    { id: 'Neg_Fun_0010', input: 'maru bn meeka', expected: 'මරු බ්න් මේක' },

    // Positive UI Scenarios
    { id: 'Pos_UI_0001', input: 'mama', expected: 'මම' },
    { id: 'Pos_UI_0002', input: "Click 'Clear' button", expected: "Input box should become empty" },

    // Negative UI Scenarios
    { id: 'Neg_UI_0001', input: '(Paragraph > 5000 chars)', expected: 'System should show a warning or stop input' },
    { id: 'Neg_UI_0002', input: 'Text with HTML tags', expected: '<b>Test</b>' }
];