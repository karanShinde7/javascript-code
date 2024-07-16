// Calculate the are of the 4 circles for given radius

const radiusArray = [3, 1, 2, 4];

// const area = (radiusArray) => {
//   const output = [];
//   for (let i = 0; i < radiusArray.length; i++) {
//     output.push(Math.PI * radiusArray[i] * radiusArray[i]);
//   }
//   console.log("Area of circle for ", radiusArray, " respectively ", output);
// };
// area(radiusArray);

// const circumference = (radiusArray) => {
//   const output = [];
//   for (let i = 0; i < radiusArray.length; i++) {
//     output.push(2 * Math.PI * radiusArray[i]);
//   }
//   console.log(
//     "Circumference of circle for ",
//     radiusArray,
//     " respectively ",
//     output
//   );
// };
// circumference(radiusArray);

// const diameter = (radiusArray) => {
//   const output = [];
//   for (let i = 0; i < radiusArray.length; i++) {
//     output.push(2 * radiusArray[i]);
//   }
//   console.log("Diameter of circle for ", radiusArray, " respectively ", output);
// };
// diameter(radiusArray);

// Above logic will work fine for the given scenario
// but what if there are multiple scenarios and we will have to write common logic

// What if with area user wants circumference also. So instead of writing one more function we can write Higher Order Function

// Wth HIGHER ORDER FUNCTION

const areaCallback = (radius) => {
  return Math.PI * radius * radius;
};

const circumferenceCallback = (radius) => {
  return 2 * Math.PI * radius;
};

const diameterCallback = (radius) => {
  return 2 * radius;
};

const calculationHigherOrderFunction = (callBackFunction, form) => {
  const output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(callBackFunction(radiusArray[i]));
  }
  console.log(form, " of circle for ", radiusArray, " respectively ", output);
};

calculationHigherOrderFunction(areaCallback, "Area");
calculationHigherOrderFunction(circumferenceCallback, "Circumference");
calculationHigherOrderFunction(diameterCallback, "Diameter");
