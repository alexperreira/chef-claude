export default function Main () {
    const ingredients=["Chicken", "Soy", "Garlic"]

    const ingredientsListItems=ingredients.map( ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ) )

    function handleSubmit ( event ) {
        event.preventDefault()
        const formData=new FormData( event.currentTarget )
        const newIngredient=formData.get( 'ingredient' )
        ingredients.push( newIngredient )
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className='add-ingredient-form' action="">
                <input
                    type='text'
                    aria-label='Add ingredient'
                    placeholder='e.g. oregano'
                    name='ingredient'
                />
                <button type='submit'>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}