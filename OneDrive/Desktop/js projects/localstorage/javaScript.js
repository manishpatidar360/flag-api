let inputTag=document.querySelector(".input");
let spanTag=document.querySelector(".span");
let inputTag2=document.querySelector(".input2");
let spanTag2=document.querySelector(".span2");

spanTag.innerText=localStorage.getItem("myName");
spanTag2.innerText=localStorage.getItem("age");

inputTag.addEventListener("input",(e)=>{
    localStorage.setItem("myName",e.target.value);
     spanTag.innerText=localStorage.getItem("myName");
});

inputTag2.addEventListener("input", (e)=>{
    localStorage.age=e.target.value;
    spanTag2.innerText=localStorage.getItem("age");

})