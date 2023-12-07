import {useState} from 'react';
import {useEffect} from 'react';
import RecipeContainer from './RecipeContainer';
import useFetch from './useFetch';

const Home = () => {
    const {data, isPending} = useFetch('http://localhost:8000/recipes');
    const [recipes, setRecipes] = useState(data)
    const [allRecipes, setAllRecipes] = useState(data)
    const [filters, setFilters] = useState(new Set())

    //  set recipes once fetch is done
    useEffect(() => {
        setRecipes(data)
        setAllRecipes(data)
    }, [data])

    //  in: array of filters
    //  filters recipes based on provided tags and sets the recipes state
    const filterRecipe = (tags) => {
        var filtered = allRecipes
        tags.map(tag => {
            filtered = filtered.filter((recipe) => recipe.tags.some((recipeTag) => recipeTag == tag))
        })
        
        setRecipes(filtered);
    }

    //  resets filters, unchecks all checkboxes
    const reset = () => {
        setRecipes(allRecipes)
        setFilters(new Set())
        document.querySelectorAll('input[type=checkbox]').forEach(checkbox => checkbox.checked = false)
    }

    //  in: filter you want to add
    //  add tag into set of filters if its not in the set, else remove from set
    const toggleFilter = (filter) => {
        console.log("adding filter")
        const newFilter = filters
        if (filters.has(filter)) {
            newFilter.delete(filter)
        } else {
            newFilter.add(filter)
        }
        setFilters(newFilter)
        filterRecipe(Array.from(filters))
    }


    return (
        
        <div className="home">
            {!isPending && 
            <div>
                <h1>Explore New Recipes</h1>
                <div>
                    <input type='checkbox' name="gluten-free" onChange={() => toggleFilter("gluten-free")} />
                    <label for="gluten-free">gluten-free</label>
                    <input type='checkbox' name="mexican" onChange={() => toggleFilter("mexican")} />
                    <label for="mexican">mexican</label>
                </div>
                <button onClick={reset}>Reset</button>
                {isPending && <div>Loading...</div>}
                {recipes && <RecipeContainer
                    recipes = {recipes} 
                />}
            </div>
            }
        </div>
    );
}
 
export default Home;