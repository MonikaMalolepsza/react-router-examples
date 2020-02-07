import React, {useEffect, useState} from 'react'
import './App.css'
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Home from "./pages/Home"


function App() {

    const [hash, setHash] = useState(window.location.hash);


    useEffect(() => {
window.onhashchange = () => {setHash(window.location.hash)}
    }, [])

    function router() {
        switch(hash) {
            case '#/page1' :
                return  <Page1 />
            case '#/page2' :
                return <Page2 />
            default :
                return <Home />
        }
    }

  return (
    <div className="App">
        <div>
            <a href="#/page1">Page1</a>
            <a href="#/page2">Page2</a>
            <a href="">Home</a>
        </div>
        {router()}
    </div>
  )
}

export default App
