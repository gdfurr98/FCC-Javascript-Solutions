function palindrome(str) {
  //
  //This is only temporary, it does not take into account all possible cases for palindromes, only basic ones
  //
  //true or false boolean (defaults to true)
  let bool = true;
  //splits string into an array and declares empty "reverse" array
  let array = str.toLowerCase().split(/\W|'.'|_|,|/).join('').split('');
  let regexedArrayTest = str.split(/\W|'.'|/).join('').split('');
  let rArray = [];
  //for loop which produces reversed array
  for (let i = 0; i <= array.length; i++){
    if (i != 0){
    rArray.push(array[array.length - i]);
    };
  };
  // testing our arrays with another loop
  for (let i = 0; i < array.length; i++){
    if (array[i] != rArray[i]){
      bool = false;
    };
  };
  console.log(array);
  console.log(rArray);
  console.log(bool);
  console.log(regexedArrayTest);
  return bool;
}



palindrome("eye");
palindrome("race car");
