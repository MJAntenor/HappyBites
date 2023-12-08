import RecipeContainer from './RecipeContainer';
import {useState} from 'react';
import {useEffect} from 'react';
import useFetch from './useFetch';

const CookBook = () => {
    const {data, isPending} = useFetch('http://localhost:8000/recipes');
    const [recipes, setRecipes] = useState(data)

    useEffect(() => {
        setRecipes(data)
    }, [data])


    return ( 
        <div className = "CookBook">
            {!isPending && 
            <div>
                <h1>My CookBook</h1>
                {isPending && <div>Loading...</div>}
                {recipes && <RecipeContainer
                    recipes = {recipes} 
                />}
            </div>
            }
        </div>
     );
}
 
export default CookBook;