function game() {
    const vars = ['rock', 'paper', 'scissors']
    let userChoice
    let flag = true
    do {
        userChoice = prompt("Enter rock, paper, or scissors")
        console.log(userChoice)
        if (vars.includes(userChoice)) {
            flag = false;
        }
    } while(flag)

    let computerChoice = Math.floor(Math.random() * 3)
    console.log(`Computer choose: ${computerChoice}`)
    if (computerChoice === 0) { //0 = rock
        if (userChoice === "rock") {
            alert("It is the tie!")
        } else if (userChoice === "paper") {
            alert("The winner is user!")
        } else if (userChoice === "scissors") {
            alert("The winner is computer")
        }
    } else if (computerChoice === 1) { //1 = paper
        if (userChoice === "rock") {
            alert("The winner is computer")
        } else if (userChoice === "paper") {
            alert("It is the tie!")
        } else if (userChoice === "scissors") {
            alert("The winner is user!")
        }
    } else if (computerChoice === 2) { //2 = scissors
        if (userChoice === "rock") {
            alert("The winner is user!")
        } else if (userChoice === "paper") {
            alert("The winner is computer")
        } else if (userChoice === "scissors") {
            alert("It is the tie!")
        }
    }
}
game();