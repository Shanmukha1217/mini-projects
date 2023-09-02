const calculateBtn = document.querySelector("button");

const resultsDiv = document.querySelector("#results");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value) / 100;
  const weight = parseInt(document.querySelector("#weight").value);

  console.log(height);
  console.log(weight);
  const bmi = weight / height ** 2;
  console.log(bmi);
  let result = "";
  if (bmi < 18.6) {
    result = "Under Weight";
  } else if (bmi > 18.6 || bmi <= 24.9) {
    result = "Normal Weight";
  } else if (bmi > 24.9) {
    result = "Over Weight";
  } else {
    result = "Invalid input";
  }
  resultsDiv.innerHTML = `<h2 class = "results-text"> ${result}</h2>`;
});
