// Assignment code here
var characterLength = 8;
var choiceArray = [];

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";

// References to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();

    passwordText.value = newPassword;
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }

  return password;
}

function getPrompts() {
  choiceArray = "";

  characterLength = parseInt(
    prompt("How many characters would you like your password to be?")
  );
  if (characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 and 128.");
  }
  if (
    confirm("Would you like to include lowercase letters in your password?")
  ) {
    choiceArray += lowerCase;
  }
  if (
    confirm("Would you like to include uppercase letters in your password?")
  ) {
    choiceArray += upperCase;
  }
  if (confirm("Would you like to include numbers in your password?")) {
    choiceArray += numbers;
  }
  if (confirm("Would you like to include symbols in your password?")) {
    choiceArray += symbols;
  }

  return true;
}
