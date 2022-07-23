let gameState = "start";
let player = "X";
let winner = " ";
let board = [[' ', ' ', ' '],
             [' ', ' ', ' '],
             [' ', ' ', ' ']
            ];

function setup() {
    createCanvas(600, 600);
    textAlign(CENTER);
}

function draw() {
    if (gameState == "start") {
        startPage();
    }

    else if (gameState == "playing") {
        drawBoard();
        endGame();
    }

    else if (gameState == "end") {
        endPage();
    }
}

function startPage() {
    fill(255);
    strokeWeight(50);
    rect(0, 0, 600, 600);
    fill(50);
    textSize(100);
    text("PLAY", 300, 325);
    textSize(20);
    text("click anywhere to start game", 300, 350);
} // draws the start page

function endPage() {
    fill(255);
    strokeWeight(50);
    rect(0, 0, 600, 600);
    fill(50);
    textSize(100);
    if (winner == "X") {
        text("X WON!", 300, 325);
    }
    else if (winner == "O") {
        text("O WON!", 300, 325);
    }
    else if (winner == " ") {
        text("TIED!", 300, 325);
    }
    textSize(20);
    text("click anywhere to start a new game", 300, 350);
} // draws the end page

function newGame() {
    gameState = "playing";
    board = [[' ', ' ', ' '],
             [' ', ' ', ' '],
             [' ', ' ', ' ']
            ];
    player = "X";
    winner = " ";
} // refreshes the board

function drawBoard() {
    background(255);
    strokeWeight(2);
    line(200, 0, 200, 600);
    line(400, 0, 400, 600);
    line(0, 200, 600, 200);
    line(0, 400, 600, 400);

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            fill(50);
            textSize(100);
            text(board[row][col], 100 + 200 * col, 130 + 200 * row);
        }
    }
} // draws the board with the X's and O's

function changePlayer() {
    if (player == "X") {
        player = "O";
    }
    else if (player == "O") {
        player = "X";
    }
} // changes the player from X to O or O to X

function endGame() {
    for (let row = 0; row < board.length; row++) {
        if (board[row][0] == board[row][1] && board[row][0] == board[row][2] && board[row][0] != " ") {
            winner = board[row][0];
            gameState = "end";
        }
    } // check for win horizontally
    
    for (let col = 0; col < board[0].length; col++) {
        if (board[0][col] == board[1][col] && board[0][col] == board[2][col] && board[0][col] != " ") {
            winner = board[0][col];
            gameState = "end";
        }
    } // check for win vertically

    if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != " ") {
        winner = board[0][0];
        gameState = "end";
    }

    if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] != " ") {
        winner = board[0][0];
        gameState = "end";
    }

    let count = 0;
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] == " ") {
                count++;
            }
        }
    }

    if (count == 0) {
        gameState = "end";
    }
}

function mouseClicked() {
    if (gameState == "start") {
        newGame();
    } // changes game state to playing

    else if (gameState == "playing") {
        if (mouseX > 0 && mouseX < 200 && mouseY > 0 && mouseY < 200 ) {
            if (board[0][0] == " ") {
                board[0][0] = player;
                changePlayer();
            }
        } // top left

        else if (mouseX > 200 && mouseX < 400 && mouseY > 0 && mouseY < 200 ) {
            if (board[0][1] == " ") {
                board[0][1] = player;
                changePlayer();
            }
        } // top middle

        else if (mouseX > 400 && mouseX < 600 && mouseY > 0 && mouseY < 200 ) {
            if (board[0][2] == " ") {
                board[0][2] = player;
                changePlayer();
            }
        } // top right

        else if (mouseX > 0 && mouseX < 200 && mouseY > 200 && mouseY < 400 ) {
            if (board[1][0] == " ") {
                board[1][0] = player;
                changePlayer();
            }
        } // middle left

        else if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400 ) {
            if (board[1][1] == " ") {
                board[1][1] = player;
                changePlayer();
            }
        } // middle middle

        else if (mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY < 400 ) {
            if (board[1][2] == " ") {
                board[1][2] = player;
                changePlayer();
            }
        } // middle right

        else if (mouseX > 0 && mouseX < 200 && mouseY > 400 && mouseY < 600 ) {
            if (board[2][0] == " ") {
                board[2][0] = player;
                changePlayer();
            }
        } // bottom left

        else if (mouseX > 200 && mouseX < 400 && mouseY > 400 && mouseY < 600 ) {
            if (board[2][1] == " ") {
                board[2][1] = player;
                changePlayer();
            }
        } // bottom middle

        else if (mouseX > 400 && mouseX < 600 && mouseY > 400 && mouseY < 600 ) {
            if (board[2][2] == " ") {
                board[2][2] = player;
                changePlayer();
            }
        } // bottom right
    } // updates the board based on the player clicks

    else if (gameState == "end") {
        newGame();
    } // changes the game state back to playing
}