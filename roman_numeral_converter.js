function convertToRoman(num) {
 let number = num.toString();
 let numberArray = [];
 let romanArray = [];
 for (let i = 0; i < number.length; i++){
   let intArray = [];
   intArray.push(parseInt(number[i]));
   intArray.push(number.length - i);
   numberArray.push(intArray);
 };
 for (let i = 0; i < numberArray.length; i++){
   if (numberArray[i][1] == 4 && numberArray[i][0] < 4){
     for (let j = 0; j < numberArray[i][0]; j++){
       romanArray.push("M");
    };
   };
 };
 for (let i = 0; i < numberArray.length; i++){
   if (numberArray[i][1] == 3 && numberArray[i][0] < 4){
     for (let j = 0; j < numberArray[i][0]; j++){
       romanArray.push("C");
    };
   };
   if (numberArray[i][1] == 3 && numberArray[i][0] == 4){
       romanArray.push("CD");
   };
   if (numberArray[i][1] == 3 && numberArray[i][0] >= 5 && numberArray[i][0] < 9){
       romanArray.push("D");
       if (numberArray[i][0] > 5){
         for (let j = 5; j < numberArray[i][0]; j++){
           romanArray.push('C');
         };
       };
   };
   if (numberArray[i][1] == 3 && numberArray[i][0] == 9){
       romanArray.push("CM");
   };
 };
  for (let i = 0; i < numberArray.length; i++){
   if (numberArray[i][1] == 2 && numberArray[i][0] < 4){
     for (let j = 0; j < numberArray[i][0]; j++){
       romanArray.push("X");
    };
   };
   if (numberArray[i][1] == 2 && numberArray[i][0] == 4){
       romanArray.push("XL");
   };
   if (numberArray[i][1] == 2 && numberArray[i][0] >= 5 && numberArray[i][0] < 9){
       romanArray.push("L");
       if (numberArray[i][0] > 5){
         for (let j = 5; j < numberArray[i][0]; j++){
           romanArray.push('X');
         };
       };
   };
   if (numberArray[i][1] == 2 && numberArray[i][0] == 9){
       romanArray.push("XC");
   };
 };
 for (let i = 0; i < numberArray.length; i++){
   if (numberArray[i][1] == 1 && numberArray[i][0] < 4){
     for (let j = 0; j < numberArray[i][0]; j++){
       romanArray.push("I");
    };
   };
   if (numberArray[i][1] == 1 && numberArray[i][0] == 4){
       romanArray.push("IV");
   };
   if (numberArray[i][1] == 1 && numberArray[i][0] >= 5 && numberArray[i][0] < 9){
       romanArray.push("V");
       if (numberArray[i][0] > 5){
         for (let j = 5; j < numberArray[i][0]; j++){
           romanArray.push('I');
         };
       };
   };
   if (numberArray[i][1] == 1 && numberArray[i][0] == 9){
       romanArray.push("IX");
   };
 };
 let romanString = romanArray.join('');
 console.log(num);
 console.log(numberArray);
 console.log(romanArray);
 console.log(romanString);
 return romanString;
};
convertToRoman(1000);
convertToRoman(3999);
