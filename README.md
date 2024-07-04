# Recipe Finder

Recipe Finder is a React application that lets users search for recipes using the Edamam Recipe API. Simply enter a keyword to find recipes and view details such as the recipe name, image, and ingredients.

## Features

- **Search for Recipes:** Users can search for recipes by entering keywords into the search bar.
- **View Recipe Details:** For each recipe, users can see its name, image, and ingredients list.
- **Loading State:** Displays a loading message while data is being fetched.
- **Error Handling:** Provides feedback for empty searches and no search results.

## Technologies

- **React:** JavaScript library for building the user interface.
- **Vite:** Fast build tool and development server.
- **CSS:** Stylesheet for the application's visual design.
- **Edamam Recipe API:** API used to fetch recipe data based on user queries.

## SetUp

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipe-finder.git
   
2. Navigate into the project directory:
   ```bash
   cd recipe-finder

3. Install Dependencies (Make sure you have Node.js installed)
   ```bash
   npm install

5. Run the Application
    ```bash
   npm run dev

## Configuration

To use the Edamam API, you'll need to replace the APP_ID and APP_KEY in the App component with your own credentials. You can get these by signing up at [Edamam](https://developer.edamam.com/).

```jsx
const APP_ID = "your_app_id";
const APP_KEY = "your_app_key";
