// normal function in javaScript,,,
// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,20);

//(2_),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// function expration,,,,,,,,,
// let result= function multiply(a,b){
//     result= a*b;
//     return result;
// }
// console.log(result(3,5));

// (3),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// anonymose function,,,,,,
// let result= function (a,b){
//     return a-b;
// }
// console.log(result(20,10));

// (4,,,,,,,,,,,,,,,,,,,,,,),,,,,,,,,,,,,,,,,,,

// imidetly invoke function exprtion,,,,
//  (function (a,b){
//     console.log(a*b);
//  })(5,5);

//(5),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// arrow function,,,,,
//  let sum=(a,b) =>{
//     console.log(`the sum of ${a} and ${b} is ${a+b}`);
//  }
//  sum(12,13);

//????????????????????????????????????????????????????????????????????????????????????????????  important ...........calculater....
 let result=(num1, num2, oprator) =>{
    switch(oprator){
        case"+": 
        return num1+num2;
        break;

        case"-":
        return num1-num2;
        break;

        case"*":
        return num1*num2;
        break;

        case"/":
        return num1/num2;
        break;

        default:
            return "invalid oprator" ;
    }
 } 
 console.log(result(2,4, "*"));