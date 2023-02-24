<<<<<<< HEAD
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
=======
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

export default function Search({setSearch, getRecipes}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
        console.log(event.target.value)

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Pannekaker.." onChange={handleSearch} />
            <button type="submit" onClick={getRecipes}><MagnifyingGlassIcon/></button>
>>>>>>> c7454219838e3916569f7b1d25af5da9ea39f465
        </form>
    )
}