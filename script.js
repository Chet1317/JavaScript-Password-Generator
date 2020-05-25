// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var myNumbers = "1234567890";
var askPasswordlength = 0;
var tempass = "";


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var askUppercase = confirm ("Do you want to use uppercase?");
  if (askUppercase){
    tempass += uppercase;
    console.log(tempass);
  }
  console.log(askUppercase);
  var askNumbers = confirm ("Do you want to use numbers?")
  if(askNumbers){
    tempass += myNumbers;
    console.log(tempass);
  }
  console.log(askNumbers);
  


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

