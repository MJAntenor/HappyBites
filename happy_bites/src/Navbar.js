const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>HappyBites</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/profile">Profile</a>
                <a href="/cookbook">Cookbook</a>
                <a href="/create">New Recipe</a>
                <a href="/login">Login</a>
            </div>
        </nav>
     );
}
 
export default Navbar;