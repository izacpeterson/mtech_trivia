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

export { fetchData, URL };
