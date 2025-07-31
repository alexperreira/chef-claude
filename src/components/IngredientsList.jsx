import React from 'react';

function IngredientsList({ ingredients }) {
	const ingredientsListItems = ingredients.map((ingredient) => (
		<li key={ingredient}>{ingredient}</li>
	));

	return (
		<ul className='ingredients-list' aria-live='polite'>
			{ingredientsListItems}
		</ul>
	);
}

export default IngredientsList;
