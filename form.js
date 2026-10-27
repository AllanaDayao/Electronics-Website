const repairPrices = {
    "Screen": 129,
    "Battery": 79,
};


function validate() {
    isValid = true;

    // clear errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("deviceError").innerHTML = "";
    document.getElementById("urgencyError").innerHTML = "";
    document.getElementById("describeError").innerHTML = "";
    document.getElementById("thank-you").innerHTML = "";
    // checks if name text box is filled
    nameText = document.getElementById("the_name").value.trim();
    if (nameText == "") {
        document.getElementById("nameError").innerHTML = "Please enter your Full Name";
        isValid = false;
    }

    // checks if email text box is filled
    emailText = document.getElementById("email").value.trim();
    if (emailText == "") {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
        isValid = false;
    }

    // checks if selected from dropdown
    deviceSelect = document.getElementById("selectDevice").value.trim();
    if (deviceSelect == "" || deviceSelect == " ") {
        document.getElementById("deviceError").innerHTML = "Please select a device";
        isValid = false;
    }

    // checks if selected radio button
    urgencyRadios = document.getElementsByName("urgency");
    radioSelected = false;
    for (let i = 0; i < urgencyRadios.length; i++) {
        if(urgencyRadios[i].checked) {
            radioSelected = true;
            break;
        }
    }

    if(!radioSelected) {
        document.getElementById("urgencyError").innerHTML = "Please Select an urgency option";
        isValid = false;
    }


    // checks if textarea is filled
    describeArea = document.getElementById("problem").value.trim();
    if (describeArea == "") {
        document.getElementById("describeError").innerHTML = "Please describe your problem";
        isValid = false;
    }

    // say thank you if form is completed
    if (isValid) {
        thanks = document.getElementById("thank-you");
        thanks.innerHTML = "Thank you! Your repair request has been submitted."
    
        // resets form
        document.getElementById("repairForm").reset();
    }

    return false;
}
