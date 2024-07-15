// Function Statement
function functionStatement() {
  console.log("Console from function statement");
}
functionStatement();

// Function Expression
const functionExpression = function () {
  console.log("Console from function expression");
};
functionExpression();

// Function Expression
const namedFunctionExpression = function namedFunction() {
  console.log("Console from named function expression", namedFunction);
};
namedFunctionExpression();

// Annonymous function
const annonymousFunction = function () {
  console.log("Console from Annonymous function");
};
annonymousFunction();

console.log("FIRST CLASS FUNCTION EXAMPLES > ");

console.log("\n1)FIRST CLASS FUNCTION AS PARAMETER > ");

function firstClassFunction(paramFunction) {
  console.log("paramFunction :", paramFunction);
  console.log("paramFunction() :", paramFunction());
}

firstClassFunction(function () {
  console.log("Console from function as parameter");
});

console.log("\n2)FIRST CLASS FUNCTION RETURNS A FUNCTION > ");

function outerFunction() {
  console.log("Outer function");
  function innerFunction() {
    console.log("Inner function");
  }
  return innerFunction;
}
outerFunction()();
// const inner = outerFunction();
// inner();
