// 1. Írj példátaz összes átlatad írt adattípusra és kommentezd fölé a nevét!

// Egyszerű adattípusok:
// String adattípus: karakterlánc
// let a = 'string';

// Number adattípus: szám
// let b = 1;

// Boolen adattípus: igaz - hamis
// let c = false;

// Speciális adattípusok:
// null
// let d = null;
// undefined
// let e;

// Összetett adattípusok:
// Array - Tömb
// let f = [1, 2, 3];

// Object - Objektumok
// let g = {
//   xyz: b
// };

// 2. Mi a különbség areferencia szerinti és az érték szerinti paraméterátadás között?
// Mi adódik át referenciaként, és mi értékként? Írj példát rá!

/* Primitív adattípusoknál a paraméterátadás érték szerint történik, ami azt jelenti, hogy
az új változónk megkapja az értéket, és ha ezt módosítjuk akkor az eredeti változónk értéke nem váltoik.
Pl:
let a = 12;
let b = a;
b = 13; ---> b egyenlő lesz 13-al, de ettől a nem módosul, marad 12 az értéke.

Összetett adattípusoknál (object, tömb) a paraméterátadás referencia szerint történik, ami azt jelenti, hogy ha az új
változónkon végzünk módosítást akkor az eredeti változónk értéke is módosul.
Pl:
let a = [1,2,3,4,5];
let b = a;
b[5] = 6; ---> az a is megváltozik [1,2,3,4,5,6];
*/

/*
3. Összeadás tétele: összeadja a tömb összes elemét */
const arrToTest = [1, 2, 3, 4, 5, 5, 5, 6];
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
sumArray(arrToTest);

/* 4. Megszámlálás tétele: a megadott paraméter előfordulásának száma a vizsgált tömbben */
const countELement = (element, arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      counter++;
    }
  }
  return counter;
};
countELement(5, arrToTest);

/* 5. Írj egyfüggvényt, mely a switch statement-et használja a bemeneti argumentumának
feldolgozására! */
const switchFuncion = (a) => {
  switch (a) {
    case 'x': console.log('X!');
      break;
    case 'y': console.log('Y!');
      break;
    case 'z': console.log('Z!');
      break;
    default: console.log('Nem XYZ');
  }
};

/* 6. Metszet tétele: két tömb metszetét adja vissza egy új tömbbe. */
const metszetFunction = (array1, array2) => {
  const metszet = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        metszet.push(array1[i]);
      }
    }
  }
  return metszet;
};

/* 7. Írj egy modult ami négy függvényt exportál: összeadás, kivonás, osztás, szorzás!
A függvények működjenek is! */

const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multi = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

module.export = {
  add: add,
  sub: sub,
  multi: multi,
  div: div
};

/* 8. Írj programot, mely két számot olvas be a felhasználótól, és létrehoz egy n x m méretű kétdimenziós
tömböt a paraméterek alapján, majd feltölti a kettő hatványaival! */

const generate2d = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const arrToFillup = generate2d(3, 3);

const arrfillup = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.pow(j, 2);
    }
  }
  return arr;
};

arrfillup(arrToFillup);
