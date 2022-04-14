import React from 'react';
import '../styles/MealDisplayStyles.css';

import { Paper, Card, Button } from '@mui/material';

export default function MealDisplay(props) {

    const { currentRecipes } = props;

    return (
        <Paper 
            elevation={3} 
            className="meal-display-background">
                {
                    currentRecipes ? 
                    <div className="meal-display-main">
                        <h3>How about some...</h3>
                        <h2>{ currentRecipes.recipes[0].title }</h2>
                        <Paper elevation={6} className="meal-display-option">
                            <img 
                                className='recipe-image'
                                src={ currentRecipes.recipes[0].image } 
                                alt={ currentRecipes.recipes[0].title } />

                            <Paper elevation={3} className="recipe-summary">
                                <div 
                                    className="recipe-summary-details" 
                                    dangerouslySetInnerHTML={{__html: currentRecipes.recipes[0].summary }}>
                                </div>
                            </Paper>
                        </Paper>
                        <Card 
                            className="recipe-stats" 
                            sx={{ maxWidth: 345 }}
                            variant='outlined'>
                                <h4>Quick & Dirty Details</h4>

                                <p>Ready in { currentRecipes.recipes[0].readyInMinutes } minutes!</p>
                                <p>Vegetarian: { currentRecipes.recipes[0].vegetarian ? "Yes!" : "Not this one" }</p>
                                <p>WW Smart Points: { currentRecipes.recipes[0].weightWatcherSmartPoints }</p>
                                <p>Gluten Free: { currentRecipes.recipes[0].glutenFree ? "Yes!" : "Not this one :("}</p>
                                <Button 
                                    variant='contained' 
                                    color='error'
                                    href={currentRecipes.recipes[0].sourceUrl}
                                    target="_blank"
                                    rel="noopener"
                                    >
                                        Get This Recipe!
                                </Button>
                        </Card>
                    </div>
                    : 
                        ''
                }
        </Paper>
    )
}
