// Assignment Code
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

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = [
  '@',
  '%',
  '+',
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

function getPasswordOptions(){
  var pwLength=parseInt(prompt("Enter a number between 8 and 128"));
   

  var upperCase= confirm("Do you want to include upper case letters?");
    console.log(upperCase);

  var lowerCase= confirm("Do you want to include lower case letters?");
    console.log(lowerCase);


  var userSpecial=confirm("Do you want to include special characters?");
    console.log(userSpecial);

  var userNumber=confirm("Do you want to include numbers?");
    console.log(userNumber);  

  var passwordOptions ={
    pwLength:pwLength,
    upperCase:upperCase,
    lowerCase:lowerCase,
    userSpecial:userSpecial
  }
return passwordOptions
}
// Write password to the #password input
function getRandom(arr){
  console.log(arr);
  console.log(arr.length);
  var randomIndex=Math.floor(Math.random() * arr.length);
  var randomEl=arr[randomIndex];
  return randomEl;
}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  var options = getPasswordOptions();
  var result=[]
  var possibleCharacters=[]
  var guaranteeCharacters=[]
  if (options.userSpecial){
    possibleCharacters=possibleCharacters.concat(specialCharacters)
    console.log(possibleCharacters)
    guaranteeCharacters.push(getRandom(specialCharacters))
  }
  if (options.upperCase){
    possibleCharacters=possibleCharacters.concat(upperCasedCharacters)
  guaranteeCharacters.push(getRandom(upperCasedCharacters))
  }
  if (options.lowerCase){
    possibleCharacters=possibleCharacters.concat(lowerCasedCharacters)
    guaranteeCharacters.push(getRandom(lowerCasedCharacters))
    }

  if (options.numericCharacters){
    possibleCharacters=possibleCharacters.concat(numericCharacters)
    guaranteeCharacters.push(getRandom(numericCharacters))
    }
  
  for (var index = 0; index < options.pwLength; index++) {
    result.push(getRandom(possibleCharacters))
  }
  for (var index = 0; index < guaranteeCharacters.length; index++) {
    result[index]=guaranteeCharacters[index]
    
  }  
  return result.join("")
}

var generateBtn=document.querySelector("#generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
