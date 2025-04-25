document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simple success message simulation
    form.reset();
    formMessage.classList.remove("hidden");
  });
});
