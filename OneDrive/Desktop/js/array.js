// push method,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let fruites=["mango", "apple", "banana", "graps"];
// let result=fruites.push("yellow");
// console.log(fruites);
// console.log(result);
// console.log(fruites.push());

// (2),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// pop method,,,,,,,,,,,,
// let fruites=["mango", "apple", "banana", "graps"];
// console.log(fruites.pop());
// console.log(fruites);

// (3),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// unshift method,,,,,,,,,,,,,,,,,
//   let fruites=["mango", "apple", "banana", "graps"];
//   fruites.unshift("apple");
//   console.log(fruites.unshift());
//   console.log(fruites);

// (4),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// shift,,,,,,,,,,,,,,,,,,
// let fruites=["mango", "apple", "banana", "graps"];
  
//   console.log(fruites.shift());
//   console.log(fruites);

// (5),,,,,,,,,,,,,,,,,,,,,,,,,,,,
// splice method,,,,,,,,,,,,,,, fruites.splice(startindex, deletElement, additem....)
// let fruites=["mango", "apple", "banana", "graps"];
// fruites.splice(1, 2, "1");
// console.log(fruites);

//(6),,,,,,,,,,,,,,,,,,,,,,,,,,,
//indexof method,,,,,,,
// let array=[11,12,1,3,14,15,16,4];
// let result=array.indexOf(4);
// console.log(result);

// (7),,,,,,,,,,,,,,,,,,,,,,,,,
// last indeof method,,,,,,,,,,,,,,,,,,
// let array=[1,2,3,4,5,6,5,7];  // <<<========
// let result=array.lastIndexOf(5, array.length-1);
// console.log(result);

// (8,),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// includes methhod,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, return boolean value,,,,,,,,,,,
// let array=[1,2,3,4,5,6,7];
// let result=array.includes(6);
// console.log(result);

// (9),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// find method,,,,,,,,,,,,,,,,,,,,,, find method return value,,,,,,,,,
// let array=[1,2,4,6,3];
// let result=array.find((curElem)=>{
//  return curElem>2;
// });
// console.log(result);

// (10),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//  findindex method ,,,,,,,,,,,,,,,,,,,,, findindext method return indexno. of this value,,,,,,,,,,,,
//  let array=[10,30,40,12,1];
//  let result=array.findIndex((curElem)=>{
//   return curElem > 12;
//  });
//  console.log(result);

// (11),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// filter method ,,,,,,,,,,,,,,,,,,
// let array=[1,2,3,4,566,7,86,66,2];
// let result=array.filter((curElem)=>{
//   return  curElem > 3;
// });
// console.log(result);


// (12),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let product=[
//     {name: "watch", price: 100},
//     {name: "haircolor", price: 40},
//     {name: "sound", price: 5000},
//     {name: "Belt" , price:150},
// ];
// let result=product.filter((curElem) =>{
//  return curElem.price <= 150;
// });
// console.log(result);

// (13),,,,,,,,,,,,,,,,,,,,,,,,,,, unique value ,,,,,,,,,,,,,,,,
// let array=[1,2,3,1,4,2,5,6,7,5];
// let result=array.filter((curEle , index, arr) =>{
//     console.log(index);
//  console.log(arr.indexOf(curEle));
//  return arr.indexOf(curEle) === index;
// });
// console.log(result);

// (14),,,,,,,,,,,,,,,,,,,,,,,,,,, set method ,,,,,,, to unique value
// let number=[1,4,2,4,5,1,3,7,6];
// console.log(new Set(number));

// (15),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,sort method ,,,,,,,,,only words,,,,
// let fruites=["mango", "apple", "graps", "banana"];
// fruites.sort();
// console.log(fruites);

// (16),,,,,,,,,,,,,,,,,,,,,,,,,compair method ,,,,in sort,,,,, number value,,
//   let arr=[2,4,1,3,6,5,8,7];
//   let result=arr.sort((a,b)=>{
//     if(a>b) return 1;
//     if(a<b) return -1;
//   });
//   console.log(result);


//  (17),,,,,,,,,,,,,,,,,,,,,,,,,,,,,reduce method,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let shopingCart=[100,200,300];
// let total=shopingCart.reduce((accum, curElem)=>{
//   return accum + curElem;
// },0);
// console.log(total);

// (18),,,,,,,,,,,,,,,,,,,,,,,,, reduce method ,,,,,,,,,,,,,,,,,
// let cart=[
//     {name: "watch" , price: 300},
//     {name: "belt", price: 150},
// ];
// let total=cart.reduce((accum, curElem)=>{
//     return accum + curElem.price;
// },0);
// console.log(total);

// (19),,,,,,,,,,,,,,,,, reverse  method ,,,,,,,,,,,,,,,,,,,,,,,,,,
// let array=[1,2,3,4]
// let result=array.reverse();
//      console.log(result);
