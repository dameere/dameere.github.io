var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/linux-icon.png") {
    myImage.setAttribute("src", "images/linux-icon2.png");
    myImage.style.width = "300px";
  } else {
    myImage.setAttribute("src", "images/linux-icon.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Пожалуйста введите ваше имя.");
  localStorage.setItem("name", myName);
  myHeading.textContent =
    "Приветствуем вас, " + myName + "!\n" + myHeading.textContent;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent =
    "Приветствуем вас, " + storedName + "!\n" + myHeading.textContent;
}

myButton.onclick = function () {
  setUserName();
};
