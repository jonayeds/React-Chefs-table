/* eslint-disable react/prop-types */

const Recipe = (props) => {
    // console.log(props.recipe)
    const {recipe, handleWantToCook} = props
    
    return (
        
            <div className="p-8 border-solid border-gray-300 border-[1px] rounded-2xl w-96 mx-auto">
                <img src={recipe.recipe_image} alt="" className="w-80 rounded-xl" />
                <h2 className="font-bold text-2xl mt-4">{recipe.recipe_name}</h2>
                <p className="text-gray-500 mt-4 mb-4">{recipe.short_description}</p>
                <hr />
                <h3 className="font-semibold text-2xl mt-4">Ingredients: {recipe.ingredients.length}</h3>
                <ul className="text-gray-400 font-semibold list-disc translate-x-4 mt-3 mb-5">
                    {
                        recipe.ingredients.map(ingredients => <li key={recipe.recipe_id}>{ingredients}</li>)
                    }
                </ul>
                <hr />
                <div className="flex justify-between mt-3 text-gray-600">
                    <h5>{recipe.preparing_time} minutes</h5>
                    <h5>{recipe.calories} Calories</h5>
                </div>
                <button className="text-black bg-green-400 px-5 py-3 rounded-full font-bold text-lg mt-5" onClick={()=> handleWantToCook(recipe)}>Want ot Cook</button>
            </div>
        
    );
};

export default Recipe;