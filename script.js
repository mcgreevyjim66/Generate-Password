var useUpper = false, useLower = false, useNumeric = false, useSpecial = false;
var passwordLength = 0;
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charNumeric = "0123456789";
var charSpecial = "!@#$%^&*()-_=+";
var characters = "";

// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  console.log("button clicked");
  passwordLength =0;
  characters = "";

 passwordLength = getpasswordLength();
  console.log("passwordLength " + passwordLength); 

 if (passwordLength >0) {
  useLower = getUseLower();
  useUpper = getUseUpper();
  useNumeric = getUseNumeric();
  useSpecial = getUseSpecial();
  characters = getCharacters();
  console.log("characters " + characters);

 }  else {
  window.alert("You did not enter a valid password length." + "\nPlease select the proper length of between 8 and 128 characters and at least 1 of the password criteria options.");
  return "Password not generated";   
}
 
 if (characters.length > 0)
  {
    password = createPassword(passwordLength);
    console.log("here is new password: " + password)
    return password;
      } else {
        window.alert("You did not select any of the criteria for generating the passwrd." + "\nPlease select the proper length and at least 1 of the password criteria options.");
        return "Password not generated";   
      }

}

function createPassword(length) {
  // Define all possible characters to include in the password
  var password = "";
  for (var i = 0; i < length; i++) {
    // Randomly select a character from the characters string
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}


function getCharacters() {
  characters = ""
  if (useUpper) {characters = characters + charUpper};
  if (useLower) {characters = characters + charLower};
  if (useNumeric) {characters = characters + charNumeric};
  if (useSpecial) {characters = characters + charSpecial};

  return characters;
}

function getpasswordLength(){

  console.log("getpasswordLength called"); 
  var inputLength = window.prompt("Enter the password length(between 8 and 128 chars): ");

  passwordLength = parseInt(inputLength); // Convert input to a number
 
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = 0;
  }

  return passwordLength;
  

}

function getUseLower(){

  console.log("getuseLower called"); 
  useLower = window.confirm("Would you like the password to contain lowercase chartacters");

  return useLower;
}


function getUseUpper(){

    console.log("getuseUpper called"); 
    useUpper = window.confirm("Would you like the password to contain uppercase chartacters");
  
    return useUpper;
}

function getUseNumeric(){

    console.log("getuseNumeric called"); 
    useNumeric = window.confirm("Would you like the password to contain Numeric chartacters");
   
    return useNumeric;
}

function getUseSpecial(){

  console.log("getuseSpecial called"); 
  useSpecial = window.confirm("Would you like the password to contain Special chartacters");
 
  return useSpecial;
}


// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);




