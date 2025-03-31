document.addEventListener("DOMContentLoaded", () => {
  // ===== Mobile Menu Toggle =====
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");

  // Toggle compact dropdown menu
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    hamburger.innerHTML = nav.classList.contains("active") 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      nav.classList.remove("active");
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  // ===== Product Grid =====
  const productGrid = document.getElementById("productGrid");
  
  const products = [
    {
      name: "Grass-Fed Ribeye Steak",
      price: "R189.99 / 500g",
      image: "assets/images/ribeye.jpg"
    },
    {
      name: "Karoo Lamb Chops",
      price: "R159.99 / 500g",
      image: "assets/images/lambchops.jpg"
    },
    {
      name: "Marbled Sirloin",
      price: "R174.99 / 500g",
      image: "assets/images/sirloin.jpg"
    },
    {
      name: "Wagyu Beef Strips",
      price: "R229.99 / 300g",
      image: "assets/images/wagyu.jpg"
    }
  ];

  // Generate product cards
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <h4>${product.name}</h4>
      <p>${product.price}</p>
      <button class="btn btn-small">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });

  // ===== Logo Banner Scroll Behavior =====
  const logoBanner = document.querySelector('.logo-banner');
  const header = document.querySelector('.header');

  if (logoBanner) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > header.offsetHeight) {
        logoBanner.classList.add('hide');
      } else {
        logoBanner.classList.remove('hide');
      }
    });
  }

  // ===== Smooth Scrolling =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});