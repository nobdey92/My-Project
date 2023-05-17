// Try, Catch and Finally script
function checkNumber() {
  const message = document.getElementById("pDemoOne");
  message.innerHTML = "";
  let x = document.getElementById("demoOne").value;
  try {
    if (x.trim() == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x > 100) throw "is too high";
    if (x < 50) throw "is too low";
  } catch (err) {
    message.innerHTML = "Input " + err;
  } finally {
    document.getElementById("demoOne").value = "";
  }
}

const password = document.getElementById("password");

function genPassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 12;
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}

function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}
