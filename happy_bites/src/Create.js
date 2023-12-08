import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
const [title, setTitle] = useState('Yummy Food');
const [time, setTime] = useState('');
const [image, setImage] = useState('')
const [likes, setLikes] = useState(0);
const [comments, setComments] = useState(0);
const [favorite, setFavorite] = useState(true);
const history = useHistory();
const [isPending, setIsPending] = useState(false);
const tagsList = new Set()

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(tagsList);
    var tags = Array.from(tagsList);
    const recipe = {title, time, likes, comments, favorite, tags};

    console.log(recipe);
    setIsPending(true);

    fetch('http://localhost:8000/recipes', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(recipe)
    }).then(() => {
        console.log('new recipe added')
        setIsPending(false);
        history.push('/');
    })
}

const addTagsToRecipe = (tagsToAdd) => {
    tagsToAdd.map(tag => {
        tagsList.add(tag)
    })
}

function reset() {
    document.querySelectorAll('input[type=checkbox]').forEach(checkbox => checkbox.checked = false);
}

    return (
        
        <div className="create">
            <h1>Add a New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <label>Recipe Image</label>
                <input 
                    type="file" 
                    name="myImage" 
                    accept="image/png, image/gif, image/jpeg" 
                    value = {image}
                    onChange={((e) => setImage(e.target.value))}
                    />
                <label>Recipe Title: </label>
                <input
                    type ="text"
                    required
                    value={title}
                    onChange={((e) => setTitle(e.target.value))}
                ></input>
                <label>Cooking Time: </label>
                <input
                    type ="text"
                    required
                    value={time}
                    onChange={((e) => setTime(e.target.value))}
                ></input>
                <label>Tags:</label>
                <div class="filters">
                    <div>
                    <input id = "gluten-free" type='checkbox' class="hidden" name="gluten-free"/>
                    <label for="gluten-free" onMouseDown={() => addTagsToRecipe(["gluten-free"])}>gluten-free</label>
                    <input id ="mexican" type='checkbox' class="hidden" name="mexican" />
                    <label for="mexican">mexican</label>
                    </div>
                <button onClick={reset}>Reset</button>
                </div>
                <div>
                    <ul>
                        <li><input type='checkbox' name="gluten-free"  />
                        <label for="gluten-free" >gluten-free</label></li>
                        <li><input type='checkbox' name="mexican" onChange={() => addTagsToRecipe(["mexican"])} />
                        <label for="mexican">mexican</label></li>
                    </ul>
                </div>
                { !isPending && <button>Add Recipe</button>}
                {isPending && <button disabled>Adding Recipe...</button>}
            </form>
        </div>
    );
}

export default Create;