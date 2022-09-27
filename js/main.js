//get value
let nameInput = "";
const getInput = document.getElementById("getInputValue");
getInput.addEventListener("click", function () {
  nameInput = document.getElementById("nameInput").value;
  console.log(nameInput);
});

const getName = function () {
  //Tạo mới XHR
  const req = new XMLHttpRequest();
  //Gán sự kiện cho request
  req.addEventListener("load", reqListener);
  //Setup mở 1 GET request đến đường link
  req.open("GET", `https://api.nationalize.io/?name=${nameInput}`);
  //call RQ
  req.send();
};
function reqListener() {
  const data = JSON.parse(this.responseText);
  console.log(data);
}

getName();
