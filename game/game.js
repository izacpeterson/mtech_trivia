import { fetchData, URL, Question, Quiz } from "../app.js";

//get trivia params from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const diff = params.diff;
const type = params.type;
const cat = params.cat;

let quiz = new Quiz();

//fetch questions from API
fetchData(`api.php?amount=15&difficulty=${diff}&type=${type}&category=${cat}`, getQuestions);

//process returned questions
function getQuestions(jsonData) {
  console.log(jsonData);
  let questionList = jsonData.results;
  questionList.forEach((el, index) => {
    quiz.addQuestion(new Question(el.question, el.correct_answer, el.incorrect_answers));
  });
  quiz.render();
}
