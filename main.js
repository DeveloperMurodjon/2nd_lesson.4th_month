// 1-10gacha masalalar
let num1 = +prompt(`1.Berilgan son musbat bo‘lsa, 1 chiqarilsin.
    Sonni kiriting`);
if (num1 > 0) {
  alert(`1`);
} else {
  alert("-1");
}
let num2 =
  +prompt(`2.Agar son manfiy bo‘lsa, -1 chiqarilsin, aks holda 0 chiqarilsin.
Sonni kiriting`);
if (num2 < 0) {
  alert("-1");
} else {
  alert("0");
}
let num3 =
  +prompt(`3.Agar son 0 ga teng bo‘lsa, 1 chiqarilsin, aks holda 0 chiqarilsin.
Sonni kiriting`);
if (num3 == 0) {
  alert("1");
} else {
  alert("0");
}

let num4 = +prompt(`4.Son musbat va 100 dan katta bo‘lsa, 1 chiqarilsin.
    Sonni kiriting:
`);
if (num4 > 99) {
  alert("1");
} else {
  alert("son uchxonalik va musbat emas");
}
let num5 = +prompt(`5.Agar son manfiy va 10 dan kichik bo‘lsa, -1 chiqarilsin.
 Sonni kiriting:`);
if (num5 < 9) {
  alert("-1");
} else {
  alert("son 10dan kichik emas");
}
let num6 =
  +prompt(`6.Son musbat bo‘lsa, uning kvadrati chiqarilsin, aks holda 0 chiqarilsin.
Sonni kiriting:`);
if (num6 > 0) {
  alert(num6 ** 2);
} else {
  alert("0");
}

let num7 =
  +prompt(`7.Agar son manfiy bo‘lsa, uning absolyut qiymati chiqarilsin.
    Son kiriting`);

if (num7 < 0) {
  num7 = -num7;
}
alert(num7);

let num8 =
  +prompt(`8.Son nolga teng bo‘lsa, 10 chiqarilsin, aks holda sonning o‘zi chiqarilsin.
    Son kiriting:`);

if (num8 == 0) {
  alert(10);
} else {
  alert(num8);
}
let num9 = +prompt(`9.Agar son 1 dan katta bo‘lsa, sonning kubi chiqarilsin.
    Son kiriting:`);
if (num9 > 1) {
  alert(num9 ** 3);
}
let num10 =
  +prompt(`10.Son 0 dan kichik bo‘lsa, -10 chiqarilsin, aks holda 10 chiqarilsin.

  Son kiriting:`);
if (num10 < 0) {
  alert("-10");
} else {
  alert("10");
}
// 10-20gacha bo'lgan masalalar
let run1 =
  +prompt(`11.Agar son juft bo‘lsa, 2 chiqarilsin, aks holda 1 chiqarilsin. 
  Son kiriting:`);
if (run1 % 2 == 0) {
  alert("2");
} else {
  alert("1");
}
let run2 =
  +prompt(`12.Agar son toq bo‘lsa, 3 chiqarilsin, aks holda 4 chiqarilsin.
  Son kiriting:`);
if (run2 % 2 == 0) {
  alert("4");
} else {
  alert("3");
}

let run3 = +prompt(`13.Son juft va 10 dan katta bo‘lsa, 1 chiqarilsin.
  Son kiriting:`);
if (run3 % 2 == 0 && run3 > 10) {
  alert("1");
}

let run4 = +prompt(`14.Agar son toq va manfiy bo‘lsa, -1 chiqarilsin.
  Son kiriting:`);
if (run4 % -2 != 0 && run4 < 0) {
  alert("-1");
}

let run5 = +prompt(`15.Son juft va 5 ga bo‘linadigan bo‘lsa, 100 chiqarilsin.
  Son kiriting:`);
if (run5 % 2 == 0 && run5 % 5 == 0) {
  alert("100");
} else {
  alert("mos emas");
}
let run6 = +prompt(`16.Agar son juft bo‘lmasa, sonning kvadrati chiqarilsin.
  Son kiriting:`);
