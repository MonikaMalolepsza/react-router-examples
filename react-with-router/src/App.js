import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Quotes from "./pages/Quotes";
import Topics from "./pages/Topics";
import Home from "./pages/Home";

function App() {
  return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-sm bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/topics">Topics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/quotes">Quotes</Link>
                        </li>
                    </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/topics">
                            <Topics />
                        </Route>
                        <Route path="/quotes">
                            <Quotes />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
}

export default App;
