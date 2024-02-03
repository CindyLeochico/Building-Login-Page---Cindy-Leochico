function checkPassword() {
  let inputPassword = document.getElementById("pword").value;
  let changeborder = document.getElementById("pword");
  let message = document.getElementById("msg");

  message.innerHTML = "";
  // console.log("INPUT:" + inputPassword);
  try {
    if (inputPassword.length < 6) {
      throw "Password must be atleast 6 characters.";
    }
    message.textContent = "Success!";
    changeborder.style.border = "2px solid black";
    // console.log("INPUT:" + inputPassword);
    // console.log("LENGTH:" + inputPassword.length);
  } catch (err) {
    message.innerHTML = err;
    changeborder.style.border = "2px solid red";
  }
}
