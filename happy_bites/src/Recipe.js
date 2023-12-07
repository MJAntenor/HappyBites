import {useParams} from 'react-router-dom';
import useFetch from './useFetch';

const Recipe = () => {
    const {id} = useParams()
    const {data: recipe, isPending} = useFetch('http://localhost:8000/recipes/' + id)

    return (
        <div className = "recipe-details">
            {isPending && <div>Loading...</div>}
            {recipe && (
                <article>
                    <h2>{recipe.title}</h2>
                    <p>Time: {recipe.time}</p>
                </article>
            )}
        </div>
    );
}

export default Recipe;