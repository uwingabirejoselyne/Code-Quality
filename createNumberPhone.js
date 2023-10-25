function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;

  }
  const phoneNumber = createPhoneNumber([0,7,8,5,9,9,1,8,5,1]);
  console.log(phoneNumber); 
    