import React from "react";
import ListCardContainer from "./containers/ListCardContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import "./App.css";

function App() {
    return ( <
        div className = "App" >
        <
        Navbar / >
        <
        ListCardContainer / >
        <
        ItemListContainer greeting = "look here our catalog!" / >
        <
        /div>
    );
}

export default App;