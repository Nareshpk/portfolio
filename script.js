const toggle = document.querySelector('.dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('show');
});

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// function sendEmail() {
//     let param = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//     }
//     console.log("param", param)
//     emailjs.send("service_79bqyea", "template_8t0a90n", param).then(alert("Email send!!"))
// }

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect the form data
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    // Send the email
    emailjs.send("service_79bqyea", "template_8t0a90n", templateParams)
        .then(function(response) {
            alert("Email sent successfully!");
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Failed to send email: " + error.text);
        });
});


document.getElementById("viewResumeBtn").addEventListener("click", function() {
    // Update this URL to the location of your PDF file
    const pdfUrl = "images/Nareshkumar.pdf";

    // Open the PDF in a new window or tab
    window.open(pdfUrl, '_blank');
});