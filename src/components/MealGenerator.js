import React from 'react';


export default function MealGenerator(props) {
    const { getRandomRecipe } = props

    return (
        <div>
            <h4>Need a meal idea??</h4>
            <button onClick={ getRandomRecipe }>Hit me!</button>
        </div>
    )
}
