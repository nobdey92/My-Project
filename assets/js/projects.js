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

function genPassword(length = 12) {
  let password = "";
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = length;

  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  for (i = 0; i < length; i++) {
    password += chars[array[i] % chars.length];
  }
  return password;
}
