// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
// var specialCharacters = @%+\\/'!#$^?:,)(}{][~-_.

// var numericCharacters = 0123456789

// var lowerCasedCharacters = abcdefghijklmnopqrstuvwxyz

// var upperCasedCharacters = ABCDEFGHIJKLMNOPQRSTUVWXYZ

//generate password
function generatePassword() {
  const totalLength = prompt("How many characters would you like to use?");
  if(totalLength >= 8 && totalLength <= 128) {
    alert('Your new password will be ' + totalLength + ' characters long.')
  }
  var option = {
  //  hasNumber: window.confirm('Would you like to include a number?'),
  // hasUppercase: window.confirm('Would you like to include upper case letters?'),
  // hasLowercase: window.confirm('Would you like to inclue lower case letters?'),
  // hasSymbol: window.confirm('Would you like to include special characters?'),
  };

  // if(!hasLowercase === false && hasUppercase === false && hasNumber === fals

  let upper = confirm("Would you like to include upper case letters?");
  let lower = confirm("Would you like to inclue lower case letters?");
  let symbol = confirm("Would you like to include special characters?");
  let number = confirm("Would you like to include a number?");

  let allChars = '';
  let password = '';

  if(upper) {
    allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(lower) {
    allChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (symbol) {
    allChars += "@%+\\/'!#$^?:,)(}{][~-_.";
  }
  if (number) {
    allChars += "0123456789";
  }

  else {
    alert('Your password must be 8 - 128 characters!')
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
