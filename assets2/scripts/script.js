// Define javascript file will the support the functionality of prompting
// the iuser to enter to criteria for the generation of a secure password.
// the user will be prompted for passowrd length and type of characters to be used for the password.
// two methods of promptinghave been implemented, one that use regular built-in windows prompting
// and a second method tha that uses an HTML dialog to interact with the user


//Declare global variables to  be used by functions

var useUpper = false, useLower = false, useNumeric = false, useSpecial = false;
var passwordLength = 0;
var password = "";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charNumeric = "0123456789";
var charSpecial = "!@#$%^&*()-_=+";
var characters = "";

var selectedCriteria = [];
const myInput = document.getElementById("passwordLength");
const passwordText = document.querySelector("#password");




  // Get the dialog element
  const passwordCriteriaDialog = document.getElementById("passwordCriteriaDialog");

  // Get the open dialog button
  const openDialogBtn = document.getElementById("openDialogBtn");
  
  // Get the close dialog button
  const closeDialogBtn = document.getElementById("closeDialogBtn");
  
  // Get the apply criteria button
  const applyCriteriaBtn = document.getElementById("applyCriteriaBtn");

  // Get generateForm element
  const myForm = document.getElementById("generateForm");
  

// Assignment Code


// Write password to the #password input
function writePassword() {
  password = generatePassword();

  passwordText.value = password;

}
// Write password to the #password input using the diaglog option
function writePasswordDialog() {
  
  console.log("write password dialog");

  generatePasswordDialog();
  console.log("after gen pass dialog call");

  
}


// Function to open the dialog
function openDialog() {
  passwordCriteriaDialog.showModal();
}


// Function to close the dialog
function closeDialog() {
  if (password == ""){passwordText.value = "Password Not Generated"};
  myForm.reset();
  passwordCriteriaDialog.close();
  console.log("close dialog")
}



// Function to handle criteria application selected on the dialog prompt
function applyCriteria() {
  
  console.log("apply criteria")

  passwordLength = 0;
  password = "";
  passwordLength = myInput.value;
  console.log("Input length " + passwordLength)

//check for proper password length
  if   ((passwordLength >= 8) && (passwordLength <= 128))
  {          
      // Get all selected checkboxes
      const checkboxes = document.querySelectorAll('input[name="criteria"]:checked');
      // Store the selected criteria in an array
      useUpper = false, useLower = false, useNumeric = false, useSpecial = false;

      //determin which checkboxes are selected
      checkboxes.forEach(checkbox => 
        {
          selectedCriteria.push(checkbox.value);
          console.log(checkbox.value);
          console.log("Selected Criteria: " + selectedCriteria)
          if (checkbox.value == "uppercase") {useUpper = true;}
          if (checkbox.value == "lowercase") {useLower = true;}
          if (checkbox.value == "numbers") {useNumeric = true;}
          if (checkbox.value == "special") {useSpecial = true;}
        }
        );
  } else { 
            window.alert("You did not enter a valid password length." + "\nPlease select the proper length of between 8 and 128 characters and at least 1 of the password criteria options.");
            // passwordText.value = "Password not generated";
            password = "";
            return;  

  }


  
    // Do something with the selected criteria (e.g., validate password based on criteria)
  console.log("Selected Criteria: " + selectedCriteria)

  if (selectedCriteria.length > 0)
  {
      characters = getCharacters();
      password = createPassword(passwordLength);
      console.log("here is new password: " + password)
      passwordText.value = password;  
  
  } else {
          password = ""
          window.alert("You did not select any of the criteria for generating the passwrd." + "\nPlease select the proper length and at least 1 of the password criteria options.");
          return; 
         }

        // Close the dialog
        closeDialog();
}
 


// // generate password based on user dialog prompted selections
function generatePasswordDialog() {
  console.log("gen pass Dialog");
  passwordLength =0;
  password = "";
  characters = "";
  selectedCriteria = [];;

  openDialog();
}

// generate password based on user prompted selections
function generatePassword() {
  console.log("button clicked");
  passwordLength =0;
  password = ""
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

//genrate available password value options based on user selection
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


passwordLength = 0;
password = "";
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button with dialog
var generateBtnDlg = document.querySelector("#generate-dialog");
generateBtnDlg.addEventListener("click", writePasswordDialog);
// Event listeners
//openDialogBtn.addEventListener("click", openDialog);
closeDialogBtn.addEventListener("click", closeDialog);
applyCriteriaBtn.addEventListener("click", applyCriteria);


