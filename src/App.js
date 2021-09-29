import Home from "./components/pages/home/Home";
import PropResults from "./components/pages/proplisting/PropResults";
import PropDetail from "./components/pages/propdetail/PropDetail";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/prop-deatils">
            <PropDetail></PropDetail>
          </Route>
          <Route
            path="/prop_results/:search_queary"
            children={<PropResults />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
