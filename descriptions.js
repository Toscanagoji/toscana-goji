var redPlantDescription = document.getElementById("red-plant-description");
var redPlantExpandButton = document.getElementById("red-plant-toggle-button");

redPlantExpandButton.onclick = function toggleredPlantDescription() {
  if (redPlantDescription.classList.contains("collapsed")) {
    console.log("c'é");
    redPlantDescription.classList.remove("collapsed");
    redPlantExpandButton.children[0].classList.remove("fa-chevron-down");
    redPlantExpandButton.children[0].classList.add("fa-chevron-up");
  } else {
    console.log("non c'é");
    redPlantDescription.classList.add("collapsed");
    redPlantExpandButton.children[0].classList.remove("fa-chevron-up");
    redPlantExpandButton.children[0].classList.add("fa-chevron-down");
  }
}

var blackPlantDescription = document.getElementById("black-plant-description");
var blackPlantExpandButton = document.getElementById("black-plant-toggle-button");

blackPlantExpandButton.onclick = function toggleBlackPlantDescription() {
  if (blackPlantDescription.classList.contains("collapsed")) {
    console.log("c'é");
    blackPlantDescription.classList.remove("collapsed");
    blackPlantExpandButton.children[0].classList.remove("fa-chevron-down");
    blackPlantExpandButton.children[0].classList.add("fa-chevron-up");
  } else {
    console.log("non c'é");
    blackPlantDescription.classList.add("collapsed");
    blackPlantExpandButton.children[0].classList.remove("fa-chevron-up");
    blackPlantExpandButton.children[0].classList.add("fa-chevron-down");
  }
}

var yellowPlantDescription = document.getElementById("yellow-plant-description");
var yellowPlantExpandButton = document.getElementById("yellow-plant-toggle-button");

yellowPlantExpandButton.onclick = function toggleyellowPlantDescription() {
  if (yellowPlantDescription.classList.contains("collapsed")) {
    console.log("c'é");
    yellowPlantDescription.classList.remove("collapsed");
    yellowPlantExpandButton.children[0].classList.remove("fa-chevron-down");
    yellowPlantExpandButton.children[0].classList.add("fa-chevron-up");
  } else {
    console.log("non c'é");
    yellowPlantDescription.classList.add("collapsed");
    yellowPlantExpandButton.children[0].classList.remove("fa-chevron-up");
    yellowPlantExpandButton.children[0].classList.add("fa-chevron-down");
  }
}

var redBerryDescription = document.getElementById("red-berry-description");
var redBerryExpandButton = document.getElementById("red-berry-toggle-button");

redBerryExpandButton.onclick = function toggleredBerryDescription() {
  if (redBerryDescription.classList.contains("collapsed")) {
    console.log("c'é");
    redBerryDescription.classList.remove("collapsed");
    redBerryExpandButton.children[0].classList.remove("fa-chevron-down");
    redBerryExpandButton.children[0].classList.add("fa-chevron-up");
  } else {
    console.log("non c'é");
    redBerryDescription.classList.add("collapsed");
    redBerryExpandButton.children[0].classList.remove("fa-chevron-up");
    redBerryExpandButton.children[0].classList.add("fa-chevron-down");
  }
}

var yellowBerryDescription = document.getElementById("yellow-berry-description");
var yellowBerryExpandButton = document.getElementById("yellow-berry-toggle-button");

yellowBerryExpandButton.onclick = function toggleyellowBerryDescription() {
  if (yellowBerryDescription.classList.contains("collapsed")) {
    console.log("c'é");
    yellowBerryDescription.classList.remove("collapsed");
    yellowBerryExpandButton.children[0].classList.remove("fa-chevron-down");
    yellowBerryExpandButton.children[0].classList.add("fa-chevron-up");
  } else {
    console.log("non c'é");
    yellowBerryDescription.classList.add("collapsed");
    yellowBerryExpandButton.children[0].classList.remove("fa-chevron-up");
    yellowBerryExpandButton.children[0].classList.add("fa-chevron-down");
  }
}