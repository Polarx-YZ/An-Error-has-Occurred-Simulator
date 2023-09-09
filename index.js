let randomMessages

fetch("errorMessages.json")
    .then((response) => response.json())
    .then((json) => randomMessages = json)

function buttonPress(button) {
    const parent = button.parentNode;
    getAmountOfPopups();
    parent.remove();
}

function getAmountOfPopups() {
    const amountOfPopups = Math.floor(Math.random() * 2) + 1;

    for (let i = 0; i < amountOfPopups; i++) {
        const message = randomMessages[Math.floor(Math.random() * randomMessages.length)];
        spawnPopup(message);
    }
}

function spawnPopup(errorMessage) {
    const container = document.getElementById("container")
    // Create popup window
    const newPopup = document.createElement("div");
    newPopup.classList.add("error-popup");
    // Create title
    const errorTitle = document.createElement("h3");
    const errorTitleNode = document.createTextNode("An error has occurred!");
    errorTitle.appendChild(errorTitleNode);
    newPopup.appendChild(errorTitle);
    // Create description
    const errorParagraph = document.createElement("p");
    const errorParagraphNode = document.createTextNode(errorMessage);
    errorParagraph.appendChild(errorParagraphNode);
    // Create button
    const errorButton = document.createElement("button");
    const errorButtonNode = document.createTextNode("Oh no!");
    errorButton.setAttribute("onClick", "buttonPress(this)");
    errorButton.appendChild(errorButtonNode);
    // Add elements to the window and then the document.
    newPopup.appendChild(errorTitle);
    newPopup.appendChild(errorParagraph);
    newPopup.appendChild(errorButton);
    container.appendChild(newPopup);

    playSound();
    changePosition(newPopup);
}

function changePosition(popup) {
    const randomLeft = Math.floor(Math.random() * 80);
    const randomTop = Math.floor(Math.random() * 80);
    popup.style.left = `${randomLeft}%`;
    popup.style.top = `${randomTop}%`;
}

function playSound() {
    const sound = new Audio("sounds/Error_02.wav");
    sound.volume = 0.5;
    sound.play();
}