console.log("Hello world");

let b = 5;
b = "String";
b = false;
b = 5;
console.log(b instanceof Object);
console.log(3 + (4 + "1"));

console.log(("A" + +"A" + "AS").toLowerCase());

function myToStringInt(number, radix) {
    //number - any number
    //radix - camputation base if radix < 2 or radix > 36 then radix = 10
    //removes fraction part, 34.25 => 34
    const sign = number < 0 ? "-" : "";
    let res = "";
    number = Math.abs(number);
    if (radix < 2 || radix > 36) {
        radix = 10;
    }
    number = Math.round(number);
    do {
        res = getSymbol(number, radix) + res;
        number = Math.trunc(number / radix);
    } while (number != 0)

    return sign + res;
}

function getSymbol(number, radix) {
    const aCode = 'a'.charCodeAt(0);
    const delta = aCode - 10;
    let x = number % radix;
    return x < 10 ? x : String.fromCharCode(x + delta);
}
const num = 5454378;
console.log("Using myToString function: " + myToStringInt(num, 36))
console.log("Default toString function: " + num.toString(36));
console.log(myToStringInt(5454378, 36) == num.toString(36));

const strNum = '0';
let radix;
console.log(`string with number ${strNum} for radix ${radix} is ${parseInt(strNum, radix)}`);

function myParseInt(strNum, radix) {
    strNum = strNum.trim();
    let index = strNum.charAt(0) == '-' ? 1 : 0 || strNum.charAt(0) == '+' ? 1 :0;
    
    if((!radix || radix == 16) || getHexdecemalIndex(strNum.substring(index) > 0)){
       index += 2;
       radix = 16;
    }

    if(!radix ){
        radix = 10;
    }
    let res = radix > 1 && radix < 37 ? getDigitCode(strNum, index, radix) : NaN;
    if (!isNaN(res)) {
        let digit;
        index++;
        while (index < strNum.length && !isNaN(digit = getDigitCode(strNum, index, radix))) {
            res = res * radix + digit;
            index++;
        }
        if(strNum[0] == '-'){
            res = -res;
        }

    }
    return res;
}

function getHexdecemalIndex(str){
    return str.toLowerCase(startsWith('0x')) ? 2 : 0;
}

function getDigitCode(strNum, index, radix){
    const delta = 'a'.charCodeAt(0) - 10;
    const symbol = strNum.charAt(index);
    const code = symbol >= '0' && symbol <= '9' ? +symbol : symbol.charCodeAt(0) - delta;
    return code >= 0 && code < radix ? code : NaN;
}

console.log(`string with number ${strNum} for radix ${radix} is ${myParseInt(strNum, radix)}`);



