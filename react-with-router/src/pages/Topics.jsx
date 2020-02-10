import React from 'react'
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

// Nested routing example

function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h1 className="m-5">Topics</h1>
            <ul>
                <li>
                    <Link className=" m-2" to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link className="m-2" to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link className="m-2" to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h2 className="m-3">Please select a topic.</h2>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h2 className="m-3" >{topicId}</h2>
        </div>
    );
}

export default Topics