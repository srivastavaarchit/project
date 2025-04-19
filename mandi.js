function showRates() {
    const pincode = document.getElementById("pincodeInput").value;
    const container = document.getElementById("rateTableContainer");
  
    if (!pincode || pincode.length !== 6) {
      alert("Please enter a valid 6-digit PIN code.");
      return;
    }
  
    
    const rates = [
      { crop: "Wheat", price: "₹2100/qtl" },
      { crop: "Rice", price: "₹1950/qtl" },
      { crop: "Mustard", price: "₹5200/qtl" },
      { crop: "Potato", price: "₹850/qtl" }
    ];
  
    let html = `
      <table>
        <thead>
          <tr>
            <th>Crop</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    rates.forEach(item => {
      html += `<tr><td>${item.crop}</td><td>${item.price}</td></tr>`;
    });
  
    html += `</tbody></table>`;
    container.innerHTML = html;
  }
  