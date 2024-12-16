function randomHexColor() {
  let array = [];
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.random();
    if (randomNum <= 0.0625) {
      array.push("0");
    } else if (randomNum <= 0.125) {
      array.push("1");
    } else if (randomNum <= 0.1875) {
      array.push("2");
    } else if (randomNum <= 0.25) {
      array.push("3");
    } else if (randomNum <= 0.3125) {
      array.push("4");
    } else if (randomNum <= 0.375) {
      array.push("5");
    } else if (randomNum <= 0.4375) {
      array.push("6");
    } else if (randomNum <= 0.5) {
      array.push("7");
    } else if (randomNum <= 0.5625) {
      array.push("8");
    } else if (randomNum <= 0.625) {
      array.push("9");
    } else if (randomNum <= 0.6875) {
      array.push("a");
    } else if (randomNum <= 0.75) {
      array.push("b");
    } else if (randomNum <= 0.8125) {
      array.push("c");
    } else if (randomNum <= 0.875) {
      array.push("d");
    } else if (randomNum <= 0.9375) {
      array.push("e");
    } else {
      array.push("f");
    }
  }
  return "#" + array.join("");
}

function createSquare() {
  const parentDiv = document.querySelector("#parent-div");
  const square = document.createElement("div");
  square.style.cssText = "width: 30px; height: 30px; border: 1px solid black;";
  square.style.backgroundColor = randomHexColor();
  parentDiv.append(square);
}

function generateTable() {
  const parentDiv = document.querySelector("#parent-div");
  parentDiv.innerHTML = "";
  for (let i = 0; i < 558; i++) {
    createSquare();
  }
}
setInterval(generateTable, 175);
