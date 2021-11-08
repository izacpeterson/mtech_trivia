const URL = "https://opentdb.com";

async function fetchData(subURL, callback) {
  let rawData = await fetch(`${URL}/${subURL}`);
  let jsonData = await rawData.json();
  callback(jsonData);
}

function dispCat(jsonData) {
  console.log(jsonData);
}

fetchData("api_category.php", dispCat);
