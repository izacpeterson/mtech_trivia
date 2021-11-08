import { fetchData, URL } from "../app.js";

//get trivia params from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const diff = params.diff;
const type = params.type;
const cat = params.cat;

//fetch questions from API
fetchData(`api.php?amount=15&difficulty=${diff}&type=${type}&category=${cat}`, getQuestions);

//process returned questions
function getQuestions(jsonData) {
  console.log(jsonData);
  let questionList = jsonData.results;
  questionList.forEach((el, index) => {
    document.querySelector("#qList").innerHTML += `<h3>${index}:${el.question}</h3>`;
  });
}
