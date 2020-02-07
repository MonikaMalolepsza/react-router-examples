import React from 'react'
import Home from "./Home";
import Page2 from "./Page2";
import Switch from "react-router-dom/es/Switch";
import {Route} from "react-router-dom";

function hallo() {
    return (
        <h1>Hallo</h1>

    )
}
function Page1() {
    return (
        <div>
            <Route path="/about/bla" component={hallo}/>
            <h1>Hallo page 1</h1>
        </div>
    )
}

export default Page1
