console.log("Welcome to the game");
let turn="0";
let isgameOver=false;
let info=document.querySelector(".info");   

//function to check your turn
const changeTurn=()=>{
        return turn==="0"?"X":"0";
}

//function to checkwinner
const checkWinner=()=>{
  let boxtext=document.getElementsByClassName("boxText");
 
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
      if (screen.availWidth>920){
        document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="10vw";
      }else{
        document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="30vw";
      }

      //below command function same as above command
      //document.getElementsByClassName("imgBox")[0].getElementsByTagName("img")[0].style.width="10vw";
    }
 })
}

let box=document.getElementsByClassName("box");
//boxes return a html therefore we need to convert 
//it in array form

Array.from(box).forEach(element=>{
  
  let boxText=element.querySelector(".boxText");
  element.addEventListener("click",(e)=>{
  if (boxText.innerHTML===""){
    boxText.innerHTML=turn;
    turn=changeTurn();
  }
  
  if (!isgameOver){

     checkWinner(); 
   }
})
})

//Add event listener to reset button
let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
  
    let boxTexts=document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(e=>{
    e.innerHTML="";
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="0px";
    info.innerHTML="";
  })
 location.reload();
})
