const products = [
    {
      name: "Urea Fertilizer",
      price: "₹350",
      image: "images/urea.jpg"
    },
    {
      name: "DAP Fertilizer",
      price: "₹500",
      image: "images/dap.jpg"
    },
    {
      name: "Organic Compost",
      price: "₹250",
      image: "images/compost.jpg"
    },
    {
      name: "Vermicompost",
      price: "₹300",
      image: "images/vermi.jpg"
    },
    {
      name: "NPK 20-20-20",
      price: "₹450",
      image: "images/npk.jpg"
    },
    {
      name: "Potash Fertilizer",
      price: "₹320",
      image: "images/potash.jpg"
    }
  ];
  
  const grid = document.getElementById("productGrid");
  
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
  
  function addToCart(name) {
    alert(`${name} added to cart!`);
  }
  