let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let newgame=document.querySelector(".newgame");
let turn=true;
let winningPetarns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];
let showMsg=(winner)=>{
    msg.innerText= `congratulations winner is ${winner}`;
    msg.classList.remove("msg");
}
boxes.forEach((curBox)=>{
    curBox.addEventListener("click",()=>{
        if(turn===true){
            curBox.innerText="O";
            turn=false;
        }else{
            curBox.innerText="X";
            turn=true;
        }
        curBox.disabled=true;
        cheakWinner();
    });
});

const cheakWinner=()=>{
    for(let petarns of winningPetarns ){
      let pos1value= boxes[petarns[0]].innerText; 
      let pos2value= boxes[petarns[1]].innerText; 
      let pos3value= boxes[petarns[2]].innerText;
      if(pos1value != "" && pos2value !="" && pos3value !=""){
      if((pos1value == pos2value) && (pos2value== pos3value)){
        showMsg(pos1value);
        disablebox();
      }}
    }
};

let disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

newgame.addEventListener("click", ()=>{
    msg.classList.add("msg");
    turn=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
});
