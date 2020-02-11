import React, {useEffect, useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Topics from "./pages/Topics"
import Quotes from "./pages/Quotes"
import Home from "./pages/Home"


function App() {

    // initialize the state

    const [hash, setHash] = useState(window.location.hash);


    useEffect(() => {

        // subscribe to onchange event

    window.onhashchange = () => {setHash(window.location.hash)}

    }, [])

    function router() {
        switch(hash) {
            case '#/topics' :
                return  <Topics />
            case '#/quotes' :
                return <Quotes />
            default :
                return <Home />
        }
    }

  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-light">

            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/topics">Topics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/quotes">Quotes</a>
                </li>
            </ul>
        </nav>
        <hr />
        {router()}
    </div>
  )
}

export default App
