import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card';

const App = () => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("Pasta");
    const [recipes, setRecipes] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const [emptySearch, setEmptySearch] = useState(false);
    const [loading, setLoading] = useState(false);

    // API credentials
    const APP_ID = "a62155e4";
    const APP_KEY = "1e6d40a7da1cf0866cf367a7ce83544d";

    // Effect to fetch recipes based on the query
    useEffect(() => {
        if (query) {
            setLoading(true);
            setNoResults(false);
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
                .then((res) => res.json())
                .then((data) => {
                    setRecipes(data.hits);
                    setNoResults(data.hits.length === 0);
                    setLoading(false);
                });
        }
    }, [query]);

    // Handles the search button click
    const searchHandler = () => {
        if (search.trim() === "") {
            setEmptySearch(true);
            setNoResults(false);
            setHasSearched(false);
        } else {
            setQuery(search);
            setEmptySearch(false);
            setHasSearched(true);
        }
    };
    
    // Handles the Enter key press in the search input
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchHandler();
        }
    };

    return (
        <div className="App">
            <h1>
                <i className="fa-solid fa-utensils logo"></i>
                Recipe Finder
            </h1>

            <div className='search-form'>
                <input 
                    type="text" 
                    className='search-bar'
                    placeholder='Search for recipe'
                    value={search}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className='search-btn' 
                    onClick={searchHandler}
                > Search </button>
            </div>

            {/* If the search input is empty */}
            {emptySearch && <h2>Please write something to search</h2>}
            
            {/* If there are results */}
            {hasSearched && !emptySearch && !noResults && !loading && (
                <h2>Results for {query}</h2>
            )}

            {/* If no results are found */}
            {hasSearched && !emptySearch && noResults && (
                <h2>No search results for {query}</h2>
            )}

            {/* While data is loading */}
            {loading && <p>Loading...</p>}

            <div className="recipe-list">
                {recipes.map((item, index) => (
                    <Card key={index} recipe={item.recipe} /> // Render Card component for each recipe
                ))}
            </div>
        </div>
    );
};

export default App;
