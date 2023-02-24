export default function Search({setSearch, getRecipes}) {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("handleSubmit")
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Skriv her..." onChange={handleSearch} />
            <button type="submit" onClick={getRecipes}>Søk</button>
        </form>
    )
}