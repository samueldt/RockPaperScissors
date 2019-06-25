function findResult(myChoice) {
  var userChoice = getYourChoice();
  getYourResult(myChoice, userChoice);
  document.querySelector(".result").innerHTML = getYourResult(
    myChoice,
    userChoice
  );
  var flips = parseInt(document.querySelector(".flip").innerHTML);
  var success = parseInt(document.querySelector(".wins").innerHTML);
  document.querySelector(".flip").innerHTML = flips + 1;
  if (userChoice === myChoice) {
    document.querySelector(".wins").innerHTML = success + 1;
  }
  console.log(myChoice, userChoice);
}

function getYourChoice() {
  var choices = ["Heads", "Tails"];
  var randomChoice = Math.floor(Math.random() * 2);
  return choices[randomChoice];
}

function getYourResult(myChoice, userChoice) {
  if (userChoice === "Heads") {
    return getYourChoice();
  }
  if (userChoice === "Tails") {
    return getYourChoice();
  }
}
