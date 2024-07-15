// Using lexical scope closure
function x() {
  var a = 10;
  function y() {
    console.log("Value of a :", a);
  }
  y();
}

x();

// closure can work like this also
function x1() {
  var a1 = 100;
  function y1() {
    console.log("Value of a1 :", a1);
  }
  return y1;
}

const z = x1();

// 100 lines of code
z();
