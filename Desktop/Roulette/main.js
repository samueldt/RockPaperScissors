function runGame(userChoice) {
  var randomChoice = getRandomChoice();
  var result = getResult(randomChoice, userChoice);

  var resultText = document.querySelector(".user").innerHTML;

  if (result === true) {
    resultText = "User Wins!";
  } else {
    resultText = "User loses :(";
  }
}

function getRandomChoice() {
  var choices = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36"
  ];
  var randomNumber = Math.floor(Math.random() * 36);
  var randomChoice = choices[randomNumber];
  return randomChoice;
}

function getResult(randomChoice, userChoice) {
  if (userChoice === randomChoice) {
    return "true";
  } else {
    return "false";
  }
}
