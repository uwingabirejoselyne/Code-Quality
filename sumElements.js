const sumOfNumbers =(numbers)=>{
 if(numbers.length === 0){
    return 0
 }
 return  numbers[0] + sumOfNumbers(numbers.slice(1))
}
console.log(sumOfNumbers([1,2,3,4,6,7,8]))