function telephoneCheck(str) {
  let letterRegex = /[a-zA-Z]+/;
  let tenRegex = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
  let twelveHypRegex = /^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
  let twelveWhiteRegex = /^[0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9]/;
  let thirteenRegex = /^\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
  let fourteenParenthRegex = /^1 \([0-9][0-9][0-9]\) [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
  let fourteenRegex = /^1 [0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
  let otherReg = /^1 [0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9]/;
  let anotherReg = /^1\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
    if (letterRegex.test(str) || str.length == 11){
        return false;
    }
    if (tenRegex.test(str) || twelveHypRegex.test(str) || twelveWhiteRegex.test(str) || thirteenRegex.test(str) || fourteenParenthRegex.test(str) || fourteenRegex.test(str) || otherReg.test(str) || anotherReg.test(str)){
            console.log('true')
            return true;
    };
    return false;
}


telephoneCheck("555-555-5555");
telephoneCheck("27576227382");
