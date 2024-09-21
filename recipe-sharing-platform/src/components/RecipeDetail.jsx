import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Data from '../data.json';

const RecipeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const recipe = Data.find((recipe) => recipe.id === Number(id));
        setRecipe(recipe);
    }, [id]);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
                <img src={recipe.image} alt={recipe.title} className="w-full h-auto rounded-lg" />
                <h2 className="text-3xl md:text-4xl font-medium text-blue-900 mt-4">{recipe.title}</h2>
                <p className="text-lg md:text-2xl text-blue-900 mt-2">{recipe.summary}</p>
                <div className="mt-4">
                    <h3 className="text-xl md:text-2xl font-medium text-blue-900">Ingredients:</h3>
                    <ul className="list-disc list-inside text-blue-900 mt-2">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl md:text-2xl font-medium text-blue-900">Preparation Steps:</h3>
                    <ol className="list-decimal list-inside text-blue-900 mt-2">
                        {recipe.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;