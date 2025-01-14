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
    const obj = { isim: "  jane  ", yas: " 34 " };
    const prop = "isim";
    const expected = { isim: "jane", yas: " 34 " };
    const actual = utils.verileniTrimle(obj, prop);
    expect(actual).toEqual(expected);
  });
  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    const obj = { isim: "  jane  ", yas: " 34 " };
    const prop = "isim";
    const expected = obj.yas;
    const actual = utils.verileniTrimle(obj, prop);
    expect(actual.yas).toMatch(expected);
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
    let result;
    for (let i = 0; i < 2; i++) {
      result = sayici.asagiSay();
    }
    expect(result).toBe(expected);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    const expected = 0;
    let result;
    for (let i = 0; i < 10; i++) {
      result = sayici.asagiSay();
    }
    expect(result).toBe(expected);
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
    let result = mevsimler.sonraki();
    expect(result).toBe(expected);
  });
  test("[10] mevsimler.sonraki İKİNCİ çağırılışında 'sonbahar' döndürüyor", () => {
    const expected = "sonbahar";
    let result = mevsimler.sonraki();
    let result2 = mevsimler.sonraki();
    expect(result2).toBe(expected);
  });
  test("[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında 'kış' döndürüyor", () => {
    const expected = "kış";
    let result = mevsimler.sonraki();
    let result2 = mevsimler.sonraki();
    let result3 = mevsimler.sonraki();
    expect(result3).toBe(expected);
  });
  test("[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında 'ilkbahar' döndürüyor", () => {
    const expected = "ilkbahar";
    let result = mevsimler.sonraki();
    let result2 = mevsimler.sonraki();
    let result3 = mevsimler.sonraki();
    let result4 = mevsimler.sonraki();
    expect(result4).toBe(expected);
  });
  test("[13] mevsimler.sonraki BEŞİNCİ çağırılışında 'yaz' döndürüyor", () => {
    const expected = "yaz";
    let result;
    for (let i = 0; i < 5; i++) {
      result = mevsimler.sonraki();
    }
    expect(result).toBe(expected);
  });
  test("[14] mevsimler.sonraki KIRKINCI çağırılışında 'ilkbahar' döndürüyor", () => {
    const expected = "ilkbahar";
    let result;
    for (let i = 0; i < 40; i++) {
      result = mevsimler.sonraki();
    }
    expect(result).toBe(expected);
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
    let result = focus.sur(100);
    expect(result).toBe(100);
  });
  test("[16] arabayı sürmek benzin tüketiyor", () => {
    let mesafe = focus.sur(100);
    let depo = focus.depo;
    expect(depo).toBeLessThan(20);
  });
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    focus.sur(600);
    focus.benzinal(20);
    focus.sur(100);
    expect(focus.odometer).toBe(700);
  });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    focus.benzinal(10);
    expect(focus.depo).toBe(20);
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
