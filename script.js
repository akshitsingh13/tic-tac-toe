const allBoxes = document.querySelectorAll(".game-box");

let player1 = "O";
let player2 = "X";

let currentPlayer = player1;
let board = ["", "", "", "", "", "", "", "", ""];

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]

function gameStart() {
    allBoxes.forEach(box => {
        box.addEventListener("click", function (e) {
            const index = e.target.dataset.index;

            if (board[index] !== "") return;

            board[index] = currentPlayer;
            console.log(board);

            if (currentPlayer === player1) {
                e.target.style.backgroundImage = "url('Assests/Icons/O-Final.png')";
            }
            else {
                e.target.style.backgroundImage = "url('Assests/Icons/X-Final.png')";
            }

            e.target.style.backgroundSize = "cover";
            e.target.style.backgroundPosition = "center";

            if (winCheck()) return;

            if (board.every(cell => cell !== "")){
                alert("Draw!");
                return;
            }

            currentPlayer = (currentPlayer === player1) ? player2 : player1;
        })
    })
}

function winCheck() {
    for (let condition of winCondition) {
        const [a, b, c] = condition;
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
            alert(board[a] + " wins!");
            return true;
        }
    }
    return false;
}

gameStart();

