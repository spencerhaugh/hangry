import React from 'react';
import { Button, Paper } from '@mui/material';
import '../styles/MealGeneratorStyles.css';



export default function MealGenerator(props) {
    const { getRandomRecipe } = props

    return (
        <Paper 
            className='mealGenerator-background'
            elevation={3}>
                <h4>Need a meal idea??</h4>
                <Button 
                    variant='contained' 
                    color='secondary'
                    onClick={ getRandomRecipe }>Hit me!
                </Button>
        </Paper>
    )
}
