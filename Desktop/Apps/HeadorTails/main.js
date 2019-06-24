function findResult(myChoice) {
  var userChoice = getYourChoice();
  getYourResult(myChoice, userChoice);
  document.querySelector(".result").innerHTML = getYourResult(
    myChoice,
    userChoice
  );
}

function getYourChoice() {
  var choices = ["Heads", "Tails"];
  var randomChoice = Math.floor(Math.random() * 2);
  return choices[randomChoice];
}

function getYourResult(myChoice, userChoice) {
  if (userChoice == "Heads") {
    return getYourChoice();
  }
}
