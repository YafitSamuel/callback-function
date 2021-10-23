// Create a Promise object with an empty function, with a rejected resolution.
// Create a Promise object with a function that returns the word "hello" in case of success.
// Create a Promise object with a function that returns the word "goodbye" in case of failure.
// Create a Promise object with a function that returns the word "yes" in case of success and the word "no" in case of failure.
// Create a Promise object with a function that returns the word "yes" in case of success and the word "no" in case of failure, print the function's computers to the log.
// let myPromise = new Promise((resolve, reject) => {});

// let secondPromise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("hello");
//   }
// });

// let promise = new Promise((resolve, reject) => {
//   if (false) {
//     reject("goodbye");
//   }
// });

// let prom = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("yes");
//   } else {
//     reject("no");
//   }
// });

// function promiseFun(pram) {
//   return new Promise((resolve, reject) => {
//     if (pram) {
//       resolve("yes");
//     } else {
//       reject("no");
//     }
//   });
// }
// promiseFun(true)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// function getNumber(num) {
//   return new Promise((resolve, reject) => {
//     num > 10 ? resolve("big") : reject("small");
//   });
// }

// getNumber(16)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// function getName(fullName) {
//   return new Promise((resolve, reject) => {
//     fullName.length > 4 ? resolve("long name") : reject("short name");
//   });
// }
// getName("yit")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// // Create a function that gets an array of names and names,
// // The function returns an object of Promise, if the name appears it returns
// // "name exist" In case it does not return "no name", print the results of the function to the log

// function arraySomeName(array, name) {
//   return new Promise((resolve, reject) => {
//     array.indexOf(name) != -1 ? resolve("name exist") : reject(" no name ");
//   });
// }
// arraySomeName(["yafit", "roni", "eden"], "gvh")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// =====================================21.10.2021===================================================

//  function getAll (name) {
//   return new Promise((resolve,reject)=>{
//     name? resolve("yes"):  reject("sorry")
//   })
// }

// getAll ("yafit")
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})

//  function getPro (num) {
//   counter =0;
//   return new Promise((resolve,reject)=>{
//     let numRandom= Math.floor(Math.random()*9)
//     numRandom == num ? resolve(document.write(`<p>nice work, do it again</p>`))
//     :reject(document.write(`<p> you lost try agin  </p>`));
//   })
// }

// inp.onchange=()=>{
//   getPro(inp.value)
//   .then((res)=>{console.log(res);})
//   .catch((rej)=>{console.log(rej);})
//   .finally(()=>{ document.write(counter++)})
// }

// async function asyncFunction(){
//   try{
//   return await getPro()
//   }
//   catch(error){
//     return  error
//   }
// }

// asyncFunction().then((res)=>{console.log(res);})
// asyncFunction().catch((rej)=>{console.log(rej);})

// 1.	צרו פונקציה שמחזירה promise,
// הפונקציה מקבלת שם, הפונקציה בודקת האם השם שווה לשם שלכם.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה.

function getFunPromise(name) {
  return new Promise((resolve, reject) => {
    name == "yafit" ? resolve("good") : reject("error");
  });
}

async function asyncGetPromise() {
  return await getFunPromise("dhbcd");
}

asyncGetPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// 2.	צרו פונקציה שמחזירה promise,
//  הפונקציה מקבלת 2 מספרים, הפונקציה בודקת האם המספרים זהים.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה.

function getTwoNumber(num1, num2) {
  return new Promise((resolve, reject) => {
    num1 == num2 ? resolve("good") : reject("not good");
  });
}

async function asyncGetProm() {
  return await getTwoNumber(5, 5);
}

getTwoNumber()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// 3.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת סטרינג, הפונקציה בודקת האם אורך הסטרינג גדול מ 6.
// הוסיפו טיימר שפועל 4 שניות ורק לאחר מכן מחזיר תשובות.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה למסך.
// הציגו אנימציה של טעינה בזמן שמחכים לתשובה.

function getLodgingGif() {
  gif.innerHTML += `<img  id="image" src="./img/loading-buffering.gif" alt="loading ">`;
}

function getAllInString(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      str.length > 6 ? resolve("long") : reject("short");
    }, 4000);
  });
}
async function asyncFunctionGetPro() {
  try {
    getLodgingGif();
    return await getAllInString("db6hujchd");
  } catch (error) {
    return error;
  }
}

asyncFunctionGetPro()
  .then((res) => {
    div1.innerHTML += `${res}`;
  })
  .catch((rej) => {
    div1.innerHTML += `${res}`;
  })
  .finally(() => {
    image.style.display = "none";
  });

// צרו מערך של 3 כלבים, לכל כלב יש שם, גיל וסוג.
// צרו פונקציה שמחזירה promise, הפונקציה מקבלת מערך של כלבים, הפונקציה מחזירה את הכלב הזקן ביותר.
// הוסיפו טיימר שפועל 5 שניות ורק לאחר מכן מחזיר תשובות.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה למסך.
// הציגו אנימציה של כלב בזמן שמחכים לתשובה.

class Dog {
  name;
  type;
  age;
  constructor(nameFromOut, typeFromOut, ageFromOut) {
    this.name = nameFromOut;
    this.type = typeFromOut;
    this.age = ageFromOut;
  }
}

let dog1 = new Dog("boldog", "shir", 78);
let dog2 = new Dog("rex", "shir", 4);
let dog3 = new Dog("pic", "shir", 4);

let arrayDog=[dog1,dog2,dog3]

console.log(arrayDog);



function getArrayDog(arrayDog) {
  return new Promise((resolve, reject) => {
     let max=arrayDog[0];
    for (const itemdog of arrayDog) {
      if(arrayDog[key].age>max)resolve(max);
    }
  });
}
// getArrayDog().then((res)=>{console.log(res);})
// getArrayDog().catch((rej)=>{console.log(rej);})






