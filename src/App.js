import React from "react";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        Navbar / >

        <
        ItemListContainer greeting = "look here our catalog!" / >
        <
        /div>
    );
}

export default App;