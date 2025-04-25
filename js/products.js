document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");

  const products = [
    { name: "Boerewors", price: "R85,00", desc: "600g Raw Boerewors", popular: true },
    { name: "Fillet Steak", price: "R120,00", desc: "RAW", popular: true },
    { name: "Ribeye", price: "R120,00", desc: "RAW" },
    { name: "Beef Ribs", price: "R345,00", desc: "1kg. Pre cooked - still needs cooking" },
    { name: "Sirloin Steak", price: "R80,00", desc: "RAW" },
    { name: "Beef Mince", price: "R95,00", desc: "500g" },
    { name: "Rump Steak", price: "R80,00", desc: "RAW" },
    { name: "Famous Beef Patties", price: "R39,00", desc: "Each" },
    { name: "Beyond Vegan Pattie", price: "R72,00", desc: "Each" },
    { name: "Meat Spice 100g", price: "R55,00", desc: "Black Pepper, Mustard Seeds, Salt" },
    { name: "Pork Ribs", price: "R335,00", desc: "800g Pre cooked" },
    { name: "Cleaned Prawns", price: "R420,00", desc: "1kg" },
    { name: "Steak Basting Sauce", price: "R110,00", desc: "500ml" }
  ];

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img" style="background-image: url('assets/images/placeholder.jpg');"></div>
      <div class="product-info">
        <h4>${product.name}</h4>
        <p>${product.desc}</p>
        <p class="price">${product.price}</p>
      </div>
    `;
    productGrid.appendChild(card);
  });
});
