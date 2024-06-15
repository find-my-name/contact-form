const fname = document.querySelector(".first-name");
const lname = document.querySelector(".last-name");
const email = document.querySelector(".email-address");
const radioButtons = document.querySelectorAll('input[type="radio"]');
let isChecked = false;

const message = document.getElementById("msg");
const checkbox = document.querySelector(".checkbox");
let allConfirmed;

const btn = document.querySelector(".btn");
const successMsg = document.querySelector(".success-msg");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (fname.value.trim() == "") {
    fname.nextElementSibling.classList.remove("hidden");
    fname.classList.add("red");
  } else {
    fname.nextElementSibling.classList.add("hidden");
    fname.classList.remove("red");
  }

  if (lname.value.trim() == "") {
    lname.nextElementSibling.classList.remove("hidden");
    lname.classList.add("red");
  } else {
    lname.nextElementSibling.classList.add("hidden");
    lname.classList.remove("red");
  }

  const p = email.nextElementSibling;
  if (email.value.trim() == "") {
    p.textContent = "This field is required";
    p.classList.remove("hidden");
    email.classList.add("red");
  } else if (!validateEmail(email.value)) {
    p.textContent = "Please enter a valid email address";
    p.classList.remove("hidden");
    email.classList.add("red");
  } else {
    p.classList.add("hidden");
    email.classList.remove("red");
  }

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      isChecked = true;
      break;
    }
  }

  if (isChecked) {
    document.querySelector(".query-error").classList.add("hidden");
  } else document.querySelector(".query-error").classList.remove("hidden");

  if (message.value.trim() == "") {
    message.nextElementSibling.classList.remove("hidden");
    message.classList.add("red");
  } else {
    message.nextElementSibling.classList.add("hidden");
    message.classList.remove("red");
  }

  if (checkbox.checked) {
    document.querySelector(".ch-error").classList.add("hidden");
  } else document.querySelector(".ch-error").classList.remove("hidden");

  const errors = document.querySelectorAll(".error");

  for (const error of errors) {
    if (!error.classList.contains("hidden")) {
      allConfirmed = false;
      break;
    } else {
      allConfirmed = true;
    }
  }

  if (allConfirmed) {
    fname.value = "";
    lname.value = "";
    email.value = "";
    message.value = "";
    checkbox.checked = false;

    for (const radioButton of radioButtons) {
      radioButton.checked = false;
    }

    successMsg.classList.remove("close");

    window.scrollTo({
      top: 0,
      behavior: "smooth", // This creates a smooth scroll effect
    });

    setTimeout(() => {
      successMsg.classList.add("close");
    }, 3000);
  }
});

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
