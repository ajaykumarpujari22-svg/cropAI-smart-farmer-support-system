// Simple form submission simulation
const form = document.getElementById('consultationForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    message.textContent = `Thank you ${form.name.value}, your consultation request has been submitted!`;
    form.reset();
});
