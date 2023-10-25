const findPrimeNumber = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) 
            return 'not prime number';
        
    }
    return 'prime number';
}

console.log(findPrimeNumber(6)); 