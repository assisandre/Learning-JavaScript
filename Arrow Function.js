const numberArray = [4, 5.6, -1, 9.8, 42, 6];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(numberArray);
console.log(squaredIntegers)