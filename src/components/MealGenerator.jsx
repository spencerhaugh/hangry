import React from 'react';
import '../styles/MealGeneratorStyles.css';
import { Button, Paper } from '@mui/material';



export default function MealGenerator(props) {
    const { getRandomRecipe, btnText, message } = props

    return (
        <Paper 
            className='meal-generator-background'
            elevation={3}>
                { message ? <h4> { message } </h4> : '' }
                <Button 
                    variant='outlined' 
                    size='large'
                    color='error'
                    onClick={ getRandomRecipe }>
                        { btnText }
                </Button>
        </Paper>
    )
}
