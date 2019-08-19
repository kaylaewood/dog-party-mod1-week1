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
var howCheckbox = document.getElementById("how-checkbox");
var whatCheckbox = document.getElementById("what-checkbox");
var factsCheckbox = document.getElementById("facts-checkbox");
var changeTextButton = document.querySelector("#change-paragraph-button");
var textInput = document.getElementById("change-paragraphs");
var warningMessage = document.querySelector(".warning");

nameDogButton.addEventListener("click", function() {
  var updatedName = nameInput.value;
  nameToChange.innerText = updatedName;
});

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

//Could not get #3 on Iteration 3 to work
// updatedText = textInput.value;
// changeTextButton.addEventListener("click", function() {
//   if (howCheckbox.checked == true) {
//     howText.innerText = updatedText;
//   } if else (whatCheckbox.checked == true) {
//     whatText.innerText = updatedText;
//   } if else (factsCheckbox.checked == true) {
//     factsText.innerText = updatedText;
//   } else {
//     warningMessage.classList.add('warning-triggered');
//   }
// });
