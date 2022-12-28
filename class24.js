// Function Declarations
function myFunction(b, c){
    let a=b+c;
    return a;
}
console.log(myFunction(13,18));
// Function Expressions
const mySecondFunction=function(b=13,c=18){
    let a=b+c;
    return a;
};
console.log(mySecondFunction(13,18));
// Immediately Invoked Function Expression
(function(){
    let b=13;
    let c=18;
    let a=b+c;
    console.log("The sum:",a);
})();