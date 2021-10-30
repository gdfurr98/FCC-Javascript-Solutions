function rot13(str) {
    let stringNumArray = [];
    let string = '';
    for (let i = 0; i < str.length; i++){
        stringNumArray.push(str[i].charCodeAt());
    }
    for (let i = 0; i < stringNumArray.length; i++){
        if (stringNumArray[i] >= 65 || stringNumArray <= 90){
            if (stringNumArray[i] <= 77){
                string += String.fromCharCode(stringNumArray[i] + 13);
            };
            if (stringNumArray[i] > 77){
                string += String.fromCharCode(stringNumArray[i] - 13);
            };
        };
        if (stringNumArray[i] < 65 || stringNumArray[i] > 90){
            string += String.fromCharCode(stringNumArray[i]);
        };
    };
    console.log(stringNumArray);
    console.log(string);
    return string;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
