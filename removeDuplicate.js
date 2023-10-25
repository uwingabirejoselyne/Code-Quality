const removeDuplicate = (arr)=>{
    return Array.from(new Set(arr))

}
console.log(removeDuplicate([1,3,3,4,4,5]));