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

// =====================================21.10.2021=====================================
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


// =============================1========================

// 1. Create a function that returns a promise,
// The function gets a name, the function checks if the name is equal to your name.
// Create an asynchronous function that calls the promis function and returns the result.
// Call the synchronous function and print the result.

// function getFunPromise(name) {
//   return new Promise((resolve, reject) => {
//     name == "yafit" ? resolve("good") : reject("error");
//   });
// }

// async function asyncGetPromise() {
//   return await getFunPromise("dhbcd");
// }

// asyncGetPromise()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });


// =============================2========================

// 2.	צרו פונקציה שמחזירה promise,
//  הפונקציה מקבלת 2 מספרים, הפונקציה בודקת האם המספרים זהים.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה.

// function getTwoNumber(num1, num2) {
//   return new Promise((resolve, reject) => {
//     num1 == num2 ? resolve("good") : reject("not good");
//   });
// }

// async function asyncGetProm() {
//   return await getTwoNumber(5, 5);
// }

// getTwoNumber()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });


// =============================3========================

//! 3. Create a function that returns a promise, the function receives a string, 
// the function checks whether the string length is greater than 6.
//! Add a timer that runs for 4 seconds and only then returns answers.
//! Create an asynchronous function that calls the promise function and returns the result.
//! Call the synchronous function and print the result on the screen.
//! Show an animation of charging while waiting for an answer.

//! Create an array of 3 dogs, each dog has a name, age and type.
//! Create a function that returns a promise, the function gets an array of dogs,
//  the function returns the oldest dog.
//! Add a timer that runs for 5 seconds and only then returns answers.
//! Create an asynchronous function that calls the promise function and returns the result.
//! Call the synchronous function and print the result on the screen.
//! Show a dog animation while waiting for an answer.

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

let arrayDog = [dog1, dog2, dog3];

console.log(arrayDog);

function getArrayDog(arrayDog) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let max = arrayDog[0];
      for (const itemdog of arrayDog) {
        if (itemdog.age > max.age) {
          max = itemdog;
        }
      }

      resolve(max);
    }, 5000);
  });
}

async function unscFunctionDog(arrayDog) {
  try {
    dogLoading();
    return await getArrayDog(arrayDog);
  } catch (error) {
    return error;
  }
}
function dogLoading() {
  div2.innerHTML = `<img id="dog11" src="./img/gog gif.gif">`;
}
let dog11 = document.getElementById("dog11");
function stopDogLoading() {
  div2.style.display = "none";
}

unscFunctionDog(arrayDog)
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {
    stopDogLoading();
  });



//! in class
// =====================================================

// class Dog {
//   name;
//   type;
//   age;
//   constructor(nameFromOut, typeFromOut, ageFromOut) {
//     this.name = nameFromOut;
//     this.type = typeFromOut;
//     this.age = ageFromOut;
//   }
// }

// let dog1 = new Dog("boldog", "shir", 78);
// let dog2 = new Dog("rex", "shir", 4);
// let dog3 = new Dog("pic", "shir", 4);

// let arrayDog = [dog1, dog2, dog3];

// const dogArray = [
//   new Dog("boldog", "shir", 78),
//   new Dog("rex", "shir", 4),
//   new Dog("pic", "shir", 4),
// ];

// function getOldDog(dogArray) {
//   let Max = dogArray[0];
//   for (const itemdog of dogArray) {
//     if (itemdog.age > Max.age) Max = itemdog;
//   }
//   return Max;
// }

// function dogsPorimes() {
//   return new Promise((resolve, reject) => {
//     const oldestDog = getOldDog(dogArray);
//     setTimeout(() => {
//     oldestDog ? resolve(oldestDog) : reject({massege :"error, dog not fond"});
//   }, 5000);
//   });
// }

// async function asyncFunction() {
//   try{
//     dogLoading()
//  await dogsPorimes()
//   }
//   catch(err){
//     alert(error.massege)
//   }

// }

// asyncFunction()
// .then((res)=>{console.log(res);})
// .catch((rej)=>{console.log(rej);})
// .finally(()=>{stopDogLoading()})

// function dogLoading() {
//   div2.innerHTML = `<img id="dog1" src="./img/gog gif.gif">`;
// }
// function stopDogLoading() {
//   dog1.style.display = "none";
// }

// //!בתשובה זה נותן לי את הקי של התשובה

// let ApartmentsMap = new Map([
//   [1, 2],
//   [2, 14],
//   [3, 10],
//   [4, 9],
// ]);
// function apaetmentPromise(mapParams) {
//   return new Promise((resolve, reject) => {
//     let maxValue = 0;
//     let maxKey = 0;

//     for (const item of mapParams.keys()) {
//       if (mapParams.get(item) > maxValue) maxKey = item;
//       maxValue = mapParams.get(item);
//     }
//     maxKey ? resolve(maxKey) : reject("error");
//   });
// }
// apaetmentPromise(ApartmentsMap)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });
