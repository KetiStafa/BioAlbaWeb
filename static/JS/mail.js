document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");

    function sendEmail(name, lastName, email, phone, message) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "ketstafa6@gmail.com",
            Password: "C487886262B15056F1D7E8D84687B1BEA086",
            To: 'ketstafa6@gmail.com',
            From: "ketstafa6@gmail.com",
            Subject: "New Contact Form Submission",
            Body: `
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                        }
                        .container {
                            width: 100%;
                            max-width: 600px;
                            margin: auto;
                            padding: 20px;
                            background: #fff;
                            border-radius: 5px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        h2 {
                            color: #369A7E;
                        }
                        p {
                            margin: 0;
                            padding: 10px 0;
                        }
                        .info {
                            background-color: #f9f9f9;
                            padding: 10px;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                        }
                        .info p {
                            margin: 5px 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>New Contact Form Submission</h2>
                        <div class="info">
                            <p><strong>Name:</strong> ${name} ${lastName}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Phone:</strong> ${phone}</p>
                            <p><strong>Message:</strong></p>
                            <p>${message}</p>
                        </div>
                    </div>
                </body>
                </html>
            `
        }).then(
            () => {
                Swal.fire({
                    title: "Message Sent!",
                    text: "Thank you for contacting us. We will get back to you shortly.",
                    icon: "success",
                    confirmButtonColor: "#369A7E"
                });
                form.reset(); // Optional: Reset the form after successful submission
            }
        ).catch(
            (error) => {
                Swal.fire({
                    title: "Error",
                    text: "There was an error sending your message. Please try again later.",
                    icon: "error",
                    confirmButtonColor: "#369A7E"
                });
                console.error('Error sending email:', error);
            }
        );
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.querySelector("#name").value;
        const lastName = document.querySelector("#lastName").value;
        const email = document.querySelector("#email").value;
        const phone = document.querySelector("#phone").value;
        const message = document.querySelector("#message").value;

        // Send email
        sendEmail(name, lastName, email, phone, message);
    });
});
