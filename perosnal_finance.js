var readlineSync = require("readline-sync");

function welcome() {
  var name = readlineSync.question("Please Enter Your Name: ");

  console.log("Your Name is: " + name + "! \n \nWelcome to the game: Interested in Personal Finance? \n");
}
var score = 0;

var var1 = {
  question: "How much % of your monthly income should you ideally save? (Enter a number)",
  answer: "20"
}
var var2 = {
  question: "If your age is 25, how much % should you ideally invest in rsiky assests (Hint: 100 - age formula)  ? (Enter a number)",
  answer: "75"
}
var var3 = {
  question: "If you get 12% returns anually how many years will it take for your money to get double? (Enter a number)",
  answer: "6"
}
var var4 = {
  question: "When you start earning, mimimum how many month's expenses should ideally be saved in an emergency fund ? (Enter a number)",
  answer: "6"
}
var var5 = {
  question: "What multiple of your annual income would be ideal for deciding the cover amount for your term insurance? (Enter a number)",
  answer: "10"
}

var list = [var1, var2, var3, var4, var5];

function play(parameterOne, parametertwo) {
  var ans = readlineSync.question(parameterOne);
  if (ans.toUpperCase() == parametertwo.toUpperCase()) {
    console.log("You are right! ");
    score += 1;
    console.log("Your current score is: " + score);
  }
  else {
    console.log("Your answer is incorrect! \nCorrect ans is: " + parametertwo);
    console.log("Your current score is: " + score);
  }
  console.log("~~~~~~~~~~~~~\n")
}

function game() {
  for (let i = 0; i < list.length; i++) {
    var subs = list[i];
    play(subs.question, subs.answer);
  }
}

welcome();
game();

console.log("Your final score is: " + score + "! \nThanks for Playing!!!");