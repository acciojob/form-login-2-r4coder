//your JS code here. If required.
 const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        alert(
            "First Name " + firstName.value + "\n" +
            "Last Name " + lastName.value + "\n" +
            "Phone Number " + phone.value + "\n" +
            "Email ID " + email.value
        );
    });