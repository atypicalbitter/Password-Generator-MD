const specialCharacters = [
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
  '~',
  '-',
  '_',
  '.'
];

const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
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
  'z'
];

const upperCasedCharacters = [
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
  'K',
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
  'Z'
];


function getPasswordOptions() {
  let length = parseInt(prompt("Enter the length of your password (between 8 and 128 characters):"));


  while (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128.");
    length = parseInt(prompt("Enter the length of your password (between 8 and 128 characters):"));
  }


  let hasLowercase = confirm("Include lowercase characters?");
  let hasUppercase = confirm("Include uppercase characters?");
  let hasNumeric = confirm("Include numeric characters?");
  let hasSpecial = confirm("Include special characters?");


  while (!(hasLowercase || hasUppercase || hasNumeric || hasSpecial)) {
    alert("At least one character type must be selected.");
    hasLowercase = confirm("Include lowercase characters?");
    hasUppercase = confirm("Include uppercase characters?");
    hasNumeric = confirm("Include numeric characters?");
    hasSpecial = confirm("Include special characters?");
  }

  return {
    length,
    hasLowercase,
    hasUppercase,
    hasNumeric,
    hasSpecial
  };
}

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  const options = getPasswordOptions();
  let possibleCharacters = [];
  let result = "";
}

if (options.hasLowercase) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
}
if (options.hasUppercase) 
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
}
if (options.hasNumeric) 
  possibleCharacters = possibleCharacters.concat(numericCharacters);
}
if (options.hasSpecial) 
  possibleCharacters = possibleCharacters.concat(specialCharacters);


// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);