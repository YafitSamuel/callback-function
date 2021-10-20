function print(fun) {
  fun();
}
print(() => {
  console.log("hello");
});

// Create a Promise object with an empty function, with a rejected resolution.
// Create a Promise object with a function that returns the word "hello" in case of success.
// Create a Promise object with a function that returns the word "goodbye" in case of failure.
// Create a Promise object with a function that returns the word "yes" in case of success and the word "no" in case of failure.
// Create a Promise object with a function that returns the word "yes" in case of success and the word "no" in case of failure, print the function's computers to the log.
let myPromise = new Promise((resolve, reject) => {});

let secondPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("hello");
  }
});

let promise = new Promise((resolve, reject) => {
  if (false) {
    reject("goodbye");
  }
});

let prom = new Promise((resolve, reject) => {
  if (true) {
    resolve("yes");
  } else {
    reject("no");
  }
});

function promiseFun(pram) {
  return new Promise((resolve, reject) => {
    if (pram) {
      resolve("yes");
    } else {
      reject("no");
    }
  });
}
promiseFun(true)
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

function getNumber(num) {
  return new Promise((resolve, reject) => {
    num > 10 ? resolve("big") : reject("small");
  });
}

getNumber(16)
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

function getName(fullName) {
  return new Promise((resolve, reject) => {
    fullName.length > 4 ? resolve("long name") : reject("short name");
  });

}
getName("yit").then((res)=>{console.log(res);}).catch((rej)=>{console.log(rej);})

// Create a function that gets an array of names and names,
// The function returns an object of Promise, if the name appears it returns
// "name exist" In case it does not return "no name", print the results of the function to the log

function arraySomeName (array,name) {
    return new Promise((resolve, reject) => {
        
      array.indexOf(name) 
!=-1 ? resolve("name exist") : reject(" no name ");
    });
  
  }
  arraySomeName(["yafit", "roni","eden"], "gvh")
  .then((res)=>{console.log(res);})
  .catch((rej)=>{console.log(rej);})
  


