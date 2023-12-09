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
    let filledFields = Array.from(fields).filter(field => field.innerHTML != "");
    let playerChar = "<p>" + getPlayerChar() + "</p>";
    let opponentChar = "<p>" + getOpponentChar(playerChar) + "</p>";

    // Temporary solution
    if (filledFields[0].innerHTML === playerChar && filledFields[1].innerHTML === playerChar && filledFields[2].innerHTML === playerChar
        || filledFields[0].innerHTML === opponentChar && filledFields[1].innerHTML === opponentChar && filledFields[2].innerHTML === opponentChar) {
        return gameWin();
    }
    if (filledFields[3].innerHTML === playerChar && filledFields[4].innerHTML === playerChar && filledFields[5].innerHTML === playerChar
        || filledFields[3].innerHTML === opponentChar && filledFields[4].innerHTML === opponentChar && filledFields[5].innerHTML === opponentChar) {
        return gameWin();
    }
    if (filledFields[6].innerHTML === playerChar && filledFields[7].innerHTML === playerChar && filledFields[8].innerHTML === playerChar
        || filledFields[6].innerHTML === opponentChar && filledFields[7].innerHTML === opponentChar && filledFields[8].innerHTML === opponentChar) {
        return gameWin();
    }
    if (filledFields[0].innerHTML === playerChar && filledFields[3].innerHTML === playerChar && filledFields[6].innerHTML === playerChar
        || filledFields[0].innerHTML === opponentChar && filledFields[3].innerHTML === opponentChar && filledFields[6].innerHTML === opponentChar) {
        return gameWin();
    }
    if (filledFields[1].innerHTML === playerChar && filledFields[4].innerHTML === playerChar && filledFields[7].innerHTML === playerChar
        || filledFields[1].innerHTML === opponentChar && filledFields[4].innerHTML === opponentChar && filledFields[7].innerHTML === opponentChar) {
        return gameWin();
    }
    if (filledFields[2].innerHTML === playerChar && filledFields[5].innerHTML === playerChar && filledFields[8].innerHTML === playerChar
        || filledFields[2].innerHTML === opponentChar && filledFields[5].innerHTML === opponentChar && filledFields[8].innerHTML === opponentChar) {
        return gameWin();
    }
    if (filledFields[0].innerHTML === playerChar && filledFields[4].innerHTML === playerChar && filledFields[8].innerHTML === playerChar
        || filledFields[0].innerHTML === opponentChar && filledFields[4].innerHTML === opponentChar && filledFields[8].innerHTML === opponentChar) {
        return gameWin();
    }
    if (filledFields[2].innerHTML === playerChar && filledFields[4].innerHTML === playerChar && filledFields[6].innerHTML === playerChar
        || filledFields[2].innerHTML === opponentChar && filledFields[4].innerHTML === opponentChar && filledFields[6].innerHTML === opponentChar) {
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
    let playerChar = getPlayerChar();
    // if (playerChar ) {

    // }
    choose_player.innerHTML = "PLAYER " + "<span>" + playerChar + "</span>" + " WINS!";
    choose_player.style.color = "#70E000";
}