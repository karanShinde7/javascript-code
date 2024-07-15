// function x() {
//   var i = 10;
//   setTimeout(() => {
//     console.log(" Value of I", i);
//   }, 2000);
//   console.log("THIS LINE WILL EXECUTE FIRST!!!");
// }
// x();

// function xLoop() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(" Value of I", i);
//     }, i*1000);
//   }
//   console.log("For loop with var i: ");
// }
// xLoop();

// function xLoopFunction() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(" Value of I", i);
//     }, i * 1000);
//   }
//   console.log("For loop with let i: ");
// }

// xLoopFunction();

function xVarLoop() {
  for (var i = 0; i <= 5; i++) {
    function close(x){
        setTimeout(() => {
            console.log(" Value of I", x);
          }, x*1000);
    }
    close(i)
  }
  console.log("For loop with var i using function: ");
}
xVarLoop();
