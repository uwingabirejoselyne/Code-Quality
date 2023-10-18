function solution(roman) {
    const romanArr = roman.split("")
 let number = 0
 const romanNumeralsMapping = {
   "I": 1,
   "V": 5,
   "X": 10,
   "L": 50,
   "C": 100,
   "D": 500,
   "M": 1000,
 }

 for (let i = 0; i < romanArr.length; i++){

   // Check if the current roman numeral is less than the next.
   if (romanNumeralsMapping[romanArr[i]] < romanNumeralsMapping[romanArr[i+1]]){
     number = number - romanNumeralsMapping[romanArr[i]]
   }else{
     number += romanNumeralsMapping[romanArr[i]]
   }
 }
 return number
}