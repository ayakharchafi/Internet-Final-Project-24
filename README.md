# Project Proposal

## Project Name: PurelyAya – Your Ultimate Beauty Destination
**Course:** Internet Programming (420-311-VA)

**Objective:**  
Create a visually appealing, user-friendly beauty website, PurelyAya, offering makeup, skincare, and haircare recommendations. The site includes curated beauty awards, trend insights, product reviews, and user account management, all with interactive, personalized features.

---

## Project Description:

PurelyAya is a comprehensive beauty website, focusing on the latest in skincare, makeup, and haircare products, with tips and user-driven recommendations. This site will be organized into main sections like Makeup, Skincare, Haircare, and Product Finder, each featuring unique resources for beauty enthusiasts.

---

## Features and Requirements:

1. **Navigation Menu:**  
   Includes links to main sections such as Makeup, Skincare, Haircare, Product Finder, and user account options.

2. **Headers in Navigation Menu:**
   - **Header 1:** Website name **PurelyAya** with the logo.
   - **Header 2:** Dropdown for **"Best of Beauty,"** linking to:
     - **Beauty Awards:** Curated top products of 2024.
     - **Trendy Products:** Highlights current beauty trends.
     - **Beauty Tips:** Article with top five tips.
   - **Header 3 - 5:** Dedicated pages for **Skincare, Makeup, and Haircare**, with category-specific products.
   - **Header 6 - 7:** Sign-in and Sign-up buttons with validation for user credentials.

3. **Home Page:**
   - **Main Image:** Under the header, a featured image for 2024 Best of Beauty.
   - **Explore Section:** Carousel display of trending products, showing image, price, name, and rating.
   - **Review Section:** User review slider, showing star ratings, product names, and reviewer names.

4. **Footer:**
   - Structured layout with links to key sections (Products, Resources, Company) and social media logos.
   - Includes copyright information.
   - Includes an iframe of the Google Maps location of our office.

5. **Dedicated Pages:**
   - **Beauty Awards Page:** Highlights 2024's top beauty products, dynamically created with DOM API.
   - **Trendy Products Page:** Displays currently trending products, dynamically created with DOM API.
   - **Beauty Tips Page:** Contains an article with beauty tips.

6. **Product Pages (Skincare, Makeup, Haircare):**
   - Showcase category-specific products, each with a link to an online store for purchase, along with a search bar and a review slider.
   - Products are dynamically created with DOM API.
   - Includes a **"Leave a Review"** button linking to a review submission page.

7. **About Us Page:**
   - **Three sections:**
     - **Section 1:** Video using embed code with descriptive paragraph.
     - **Section 2:** Quote displayed using DOM API.
     - **Section 3:** Information on PurelyAya’s mission and values.

8. **User Wishlist:**  
   - Local storage used for Wishlist functionality, storing products liked by the user.

---

## Technical Requirements:

1. **JavaScript and DOM API:**  
   JavaScript for interactive features, DOM API for creating and updating HTML elements (e.g., beauty products, quotes, beauty tips section).

2. **User Input Validation:**  
   Form validation for sign-up and sign-in processes, including username, email, and password.

3. **Embed Code & Iframe:**  
   Integration of Google Maps location and other embedded resources.

4. **AJAX:**  
   Used for fetching JSON data, such as product or trend updates.

5. **JSON Processing:**  
   Loading and displaying product data from JSON for a dynamic product listing.

6. **jQuery or UI Component:**  
   Interactive product carousel and/or review slider.

7. **Cookies & Local Storage:**  
   Storing user Wishlist items in local storage for a personalized shopping experience.
