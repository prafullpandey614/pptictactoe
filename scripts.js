console.log("welcome to the Game");
let mus = new Audio("music.mp3");
let audturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";

let isGameOver = false;
//function to change the turn
const changeTurn = ()=>{
    return turn === "X" ? "0" :"X"
}
//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
 let wins =   [ [0, 1, 2, 5, 5, 0],
 [3, 4, 5, 5, 15, 0],
 [6, 7, 8, 5, 25, 0],
 [0, 3, 6, -5, 15, 90],
 [1, 4, 7, 5, 15, 90],
 [2, 5, 8, 15, 15, 90],
 [0, 4, 8, 5, 15, 45],
 [2, 4, 6, 5, 15, 135],
] ;
    wins.forEach(e=>{
       if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='')){
           document.querySelector('.info').innerText = boxtext[e[0]].innerText +" Won" ;
           isGameOver = true ;
           document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "256px";
           document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        //    mus.pause();
           mus.play();
           console.log("jeet gaya")
       }
    })
    

}

//Game Logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        audturn.play();
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isGameOver){
                mus.pause();
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn ;
            }
           
        }

    })
    
})
//Add on click listener to reser button
reset.addEventListener('click',()=>{
   let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    } );
    turn  = "X";
    isGameOver = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName('info')[0].innerText= "Turn For "+turn ;
    mus.pause();
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})