import { Switch, Route } from 'react-router-dom';
import './App.css';
import {
  Route1,
  Route2,
  Navbar
} from './Components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/route1">
          <Route1 />
        </Route>
        <Route path="/route2">
          <Route2 />
        </Route>
        <Route path="/">
          <h1>Hello Default Route</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
