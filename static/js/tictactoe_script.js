function initGame() {
    let grid = document.getElementById("game_grid");
    let menu = document.getElementById("menu");
    let choose_player = document.getElementById("choose_player");
    menu.style.display = "none";
    choose_player.innerHTML = "YOU PLAY AS " + "<span>" + getPlayerChar() + "</span>";
    grid.style.display = "flex";
}


function getPlayerChar() {
    let selected_player = document.getElementById("select_player");
    let player_char = selected_player.value;

    return player_char;
}


function getOpponentChar(playerChar) {
    if (playerChar === "X") {
        playerChar = "O";
    } else if (playerChar === "O") {
        playerChar = "X";
    }

    return playerChar;
}


// Function placing the bricks, both player and computer
function drawPlayerChar(field, playerChar) {
    if (field.innerHTML === "") {
        field.innerHTML = "<p>" + playerChar + "</p>";
        let emptyField = getEmptyField();
        if (emptyField === null) {
            gameOver();
        } else {
            let opponentChar = getOpponentChar(playerChar);
            emptyField.innerHTML = "<p>" + opponentChar + "</p>";
        }
    }
    checkFieldsForWin();
}


// Function for finding an unoccupied field
function getEmptyField() {
    let fields = document.getElementsByClassName("field");
    let emptyFields = Array.from(fields).filter(field => field.innerHTML === "");

    if (emptyFields.length === 0) {
        return null;
    }

    // Random index (field) to draw opponent player
    let randomIndex = Math.floor(Math.random() * emptyFields.length);

    return emptyFields[randomIndex];
}


function checkFieldsForWin() {
    let fields = document.getElementsByClassName("field");
    let playerChar = "<p>" + getPlayerChar() + "</p>";
    let opponentChar = "<p>" + getOpponentChar(getPlayerChar()) + "</p>";

    // Temporary solution, checking both player and opponent for every possible win
    if (fields[0].innerHTML === playerChar && fields[1].innerHTML === playerChar && fields[2].innerHTML === playerChar) {
        return gameWin(playerChar);
    }
    if (fields[0].innerHTML === opponentChar && fields[1].innerHTML === opponentChar && fields[2].innerHTML === opponentChar) {
        return gameWin(opponentChar);
    }

    if (fields[3].innerHTML === playerChar && fields[4].innerHTML === playerChar && fields[5].innerHTML === playerChar) {
        return gameWin(playerChar);
    }
    if (fields[3].innerHTML === opponentChar && fields[4].innerHTML === opponentChar && fields[5].innerHTML === opponentChar) {
        return gameWin(opponentChar);
    }

    if (fields[6].innerHTML === playerChar && fields[7].innerHTML === playerChar && fields[8].innerHTML === playerChar) {
        return gameWin(playerChar);
    }
    if (fields[6].innerHTML === opponentChar && fields[7].innerHTML === opponentChar && fields[8].innerHTML === opponentChar) {
        return gameWin(opponentChar);
    }

    if (fields[0].innerHTML === playerChar && fields[3].innerHTML === playerChar && fields[6].innerHTML === playerChar) {
        return gameWin(playerChar);
    }
    if (fields[0].innerHTML === opponentChar && fields[3].innerHTML === opponentChar && fields[6].innerHTML === opponentChar) {
        return gameWin(opponentChar);
    }

    if (fields[1].innerHTML === playerChar && fields[4].innerHTML === playerChar && fields[7].innerHTML === playerChar) {
        return gameWin(playerChar);
    }
    if (fields[1].innerHTML === opponentChar && fields[4].innerHTML === opponentChar && fields[7].innerHTML === opponentChar) {
        return gameWin(opponentChar);
    }

    if (fields[2].innerHTML === playerChar && fields[5].innerHTML === playerChar && fields[8].innerHTML === playerChar) {
        return gameWin(playerChar);
    }
    if (fields[2].innerHTML === opponentChar && fields[5].innerHTML === opponentChar && fields[8].innerHTML === opponentChar) {
        return gameWin(opponentChar);
    }

    if (fields[0].innerHTML === playerChar && fields[4].innerHTML === playerChar && fields[8].innerHTML === playerChar) {
        return gameWin(playerChar);
    }
    if (fields[0].innerHTML === opponentChar && fields[4].innerHTML === opponentChar && fields[8].innerHTML === opponentChar) {
        return gameWin(opponentChar);
    }

    if (fields[2].innerHTML === playerChar && fields[4].innerHTML === playerChar && fields[6].innerHTML === playerChar) {
        return gameWin(playerChar);
    }
    if (fields[2].innerHTML === opponentChar && fields[4].innerHTML === opponentChar && fields[6].innerHTML === opponentChar) {
        return gameWin(opponentChar);
    }

    else { return null; }
}


function removeDrawFunction() {
    let fields = document.getElementsByClassName("field");
    Array.from(fields).forEach(field => {
        field.removeAttribute("onclick");
    });
}


function gameOver() {
    removeDrawFunction()
    let choose_player = document.getElementById("choose_player");
    choose_player.innerHTML = "GAME OVER";
    choose_player.style.color = "#BC4749";
}


function gameWin(player) {
    removeDrawFunction()
    let choose_player = document.getElementById("choose_player");
    if (player === "<p>" + getPlayerChar() + "</p>") {
        choose_player.innerHTML = "YOU WIN!";
        choose_player.style.color = "#70E000";
    }
    else if (player === "<p>" + getOpponentChar(getPlayerChar()) + "</p>") {
        choose_player.innerHTML = "YOU LOSE!";
        choose_player.style.color = "#BC4749";
    }
}