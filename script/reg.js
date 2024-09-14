const myForm = document.getElementById("myForm");
let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;


myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  let username_err = document.getElementById("username_err");
  let email_err = document.getElementById("email_err");
  let password_err = document.getElementById("last-name-err");

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("last-name").value;

  if (username === "") {
    username_err.textContent = "Please enter a username";
    isValid = false;
  } else {
    username_err.textContent = "";
  }
  if (email === "") {
    email_err.textContent = "Please enter an email address";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    email_err.textContent = "Please enter a valid email address";
    isValid = false;
  } else {
    email_err.textContent = "";
  }
  if (password === "") {
    password_err.textContent = "Please enter your last-name";
    isValid = false;
  } else {
    password_err.textContent = "";
  }

  if (!isValid) {
    console.log("Error in connection");
  } else {
    window.location.href = "index.html";
  }
});