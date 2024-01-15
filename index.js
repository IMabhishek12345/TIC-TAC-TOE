console.log("Welcome to the game");
let turn="x";
let isgameOver=false;
//function to check your turn
const changeTurn=()=>{
    return turn==="0"?"x":"0";
}

//function to checkwinner
const checkWinner=()=>{
  let boxtext=document.getElementsByClassName("boxText");
  let info=document.querySelector(".info");   
 
  let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  
  wins.forEach(e=>{
    
    // console.log(e);
    // console.log(e[0],e[1],e[2]);// will give the index of boxText
    // console.log(boxtext[e[0]]);

    if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[1]].innerText===boxtext[e[2]].innerText && boxtext[e[0]].innerText!==""){
      info.innerHTML=boxtext[e[0]].innerText + " wins";
      isgameOver=true;
      }

  })
   
}

let box=document.getElementsByClassName("box");
//boxes return a html therefore we need to convert 
//it in array form

Array.from(box).forEach(element=>{
   let boxText=element.querySelector(".boxText");
  
   element.addEventListener("click",()=>{
   boxText.innerText=turn==="x"?"x":"0";
   turn=changeTurn();
   if (!isgameOver){

     checkWinner(); 
   }
 
  })
})