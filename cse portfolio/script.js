
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        return;
    }

    const subject = encodeURIComponent("Portfolio Contact from " + name);
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    document.getElementById("form-status").textContent =
        "Opening your email application...";

    window.location.href =
        "mailto:yourmail@example.com?subject=" + subject + "&body=" + body;
});

