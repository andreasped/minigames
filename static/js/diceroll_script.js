// Function for randomly changing the dice
function changeDice() {
    let dice = document.getElementById("dice");
    let displayDiceNumber = document.getElementById("dice_number");
    const dices = ["bi bi-dice-1-fill", "bi bi-dice-2-fill", "bi bi-dice-3-fill",
        "bi bi-dice-4-fill", "bi bi-dice-5-fill", "bi bi-dice-6-fill"];
    let randomIndex = Math.floor(Math.random() * dices.length);
    switch (randomIndex) {
        case 0:
            dice.className = dices[0];
            break;
        case 1:
            dice.className = dices[1];
            break;
        case 2:
            dice.className = dices[2];
            break;
        case 3:
            dice.className = dices[3];
            break;
        case 4:
            dice.className = dices[4];
            break;
        case 5:
            dice.className = dices[5];
            break;
    }
    displayDiceNumber.innerHTML = "YOU ROLLED: " + "<span>" + (randomIndex + 1) + "</span>";
}