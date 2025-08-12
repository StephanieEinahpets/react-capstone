=== wireframe ===

src/
├── assets/  
├── components/
│ └── Navbar.jsx
│ └── Routing.jsx
│ └── Footer.jsx
│ └── Modal.jsx
| └── CartContext.jsx
│ └── fetchData.js
├── pages/
│ └── Home.jsx
│ └── Products.jsx
│ └── ProductDetails.jsx
│ └── Cart.jsx
│ └── About.jsx
│ └── Contact.jsx
│ └── NotFound.jsx
├── styles/
│ └── main.scss
│ ├── pages/
│ ├── └── home.scss
│ ├── └── products.scss
│ ├── └── cart.scss
│ ├── └── about.scss
│ └── └── contact.scss
├── App.jsx
└── main.jsx

=== Capstone Overview ===
In this capstone you will create an E-commerce application. An e-commerce application is a website that allows users to purchase an item online. Your application will allow users to browse products, add them to a shopping list, and remove them from the shopping list

= Include the following in your E-commerce application =

> Use the fake store API for each product in the e-commerce store: Fake API Store
> Create a React application using version 18 in VSCode using vite
> Import the library react-router-dom@5
> Import the library react-modal and/or another react library that you would like to use (with instructor approval)
> Everything in the application should be scalable, reusable and easily readable.
> All parts should be optimized to be only created once and then called in every place needed
> Readable: All naming conventions and logic should be easily read by someone not familiar with the code base

= Folder Structure =
The general structure of your application should be professionally organized. The application could include the following structure or more than the structure provided. You should be able to describe why your folder structure is optimal and appropriate for the capstone if asked.

> node_modules folder (comes with React, do not change anything)
> All components should be in a component folder
> All styles should be in a styles folder
> All images and other media should be in the assets folder
> All helping components and functions should be in the helpers folder
> == Public Folder ==
> custom favicon.ico (shows in the browser tab)
> Should be the logo for the application as well

==== Planning ====
== Wire frame ==

> in figma or on paper
> Keep it simple (boxes for containers and lines for text)
> provide lines between pages to show navigation
> == Styling ==
> Style with the SCSS (sass npm library) and responsive design (in full-screen and mobile).
> All styles should be imported into a main.scss file and the main.scss file should be importaed into the index.js file
> All styles should be organized by page, helper or feature that they affect
> Media queries should be used when a page, helper or feature breaks based on screen-size.
> Links
> default visited and styles should only be used when appropriate (remove the underline and different colors based on visited or not-visited)
> Buttons
> Cursor must become a pointer when when hovering over the button
> Must have a another hover effect that shows the user that if they click the button's action will be performed
> Header and Footer
> == Header ==
> Logo for the Company
> Navigation
> Must be sticky (stays at the top of the screen, even while scrolling)
> Navigation routes navigate to the intended pages
> Becomes a hamburger menu in mobile-view
> == Footer ==
> fake address, phone and store name at the bottom of each page
> Must stay at the bottom of page, even when the data on the page does not fill in the screen's height.
> == Error-Handling and Conditional Rendering ==
> A font awesome icon should display whenever data is not ready to render. The icon should have an animation of some sort. (Use throttling in the developer tools to check). This should be either the entire page or the individual component, whichever is most appropriate.
> No errors should be logged to the console
> Fetching should use .then(), .catch() and .finally() appropriately to render each component in an aesthetic and clear way
> A 404 Page should render when an incorrect route is hit.
> The 404 Page should include a link to return back to the previous page
> == Pages ==
> Home Page
> Hero Image
> Background Image
> Slogan of the e-commerce website
> Positioned and designed aesthetically
> === Products Page ===
> Filters
> Categories should be fetched from the api (refer to the documentation)
> 4 checkboxes (one for each category)
> All items from a category should be populated on the page when their category's checkbox is checked - when no checkboxes are checked none should show and when all checkboxes are checked all should show
> Sort
> -> Two dropdowns should be provided - one for type and one for id
> -> Should determine what is being sorted (whether by id, title, price or category)
> -> Should determine how to order what is being sorted (whether ascending or descending)
> = Product Cards =
> title, image and price of product
> Add to Cart button
> buttons to increase and decrease/remove the amount of product being added to the cart (should not go below 0)
> link to the Product's individual page
> cursor should change to a pointer
> card should have a hover effect when the pointer is hovering
> == Product Page ==
> title
> category
> image
> price
> description (truncated, should have a show more... button that will show the entire description. Should become show less... to return to the truncation)
> rating and the number of reviews
> == Cart Page ==
> List all products currently in the cart
> Remove a product from cart button for each added item
> button to decrease or increase the amount of a product in cart for each added item (cannot go below 1)
> Checkout Button that should clear the cart (which does not have to process any payment)
> Total price with subtotal and shipping
> Remove and Checkout Buttons should open a modal
> Must be mounted when button is pressed
> -> Overlays the current page (all other actions on the page should not be clickable)
> -> Must be positioned directly in the center of the page
> -> All buttons in the modal should perform their action and close the modal
> == Contact Page ==
> All fields are required (and the form should be marked in a way that the user knows it is required)
> prompt should appear stating something is missing (or the submit button should be disabled until all information has been provided)
> Contact form (non-functional) that asks for the following:
> First Name
> Last Name
> Email
> Message (textarea)
> Submit Button (information does not have to be sent anywhere) should do the following:
> Create a popup message that state the message was sent
> Clears the form
> == About Page ==
> Explain the process of your capstone (and provide a link to the fake store api documentation)
> Explain struggles you experienced throughout the frontend course and how you solved them
> Explain your favorite languages and why
> Each should be divided into their own section on the page with space and styling that is clear and aesthetic.
