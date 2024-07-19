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

console.log("Original Map Array: ", arrMap)
console.log("Double: ", arrMap.map(double))
console.log("Triple: ", arrMap.map(triple))
console.log("Binary: ", arrMap.map(binary))


// Array filter

const arrFilter = [5,1,6,7,2];

const oddVal = (val) => {
    return val % 2;
}

const evenVal = (val) => {
    return  !(val % 2);
}
console.log("Original Filter array: ", arrFilter)
console.log("Double: ", arrFilter.filter(oddVal))
console.log("Triple: ", arrFilter.filter(evenVal))