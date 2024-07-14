// Hoisting

// getAge();
getName();
console.log("X: ", x);
console.log("getName", getName);

var x = 7;

function getName() {
  console.log("Name is here");
}

const getAge = () => {
  console.log("Age is here");
};

console.log("getAge", getAge);

// Function execution using scope

let temp = 1;
a();
b();
console.log("temp value from global",temp);

function a(){
  let temp = 10;
  console.log("temp value from a()",temp);
}

function b(){
  let temp = 100;
  console.log("temp value from b()",temp);
}
