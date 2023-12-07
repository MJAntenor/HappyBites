import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Recipe from './Recipe';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/cookbook">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
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