//Create a new account with the info stored and checks if the account info input are valid
function handleSignUp(event) {
  event.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmedPassword = document.getElementById("confirmedPassword").value;

  // Validate Full Name
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(fullName)) {
    alert("Full Name should contain only letters and spaces.");
    return;
  }

  // Validate email format
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  // Validate password match
  if (password !== confirmedPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Store user data in localStorage
  const userData = { fullName, email, password };
  localStorage.setItem("user_" + email, JSON.stringify(userData));

  alert("Account created successfully! Redirecting to the Sign-In page...");
  window.location.href = "signIn.html";
}
//Sign in the user if input are from an existing account
function handleSignIn(event) {
  event.preventDefault();

  // Get form values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Retrieve user data from localStorage
  const userData = localStorage.getItem("user_" + email);
  if (!userData) {
    alert("Account not found. Please sign up first.");
    return;
  }

  const user = JSON.parse(userData);
  if (user.password === password) {
    alert("Sign-In successful! Welcome, " + user.fullName);
    // Redirect to a dashboard or home page if applicable
  } else {
    alert("Incorrect password. Please try again.");
  }
}
//Reset the password for the specific account
function handleResetPassword() {
  const email = prompt("Enter your registered email:");
  const userData = localStorage.getItem("user_" + email);

  if (!userData) {
    alert("Account not found.");
    return;
  }

  const newPassword = prompt("Enter your new password:");
  if (newPassword) {
    const user = JSON.parse(userData);
    user.password = newPassword;
    localStorage.setItem("user_" + email, JSON.stringify(user));
    alert("Password reset successfully!");
  }
}
// Carousel of index page
const products = document.querySelectorAll(".index-product-item");
let currentIndex = 0;

// Function to update the visibility of products
function updateCarousel() {
  products.forEach((product, index) => {
    product.style.display = index === currentIndex ? "block" : "none";
  });
}

// Event listeners for next and previous buttons
document.querySelector(".next-button").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % products.length; // Loop back to start
  updateCarousel();
});

document.querySelector(".prev-button").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + products.length) % products.length; // Loop back to end
  updateCarousel();
});

// Initialize carousel
updateCarousel();

// Function to fetch a random quote from the API
//!!!!!You need to request temporary access from this link :https://cors-anywhere.herokuapp.com/corsdemo
async function fetchQuote() {
  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch quote.");
    }
    const quotes = await response.json();
    const randomQuote = quotes[0];
    displayQuote(randomQuote);
  } catch (error) {
    console.error("Error fetching the quote:", error);
    document.getElementById("quote").innerText =
      "Failed to load quote. Please try again.";
    document.getElementById("author").innerText = "";
  }
}

// Function to display the quote and author
function displayQuote(quote) {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  quoteElement.innerText = `"${quote.q}"`; // Display the quote text
  authorElement.innerText = quote.a ? `- ${quote.a}` : "- Unknown"; // Display the author or "Unknown"
}

// Event listener for the "Get New Quote" button
document.getElementById("newQuote").addEventListener("click", fetchQuote);

// Fetch a quote when the page loads
fetchQuote();
