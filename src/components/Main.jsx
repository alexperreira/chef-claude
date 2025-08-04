import React, { useState, useRef, useEffect } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromChefClaude } from '../services/claudeClient';

export default function Main() {
	const [ingredients, setIngredients] = useState([
		'all the main spices',
		'pasta',
		'ground beef',
		'tomato paste',
	]);

	const [recipe, setRecipe] = useState(null);
	const recipeSection = useRef(null);

	useEffect(() => {
		if (recipe !== '' && recipeSection.current !== null) {
			recipeSection.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [recipe]);

	async function fetchRecipe() {
		const response = await getRecipeFromChefClaude(ingredients);
		setRecipe(response);
	}

	function addIngredient(formData) {
		const newIngredient = formData.get('ingredient');
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	}

	return (
		<main>
			<form action={addIngredient} className='add-ingredient-form'>
				<input
					type='text'
					aria-label='Add ingredient'
					placeholder='e.g. oregano'
					name='ingredient'
				/>
				<button>Add ingredient</button>
			</form>
			{ingredients.length > 0 && (
				<section>
					<IngredientsList
						ref={recipeSection}
						ingredients={ingredients}
						fetchRecipe={fetchRecipe}
					/>
					{/* {ingredients.length > 3 && (
						<div className='get-recipe-container'>
							<div>
								<h3>Ready for a recipe?</h3>
								<p>Generate a recipe from your list of ingredients.</p>
							</div>
							<button onClick={toggleRecipeShown}>Get a recipe</button>
						</div>
					)} */}
				</section>
			)}
			{recipe && <ClaudeRecipe recipe={recipe} />}
		</main>
	);
}
