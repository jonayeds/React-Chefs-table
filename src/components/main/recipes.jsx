/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./recipe";

const Recipes = ({handleWantToCook}) => {
    const [recipes, setRecipes] = useState([])
    
    useEffect(()=>{
        fetch('./recipies.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])
    // console.log(recipes)
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
            {
                recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} handleWantToCook = {handleWantToCook}></Recipe>)
            }
            
        </div>
    );
};

export default Recipes;