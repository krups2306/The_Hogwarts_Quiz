var readlineSync = require("readline-sync");
var score=0
var username = readlineSync.question("Enter your name: ");
console.log("Welcome " + username, "to 'The Hogwarts Quiz...!'");
console.log("\nLet's begin the quiz with the first question as; ")
function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("\nHurray! you are right. ");
    score = score + 1;
  }
  else{
    console.log("\nOops! you are wrong. ");
    score = score - 0;
  }
}


var questions = [{
  question: "\n1. Who played the role of Harry Potter? \na:Daniel Radcliffe    b:Rupert Grint \nc:Tom Felton          d:Jamie Waylett \nYour ans: ",
  answer: "a"},{
  question: "\n2. What was the color of Harry's owl-Hedwig? \na:Black    b:White \nc:Brown    d:Grey \nYour ans: ",
  answer: "b"},{
  question: "\n3. What did Hagrid bring for Harry on their first meet in the very first movie? \na:apple-pie   b:donut \nc:chocolate   d:birthday-cake \nYour ans: ",
  answer: "d"},{
  question: "\n4. How many Weasley siblings are there? \na:5    b:6 \nc:7    d:8 \nYour ans: ",
  answer: "c" },{
  question: "\n5. Who has been stealing Harry's letters from Ron and Hermione at the beginning of 'Harry Potter and the Chamber of Secrets'? \na:Dumbledore     b:Draco \nc:The Dursleys   d:Dobby\nYour ans: ",
  answer: "d"}
    
]

for( var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  console.log("---------")
}
var highScore = {
  HarryPotter: 5
}
console.log("\nYour score: ", score);
console.log("\nHighscore: ", highScore);

if(score === highScore.HarryPotter){
  console.log("\nCongratulations! You have scored a highscore alongwith Harry. ")
}else{
  console.log("\nYou have scored well! ")
}
