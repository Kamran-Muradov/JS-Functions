"use strict";

// let person = {
//   name: "Nurlan",
//   surname: "Umudov",
//   age: 22,
// };

// document.querySelector("h1").innerText = person.name;

// console.log(person);

// let datas = [
//   {
//     name: "Fatime",
//     surname: "Qayxanova",
//     groups:[
//         "PB101",
//         "P314"
//     ],
//     teachers:[
//         "Cavid",
//         "Hemid"
//     ]
//   },
//   {
//     name: "Fexriyye",
//     surname: "Tagizade",
//     groups:[
//         "PB101",
//     ],
//     teachers:[
//         "Cavid",
//     ]
//   },
//   {
//     name: "Afide",
//     surname: "Veliyeva",
//     groups:[
//         "P312"
//     ],
//     teachers:[
//         "Elcin"
//     ]
//   }
// ];

// console.log(datas);

let fullName = "Tagizade Fexriyye";

// console.log(surname.length);

// console.log(surname.toLowerCase());

// console.log(surname.toUpperCase());

// console.log(surname.startsWith("t"));

// console.log(surname.indexOf("a"));

// console.log(surname.lastIndexOf("a"));

// console.log(surname.substring(0, 2));

// console.log("adsdadasfasdasdsdadsadasdasdsdadsaddadasdasdadasdasdasdasd".substring(0,10)+"...");

// for (let i = 0; i < surname.length; i++) {
//     const element = surname[i];

//     console.log(element);
// }

// console.log(surname.includes("t".toUpperCase()));

// let array = surname.split(" ");

// console.log(surname.charAt(1));

// console.log(surname.charCodeAt("T"));

// console.log(surname.slice(1, 3));

// console.log(surname.replace("Azerbaycan", "Italiya"));

// let nums = [1, 4, 5, 6, 7, 8, 8];

// for (const item of nums) {
//   console.log(item);
// }

// let person = {
//   name: "Nurlan",
//   surname: "Umudov",
//   age: 22,
// };

// for (const key in person) {
//   console.log(key);
//   console.log(person[key]);

//   if (key == "name" || key == "surname") {
//     console.log(person[key]);
//   }
// }

// let nums = [1, 4, 5, 6, 7, 8, 8];

// let data = nums.length;

// nums.forEach((element, i) => {
//   console.log(element + " " + i);
// });

// let data = nums.toString();

// let data = nums.join("-");

// nums.pop();

// nums.push(100);

// nums.shift();

// nums.unshift();

// console.log(nums);

// console.log(data);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);

// let address = "Ehmedli";

// let result = [...address];

// console.log(result);

// let obj = {
//   name: "test",
//   surname: "testov",
// };

// let data = { ...obj };

// let nums = [1, 4, 5, 6, 7, 8, 8];

// let datas = [...nums];

// showText();

// function showText() {
//   let a = 100;
//   if (a > 50) {
//     console.log("Hello world");
//   }
//   var t = 100;
// }

// console.log(t);

// function showText(text) {
//   console.log(text);
// }

// showText("salamlar");

// showText(100);

// function sum(a, b) {
//   let result = a + b;
//   return;
//   console.log(result);
// }

// sum(100, 200);

// function findData(arr) {
//   for (const item of arr) {
//     if (item == 100) {
//       console.log("100 already found");
//       break;
//     }
//   }

//   console.log("Welcome to our site");
// }

// let datas = [1, 2, 100, 5, 600, 9, 90];

// findData(datas);

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(4, 5);

// console.log(result);

// alert(result);

// document.querySelector("h1").innerText = result;

let datas = [1, 2, 100, 5, 600, 9, 90];

// function test(arr) {
//   arr[0] = 100;
//   console.log(arr);
// }

// test(datas);

// console.log(datas);

// let b = 100;

// function test(a) {
//   a = 100;
//   console.log(a);
// }

// test(b);

// console.log(b);

// function test(arr) {
//   let newArr = ["salam", "sagol"];
//   arr = newArr;
//   console.log(arr);
// }

// test(datas);

// console.log(datas);

// let arr1 = [1, 2, 3];

// let arr2 = arr1;

// arr2[0] = 100;

// console.log(arr1);
// console.log(arr2);

// function test(a,...datas) {
//   for (let i = 0; i < datas.length; i++) {
//     const element = datas[i];
//     console.log(element);
//   }

// datas.forEach(element => {
//     console.log(element);
// });
// }

// test(1, 2, 3, 4, 5);

// function test() {
//   for (let i = 0; i < arguments.length; i++) {
//     const element = arguments[i];
//     console.log(element);
//   }

