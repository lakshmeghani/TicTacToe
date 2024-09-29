let boxes = document.querySelectorAll(".box");
let mode = document.querySelector(".mode");
let reset = document.querySelector(".reset");
let winner = document.querySelector(".winner");
let player1 = document.querySelector(".pl1");
let player2 = document.querySelector(".pl2");

let winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let currentPlayer = true;
let buttons_clicked = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (currentPlayer) {
            box.innerText = "✖";
            currentPlayer = false;
        }
        else {
            box.innerText = "O";
            currentPlayer = true;
        }
        buttons_clicked++;
        box.disabled = true;

        for (let pattern of winPatterns) {
            let val1 = boxes[pattern[0]].innerText;
            let val2 = boxes[pattern[1]].innerText;
            let val3 = boxes[pattern[2]].innerText;
            if (val1 != "" && val2 != "" && val3 != "") {
                if (val1 === val2 && val2 === val3) {
                    winner.style.display = "block";
                    winner.innerText = `Winner: Player '${val1}'`;
                    winnerDeclared();
                    break;
                }
                else if (buttons_clicked == 9) {
                    winner.style.display = "block";
                    winner.innerText = `DRAW`;
                    winnerDeclared();
                }
            }
        }

        // if (winNum == 8) {
        //     winner.style.display = "block";
        //     winner.innerText = `DRAW`;
        //     winnerDeclared();
        // }
    });
});



const winnerDeclared = () => {
    for (const box of boxes) {
        box.disabled = true;
        reset.innerText = "New Game";
    }
};

reset.addEventListener("click", () => {
    currentPlayer = true;
    buttons_clicked = 0;
    winner.innerText = "";
    winner.style.display = "none";
    reset_game();
    player1.innerText = "Player 01";
    player2.innerText = "Player 02";
});

const reset_game = () => {
    for (const box of boxes) {
        box.innerText = "";
        box.disabled = false;
        reset.innerText = "Reset Game";
    }
};

player1.addEventListener("click", () => {
    player1.innerText = prompt("Enter name of Player 01");
});

player2.addEventListener("click", () => {
    player2.innerText = prompt("Enter name of Player 02");
});