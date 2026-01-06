 HEAD
document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Dynamic Year in Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 3. Contact Form Submission (Placeholder)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop the form from submitting normally

        // Simulate a successful submission
        formStatus.style.color = '#00bcd4';
        formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
        
        // Clear the form fields after a short delay
        setTimeout(() => {
            contactForm.reset();
            formStatus.textContent = '';
        }, 3000); 

        // NOTE: In a real-world scenario, you would use Fetch API here to send the data 
        // to a backend service (e.g., Formspree, Netlify Forms, or a custom API endpoint).
        /*
        fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            body: new FormData(contactForm)
        }).then(response => {
            if (response.ok) {
                // Success logic
            } else {
                // Error logic
            }
        });
        */
    });
document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Dynamic Year in Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 3. Contact Form Submission (Placeholder)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop the form from submitting normally

        // Simulate a successful submission
        formStatus.style.color = '#00bcd4';
        formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
        
        // Clear the form fields after a short delay
        setTimeout(() => {
            contactForm.reset();
            formStatus.textContent = '';
        }, 3000); 

        // NOTE: In a real-world scenario, you would use Fetch API here to send the data 
        // to a backend service (e.g., Formspree, Netlify Forms, or a custom API endpoint).
        /*
        fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            body: new FormData(contactForm)
        }).then(response => {
            if (response.ok) {
                // Success logic
            } else {
                // Error logic
            }
        });
        */
    });
72db584a7361fa35eed4a9ff3c37242718742102
});