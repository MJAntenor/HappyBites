import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
const [title, setTitle] = useState('Yummy Food');
const [time, setTime] = useState('');
const [likes, setLikes] = useState(0);
const [comments, setComments] = useState(0);
const [favorite, setFavorite] = useState(true);
const [tags, setTags] = useState(["mexican"])
const history = useHistory();
const [isPending, setIsPending] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault()
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

    return (
        <div className="create">
            <h1>Add a New Recipe</h1>
            <form onSubmit={handleSubmit}>
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
                { !isPending && <button>Add Recipe</button>}
                {isPending && <button disabled>Adding Recipe...</button>}
            </form>
        </div>
    );
}

export default Create;