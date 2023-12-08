const Login = () => {
    return (
        <div className = "login">
            <h1>Login</h1>
            <form>
                <label>Username: </label>
                <input
                    type ="text"
                    required
                ></input>
                <label>Password: </label>
                <input
                    type ="password"
                    required
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;