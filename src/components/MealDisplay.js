import React from 'react';

export default function MealDisplay(props) {

    const { currentRecipes } = props;

    return (
        <div className="MealDisplay">
            {
                currentRecipes ? 
                <div className="recipe-option">
                    <h3>How about some...</h3>
                    <h2>{ currentRecipes.recipes[0].title }</h2>
                    <div className="recipeImage">
                        <img src={ currentRecipes.recipes[0].image } alt={ currentRecipes.recipes[0].title }></img>
                    </div>
                    <div className="recipeSummary">
                        <span 
                            id="summary" 
                            dangerouslySetInnerHTML={{__html: currentRecipes.recipes[0].summary }}>
                        </span>
                    </div>
                    <div className="details">
                        <h5>Ready in { currentRecipes.recipes[0].readyInMinutes } minutes!</h5>
                        <h5>Vegetarian: { currentRecipes.recipes[0].vegetarian ? "Yes!" : "Not this one" }</h5>
                        <h5>WW Smart Points: { currentRecipes.recipes[0].weightWatcherSmartPoints }</h5>
                        <h5>Gluten Free: { currentRecipes.recipes[0].glutenFree ? "Yes!" : "Not this one"}</h5>

                    </div>
                </div>
                : 
                    ''
            }
        </div>
    )
}
