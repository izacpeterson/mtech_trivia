const URL = "https://opentdb.com";

async function fetchData(subURL, callback) {
  let rawData = await fetch(`${URL}/${subURL}`);
  let jsonData = await rawData.json();
  callback(jsonData);
}

function dispCat(jsonData) {
  console.log(jsonData);
  let catOpt = document.getElementById("selCat");
  jsonData.trivia_categories.forEach((element) => {
    catOpt.innerHTML += `<option value='${element.id}'>${element.name}</option>`;
  });
}

fetchData("api_category.php", dispCat);

export { fetchData, URL };
