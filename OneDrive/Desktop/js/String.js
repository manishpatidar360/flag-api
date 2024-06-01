// indexOf method,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let name="my name is manish";
// console.log(name.indexOf("manish"));

// (2),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//    convert string to Array,,,,,,,,,,,,,,,,,,,,,,.,
// let name="manish patidar";
// let convertArray=Array.from(name);
// console.log(convertArray);

// (3),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//   search method ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,in this we can use regular expration,,,,,, 
// let name="hello javaScript i am learning javaScript";
// let result=name.search(/javascript/gi)
// console.log(result);

// (4),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//   match method ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let name="hello javaScript i am learning javaScript";
// let result=name.match(/javascript/i)
// console.log(result);

// (4),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//   match method ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let name="hello javaScript i am learning javaScript";
// let result=name.match(/javascript/gi)
// console.log(result);

// (5),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//   matchAll method ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let name="hello javaScript i am learning javaScript";
// let result=name.matchAll("javaScript")
// console.log(...result);

// (6),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// include method ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let name="hello javaScript i am learning javaScript";
// let result=name.includes("java")
// console.log(result);

// (7),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// startsWith method ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let name="hello javaScript i am learning javaScript";
// let result=name.startsWith("java")
// console.log(result);

// (8),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// endsWith ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let name="hello javaScript i am learning javaScript";
// let result=name.endsWith("javaScript")
// console.log(result);

// (9),,,,,,,,,,,,,,,slice method ,,,,,,,,,,,,,,,,,,
let array="my name is manish"
let result=array.slice(3,7);
     console.log(result);

// (10),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// charAt method ,,,,,,,,,,,,,,  not accept negativ index ,,,,,,,,,,,,,,
// let array="my name is manish"
// let result=array.charAt(3);
//      console.log(result);

// (11),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// charAtcode,,,,,,,,,,,,,,,,,,,,,,,,,,,,, return charactor aaski Code ,,,,,,,
// let array="my name is manish"
// let result=array.charCodeAt(4);
//      console.log(result);

// (12),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// at method ,,,,,,,,,,,,,,,,,,,,,,,,,, it is accept negativ index,,,,,,,,,,,,,,
// let array="my name is manish"
// let result=array.at(-6);
//      console.log(result);

// (13),,,,,,,,,,,,,,,,, split method ,,,,,,,,,,convert string to array,,,,,,,,,,,,,,,,
// let array="my name is manish"
// let result=array.split();
//      console.log(result);

// (14),,,,,,,,,,,,,,,,, reverse  method ,,,,,,,,,,,,,,,,,,,,,,,,,,
// let array="my name is manish"
// let result=array.split(" ").reverse();
//      console.log(result);

// (15),,,,,,,,,,,,,,,,, join method ,,,,,,,,,,convert array to string,,,,,,,,,,,,,,,,
// let array=["my","name", "is", "manish"]
// let result=array.join();
//      console.log(result);

// ?????????????????????????????????? String interview question?????????????????????????
                                   //  IMP
// ?????????????????????????????????? String interview question?????????????????????????
// (1),,,,,,,,,,,,,,,,,,,,, a to z character print,,,,,,,,,,,,,,,,,,,,,,,,
//   let start="a".charCodeAt();
//   console.log(start);
//   let end="z".charCodeAt();
//   console.log(end);
//   for(let i= start; i<=end; i++){
//     console.log(String.fromCharCode(i));
//   }

// (2),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,vowel cheak,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let text=(str)=>{
//   let vowel="aeiou";
//   for(let item of vowel){
//     if(!str.includes(item)){
//         return false;
//     }
//   }
//   return true;
// }
// console.log(text("my name is manish and i am currently gruadat in b.c.a and oo my goad"));


// (3),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,count vowel,,,,,,,,,,,,,,,,,,,,,,,,,
// let text=(str)=>{
// let vowel= "aeiou";
// let count=0;
// for(let item of str){
//     if(vowel.includes(item)){
//        count++;
//     }
// }
// console.log(count);
// }
// text("my name is manish and i am currently gruadat in b.c.a and oo my goad");

// (4),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,count vowel in the text,,,,,,,,,,,,,,,,,,,,,,,,,

// let text=(str)=>{
//     let vowel= "aeiou";
//     for(let item of vowel){
//         let count=0;
//     for(let item2 of str){
//         if(item === item2){
//             count++
//         }
//     }
//       console.log(`${item} - ${count}`); 
//     }
//     }
//     text("my name is manish and i am currently gruadat in b.c.a and oo my goad");