if (run6 % 2 == 0) {
  alert("jusft son");
} else {
  alert(run6 ** 2);
}
let run7 = +prompt(`17.Son juft va musbat bo‘lsa, uning kubi chiqarilsin.
  Son kiriting:`);
if (run7 % 2 == 0 && run7 > 0) {
  alert(run7 ** 3);
} else {
  alert("mos emas");
}
let run8 =
  +prompt(`18.Agar son juft va 20 dan katta bo‘lsa, 50 chiqarilsin, aks holda -50 chiqarilsin.
  Son kiriting:`);
if (run8 % 2 == 0 && run8 > 20) {
  alert("50");
} else {
  alert("-50");
}
let run9 = +prompt(`19.Son toq va 7 ga bo‘linadigan bo‘lsa, 7 chiqarilsin.
  Son kiriting:`);
if (run9 % 2 != 0 && run9 % 7 == 0) {
  alert("7");
} else {
  alert("mos emas");
}
let run10 = +prompt(`20.Agar son juft va manfiy bo‘lsa, -20 chiqarilsin.
  Son kiriting:`);
if (run10 % 2 == 0 && run10 < 0) {
  alert("-20");
} else {
  alert("mos emas");
}
// 20-30gacha bo'lgan masalalar
let int1 =
  +prompt(`21. Ikki son teng bo‘lsa, 1 chiqarilsin, aks holda 0 chiqarilsin.
  1-sonni kiriting:`);
let int2 = +prompt("2-sonni kiriting:");
if (int1 == int2) {
  alert("1");
} else {
  alert("0");
}
let int3 =
  +prompt(`22.Agar birinchi son ikkinchisidan katta bo‘lsa, 2 chiqarilsin, aks holda 3 chiqarilsin.
  1-sonni kiriting:`);
let int4 = +prompt("2-sonni kiriting:");
if (int3 > int4) {
  alert("2");
} else {
  alert("3");
}
let int5 =
  +prompt(`23.Birinchi son ikkinchisidan kichik va musbat bo‘lsa, 10 chiqarilsin.
  1-sonni kiriting:`);
let int6 = +prompt("2-sonni kiriting:");
if (int5 < int6 && int5 > 0) {
  alert("10");
} else {
  alert("mos emas");
}
let int7 =
  +prompt(`24.Agar birinchi son ikkinchisidan katta va toq bo‘lsa, 5 chiqarilsin. 
1-sonni kiriting:`);
let int8 = +prompt("2-sonni kiriting:");
if (int7 > int8 && int7 % 2 != 0) {
  alert("5");
} else {
  alert("mos emas");
}
let int9 =
  +prompt(`25.Ikkala son ham musbat bo‘lsa, ularning yig‘indisi chiqarilsin.
1-sonni kiriting:`);
let int10 = +prompt("2-sonni kiriting:");
if (int9 > 0 && int10 > 0) {
  alert(int9 + int10);
} else {
  alert("mos emas");
}
let int11 =
  +prompt(`26.Agar birinchi son ikkinchisidan kichik va ikkinchi son juft bo‘lsa, -1 chiqarilsin.
1-sonni kiriting:`);
let int12 = +prompt("2-sonni kiriting:");
if (int11 < int12 && int12 % 2 == 0) {
  alert("-1");
} else {
  alert("mos emas");
}
let int13 = +prompt(`27.Ikkala son teng bo‘lsa, 100, aks holda -100 chiqarilsin.
1-sonni kiriting:`);
let int14 = +prompt("2-sonni kiriting:");
if (int13 == int14) {
  alert("100");
} else {
  alert("-100");
}
let int15 =
  +prompt(`28.Birinchi son 10 va ikkinchi son 5 ga bo‘linadigan bo‘lsa, 50 chiqarilsin.
1-sonni kiriting:`);
let int16 = +prompt("2-sonni kiriting:");
if (int15 % 10 == 0 && int16 % 5 == 0) {
  alert("50");
} else {
  alert("mos emas");
}
let int17 =
  +prompt(`29.Agar birinchi son ikkinchisidan 2 marta katta bo‘lsa, 2 chiqarilsin.
1-sonni kiriting:`);
let int18 = +prompt("2-sonni kiriting:");
if (int18 * 2 == int17) {
  alert("2");
} else {
  alert("mos emas");
}
let int19 =
  +prompt(`30.Birinchi son ikkinchisidan kichik bo‘lsa va ikkinchi son toq bo‘lsa, -10 chiqarilsin.
1-sonni kiriting:`);
let int20 = +prompt("2-sonni kiriting:");
if (int19 < int20 && int20 % 2 != 0) {
  alert("-10");
} else {
  alert("mos emas");
}
// 30-40gacha bo'lgan masalalar
let digit1 =
  +prompt(`31.Son musbat va 3 ga bo‘linadigan bo‘lsa, 3 chiqarilsin, aks holda 0 chiqarilsin.
Sonni kiriting`);
if (digit1 > 0 && digit1 % 3 == 0) {
  alert("3");
} else {
  alert("0");
}
let digit2 =
  +prompt(`32.Agar son manfiy va 2 ga bo‘linadigan bo‘lsa, -2 chiqarilsin.
Sonni kiriting`);
if (digit2 < 0 && digit2 % 2 == 0) {
  alert("-2");
} else {
  alert("mos emas");
}
let digit3 =
  +prompt(`33.Son musbat va 5 ga bo‘linadigan bo‘lsa, uning 5 ga bo‘linmasidan qolgan qismi chiqarilsin.
  Sonni kiriting`);
