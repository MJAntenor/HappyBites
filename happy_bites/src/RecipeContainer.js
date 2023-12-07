import {Link} from 'react-router-dom';

const RecipeContainer = (props) => {

    return (
        <div className="RecipeContainer">
            {props.recipes.map((recipe) => (
                <div className="recipe-preview" key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>
                    <img src={recipe.image} alt="Cheesecake"height='75px' width = '100px'/>
                        <h2>{recipe.title}</h2>
                        <p>Time: {recipe.time}</p>
                        <p>Likes: {recipe.likes}</p>
                        <p>Comments: {recipe.comments}</p>
                    </Link>
                </div>
            ))}
        </div>
      );
}
 
export default RecipeContainer;