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

