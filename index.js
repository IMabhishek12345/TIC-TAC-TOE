console.log("Welcome to the game");
let turn="x";

//function to check your turn
const checkTurn=()=>{
  return turn="0"?"x":"0";
}

//function to checkwinner

const checkWinner=()=>{

}

let boxes=document.getElementsByClassName("box");
//boxes return a html therefore we need to convert 
//it in array form
Array.from(boxes).forEach(element=>{
    
})