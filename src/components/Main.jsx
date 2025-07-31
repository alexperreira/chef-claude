import { useState } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';

export default function Main() {
	/**
	 * Challenge: clean up our code!
	 * Let's make a couple new components to make things a
	 * little cleaner. (Notice: I'm not suggesting what we
	 * have now is bad or wrong. I'm mostly finding an excuse
	 * to get in some hands-on practice 🙂)
	 *
	 * *1. Move the entire recipe <section> into its own
	 *  *  ClaudeRecipe component
	 * *2. Move the list of ingredients <section> into its
	 *  *  own IngredientsList component.
	 *
	 * While you're considering how to structure things, consider
	 * where state is, think about if it makes sense or not to
	 * move it somewhere else, how you'll communicate between
	 * the parent/child components, etc.
	 *
	 * The app should function as it currently does when you're
	 * done, so there will likely be some extra work to be done
	 * beyond what I've listed above.
	 */
	const [ingredients, setIngredients] = useState([
		'all the main spices',
		'pasta',
		'ground beef',
		'tomato paste',
	]);

	const [recipeShown, setRecipeShown] = useState(false);

	function toggleRecipeShown() {
		setRecipeShown((prevShown) => !prevShown);
	}

	// const ingredientsListItems = ingredients.map((ingredient) => (
	// 	<li key={ingredient}>{ingredient}</li>
	// ));

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
						recipeShown={toggleRecipeShown}
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
			{recipeShown && <ClaudeRecipe />}
		</main>
	);
}
