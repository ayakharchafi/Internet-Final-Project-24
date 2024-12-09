// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const priceRange = document.getElementById("priceRange");
  const productList = document.getElementById("productList");

  // Store the initial order of products
  const originalProducts = Array.from(productList.children);

  // Function to filter and sort products based on search term and price range
  function filterProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const priceRangeValue = priceRange.value;

    // Filter products by search term
    let filteredItems = originalProducts.filter(function (item) {
      const productName = item.querySelector("h2").textContent.toLowerCase();
      return productName.includes(searchTerm);
    });

    // Sort filtered products by price if a price range is selected
    if (priceRangeValue === "low") {
      filteredItems.sort(function (a, b) {
        const priceA = parseFloat(
          a.querySelector("p").textContent.replace("Price: $", "")
        );
        const priceB = parseFloat(
          b.querySelector("p").textContent.replace("Price: $", "")
        );
        return priceA - priceB; // Sort low to high
      });
    } else if (priceRangeValue === "high") {
      filteredItems.sort(function (a, b) {
        const priceA = parseFloat(
          a.querySelector("p").textContent.replace("Price: $", "")
        );
        const priceB = parseFloat(
          b.querySelector("p").textContent.replace("Price: $", "")
        );
        return priceB - priceA; // Sort high to low
      });
    }

    // Clear the current product list and add the filtered and sorted products back
    productList.innerHTML = ""; // Clear current product list
    filteredItems.forEach(function (item) {
      productList.appendChild(item); // Add each filtered and sorted item back to the DOM
    });
  }

  // Event listeners for the search input and price range dropdown
  searchInput.addEventListener("input", filterProducts);
  priceRange.addEventListener("change", filterProducts);

  // Reset to the original product list if the search input is cleared
  searchInput.addEventListener("input", function () {
    if (searchInput.value === "") {
      // Apply price filter if available when search is cleared
      filterProducts();
    }
  });
});
