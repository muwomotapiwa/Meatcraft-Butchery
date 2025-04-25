document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulate form submission success
    form.reset();
    formMessage.classList.remove("hidden");

    setTimeout(() => {
      formMessage.classList.add("hidden");
    }, 5000); // Hide message after 5 seconds
  });
});