import { fetchData, URL } from "../app.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log(params);

const diff = params.diff;
const type = params.type;
const cat = params.cat;

function getQuestions(jsonData) {
  console.log(jsonData);
}

// console.log(URL + `/api.php?amount=10&type=${type}&category=${cat}`);
fetchData(`api.php?amount=15&difficulty=${diff}&type=${type}&category=${cat}`, getQuestions);
