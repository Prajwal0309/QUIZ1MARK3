var readlinesync = require('readline-sync')
score = 0;
var user = readlinesync.question("Hey hii welcome to my quiz what is your name")
console.log("Hi" + " " + user + " " + "let's check how much know about me ")

var highScore = [{
  name: "Ram",
  score: 5
}, {
  name: "Joy",
  score: 3
}]
function play(question, answer) {
  var playerAnswer = readlinesync.question(question);
  if (playerAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right")
    score = score + 1
    console.log("current score" + " " + score)
    console.log("-----------------------------------------------------------")
  }
  else {
    console.log("wrong")
    console.log("current score" + " " + score)
    console.log("---------------------------------------------------------")
  }
}
var questions = [{
  Question: "What nicknames do people call me?",
  Answer: "sonu"
},

{
  Question: "Where do i study?",
  Answer: "Presidency university"
},
{
  Question: "What is my favorite colour?",
  Answer: "orange"
},
{
  Question: "What is my favorite drink?",
  Answer: "sprite"
},
{
  Question: "Where do I come from?",
  Answer: "karnataka"
},
{
  Question: "What is my favorite god name?",
  Answer: "Lord Hanuman"
}]

for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  play(currentquestion.Question, currentquestion.Answer)
}

console.log("Hurrah yu scored :", score)
console.log("High score  " + highScore[0].name);
console.log(highScore[0].score);
console.log("----------------------------------")
console.log(" Second High score" + " " + highScore[1].name);
console.log(highScore[1].score);