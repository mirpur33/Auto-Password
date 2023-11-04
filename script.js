// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  let availableCharacters = [];
  let length = parseInt(prompt("what is your password length (8-128)?"));
  if (isNaN(length)) {
    alert("password length has to be beween 8-128. Please retry");
    return "password length has to be beween 8-128. Please retry by pressing generate button";
  }

  if (length < 8 || length > 128) {
    alert("password length has to be beween 8-128. Please retry");
    return "password length has to be beween 8-128. Please retry by pressing generate button";
  }

  let haveLower = confirm(
    "press OK to include lower case character in password"
  );
  if (haveLower) {
    availableCharacters = availableCharacters.concat(lowerCasedCharacters);
  }
  console.log("availableCharacters = ", availableCharacters);

  let haveUpper = confirm(
    "press OK to include upper case character in password"
  );
  if (haveUpper) {
    availableCharacters = availableCharacters.concat(upperCasedCharacters);
  }
  console.log("availableCharacters = ", availableCharacters);

  let haveSpecial = confirm(
    "press OK to include special character in password"
  );
  if (haveSpecial) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }
  console.log("availableCharacters = ", availableCharacters);

  let haveNumbers = confirm("press OK to include numbers in password");
  if (haveNumbers) {
    availableCharacters = availableCharacters.concat(numericCharacters);
  }
  console.log("availableCharacters = ", availableCharacters);

  if (availableCharacters.length === 0) {
    alert("At least one character type should be selected. Please retry");
    return "At least one character type should be selected. Please retry by pressing generate button";
  }

  let randomPassword = [];
  for (let i = 0; i < length; i++) {
    let randomChar = getRandom(availableCharacters);
    randomPassword.push(randomChar);
  }
}

// generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
