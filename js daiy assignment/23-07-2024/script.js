document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
   e.preventDefault();

    document.querySelector("#usernameError").textContent = "";
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#confirmPasswordError").textContent = "";
    document.querySelector("#phoneError").textContent = "";


   
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    const phone = document.querySelector("#phone").value;


    const usernamePattern = /^[a-zA-Z0-9_]{3,}$/;
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const confirmPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const phonePattern = /^\d{10}$/;

   let isValid = true;

    if (!usernamePattern.test(username)) {
      document.getElementById("usernameError").textContent =
        "Username must be at least 3 characters long and contain only letters, numbers, and underscores.";
      document.getElementById("usernameError").style.display = "block";
      isValid = false;
    }

   
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

   
    if (!passwordPattern.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters long and contain at least one number, one uppercase, and one lowercase letter.";
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    }

   
    if (!confirmPasswordPattern.test(confirmPassword)) {
      document.getElementById("confirmPasswordError").textContent =
        "Password must be at least 6 characters long and contain at least one number, one uppercase, and one lowercase letter.";
      document.getElementById("confirmPasswordError").style.display = "block";
      isValid = false;
    }
    if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Please enter a valid phone number.";
      document.getElementById("phoneError").style.display = "block";
      isValid = false;
    }

    if (isValid) {
     
      alert("Registration successful!");
    }
  });


//   reflection questions:
// 1. what did you learn about  using regex  for form validation?
// I learned how to use these regex patterns in JavaScript to validate form fields
// hese regex patterns and JavaScript code snippets can be used to 
// validate form fields and ensure user input meets specific criteria.

// 2.how do regex patterns simplify the validation process?
// regex patterns simplify the validation process by allowing you to write more concise and readable code.
// like you can use regex patterns to validate form fields and ensure user input meets specific criteria.




// 3. what are the advantages of using regex patterns in JavaScript?
// regex patterns in JavaScript are powerful and can be used to validate form
//  fields and ensure user input meets specific criteria.


