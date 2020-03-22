function eval() {
    // Do not use eval!!!
    return;
}
function expressionCalculator(expr) {
    let exprArr = expr.split(' ').join('').split('');
    if (DevideByZero(exprArr)) throw "TypeError: Division by zero.";
    if (!BracketsPaired(exprArr)) throw "ExpressionError: Brackets must be paired";
    exprArr = createArrWithNumbers(exprArr);
    if (BracketsExist(exprArr)) do {
      let lind = indexOfLeftBracket(exprArr);
      let rind = indexOfRightBracket(exprArr);
      let bracketsEqual = calcWithoutBrackets(exprArr.slice(lind + 1, rind));
      exprArr.splice(lind, rind - lind + 1, bracketsEqual);
    } while (BracketsExist(exprArr));
  
    return Math.round(calcWithoutBrackets(exprArr)*10000)/10000;
}


module.exports = {
    expressionCalculator
}

function BracketsExist(arr) {
    if (arr.includes('(')) return true;
    return false;
}

function DevideByZero(arr){
    a = false;
    arr.forEach((element, index) =>{
        if (element == '/' && arr[index + 1] == '0') a = true;
    });
    return a;
}

function BracketsPaired(arr){
    let outArr = arr.join('').split('');
    let left = 0;
    let right = 0;
    outArr.forEach(elem => {
      if (elem === '(') left++;
      if (elem === ')') right++;
    });
    if (left === right) {
      return true;
    } else {
      return false;
    }
}

function indexOfRightBracket(expr) {
    return expr.indexOf(')');
}

function indexOfLeftBracket(expr) {
    return expr.lastIndexOf('(', indexOfRightBracket(expr));
}
  
function createArrWithNumbers(expr) {
    outputArr = [];
    expr.forEach((elem, ind, arr) => {
      if (isNaN(Number(elem))) {
        outputArr.push(' ');
        outputArr.push(elem);
        outputArr.push(' ');
      } else {
        outputArr.push(elem);
      };
    });
    outputArr = outputArr.join('').split(' ');
    outputArr.forEach((elem, ind, arr) => {
      if (elem === '') {
        arr = arr.splice(ind, 1);
      } else {
        if (!isNaN(Number(elem))) arr[ind] = Number(elem);
      }
    });
    return outputArr;
}
  
function calcWithoutBrackets(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '*') {
        arr.splice(i - 1, 3, arr[i - 1] * arr[i + 1]);
        i--;
      };
      if (arr[i] === '/') {
        arr.splice(i - 1, 3, arr[i - 1] / arr[i + 1]);
        i--
      };
    };
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '+') {
        arr.splice(i - 1, 3, arr[i - 1] + arr[i + 1]);
        i--;
      };
      if (arr[i] === '-') {
        arr.splice(i - 1, 3, arr[i - 1] - arr[i + 1]);
        i--;
      };
    };
return arr[0];
}
