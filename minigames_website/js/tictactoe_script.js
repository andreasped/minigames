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

    let randomIndex = Math.floor(Math.random() * emptyFields.length);

    return emptyFields[randomIndex];
}


function checkFieldsForWin() {
    let fields = document.getElementsByClassName("field");
    let filledFields = Array.from(fields).filter(field => field.innerHTML != "");
    let playerChar = getPlayerChar();
    let opponentChar = getOpponentChar(playerChar);

    // Temporary solution
    if (filledFields[0].innerHTML === "<p>" + playerChar + "</p>" && filledFields[1].innerHTML === "<p>" + playerChar + "</p>" && filledFields[2].innerHTML === "<p>" + playerChar + "</p>"
        || filledFields[0].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[1].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[2].innerHTML === "<p>" + opponentChar + "</p>") {
        return gameWin();
    }
    if (filledFields[3].innerHTML === "<p>" + playerChar + "</p>" && filledFields[4].innerHTML === "<p>" + playerChar + "</p>" && filledFields[5].innerHTML === "<p>" + playerChar + "</p>"
        || filledFields[3].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[4].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[5].innerHTML === "<p>" + opponentChar + "</p>") {
        return gameWin();
    }
    if (filledFields[6].innerHTML === "<p>" + playerChar + "</p>" && filledFields[7].innerHTML === "<p>" + playerChar + "</p>" && filledFields[8].innerHTML === "<p>" + playerChar + "</p>"
        || filledFields[6].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[7].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[8].innerHTML === "<p>" + opponentChar + "</p>") {
        return gameWin();
    }
    if (filledFields[0].innerHTML === "<p>" + playerChar + "</p>" && filledFields[3].innerHTML === "<p>" + playerChar + "</p>" && filledFields[6].innerHTML === "<p>" + playerChar + "</p>"
        || filledFields[0].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[3].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[6].innerHTML === "<p>" + opponentChar + "</p>") {
        return gameWin();
    }
    if (filledFields[1].innerHTML === "<p>" + playerChar + "</p>" && filledFields[4].innerHTML === "<p>" + playerChar + "</p>" && filledFields[7].innerHTML === "<p>" + playerChar + "</p>"
        || filledFields[1].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[4].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[7].innerHTML === "<p>" + opponentChar + "</p>") {
        return gameWin();
    }
    if (filledFields[2].innerHTML === "<p>" + playerChar + "</p>" && filledFields[5].innerHTML === "<p>" + playerChar + "</p>" && filledFields[8].innerHTML === "<p>" + playerChar + "</p>"
        || filledFields[2].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[5].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[8].innerHTML === "<p>" + opponentChar + "</p>") {
        return gameWin();
    }
    if (filledFields[0].innerHTML === "<p>" + playerChar + "</p>" && filledFields[4].innerHTML === "<p>" + playerChar + "</p>" && filledFields[8].innerHTML === "<p>" + playerChar + "</p>"
        || filledFields[0].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[4].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[8].innerHTML === "<p>" + opponentChar + "</p>") {
        return gameWin();
    }
    if (filledFields[2].innerHTML === "<p>" + playerChar + "</p>" && filledFields[4].innerHTML === "<p>" + playerChar + "</p>" && filledFields[6].innerHTML === "<p>" + playerChar + "</p>"
        || filledFields[2].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[4].innerHTML === "<p>" + opponentChar + "</p>" && filledFields[6].innerHTML === "<p>" + opponentChar + "</p>") {
        return gameWin();
    }
    else {
        return null;
    }
}


function gameOver() {
    let choose_player = document.getElementById("choose_player");
    choose_player.innerHTML = "GAME OVER";
    choose_player.style.color = "#BC4749";
}


function gameWin() {
    let choose_player = document.getElementById("choose_player");
    choose_player.innerHTML = "PLAYER " + "<span>" + getPlayerChar() + "</span>" + " WINS!";
    choose_player.style.color = "#70E000";
}