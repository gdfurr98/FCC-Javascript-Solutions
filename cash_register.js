function checkCashRegister(price, cash, cid) {
  var cashInDrawerLoop = 0;
  let changeArray = [];
  for (let i = 0; i < cid.length; i++){
    cashInDrawerLoop += cid[i][1];
  };
  cashInDrawerLoop = Number((cashInDrawerLoop).toFixed(2));
  var change = Number((cash - price).toFixed(2));
  if (change > cashInDrawerLoop){
    console.log({status: 'INSUFFICIENT_FUNDS', change: []});
    return {status: 'INSUFFICIENT_FUNDS', change: []}
  };
  if (change == cashInDrawerLoop){
    console.log({status: 'CLOSED', change: cid});
    return {status: 'CLOSED', change: cid};
  }
  var changeInDollars = Math.floor(change);
  var changeInCents = Number((change % 1).toFixed(2));
  let change1 = changeInDollars;
  let change2 = changeInCents * 100;
  let centsArray = [];
  let dollarArray = [];
  //change in cents loops
  let quarterCounter = 0;
  let dimeCounter = 0;
  let nickelCounter = 0;
  let pennyCounter = 0;
  // quarter loop
  for (let i = 0; i < 100000; i++){
    if (change2 - 25 >= 0){
      quarterCounter += 25;
      change2 -= 25;
      centsArray.push(25);
    };
    if (change2 - 25 < 0 || quarterCounter >= (cid[3][1] * 100)){
      break;
    };
  };
  //dime loop
  for (let i = 0; i < 100000; i++){
    if (change2 - 10 >= 0){
      dimeCounter += 10;
      change2 -= 10;
      centsArray.push(10);
    };
    if (change2 - 10 < 0 || dimeCounter >= (cid[2][1] * 100)){
      break;
    };
  };
  //nickel loop
  for (let i = 0; i < 100000; i++){
    if (change2 - 5 >= 0){
      nickelCounter += 5;
      change2 -= 5;
      centsArray.push(5);
    };
    if (change2 - 5 < 0 || nickelCounter >= (cid[1][1] * 100)){
      break;
    };
  };
  //penny loop
  for (let i = 0; i < 100000; i++){
    if (change2 - 1 >= 0){
      pennyCounter += 1;
      change2 -= 1;
      centsArray.push(1);
    };
    if (change2 - 1 < 0 || pennyCounter >= (cid[0][1] * 100)){
      break;
    };
  };
  // end change in cents loops

  //change in dollars loops
  let hundredCounter = 0;
  let twentyCounter = 0;
  let tenCounter = 0;
  let fiveCounter = 0;
  let oneCounter = 0;
  //Hundred Loop
  for (let i = 0; i < 100000; i++){
    if (change1 - 100 >= 0){
      hundredCounter += 100;
      change1 -= 100;
      dollarArray.push(100);
    };
    if (change1 - 100 < 0 || hundredCounter >= cid[8][1]){
      break;
    };
  };
  //Twenty Loop
  for (let i = 0; i < 100000; i++){
    if (change1 - 20 >= 0){
      twentyCounter += 20;
      change1 -= 20;
      dollarArray.push(20);
    };
    if (change1 - 20 < 0 || twentyCounter >= cid[7][1]){
      break;
    };
  };
  //Ten Loop
  for (let i = 0; i < 100000; i++){
    if (change1 - 10 >= 0){
      tenCounter += 10;
      change1 -= 10;
      dollarArray.push(10);
    };
    if (change1 - 10 < 0 || tenCounter >= cid[6][1]){
      break;
    };
  };
  //Five Loop
  for (let i = 0; i < 100000; i++){
    if (change1 - 5 >= 0){
      change1 -= 5;
      dollarArray.push(5);
    };
    if (change1 - 5 < 0 || fiveCounter >= cid[5][1]){
      break;
    };
  };
  //One Loop
  for (let i = 0; i < 100000; i++){
    if (change1 - 1 >= 0){
      oneCounter += 1;
      change1 -= 1;
      dollarArray.push(1);
    };
    if (change1 - 1 < 0 || oneCounter >= cid[4][1]){
      break;
    };
  };
  // end change in dollars loops
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;
  let hundredArray = ['ONE HUNDRED'];
  let quarterArray = ['QUARTER'];
  let dimeArray = ['DIME'];
  let nickelArray = ['NICKEL'];
  let pennyArray = ['PENNY'];
  let dollars = 0;
  let fivers = 0;
  let tenners = 0;
  let twenties = 0;
  let hundreds = 0;
  let dollarsArray = ['ONE'];
  let fiverArray = ['FIVE'];
  let tennerArray = ['TEN'];
  let twentyArray = ['TWENTY'];
  for (let i = 0; i < centsArray.length; i++){
    if (centsArray[i] == 25){
      quarters += 0.25;
    };
    if (centsArray[i] == 10){
      dimes += 0.1;
    };
    if (centsArray[i] == 5){
      nickels += 0.05;
    };
    if (centsArray[i] == 1){
      pennies += 0.01
    };
  };
  for (let i = 0; i < dollarArray.length; i++){
    if (dollarArray[i] == 100){
      hundreds += 100;
    }
    if (dollarArray[i] == 20){
      twenties += 20;
    };
    if (dollarArray[i] == 10){
      tenners += 10;
    };
    if (dollarArray[i] == 5){
      fivers += 5;
    };
    if (dollarArray[i] == 1){
      dollars += 1;
    };
  };
  if (hundreds > 0){
    hundredArray.push(hundreds);
    changeArray.push(hundredArray);
  };
  if (twenties > 0){
    twentyArray.push(twenties);
    changeArray.push(twentyArray);
  };
  if (tenners > 0){
    tennerArray.push(tenners);
    changeArray.push(tennerArray);
  };
  if (fivers > 0){
    fiverArray.push(fivers);
    changeArray.push(fiverArray);
  };
  if (dollars > 0){
    dollarsArray.push(dollars);
    changeArray.push(dollarsArray);
  };
    if (quarters > 0){
    quarterArray.push(quarters);
    changeArray.push(quarterArray);
  };
  if (dimes > 0){
    dimeArray.push(dimes);
    changeArray.push(dimeArray);
  };
  if (nickels > 0){
    nickelArray.push(nickels);
    changeArray.push(nickelArray);
  };
  if (pennies > 0){
    pennyArray.push(pennies);
    changeArray.push(pennyArray);
  };
  let finalChange = 0;
  for (let i = 0; i < changeArray.length; i++){
    finalChange += changeArray[i][1];
  }
  if (finalChange < change){
    console.log({status: "INSUFFICIENT_FUNDS", change: []});
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  console.log({status: 'OPEN', change: changeArray});
  return {status: 'OPEN', change: changeArray};
};

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
