function eval() {
    // Do not use eval!!!
    return;
}
function expressionCalculator(expr) {
    let ArrayFromExpr = expr.split(' ').join('').split('');
    let normalArr = []; // array normal number,brackets and math operation

    // array normal number,brackets and math operation
    function getNormalArr(){
        
        for (let i = 0; i < ArrayFromExpr.length; i++){
            if (isNaN(Number(ArrayFromExpr[i-1])) && !isNaN(Number(ArrayFromExpr[i])) && isNaN(Number(ArrayFromExpr[i+1]))){
                normalArr.push(ArrayFromExpr[i])};
            if (!isNaN(Number(ArrayFromExpr[i])) && !isNaN(Number(ArrayFromExpr[i+1]))){
                normalArr.push(`${ArrayFromExpr[i]}${ArrayFromExpr[i+1]}`);
            };
            if ( ArrayFromExpr[i] === '+') normalArr.push('+');
            if ( ArrayFromExpr[i] === '-') normalArr.push('-');
            if ( ArrayFromExpr[i] === '*') normalArr.push('*');
            if ( ArrayFromExpr[i] === '/') normalArr.push('/');
            if ( ArrayFromExpr[i] === '(') normalArr.push('(');
            if ( ArrayFromExpr[i] === ')') normalArr.push(')');
        }
        return normalArr;
    }   

    //count in brackets
    //not done
    function countBrackets () {
        let countOutFromBrackets = [];
        for (let i = 0; i < normalArr.length; i++){
            if (normalArr[i] === '*'){
                +normalArr[i-1] * +normalArr[i+1]};
            if (normalArr[i] === '/'){
                +normalArr[i-1] / +normalArr[i+1]};
            return countOutFromBrackets;
        }      
    }
    
    // function Calculator() {
    //     this.methods = {
    //         "*" : (a, b) => a * b,
    //         "/" : (a, b) => a / b
    //     };

    //     this.calculate = function(str) {}
    // }



    // cuts out what is in brackets
    function defBrackets () {
        for (let i = 0; i < normalArr.length-1; i++){
            if (normalArr[i] == ')'){
                for ( j=i ; j > 0 ; j--){
                    if (normalArr[j] == '('){
                        normalArr.slice(j + 1, i);                                        
                    }
                }
            }   
        }
    }
    
    console.log(getNormalArr());

}

module.exports = {
    expressionCalculator
}

