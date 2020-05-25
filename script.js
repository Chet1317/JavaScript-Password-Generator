// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var myNumbers = "1234567890";
var askPasswordlength = 0;


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var askUppercase = confirm ("Do you want to use uppercase?");
  if (askUppercase){
    tempass += uppercase;
    console.log(tempass);
  }
  console.log("askUppercase");
  var askNumbers = confirm ("Do you want to use numbers?")
  console.log("askNumbers");
  askPasswordlength = prompt ("Choose number of characters between 8 and 128 characters");
  console.log(askPasswordlength);
  console.logn(typeof(askPasswordlength));
  


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

