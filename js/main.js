const getName = function () {
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://api.nationalize.io/?name=");
  req.send();
};
function reqListener() {
  console.log(this.responseText);
}

//get value
let nameInput = "";
const getInput = document.getElementById("getInputValue");

getInput.addEventListener("click", function () {
  nameInput = document.getElementById("nameInput").value;
  console.log(nameInput);
});
