// Assignment code here
function generatePassword() {
    var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
    var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specialCharacters = ['@','%','+','/','!','#','$','?',':','~','-','_','.'];
    var possibleCharacters = [];
  
// Selection of password criteria
passwordLength = prompt("How long would you like your password to be? (Must be between 8-128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
      return "Please choose a number between 8-128.";
    } else if (isNaN(passwordLength)) {
      passwordLength = prompt("Please choose a number between 8-128.")}
    else {alert("The generated password will be " + passwordLength + " characters long.")}

// Determines if lowercase characters will be used
useLowercase = confirm("Would you like your password to contain lowercase characters?");
    if (useLowercase) {alert("Lowercase characters will be included.")}
    else {alert("Lowercase characters will not be included.")}

// Determines if UPPERCASE characters will be used
useUppercase = confirm("Would you like your passwork to contain uppercase characters?");
    if (useUppercase) {alert("Uppercase characters will be included.")}
    else {alert("Uppercase characters will not be included.")}

// Determines if numbers will be used
useNumbers = confirm("Would you like your password to contain numbers?");
    if (useNumbers) {alert("Numbers will be included.")}
    else {alert("Numbers will not be included.")}

// Determines if special characters will be used
useSpecial = confirm("Would you like your password to containt special characters?");
    if (useSpecial) {alert("Special characters will be included.")}
    else {alert("Special characters will not be included.")}

// Validation of selected criteria, condition that one must be chosen
if (useLowercase === false && useUppercase === false && useNumbers === false && useSpecial === false) {
      return "You must choose at least one type of character."}

// Inclusion of selected character into possible characters
if (useLowercase) {possibleCharacters = possibleCharacters.concat(lowercaseCharacters)}
if (useUppercase) {possibleCharacters = possibleCharacters.concat(uppercaseCharacters)}
if (useNumbers) {possibleCharacters = possibleCharacters.concat(numericCharacters)}
if (useSpecial) {possibleCharacters = possibleCharacters.concat(specialCharacters)}
  
// logic for final password generation given conditions selected above
    let finalPassword = ""
    for (let i = 0; i < passwordLength; i++) {
      let rng =[Math.floor(Math.random() * possibleCharacters.length)];
      finalPassword = finalPassword + possibleCharacters[rng]};
    return finalPassword}
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;}
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);