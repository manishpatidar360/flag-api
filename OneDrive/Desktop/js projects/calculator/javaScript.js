let boxes=document.querySelectorAll(".box");
let input=document.querySelector("input");
let string="";
 let arr=Array.from(boxes);
 arr.forEach(button =>{
  button.addEventListener("click",(e)=>{
    if(e.target.innerText == "="){
      string=eval(string);
      input.value=string;
    }else if(e.target.innerText == "AC"){
      string="";
      input.value=string;
    }
    else if(e.target.innerText == "X"){
      string=string.toString().substring(0, string.length-1);
      input.value=string;
    }
    else {
    string+=e.target.innerText;
    input.value=string;
    }
  });
 });