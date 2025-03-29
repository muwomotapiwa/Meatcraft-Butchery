document.addEventListener("DOMContentLoaded", () => {
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

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>${product.price}</p>
    `;
    productGrid.appendChild(card);
  });
});
