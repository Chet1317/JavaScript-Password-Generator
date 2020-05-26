// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var myNumbers = "1234567890";
var askPasswordlength = 0;
var tempass = "";
var specialcharacters = "$!*+^#/-,:();>=%"
var mypassword = "";
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
  var askNumbers = confirm ("Do you want to use numbers?");
  if(askNumbers){
    tempass += myNumbers;
    console.log(tempass);
  }
  console.log(askNumbers);
var askspecialcharacters = confirm ("Do you want special characters");
if (askspecialcharacters){
  tempass += specialcharacters;
  console.log(tempass);
}
console.log(specialcharacters);
askPasswordlength = prompt("How many characters between 8 and 128 would you like to use?");
console.log(askPasswordlength);
console.log(typeof(askPasswordlength));
askPasswordlength = Number(askPasswordlength);
console.log(typeof(askPasswordlength));

if (askPasswordlength >= 8 && askPasswordlength <= 128){
   var mypassword = ""; 
}

for (var i=0; i<= askPasswordlength; i++ ) {
  mypassword += tempass.charAt(Math.floor(Math.random()*Math.floor (tempass.length - 1 )));
  }
  passwordText.value = mypassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

