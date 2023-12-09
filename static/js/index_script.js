function displayComingSoon() {
    // let text = document.getElementById("display_text");
    // text.innerHTML = "Coming soon!"
    alert("Coming soon!")
}

function displayGame(linkTitle) {
    let displayText = document.getElementById("display_game");
    displayText.innerHTML = linkTitle;
}

function hideDisplayGame() {
    let displayText = document.getElementById("display_game");
    displayText.innerHTML = "SELECT";
}