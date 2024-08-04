# Test Task for TheRaven

## Project Description

This project was created as a test task for the Junior Front-End Developer position at TheRaven. The goal of the project is to create a simple shop based on React.js and Redux with the following functionality:

- Displaying a list of products.
- Adding products to the cart.
- Dynamically updating the total price of products in the cart.
- Managing the quantity of products in the cart.
- Generating JSON with ordered goods and user information upon ordering.
- Storing added products in the cart in local storage.

## Technologies

- Vite
- React.js
- Redux
- Tailwind CSS
- @headlessui/react for modal dialogs
- GitHub and Vercel for deployment

## Functionality

1. **Product List**:
   - Displaying a list of available products with information about them.
2. **Add to Cart**:
   - Ability to add a product to the cart by clicking the "Buy" button.
3. **Cart**:
   - Displaying the products added to the cart with the ability to change their quantity or remove them.
   - Dynamically updating the total price of products in the cart, displayed next to the cart icon in the header.
   - Products in the cart are retained after page refresh.
4. **Order Placement**:
   - Generating JSON with ordered products and user information upon ordering.

## Deployment Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/KosianenkoMykola/Test-task-for-TheRaven.git

2. Install dependencies:
   npm install
3. Start the project:
   npm run dev

## Deployment
The project is deployed on Vercel at the following link: https://test-task-for-the-raven.vercel.app/
