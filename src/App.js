import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import "./App.css";
import Footer from "./components/Footer";

import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/Home">
            <ItemListContainer greeting="look here our catalog!" />
          </Route>
          <Route path="/Phones">
            <ItemDetailContainer />
          </Route>
          <Route path="*" children={<div>Not found</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
