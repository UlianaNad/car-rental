## Car Rental Application

This application is designed for a company providing car rental services in Ukraine. The application consists of three pages:

1. **Home Page:** It provides a general description of the services offered by the company. The styling and design are open to customization.

2. **Catalog Page:** This page contains a catalog of cars with various configurations. Users can filter cars by brand, hourly rental price, and the number of kilometers traveled (mileage).

3. **Advertisements Page:** Users can view advertisements added by other users. The application's appearance includes navigation (customizable) and a viewing area.

### Technical Specifications

According to the layout, implement a rental car advertisement card. On the first catalog page, render 12 advertisements, and the rest on clicking the "Load more" button.

- Clicking the heart-shaped button on an advertisement adds it to the favorites list, changing the button color.
- Refreshing the page maintains the user's actions; if an advertisement is added to favorites, the button remains in the "favorite advertisement" state with the corresponding color.
- Clicking the heart-shaped button again removes the advertisement from the favorites list, reverting the button color to the initial state.
- Clicking the "Learn more" button opens a modal window with detailed information about the car and its rental conditions.
- The modal window closes on clicking the "x" button, clicking on the backdrop, or pressing the "Esc" key.

Implement the "Rental car" button as a link allowing the user to contact the company by phone at +380730000000.

Implement routing using React Router. The application should have the following routes:

- `/` - Home page with a general description of the company's services.
- `/catalog` - Page containing a catalog of cars with various configurations.
- `/favorites` - Page with advertisements added by the user to favorites.

If a user enters a non-existent route, redirect them to the home page.

Implement dropdowns with car prices per hour (in $10 increments) for filtering advertisements based on the chosen price range.

### Backend and Mock API

Created a personal backend for development using the UI service [MockAPI](https://mockapi.io/). Created a resource named `adverts` with the specified fields. Populate the resource with at least 32 advertisements with different values. Implement pagination on the MockAPI side, where one pagination page contains 12 advertisements.

#### Used Technologies:

React Ecosystem:

- react;
- react-dom;
- react-router-dom;

State Management:
-"@reduxjs/toolkit;

- react-redux;
- redux;

Styling:

- styled-components;

HTTP Requests:

- axios;

Form Handling:

- react-hook-form;

UI Components:

- react-loader-spinner;
- react-toastify;

Utility Libraries:

- numeral;
- prop-types;

Build and Deployment:

- gh-pages;
