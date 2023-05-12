console.log("Welcome to Tic Tac Toe")
let music =new Audio("music.mp3");
let audioTurn =new Audio("ting.mp3");
let gameover =new Audio("gameover.mp3");
let turn ="X";

//Function to change the turn.
const changeTurn =() =>{
 return turn=== "X"?"0":"X"
}

let boxes=document.getElementsByClassName("box");

//Function to check for a win.
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            boxes[e[0]].style.backgroundColor = 'green';
            boxes[e[1]].style.backgroundColor = 'green';
            boxes[e[2]].style.backgroundColor = 'green';
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
            
            let wininfo=document.querySelector('.info');
            wininfo.innerText = boxtext[e[0]].innerText +" Won !";
           
            
            
        }
    })

}

//Game Logic
 music.play();


Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            checkWin();
            
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false

    Array.from(boxes).forEach(element =>{
        element.style.backgroundColor='#DDC3A5';
    })
            
    
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
})