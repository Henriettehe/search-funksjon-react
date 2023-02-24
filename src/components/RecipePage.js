import { useParams } from "react-router-dom"
<<<<<<< HEAD

export default function RecipePage({recipes}) {
    const {slug} = useParams()
    const recipe = recipes.find((rec) => rec?.recipe?.label.replace(/\s/g, "-").toLowerCase() === slug)

    return (
        <section>
            <h1>{recipe?.recipe?.label}</h1>
=======
export default function RecipePage({recipes}){
    const {slug} = useParams()
    const recipe = recipes.find((rec) => rec?.recipe?.label.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(recipe)

    return (
        <section>
            <h1>{recipe?.recipe.label}</h1>
>>>>>>> c7454219838e3916569f7b1d25af5da9ea39f465
            <img src={recipe?.recipe?.image} alt={recipe?.recipe.label} />
        </section>
    )
}