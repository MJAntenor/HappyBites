import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src="HappyBitesLogo.png" alt="HappyBites Logo" height='100px' width='100px'/>
            <h1>HappyBites</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/cookbook">Cookbook</Link>
                <Link to="/create">New Recipe</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;