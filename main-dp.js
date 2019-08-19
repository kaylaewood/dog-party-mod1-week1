var nameDogButton = document.querySelector("#name-dog-button");
var nameToChange = document.querySelector(".some-dogs");
var nameInput = document.getElementById("new-name");
var howButton = document.querySelector("#how-button");
var howText = document.querySelector("#how-text");
var whatButton = document.querySelector("#what-button");
var whatText = document.querySelector("#what-text");
var factsButton = document.querySelector("#facts-button");
var factsText = document.querySelector("#facts-text");
var mqHowButton = document.querySelector("#mq-how-button");
var mqWhatButton = document.querySelector("#mq-what-button");
var mqFactsButton = document.querySelector("#mq-facts-button");

nameDogButton.addEventListener("click", function() {
  var updatedName = nameInput.value;
  nameToChange.innerText = updatedName;
})

howButton.addEventListener("click", function() {
  if (howText.style.display === "block") {
    howText.style.display = "none";
  } else {
    howText.style.display = "block";
  }
});

whatButton.addEventListener("click", function() {
  if (whatText.style.display === "block") {
    whatText.style.display = "none";
  } else {
    whatText.style.display = "block";
  }
});

factsButton.addEventListener("click", function() {
  if (factsText.style.display === "block") {
    factsText.style.display = "none";
  } else {
    factsText.style.display = "block";
  }
});

// MEDIA QUERIES
mqHowButton.addEventListener("click", function() {
  if (howText.style.display === "block") {
    howText.style.display = "none";
  } else {
    howText.style.display = "block";
  }
});

mqWhatButton.addEventListener("click", function() {
  if (whatText.style.display === "block") {
    whatText.style.display = "none";
  } else {
    whatText.style.display = "block";
  }
});

mqFactsButton.addEventListener("click", function() {
  if (factsText.style.display === "block") {
    factsText.style.display = "none";
  } else {
    factsText.style.display = "block";
  }
});
