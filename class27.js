// Callback function
function resultCalculator(result){
    document.querySelector("body").innerHTML=result;
}
function calculation(a,b,callback){
    let sum=a+b;
    callback(sum);
}
calculation(5,8,resultCalculator);