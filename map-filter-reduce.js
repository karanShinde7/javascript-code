// Array map

const arrMap = [5,1,6,7,2];

const double = (val) => {
    return val * 2;
}

const triple = (val) => {
    return val * 3;
}

const binary = (val) => {
    return val.toString(2);
}

console.log("Original : ", arrMap)
console.log("Double: ", arrMap.map(double))
console.log("Triple: ", arrMap.map(triple))
console.log("Binary: ", arrMap.map(binary))