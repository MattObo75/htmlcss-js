(function () {
"use strict";
var form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    }

    // Password validation
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirmPassword");
    if (passwordInput.value && confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.setCustomValidity("Passwords do not match.");
    } else {
    confirmPasswordInput.setCustomValidity("");
    }

    form.classList.add("was-validated");
    if (form.checkValidity()) {   
        alert("Thank you for registering to my newsletter!");     
    }   
});
})();