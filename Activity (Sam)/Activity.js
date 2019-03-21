// GLOBAL VARIABLES AND FUNCTIONS

function generateRandom() {
  let random = Math.floor(Math.random() * 6 + 1);
  return random;
}


// EVENT FUNCTIONS

function startCar(counter) {
  let diceRoll = generateRandom();
  console.log(diceRoll);
  if (diceRoll == 1) {
    document.getElementById("carStart").innerHTML =
      "The car didn't start! Bad luck. You'll need to find another way in.";
  } else document.getElementById("carStart").innerHTML = "The car started.";
}

function arriveWork(counter) {
  let diceRoll = generateRandom();
  console.log(diceRoll);

  if (diceRoll == 1) {
    document.getElementById("officeOpen").innerHTML =
      "You forgot your keycard! You'll need to beg the receptionist to let you in.";
  } else
    document.getElementById("officeOpen").innerHTML =
      "You made it into work and to your desk.";
}

function disagreeColleague(counter) {
  let diceRoll = generateRandom();
  console.log(diceRoll);

  if (diceRoll == 1 || diceRoll == 2) {
    document.getElementById("colleagueFight").innerHTML = "Violently.";
  } else
    document.getElementById("colleagueFight").innerHTML =
      "You're able to put it aside and get on with your day.";
}

function delayMessage() {
  document.getElementById("officePrint").innerHTML = "You get to the office...";
}

function delayMessage2() {
  document.getElementById("colleaguePrint").innerHTML =
    "There's a dispute with a coworker...how will you react?";
}

// MAIN FUNCTIONS INTIALISED ON BUTTON CLICK

function beginDay() {
  document.getElementById("carPrint").innerHTML = "Did the car start?";
  setTimeout(startCar, 1000);
  setTimeout(delayMessage, 2000);
  setTimeout(arriveWork, 3000);
  setTimeout(delayMessage2, 4000);
  setTimeout(disagreeColleague, 5000);
}

// CONTROL TEMPER FUNCTION

// function controlTemper(counter) {
//   let randomReaction = generateRandom() + counter;
//   if (randomReaction === 1) {
//     console.log("laugh it off");
//   }
//   if (randomReaction === 2) {
//     console.log("shrug");
//   }
//   if (randomReaction === 3) {
//     console.log("scowl");
//   }
//   if (randomReaction === 4) {
//     console.log("argue back");
//     counter++;
//   }
//   if (randomReaction === 5) {
//     console.log("scream into a pillow");
//     counter++;
//   }
//   if (randomReaction === 6) {
//     console.log("totally lose plot");
//     console.log("game Over");
//     // print to the page?
//   }
// }


/*--------------------review by Ross-ley --------------*/
/*
  your code is cleen and there is no problems that i can see with it.
  it works a requied
  you could be a littel kinder in your respons rather than the world grovle you could use something like "ask the receptionist politly to let you in"
  its hard to tell wether the log is doiung up to seven or just up to six
  this is well writen tho so its all good.



*/
