import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Recipe from './Recipe';
import CookBook from './CookBook'
import Login from './Login';
import Profile from './Profile';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/cookbook">
            <CookBook />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;