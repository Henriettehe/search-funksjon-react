export default function RecipeCard({title, img, time}){
    return(
        <article className="recipe-card">
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>Estimert tid:<span>{time}</span></p>
                
        </article>
    )
}