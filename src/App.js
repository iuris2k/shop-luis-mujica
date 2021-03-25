import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import "./App.css";

import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
    return ( <
        BrowserRouter >
        <
        div className = 'App' >
        <
        Navbar / >
        <
        Switch >
        <
        Route exact path = '/' >
        <
        ItemListContainer / >
        <
        /Route>{" "} <
        Route path = '/Home' >
        <
        ItemListContainer greeting = 'look here our catalog!' / >
        <
        /Route>{" "} <
        Route path = '/Phones' >
        <
        ItemDetailContainer / >
        <
        /Route>{" "} <
        /Switch>{" "} <
        /div>{" "} <
        /BrowserRouter>
    );
}

export default App;