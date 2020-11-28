const chalk = require('chalk');
console.log(chalk.bgCyan("-----THE ONE WHERE YOU TAKE FRIEND'S QUIZ-------"));
var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ");
var score = 0;
console.log(chalk.yellow("Good to see you " + userName +"."));
console.log("Let's get right into the quiz!!");


console.log("    ");
console.log("    ");


console.log(chalk.bgMagenta.underline.white("Rules to follow or its all a moo point. :p "));
var rules = ["1.You will need real unagi to get through." ,"2.There would be 10 compulsoy questions.", "3.You will get 2 points on each correct answer.", "4.One point would be deducted on every wrong answer."]
console.log(chalk.dim(rules[0]));
console.log(chalk.dim(rules[1]));
console.log(chalk.dim(rules[2]));
console.log(chalk.dim(rules[3]));

console.log("  ");


function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer=== answer){
    console.log(chalk.green("YAY! You are right."));
    score = score+2;
    console.log(chalk.bgGreen("Your score is "+ score));
  } else{
    console.log(chalk.redBright("Oops! You are wrong"));
    score= score-2
    console.log(chalk.bgRed("Your score is " + score));
  }
  console.log(chalk.blackBright("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"));
}


var questions = [
  {
    question: "1. How many times does Ross got married and eventually divorced? \n a: 2 \n b: 3 \n c: 4  \n d: 5 ",
  
   answer: "b",
  },
  {
    question: "2. How many categories of towels does Monica have?  \n a: 5 \n b: 7 \n c: 11 \n d: 12  ",
    answer: "c",

  },{
    question: "3. What is the giant poking device made of? \n a: Sporks \n b: Spoons \n c: Chopsticks \n d: Knives  ",
    
    answer: "c",
  },{
    question:"4. What is the name of Rachel’s hairless cat? \n a: Fluffy \n b: Miss kitty \n c: Mrs. Whiskerson ", 

    answer: "c",
  },{
    question: "5. How many babies are born during the show’s ten seasons? \n a: 2 \n b: 4 \n c: 7  \n d: 8", 
    
    answer: "c",
  },{
    question: "6. How many long-stemmed roses does Ross send to Emily? \n a: 50 \n b: 62 \n c: 72 \n d: 82",
    
    answer: "c",
  },{
    question: "7. How many sisters does Joey have? \n a: 6 \n b: 7 \n c: 8 ",
    
    answer: "b",
  },{
    question: "8. Who utters the last line in the last episode of Friends? \n a: Joey \n b: chandler \n c: Monica \n d: Ross ",
    
    answer: "b",
  },{
    question: "9. Which aunt does Cassie look like? \n a: Aunt lilian \n b: Aunt Marilyn \n c: Aunt Iris \n d: Aunt Murial ", 
    
    answer: "b",
  },{
    question: "10. What were the names of the bullies in “The One with the Bullies”? \n a: Andrew and Paul \n b: Aaron and Chris \n c: Andy and Jesse \n d: Arthur and Carl ",
    
    answer:"d",
  }];


for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log(" ");

console.log(chalk.underline.bold.bgCyan("Total Score: " + score));
console.log(chalk.italic.yellow("Thankyou for playing, "+ userName+"!" + " SEE YOU AROUND NEXT TIME."));


console.log("  ");

// high scores
console.log(chalk.underline.blue("Check out the high scores!"));
var highscore = [{
  name: "Aaradhya",
  score: "20"
},{
  name: "Sunny",
  score: "19",
}];

function leaderBoard(){
 for(var i=0 ;i<highscore.length;i++){
  var currentHighscore = highscore[i];
  console.log(chalk.bold.cyanBright(currentHighscore.name+"    "+currentHighscore.score));
 }
}
leaderBoard();

console.log(chalk.italic.dim.white("Note: If you beat the high score, take a screenshot and send it to aaradhya, so that it could be updated"));
