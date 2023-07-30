import React, { useState }  from 'react';
import axios from 'axios';
import Footer from './Footer';
import MealDisplay from './MealDisplay';
import MealGenerator from './MealGenerator';
import '../styles/HangryAppStyles.css';
import { Paper } from '@mui/material';

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
            <Paper elevation={3} className='hangry-app-header'>
                <h1 className='app-title'>hangry!</h1>
                <h3 className='app-tagline'>When you need meal ideas, now.</h3>
                <img src='./logo512.png' alt='Hangry logo of a hot pepper' className='app-logo' />
            
            <MealGenerator getRandomRecipe={ getRandomRecipe } btnText={'Hit me!'} message={'Need a meal idea??'} />
            
            </Paper>

            {
                foundRecipes ?
                <MealDisplay currentRecipes={ foundRecipes } getRandomRecipe={ getRandomRecipe } />
                : ''
            }
            <Footer />
        </div>
    )
}
