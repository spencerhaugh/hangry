import React, { useState }  from 'react';
import axios from 'axios';
import Footer from './Footer';
import MealDisplay from './MealDisplay';
import MealGenerator from './MealGenerator';

export default function HangryApp() {

    const [foundRecipes, setFoundRecipes] = useState();

    const getRandomRecipe = () => {
        const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY
            axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`)
                .then(res => setFoundRecipes(res.data))
                .catch(err => console.log(err));
    }

    return (
        <div className="hangry-app">
            <h1>Hangry</h1>
            <h3>When you need meal ideas, now.</h3>
            <img src='./logo512.png' alt='Hangry logo of a hot pepper'></img>
            <MealGenerator getRandomRecipe={ getRandomRecipe } />
            <MealDisplay currentRecipes={ foundRecipes } />
            <Footer />
        </div>
    )
}
