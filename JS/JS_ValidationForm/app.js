const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = document.querySelector("[name='username'").value.trim();
  const email = document.querySelector("[name='email'").value.trim();
  const password = document.querySelector("[name='password'").value.trim();
  const rePassword = document
    .querySelector("[name='confirm-password'")
    .value.trim();

  const errors = [];
  if (userName === "") {
    errors.push("Username can't be pankt");
  }

  if (email === "") {
    errors.push("Email can't be pankt");
  }

  if (password === "") {
    errors.push("Password can't be pankt");
  }

  if (rePassword === "") {
    errors.push("Confirm Password can't be pankt");
  }

  if (password !== rePassword) {
    errors.push("Confirm Password doens't match");
  }

  if (errors.length > 0) {
    for (let i = 0; i < errors.length; i++) {
      Toastify({
        text: errors[i],
        duration: 4000,
        gravity: "top",
        position: "center",
        style: {
          background: "#DF1C24",
        },
      }).showToast();
    }
  } else {
    Toastify({
      text: "Success! smile",
      duration: 4000,
      gravity: "top",
      position: "center",
      style: {
        background: "#4bab4e",
      },
    }).showToast();
  }
});
