// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
// var specialCharacters = @%+\\/'!#$^?:,)(}{][~-_.

// var numericCharacters = 0123456789

// var lowerCasedCharacters = abcdefghijklmnopqrstuvwxyz

// var upperCasedCharacters = ABCDEFGHIJKLMNOPQRSTUVWXYZ

//generate password
function generatePassword() {
  const totalLength = prompt("How many characters would you like to use?  Must be between 8 and 128!");

  let allChars = '';
  let password = '';

  if(totalLength >= 8 && totalLength <= 128) {
    alert('Your new password will be ' + totalLength + ' characters long.')

  let upper = confirm("Would you like to include upper case letters?");
  let lower = confirm("Would you like to inclue lower case letters?");
  let symbol = confirm("Would you like to include special characters?");
  let number = confirm("Would you like to include a number?");

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
  console.log(totalLength)

  for (let i = 0; i < totalLength; i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length)
    var letter = allChars.substring(randomNumber, randomNumber + 1)
    password += letter
  }
  console.log('password',password.length)
  return password;
}
else {
 // if length is not chosen between 8 and 128 
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
