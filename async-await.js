async function getData() {
  // always returns a Promise
  // even if we do not return promise from it, will automatically wrap the response in promise and returns
//   return "Namaste!!";

  // if you are returing a promise only then only promise will be returned, function will not wrap in this case.
  return pr;
}

const pr = new Promise((resolve, reject) => {
    resolve("Promise resolved!!!");
})

const dataPromise = getData();
// console.log("Data ", dataPromise);
dataPromise.then((data)=>{
    console.log("Data inside then ", data)
})