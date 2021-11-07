// set interval for time countdown

// view high scores save to local storage
//what does view high scores look like
//you have to save the information in an object
//var scores = [{initials: "userInitials", score: "score"}]
//when you get the items you'll need to iterate through that array 

// click on an answer, check if that value is the correct answer

var score;
//if answer is correct score = score + 5
//else if incorrect score = score - 2

var questions = [
{title: "question title",
optionOne: "option a",
optionTwo: "option b",
optionThree: "option c",
optionTwo: "option b",
answer: "option a"},
{title: "question title",
optionOne: "option a",
optionTwo: "option b",
optionThree: "option c",
optionTwo: "option b",
answer: "option a"},
{title: "question title",
optionOne: "option a",
optionTwo: "option b",
optionThree: "option c",
optionTwo: "option b",
answer: "option a"},
{title: "question title",
optionOne: "option a",
optionTwo: "option b",
optionThree: "option c",
optionTwo: "option b",
answer: "option a"},
{title: "question title",
optionOne: "option a",
optionTwo: "option b",
optionThree: "option c",
optionTwo: "option b",
answer: "option a"},

]
questions[i].title
//whenever they click on an answer, that will iterate us forward in the for loop or whatever

//need to create elements to store all the questions and options
var title = document.createElement("h2")
title.append(questions[i].title)
for (var i =0; i < questions.length; i++) {

}

//if X condition is met style.display = block OR style.display = none