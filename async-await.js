function getData() {
  // always returns a Promise
  // even if we do not return promise from it, will automatically wrap the response in promise and returns
  //   return "Namaste!!";

  // if you are returing a promise only then only promise will be returned, function will not wrap in this case.
  pr.then((data) => {
    console.log("Data inside then ", data);
  });
  console.log("Namaste !!!!");
  // here console will print first and then promise will print once it gets the value
}

async function awaitFunction() {
  // pr1 timer having wait for 3s, but it will not execute until then above execution is completely done.
  // but as soon as execution finished it will execute with on 0 sec.
  const data3 = await pr1;
  console.log("async await execution", data3);
  console.log("Namaste PR1 Data3!!!");
  console.log("---------------------------------------------");

  // this line will get execute
  console.log("Hello from async-await functionality data1");
  //here JS engine will till the execution of the promise completes.
  const data1 = await pr;
  console.log("async await execution ", data1);
  // as we are using await JS will stop execution, once the priomise returns a value then only next line will execute
  console.log("Namaste PR Data1!!!");

  console.log("---------------------------------------------");

  console.log("Hello from async-await functionality data2");
  //here JS engine will not wait as the execution of promise is already done in above section data1.
  const data2 = await pr;
  // so this value will print as soon as data1 execution finished
  console.log("async await execution ", data2);
  console.log("Namaste PR Data2!!!");
}

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1st Promise resolved!!!");
  }, 5000);
  // resolve("Promise resolved!!!");
});

const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2nd Promise resolved!!!");
  }, 3000);
  // resolve("Promise resolved!!!");
});

// getData();
awaitFunction();

// const dataPromise = getData();
// console.log("Data ", dataPromise);
// dataPromise.then((data) => {
//   console.log("Data inside then ", data);
// });
