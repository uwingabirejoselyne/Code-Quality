function fibonacci(number) {
    let currentNumber = 1, previousNumber = 0, temporaryNumber;

    while (number >= 0){
        temporaryNumber = currentNumber;
        currentNumber = currentNumber + previousNumber;
        previousNumber = temporaryNumber;
        number--;
    }

    return previousNumber;
}