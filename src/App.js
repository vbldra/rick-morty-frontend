import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core'
import { Route, NavLink } from "react-router-dom";

/** COMPONENTS */
import Characters from './components/Characters'
import Collection from './components/Collection'

function App() {
  return (
    <div className="App">
      <div>
        <Button component={NavLink} to="/">Home</Button>
        <Button component={NavLink} to="/collection">Collection</Button>
      </div>
      <Route path="/" exact>
        <Characters />
      </Route>
      <Route path="/collection">
        <Collection />
      </Route>
    </div>
  );
}

export default App;
