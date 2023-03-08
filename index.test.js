const utils = require("./index");

describe("[Görev 1] nesneyiTrimle", () => {
  test("[1] propları trimlenmiş bir nesne döndürüyor", () => {
    // ÖRNEK
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.nesneyiTrimle(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 2] verileniTrimle", () => {
  // test('[3] verilen propu trimliyor', () => {})
  // test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {})
  test("[3] verilen propu trimliyor", () => {
    const input = ({ isim: "  jane  ", yas: " 34 " }, "isim");
    const expected = { isim: "jane", yas: " 34 " };
    const actual = utils.verileniTrimle(input);
    expect(actual).toEqual(expected);
  });
  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    const input = ({ isim: "  jane  ", yas: " 34 " }, "isim");
    const expected = /yas: " 34 "/;
    const actual = utils.verileniTrimle(input);
    expect(actual).toMatch(expected);
  });
});

describe("[Görev 3] enBuyukTamsayiyiBul", () => {
  // test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {})
  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor", () => {
    const input = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }];
    const expected = 3;
    const actual = utils.enBuyukTamsayiyiBul(input);
    expect(actual).toBe(expected);
  });
});

describe("[Görev 4] Sayici", () => {
  let sayici;
  beforeEach(() => {
    sayici = new utils.Sayici(3); // her test yeni bir sayı ile başlatılıyor
  });
  // test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {})
  // test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {})
  // test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {})
  test("[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor", () => {
    const expected = 3;
    const actual = sayici.asagiSay();
    expect(actual).toBe(expected);
  });
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    const expected = 2;
    sayici.asagiSay();
    sayici.asagiSay();
    expect(sayici).toBe(expected);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    const expected = 0;
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    expect(sayici).toBe(expected);
  });
});

describe("[Görev 5] Mevsimler", () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler(); // her test yeni bir mevsimle başlar
  });
  // test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {})
  // test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {})
  // test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {})
  // test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {})
  // test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {})
  // test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {})
  test("[9] mevsimler.sonraki İLK çağırılışında 'yaz' döndürüyor", () => {
    const expected = "yaz";
    mevsimler.sonraki();
    expect(mevsimler).toBe(expected);
  });
  test("[10] mevsimler.sonraki İKİNCİ çağırılışında 'sonbahar' döndürüyor", () => {
    const expected = "sonbahar";
    mevsimler.sonraki();
    mevsimler.sonraki();
    expect(mevsimler).toBe(expected);
  });
  test("[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında 'kış' döndürüyor", () => {
    const expected = "kış";
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    expect(mevsimler).toBe(expected);
  });
  test("[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında 'ilkbahar' döndürüyor", () => {
    const expected = "ilkbahar";
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    expect(mevsimler).toBe(expected);
  });
  test("[13] mevsimler.sonraki BEŞİNCİ çağırılışında 'yaz' döndürüyor", () => {
    const expected = "yaz";
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    expect(mevsimler).toBe(expected);
  });
  test("[14] mevsimler.sonraki KIRKINCI çağırılışında 'ilkbahar' döndürüyor", () => {
    const expected = "ilkbahar";
    for (let i = 0; i < 41; i++) {
      mevsimler.sonraki();
    }
    expect(mevsimler).toBe(expected);
  });
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30); // her test yeni bir araba oluşturur
  });
  // test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {})
  // test('[16] arabayı sürmek benzin tüketiyor', () => {})
  // test('[17] benzinalma arabayı sürmeye izin veriyor', () => {})
  // test('[18] dolu depoya benzin alma etki etmiyor', () => {})
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {
    const expected = 100;
    focus.sur(100);
    expect(Araba).toBe(100);
  });
  test("[16] arabayı sürmek benzin tüketiyor", () => {
    focus.sur(100);
    expect(Araba.depo).toBeLessThan(20);
  });
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    focus.sur(600);
    focus.benzinAl(20);
    focus.sur(100);
    expect(Araba).toBe(100);
  });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    focus.benzinAl(20);
    expect(Araba.depo).toBe(20);
  });
});

describe("[Görev 7] asenkronCiftSayi", () => {
  // test('[19] bir çift sayı verilirse true çözümlüyor', () => {})
  // test('[20] tek sayı verilirse false çözümlüyor', () => {})
  test("[19] bir çift sayı verilirse true çözümlüyor", () => {
    const input = 2;
    const expected = true;
    const actual = utils.asenkronCiftSayi(input);
    expect(actual).toBe(expected);
  });
  test("[19] bir tek sayı verilirse false çözümlüyor", () => {
    const input = 3;
    const expected = false;
    const actual = utils.asenkronCiftSayi(input);
    expect(actual).toBe(expected);
  });
});
