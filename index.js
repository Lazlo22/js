const a = parseInt(prompt('Enter the a value'));
const b = parseInt(prompt('Enter the b value'));
const c = parseInt(prompt('Enter the c value'));
const result = solutionIs(a,b,c);
function calcDiscr(a,b,c){
    return b*b - 4*a*c;
}
function solutionIs(a,b,c){
    const d = calcDiscr(a,b,c);
    if (d < 0){
        alert("The equation ain`t have  roots");
    } 
    if (d == 0){
        const x = -b/(2*a);
        alert("The root is " + x);
    }
    if(d > 0){
        const xRoot1 =(-b - Math.sqrt(d))/(2*a);
        const xRoot2 =(-b + Math.sqrt(d))/(2*a);
        alert("These are the solution " +xRoot1 +"; " +xRoot2);
    }
}