function displayRadioValue() {
  var ele = document.getElementsByName("user");
  var userChoice;

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      userChoice = ele[i].value;
      document.getElementById("result").innerHTML =
        "<strong>User Choice: </strong>" + userChoice;
    }
  }

  let computerChoiceRandom = Math.random();
  let computerChoice;
  if (computerChoiceRandom <= 0.33) {
    computerChoice = "rock";
  } else if (computerChoiceRandom <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log("computer Choice=: " + computerChoice);
  document.getElementById("result").innerHTML +=
    "<br><strong>Computer Choice: </strong>" + computerChoice;
  // Game logic
  if (userChoice === computerChoice) {
    console.log("user Choice:= " + userChoice);
    console.log("computer Choice=: " + computerChoice);
    document.getElementById("result").innerHTML +=
      "<br><strong>It's a tie!</strong>";
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      document.getElementById("result").innerHTML +=
        "<br><strong> Congrulations!<br> The computer got scissors so you win</strong>";
    } else {
      document.getElementById("result").innerHTML +=
        "<br><strong>The computer got paper, you lose</strong>";
    }
  } else if (userChoice == "paper") {
    if (computerChoice == "rock") {
      document.getElementById("result").innerHTML +=
        "<br><strong> Congrulations!...<br> The computer picked rock. You win</strong>";
    } else {
      document.getElementById("result").innerHTML +=
        "<br><strong>The computer got scissors. You lose</strong>";
    }
  } else if (userChoice == "scissors") {
    if (computerChoice == "paper") {
      document.getElementById("result").innerHTML +=
        "<br><strong>Congrulations!...<br> The computer got paper. You win</strong>";
    } else {
      document.getElementById("result").innerHTML +=
        "<br><strong>The computer got rock. You lose</strong>";
    }
  }
}

// Get the form element and add a submit event listener
// var formEle = document.querySelector("form");

// formEle.addEventListener("submit", function (event) {
//   event.preventDefault();
//   displayRadioValue();
// });
