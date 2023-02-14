function avarage(...values) {
    const sum = values.reduce((accum, value) => accum + value);
    return sum / values.length;
}

console.log(avarage(10, 9, 6, 8, 9, 1, 5, 7)); // 6.875
console.log(avarage(2,5,7,1,-2)); // 2.6
console.log(avarage(10,10,10,10,9)); // 9.8
console.log(avarage(25,75)); // 50