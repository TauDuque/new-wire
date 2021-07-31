import "./App.css";
import React, { useState } from "react";
import MenuBar from "./components/MenuBar";
import Overlay from "./components/Overlay";
import Sections from "./components/Sections";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Season } from "./pages";

function App() {
  return (
    <div>
      <Overlay />
      <MenuBar />
      <Season />
    </div>
  );
}

export default App;
