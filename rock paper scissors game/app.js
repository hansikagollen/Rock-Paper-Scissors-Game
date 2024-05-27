let userscore = 0;
let compscore = 0;

// Define msgPara globally
const msgPara = document.getElementById("msg");

// Add event listener for each choice
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = () => {
    console.log("Game was a draw.");
    msgPara.innerText = "It's a draw!";
}

// Generate random choice for computer
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const computerChoice = generateComputerChoice();
    console.log("Computer choice =", computerChoice); // Log the computer's choice here

    if (userChoice === computerChoice) {
        // Draw game
        drawGame();
    } else {
        let playerWin;
        if (userChoice === "rock") {
            // Rock beats scissors, loses to paper
            playerWin = (computerChoice === "scissors");
        } else if (userChoice === "paper") {
            // Paper beats rock, loses to scissors
            playerWin = (computerChoice === "rock");
        } else {
            // Scissors beats paper, loses to rock
            playerWin = (computerChoice === "paper");
        }
        show_winner(playerWin, userChoice, computerChoice);
    }
};

// Displaying winner message
const show_winner = (userWin, userChoice, computerChoice) => {
    const userS = document.getElementById("user-score");
    const compS = document.getElementById("comp-score");

    // If the player has won
    if (userWin) {
        console.log("Congratulations...!! You won!");
        msgPara.innerText = `Congratulations...!! You won! ${userChoice} beats ${computerChoice}`;
        userscore++;
        userS.innerText = userscore;
        msgPara.style.backgroundColor="green"
    }
    // If the player lost
    else {
        console.log("You lost! Try again.");
        msgPara.innerText = `You lost! Try again. ${computerChoice} beats ${userChoice}`;
        compscore++;
        compS.innerText = compscore;
        msgPara.style.backgroundColor="red"
    }
}

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let computer = Math.floor(Math.random() * 3); // Generating random numbers from 0 to 2 without decimals
    return options[computer];
}
