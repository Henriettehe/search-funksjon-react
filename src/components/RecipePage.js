import { useParams } from "react-router-dom"

export default function RecipePage({recipes}) {
    const {slug} = useParams()
    const recipe = recipes.find((rec) => rec?.recipe?.label.replace(/\s/g, "-").toLowerCase() === slug)

    return (
        <section>
            <h1>{recipe?.recipe.label}</h1>
            <img src={recipe?.recipe?.image} alt={recipe?.recipe.label} />
            <ul>
                {recipe?.recipe?.ingredients.map((ing, index) => (
                    <li key={index}>{ing.text} Vekt: {ing.weigth}</li>
                ))}
            </ul>
        </section>
    )
}