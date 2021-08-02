import "./App.css";
import React, { useState } from "react";
import { MenuBar, Loading, Overlay } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Season } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Overlay />
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/season">
            <Season />
          </Route>
          <Route exact path="/season/:id" children={<Season />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
