function validateForm() {
    // Get the value of each input field
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var age = document.getElementById("age");
    var email = document.getElementById("email");
    var result = document.getElementById("formResult");

    // Reset background colors before validating
    firstName.style.backgroundColor = "";
    lastName.style.backgroundColor = "";
    age.style.backgroundColor = "";
    email.style.backgroundColor = "";
    result.innerHTML = "";

    // Track whether all inputs are valid
    var isValid = true;

    // First name and last name: letters only
    var nameRegex = /^[A-Za-z]+$/;

    if (nameRegex.test(firstName.value) == false) {
        firstName.style.backgroundColor = "red";
        isValid = false;
    }

    if (nameRegex.test(lastName.value) == false) {
        lastName.style.backgroundColor = "red";
        isValid = false;
    }

    // Age: must be a number between 1 and 120
    var ageNum = parseInt(age.value);

    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
        age.style.backgroundColor = "red";
        isValid = false;
    }

    // Email: must end with @utdallas.edu
    var emailValue = email.value;

    if (emailValue.indexOf("@utdallas.edu") == -1 || emailValue.slice(-13) != "@utdallas.edu") {
        email.style.backgroundColor = "red";
        isValid = false;
    }

    // Display result
    if (isValid == true) {
        result.style.color = "green";
        result.innerHTML = "<strong>Form submitted successfully!</strong><br>" +
            "First Name: " + firstName.value + "<br>" +
            "Last Name: " + lastName.value + "<br>" +
            "Age: " + age.value + "<br>" +
            "Email: " + email.value;
    } else {
        result.style.color = "red";
        result.innerHTML = "Please fix the fields highlighted in red.";
    }
}