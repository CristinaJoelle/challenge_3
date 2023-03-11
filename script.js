// Assignment code here
var characterLength = 8;
var choiceArray = [];

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";

// References to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!");
  //1: Prompt the user for the password criteria.

  //  a. Password length between 8<128.
  //  b. Ask what characters they want to include.
  //2. Validate the input.
  //3. Generate password.

  //4. Display the generated password.
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function getPrompts() {
  choiceArray = [];

  characterLength = parseInt(
    prompt("How many characters would you like your password to be?")
  );
  if (characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return getPrompts();
  }
  if (
    confirm("Would you like to include lowercase letters in your password?")
  ) {
    choiceArray = choiceArray.concat(lowerCase);
  }
  if (
    confirm("Would you like to include uppercase letters in your password?")
  ) {
    choiceArray = choiceArray.concat(upperCase);
  }
  if (confirm("Would you like to include numbers in your password?")) {
    choiceArray = choiceArray.concat(numbers);
  }
  if (confirm("Would you like to include symbols in your password?")) {
    choiceArray = choiceArray.concat(symbols);
  }

  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
