// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'J',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'k',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '-',
  '_',
  '.',
];


function generatePassword() {
var lowercase = confirm("Would you like to include lowercase letters?");
console.log(lowercase);
var uppercase = confirm("Would you like to include Uppercase letters?")
console.log(uppercase);
var special = confirm("Would you like to include Special character?")
console.log(special);
var numeric = confirm("Would you like to include Numeric characters?")
console.log(numeric);
var length = prompt("How many Characters would you like to include?");
console.log(length);

var master = []
if(lowercase) {
  master = master.concat(lowerCasedCharacters)
}
if(uppercase) {
  master = master.concat(upperCasedCharacters)
}
if(special) {
  master = master.concat(specialCharacters)
}
if(numeric) {
  master = master.concat(numericCharacters)
}

var password = ''
for (i = 0; i < length; i++) {
  

  password += randomCharacter
}

return password

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