if (digit3 > 0 && digit3 % 5 == 0) {
  alert(digit3 % 5);
} else {
  alert(digit3 % 5);
}
let digit4 =
  +prompt(`34.Agar son musbat va 10 dan kichik bo‘lsa, uning kvadrati chiqarilsin.
    Sonni kiriting`);
if (digit4 > 0 && digit4 < 10) {
  alert(digit4 ** 2);
} else {
  alert("mos emas");
}
let digit5 = +prompt(`35.Son juft yoki 4 ga bo‘linadigan bo‘lsa, 1 chiqarilsin.
      Sonni kiriting`);
if (digit5 % 2 == 0 || digit5 % 4 == 0) {
  alert("1");
} else {
  alert("mos emas");
}
let digit6 = +prompt(`36.Agar son toq va 15 dan katta bo‘lsa, 15 chiqarilsin.
          Sonni kiriting`);
if (digit6 % 2 != 0 && digit6 > 15) {
  alert("15");
} else {
  alert("mos emas");
}
let digit7 =
  +prompt(`37.Son 2 va 3 ga bo‘linadigan bo‘lsa, 6 chiqarilsin, aks holda 1 chiqarilsin.
          Sonni kiriting`);
if (digit7 % 2 == 0 && digit7 % 3 == 0) {
  alert("6");
} else {
  alert("1");
}
let digit8 =
  +prompt(`38.Agar son musbat va 7 ga bo‘linadigan bo‘lsa, 14 chiqarilsin.
            Sonni kiriting`);
if (digit8 > 0 && digit8 % 7 == 0) {
  alert("14");
} else {
  alert("mos emas");
}
let digit9 =
  +prompt(`39.Son musbat yoki 0 bo‘lsa, 0 chiqarilsin, aks holda -5 chiqarilsin.
Sonni kiriting:`);
if (digit9 >= 0) {
  alert("0");
} else {
  alert9("-5");
}
let digit10 =
  +prompt(`40.Son manfiy va 10 ga bo‘linmaydigan bo‘lsa, -3 chiqarilsin.
Sonni kiriting:`);
if (digit10 < 0 && digit10 % 10 != 0) {
  alert("-3");
} else {
  alert("mos emas");
}
