function initGame() {
    let grid = document.getElementById("game_grid");
    let menu = document.getElementById("menu");
    let choose_player = document.getElementById("choose_player");
    menu.style.display = "none";
    choose_player.style.display = "none"
    grid.style.display = "flex"

    console.log("Player chose: " + getPlayerChar())
}


function getPlayerChar() {
    let selected_player = document.getElementById("select_player");
    let player_char = selected_player.value;

    return player_char;
}


function getOpponentChar(playerChar) {
    if (playerChar === "X") {
        playerChar = "O"
    } else if (playerChar === "O") {
        playerChar = "X"
    }

    return playerChar
}


function drawPlayerChar(field, playerChar) {
    if (field.innerHTML === "") {
        let empty_field = getField();
        let opposite_char = getOpponentChar(playerChar);
        field.innerHTML = "<p>" + playerChar + "</p>";
        empty_field.innerHTML = "<p>" + opposite_char + "</p>";
    }
}


function getField() {
    let fields = document.getElementsByClassName("field");
    let randomIndex = Math.floor(Math.random() * 9);
    let randomField = fields[randomIndex];

    if (randomField.innerHTML === "") {
        return randomField;
    } else {
        return getField();
    }
}