import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Page2 from "./pages/Page2";
import Page1 from "./pages/Page1";
import Home from "./pages/Home";

function App() {
  return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>

                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <Page1 />
                        </Route>
                        <Route path="/dashboard">
                            <Page2 />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
}

export default App;
