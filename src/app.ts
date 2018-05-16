function sumAll(...arr) {
    return arr.reduce((prev, next) => prev + next);
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10));