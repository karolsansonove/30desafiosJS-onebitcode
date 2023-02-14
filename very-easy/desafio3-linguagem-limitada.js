function invertArray(values) {
    const reversedValues = [];
    for (let i = 0; i < values.length; i++) {
        reversedValues[i] = values[values.length - 1 - i];
    }
    return reversedValues;
}

console.log(invertArray([1,2,3,4,'oi']));