// arguments.forEach(element => {
//     console.log(element);
// });
// }

// test(1, 2, 3, 4, 5);

// let showText = () => {
//   console.log("tested");
// };

// showText();

// let showText = (text) => {
//   console.log(text);
// };

// showText("Nesir bey");

// let showText = () => {
//   console.log(this);
// };

// showText();

// function showNumber() {
//   console.log(this);
// }

// showNumber();

// console.log(this);

// let student = {
//   name: "Reshad",
//   surname: "Agayev",
//   age: 21,
//   address: "Neftciler",
//   getFullName: function () {
//     console.log(this.name + " " + this.surname);
//   },
//   getFullData: () => {
//     console.log(this.name + " " + this.surname);
//   },
// };

// student.getFullData();
// student.getFullName();

// window.location.reload();

// const test = () => {
//   for (let i = 0; i < arguments.length; i++) {
//     const element = arguments[i];
//     console.log(element);
//   }
// };

// test(1,2,3);

// function test() {
//   for (let i = 0; i < arguments.length; i++) {
//     const element = arguments[i];
//     console.log(element);
//   }
// }

// test(1, 2, 3);

// console.log(this);

// this.alert();

// document.querySelector("button").addEventListener("click", function () {
//   this.style.backgroundColor = "red";
//   window.location.reload();
// });

// HOMEWORK

// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

function isDivided(num) {
  if (num % 3 == 0 && num % 7 == 0) {
    console.log("number is divided by 3 and 7");
  } else {
    console.log("number is not divided by 3 and 7");
  }
}

// isDivided(21);

// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

const getFactorial = (num) => {
  if (num < 0) {
    return -1;
  }

  let factorial = 1;

  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
};

// console.log(getFactorial(5));

// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

function sumOfSquareEven(numsArr) {
  let result = 0;

  for (const item of numsArr) {
    if (item % 2 == 0) {
      result += item ** 2;
    }
  }

  return result;
}

let arr = [1, 5, 6, 4, 2, 8];

// console.log(sumOfSquareEven(arr));

// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin,
// eks halda "Mail ve yaxud password sehvdir" yazilsin.

const login = (email, password) => {
  if (email == "cavid@code.edu.az" && password == "12345") {
    console.log("Girish olundu");
  } else {
    console.log("Mail ve yaxud password sehvdir");
  }
};

// login("cavid@code.edu.az", "12345");

// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

function sumOfOddNums(...numsArr) {
  let result = 0;

  for (const item of numsArr) {
    if (item % 2 != 0) {
      result += item;
    }
  }

  return result;
}

// console.log(sumOfOddNums(1,2,7,5,6,11));

// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

const countOfEvenNums = (...numsArr) => {
  let count = 0;

  for (const item of numsArr) {
    if (item % 2 == 0) {
      count++;
    }
  }

  return count;
};

// console.log(countOfEvenNums(2,3,8,11,24));

// 8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var.
// Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.

// 1) Yashi 18-25 araliginda olan telebelerin sayi.
// 2) Emailinde "c" herfi olan studentlerin sayi.

let student1 = {
  name: "Kamran",
  surname: "Muradov",
  age: 24,
  email: "kamran@gmail.com",
};

let student2 = {
  name: "Hacixan",
  surname: "Hacixanov",
  age: 17,
  email: "hacixan@gmail.com",
};

let student3 = {
  name: "Amirastan",
  surname: "Mereyev",
  age: 33,
  email: "amirastan@mail.ru",
};

let student4 = {
  name: "Reshad",
  surname: "Agayev",
  age: 21,
  email: "reshad@gmail.com",
};

let studentArr = [student1, student2, student3, student4];

function countStudentsByAgeInterval(students) {
  let count = 0;

  for (const item of students) {
    if (item.age >= 18 && item.age <= 25) {
      count++;
    }
  }

  return count;
}

let result1 = countStudentsByAgeInterval(studentArr);
// console.log(result);

const searchByEmail = (students) => {
  let count = 0;

  for (const item of students) {
    if (item.email.includes("c")) {
      count++;
    }
  }

  return count;
};

let result2 = searchByEmail(studentArr);

// console.log(result2);

// 9) Function yazacaqsiz, Functiona parametr olaraq string gelecek. Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.

function capitalize(str) {
  let capitalizedStr;

  if (typeof str == "string") {
    capitalizedStr = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
      capitalizedStr += str[i];
    }
  }

  return capitalizedStr;
}

// console.log(capitalize("kamran"));
