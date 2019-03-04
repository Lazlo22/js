const a = parseInt(prompt("Enter the number: "));
const resultSum = fibSum(a);
const resultArray = fibArray(a);
const resultRecurse = fibRecurse(a);
alert("Here is Fibonacci number by sum: " + resultSum);
alert("Here is Fibonacci number by array: " + resultArray);
alert("Here is Fibonacci number by recurse: " + resultRecurse);
function fibSum (a) {
    let fibFirst = 1;
    let fibSecond = 1;
    for (let i = 3; i <= a; i++){
        let fibNext = fibFirst + fibSecond;
        fibFirst = fibSecond;
        fibSecond = fibNext;
    }
    return fibSecond;
}
function fibRecurse(a) {
    if (a <= 1){
        return a;
    }
    return fibRecurse(a - 1) + fibRecurse(a - 2);
}
function fibArray(a) {
    let numberArray = [1 , 1];
    for (let i = 3; i <= a; i++) {
        let fibNext = numberArray[numberArray.length - 1] + numberArray[numberArray.length - 2];
        numberArray.push(fibNext);
    }
    return numberArray[numberArray.length - 1];
}