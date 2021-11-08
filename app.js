const URL = "https://opentdb.com";

//Function for fetching data
async function fetchData(subURL, callback) {
  let rawData = await fetch(`${URL}/${subURL}`);
  let jsonData = await rawData.json();
  callback(jsonData);
}

//Fetch categories
fetchData("api_category.php", (jsonData) => {
  {
    let catOpt = document.getElementById("selCat");
    jsonData.trivia_categories.forEach((element) => {
      catOpt.innerHTML += `<option value='${element.id}'>${element.name}</option>`;
    });
  }
});

//question class
class Question {
  constructor(question, correctAnswer, incorrectAnswer) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswer = incorrectAnswer;
    this.userCorrect = false;
  }
  test(userAnswer) {
    if (userAnswer === this.correctAnswer) this.userCorrect = true;
  }
}

//quiz class
class Quiz {
  constructor() {
    this.questions = [];
    this.current = 0;
    this.score = 0;
  }
  calcScore() {
    this.questions.forEach((q) => {
      if (q.userCorrect) this.score++;
    });
    return this.score;
  }
  addQuestion(q) {
    this.questions.push(q);
  }
  render() {
    let questionDOM = document.querySelector("#question");
    let answerDOM = document.querySelector("#answer");
    questionDOM.innerHTML = "";
    answerDOM.innerHTML = "";
    questionDOM.innerHTML += `<h2>${this.questions[this.current].question}</h2>`;
    this.questions[this.current].incorrectAnswer.forEach((a) => {
      answerDOM.innerHTML += `<button class="answerBtn">${a}</button>`;
    });
    answerDOM.innerHTML += `<button class="answerBtn">${this.questions[this.current].correctAnswer}</button>`;
  }
}

export { fetchData, URL, Question, Quiz };
