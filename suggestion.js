function getSuggestions() {
  const pin = document.getElementById("pincode").value;
  const output = document.getElementById("output");

  if (pin.length !== 6 || isNaN(pin)) {
    output.innerHTML = "<span style='color:red;'>Please enter a valid 6-digit PIN code.</span>";
    return;
  }

  const cropData = {
    "226001": {
      crops: ["Wheat", "Mustard", "Sugarcane"],
      temperature: "28°C",
      chemicals: ["Urea, DAP", "Sulphur, Boron", "Potash, Urea"],
      precautions: [
        "Ensure proper irrigation for wheat.",
        "Use neem-based pesticides for mustard.",
        "Monitor sugarcane for stem borers."
      ]
    },
    "560001": {
      crops: ["Ragi", "Maize", "Tomato"],
      temperature: "30°C",
      chemicals: ["Zinc Sulphate", "DAP, Urea", "Fungicides, NPK 19:19:19"],
      precautions: [
        "Ragi needs moderate rainfall.",
        "Avoid waterlogging in maize fields.",
        "Spray organic fungicide during early tomato growth."
      ]
    }
  };

  const result = cropData[pin] || {
    crops: ["Rice", "Pulses", "Groundnut"],
    temperature: "29°C (default)",
    chemicals: ["DAP + Potash", "Biofertilizers", "Gypsum, Sulphur"],
    precautions: [
      "Rice needs standing water.",
      "Use crop rotation to maintain soil health.",
      "Apply compost before sowing."
    ]
  };

  let cropDetails = "<ul>";
  for (let i = 0; i < result.crops.length; i++) {
    cropDetails += `<li><strong>${result.crops[i]}</strong> — Best Chemicals: ${result.chemicals[i]}</li>`;
  }
  cropDetails += "</ul>";

  output.innerHTML = `
    <h3>Suggestions for PIN ${pin}</h3>
    <p><strong>Current Temperature:</strong> ${result.temperature}</p>
    <p><strong>Recommended Crops & Chemicals:</strong></p>
    ${cropDetails}
    <p><strong>Precautions:</strong></p>
    <ul>
      ${result.precautions.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;
}
