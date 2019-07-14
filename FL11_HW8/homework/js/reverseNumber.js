function reverseNumber(number) {
    let stringReverseNumber = '';
    if (number < 0) {
        stringReverseNumber = '-';
        number = Math.abs(number);
    }

    let currentStepValue = number;

    while (currentStepValue / 10 > 0) {
        let temp = currentStepValue % 10
        stringReverseNumber += temp
        currentStepValue = Math.floor(currentStepValue / 10);
    }

    return +stringReverseNumber;
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));