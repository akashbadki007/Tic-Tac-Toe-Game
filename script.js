let boxes = document.querySelectorAll(".game-btn");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector("#msg-container");
let msg =document.querySelector("#msg");

let turnX = true;

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgCont.classList.add("hide")
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("Box Was Clicked");

        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let boxss of boxes){
        boxss.disabled = true;
    }
};

const enableBoxes = () => {
    for(let boxss of boxes){
        boxss.disabled = false;
        boxx.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winningPattern){
        let pos1val = boxes[pattern[0]].innerText ;
        let pos2val = boxes[pattern[1]].innerText ;
        let pos3val = boxes[pattern[2]].innerText ;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("WINNER",pos1val);
                showWinner(pos1val);
            }
        }
    }
}

newBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)


