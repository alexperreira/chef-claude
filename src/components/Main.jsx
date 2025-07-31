import { useState } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromChefClaude } from '../services/claudeClient';

export default function Main() {
	/**
	 * *Challenge: Get a recipe from the AI!
	 *
	 * This will be a bit harder of a challenge that will require you
	 * to think critically and synthesize the skills you've been
	 * learning and practicing up to this point.
	 *
	 * *Using the `getRecipeFromChefClaude`, make it so that when the user
	 * *clicks "Get a recipe", the text response from the AI is displayed
	 * *in the <ClaudeRecipe> component.
	 *
	 * For now, just have it render the raw markdown that the AI returns,
	 * don't worry about making it look nice yet. (We're going to use a
	 * package that will render the markdown for us soon.)
	 */

	const [ingredients, setIngredients] = useState([
		'all the main spices',
		'pasta',
		'ground beef',
		'tomato paste',
	]);

	// const [recipeShown, setRecipeShown] = useState(false);

	// function toggleRecipeShown() {
	// 	setRecipeShown((prevShown) => getRecipeFromChefClaude(prevShown));
	// }
	const [recipe, setRecipe] = useState(null);

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
					<h2>Ingredients on hand:</h2>
					<IngredientsList
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
