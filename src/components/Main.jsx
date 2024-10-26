export default function Main () {
    return (
        <main>
            <form className='add-ingredient-form' action="">
                <input
                    type="text"
                    aria-label='Add ingredient'
                    placeholder='e.g. oregano'
                />
                <button type='submit'>Add ingredient</button>
            </form>
        </main>
    )
}