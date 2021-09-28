var readlineSync = require('readline-sync');
const chalk = require('chalk');

var playerName = readlineSync.question("Hey buddy, Tell me your name ? ");
console.log(chalk.red("Namaste 🙏", playerName));

var score = 0;

function play(ques, ans) {
  var userAns = readlineSync.question(ques);
  if(userAns.toUpperCase() === ans.toUpperCase())  {
    score++;
    console.log(chalk.green("Right"));
    console.log(chalk.blue("Move to next question.."));
    
  } else {
    console.log(chalk.red("oops wrong"));
    console.log(chalk.cyan("Don't worry move to next question.."));
  }
  console.log(chalk.yellow("Your score is :", score));
  console.log(chalk.magenta("_____________________________________________"));
}

var ques = [{
  q: "What's my last name ? ",
  a: "Khandelwal"
}, {
  q: "In which month my birthday comes ? ",
  a: "January"
}, {
  q: "What's my sun sign ? ",
  a: "Libra",
}, {
  q: "Tell me my birth date ? ",
  a: "22"
}, {
  q: "Do i have a girlfriend ? ",
  a: "no"
}, {
  q: "Do i read books ? ",
  a: "yes"
}];

for(var i=0; i<ques.length; i++)
{
  var currQues = ques[i];
  play(currQues.q, currQues.a);
}
 console.log(chalk.bold.magenta("Your final score is: ", score));