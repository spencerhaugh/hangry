import React, { useRef } from 'react';
import '../styles/MealDisplayStyles.css';
import { adjectives } from '../utils/adjectives';

import { Paper, Card, Button } from '@mui/material';
import MealGenerator from './MealGenerator';

export default function MealDisplay(props) {

    const { currentRecipes, getRandomRecipe } = props;
    const recipeOption = currentRecipes.recipes[0];

    const ref = useRef();

    const getAdjective = () => {
        return adjectives[Math.floor(Math.random() * adjectives.length)]
    }

    const handleScroll = () => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Paper 
            elevation={3} 
            className="meal-display-background"
            >
                {
                    currentRecipes ? 
                    <div className="meal-display-main" ref={ref}>
                        <h3>How about some { getAdjective() }</h3>
                        <h2>{ recipeOption.title }</h2>
                        <Paper elevation={6} className="meal-display-option">
                            <img 
                                className='recipe-image'
                                src={ recipeOption.image } 
                                alt={ recipeOption.title } />

                            <Paper elevation={3} className="recipe-summary-paper">
                                <div 
                                    className="recipe-summary-details" 
                                    dangerouslySetInnerHTML={{__html: recipeOption.summary }}>
                                </div>
                            </Paper>
                        </Paper>
                        <Card 
                            className="recipe-stats" 
                            sx={{ maxWidth: 345 }}
                            variant='outlined'>
                                <h4>Quick & Dirty Details</h4>

                                <p>Ready in { recipeOption.readyInMinutes } minutes!</p>
                                <p>Vegetarian: { recipeOption.vegetarian ? "Yes!" : "Not this one" }</p>
                                <p>WW Smart Points: { recipeOption.weightWatcherSmartPoints }</p>
                                <p>Gluten Free: { recipeOption.glutenFree ? "Yes!" : "Not this one :("}</p>
                                <Button 
                                    variant='contained' 
                                    color='error'
                                    href={recipeOption.sourceUrl}
                                    target="_blank"
                                    rel="noopener"
                                    >
                                        Get This Recipe!
                                </Button>
                        </Card>
                        <div onClick={ handleScroll }>
                            <MealGenerator 
                                getRandomRecipe={ getRandomRecipe } 
                                btnText={'Fuck this, try something else'}
                                />
                        </div>
                    </div>
                    : 
                        ''
                }
        </Paper>
    )
}
