const tooltips = document.querySelectorAll('.tt')
    tooltips.forEach(t => {
        new bootstrap.Tooltip(t)
    })

function submitForm(event) {
    // Prevent the default form submission and page refresh
    event.preventDefault();

    // Your form submission logic goes here (e.g., AJAX call to a server)
    console.log("Form submitted!");
    document.getElementById('message').innerText = "Form submitted successfully!";

    form.submit();
    // Clear the form fields
    document.getElementById("myForm").reset();
}
