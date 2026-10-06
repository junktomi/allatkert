import type { Allatok, Kategoriak } from "../types/allatkert";


export const AllatkertKategoriak: Kategoriak[] = [
    {cim: "Élőhelyek", adatok: ["Afrikai szavanna", "Ázsiai esőerdő", "Dél-amerikai őserdő", "Sarki vidék", "Ausztráliai területek"]},
    {cim: "Népszerű állatok", adatok: ["Oroszlán", "Elefánt", "Zsiráf", "Panda", "Pingvin"]},
    {cim: "Táplálkozás", adatok: ["Növényevő", "Húsevő", "Mindenevő", "Gyümölcsevő", "Rovarokkal táplálkozó"]}
]

export const AllatAdatok: Allatok[] = [
    {nev: "Szimba", faj: "oroszlán", kor: 8, suly: 190, veszelyeztetett: true, kedvenc_etel: ["marhahús", "csirkehús"]},
    {nev: "Lili", faj: "elefánt", kor: 12, suly: 3200, veszelyeztetett: false, kedvenc_etel: ["fű", "levelek", "gyümölcsök"]},
    {nev: "Beni", faj: "zsiráf", kor: 6, suly: 850, veszelyeztetett: true, kedvenc_etel: ["levelek", "ágak"]},
    {nev: "Pötyi", faj: "panda", kor: 5, suly: 95, veszelyeztetett: true, kedvenc_etel: ["bambusz", "sárgarépa"]},
]